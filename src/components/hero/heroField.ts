import {
  INTRO_MS,
  PULSE_MS,
  SWAP_MS,
  clamp01,
  copyFade,
  domeSplit,
  easeOutCubic,
  intro,
  signalOrder,
  signalSplit,
  smoothstep,
  surfaceMix,
  type HeroLayout,
  type HeroScene,
} from './heroMotion'
import {
  DOME_PITCH,
  DOME_YAW,
  SEED,
  domeFit,
  domeLattice,
  projectDome,
  seeded,
  signalField,
  type DomePoint,
  type SignalField,
} from './heroGeometry'

/** Dot, glow and raw-particle colours as `r,g,b`, read from the theme tokens. */
export interface HeroColours {
  particle: string
  glow: string
  raw: string
}

/**
 * The page palette, the palette on the hero surface (v2.4), and which theme they belong to. The
 * dome always sits on the surface; signal to record crosses onto the page where the surface fades.
 */
export interface HeroPalette extends HeroColours {
  surface: HeroColours
  dark: boolean
}

export interface Rect {
  x: number
  y: number
  w: number
  h: number
}

export interface HeroFieldOptions {
  scene: HeroScene
  layout: HeroLayout
  width: number
  height: number
  /** The copy block, in the hero's coordinates, so particles can dim behind it. */
  copy: Rect | null
  /** How far down the hero the top of the dome may reach: the bottom of the top bar plus a gap. */
  clearTop: number
  palette: HeroPalette
}

interface Dust {
  x: number
  y: number
  vx: number
  vy: number
  ox: number
  oy: number
  pull: number
  seed: number
  alpha: number
}

interface Dome {
  r: number
  cx: number
  baseY: number
  points: DomePoint[]
  dust: Dust[]
}

interface Signal {
  field: SignalField
  order: Float32Array
  x: Float32Array
  y: Float32Array
  eased: Float32Array
  alpha: Float32Array
  side: Int8Array
}

interface Sprites {
  core: HTMLCanvasElement
  raw: HTMLCanvasElement
  glow: HTMLCanvasElement
}

interface Look {
  blend: GlobalCompositeOperation
  /** Raw particles on the surface are darker specks, so they blend normally even where dots add. */
  rawBlend: GlobalCompositeOperation
  core: number
  glow: number
  line: number
  ring: number
}

/** One palette ready to draw: its sprites, how it blends, and the colour of lines and rings. */
interface Ink {
  sprites: Sprites
  look: Look
  rgb: string
}

/** On the page: additive glow vanishes on white, so the light theme blends normally. */
const PAGE_LOOK: Record<'dark' | 'light', Look> = {
  dark: { blend: 'lighter', rawBlend: 'lighter', core: 0.9, glow: 0.5, line: 1, ring: 0.45 },
  light: { blend: 'source-over', rawBlend: 'source-over', core: 0.85, glow: 0.22, line: 0.8, ring: 0.45 },
}

/**
 * On the hero surface the dots are white light, additive; rings are white. The surface is the same
 * #0070E0 in both themes (v2.5), so is the look.
 */
const SURFACE_LOOK: Look = { blend: 'lighter', rawBlend: 'source-over', core: 0.95, glow: 0.4, line: 0.85, ring: 0.6 }

/**
 * The home hero scene: a Canvas 2D particle engine with two scenes, the dome (768px and up) and
 * signal to record (phones). It knows nothing about React; `HeroScene` owns the canvas, feeds it
 * sizes, theme colours, the pointer and scroll progress, and starts or stops it.
 *
 * Cost is kept flat: glow comes from pre-rendered sprites (never `shadowBlur`), the device pixel
 * ratio is capped at 2, and the loop only runs while `start` has been called, which `HeroScene`
 * does only while the hero is on screen and the tab is visible.
 */
export class HeroField {
  /** Called once per frame with the scroll progress, after drawing. */
  onFrame: ((progress: number) => void) | null = null
  /** Reads scroll progress through the hero; called once per frame rather than per scroll event. */
  progressSource: () => number = () => 0

  private readonly canvas: HTMLCanvasElement
  private readonly ctx: CanvasRenderingContext2D
  private options: HeroFieldOptions | null = null
  private dome: Dome | null = null
  private signal: Signal | null = null
  private inks: { surface: Ink; page: Ink } | null = null
  private builtAt = 0
  private introMs = INTRO_MS
  private raf = 0
  private last = 0
  private readonly pointer = { x: 0, y: 0, ex: 0, ey: 0, on: 0, target: 0 }
  private pulses: { x: number; y: number; t0: number }[] = []

  /** Returns null where Canvas 2D is unavailable; the still frame then simply stays. */
  static create(canvas: HTMLCanvasElement): HeroField | null {
    let ctx: CanvasRenderingContext2D | null = null
    try {
      ctx = canvas.getContext('2d')
    } catch {
      ctx = null
    }
    return ctx ? new HeroField(canvas, ctx) : null
  }

  private constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas
    this.ctx = ctx
  }

  configure(next: HeroFieldOptions): void {
    const prev = this.options
    this.options = next
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const cw = Math.round(next.width * dpr)
    const ch = Math.round(next.height * dpr)
    if (this.canvas.width !== cw || this.canvas.height !== ch) {
      this.canvas.width = cw
      this.canvas.height = ch
    }
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    const geometryChanged =
      !prev ||
      prev.scene !== next.scene ||
      prev.layout !== next.layout ||
      prev.width !== next.width ||
      prev.height !== next.height ||
      prev.clearTop !== next.clearTop ||
      (next.scene === 'signal' && prev.copy?.y !== next.copy?.y) ||
      (next.scene === 'signal' && prev.copy?.h !== next.copy?.h)
    if (geometryChanged) this.build()
    if (!prev) {
      this.builtAt = performance.now()
      this.introMs = INTRO_MS
    } else if (prev.scene !== next.scene) {
      this.builtAt = performance.now()
      this.introMs = SWAP_MS
    }
    const p = next.palette
    if (!prev || !this.inks || paletteKey(p) !== paletteKey(prev.palette)) {
      const theme = p.dark ? 'dark' : 'light'
      this.inks = {
        surface: { sprites: makeSprites(p.surface), look: SURFACE_LOOK, rgb: p.surface.particle },
        page: { sprites: makeSprites(p), look: PAGE_LOOK[theme], rgb: p.particle },
      }
    }
    if (!this.raf) this.draw(performance.now())
  }

  start(): void {
    if (this.raf || !this.options) return
    this.last = performance.now()
    const loop = (t: number) => {
      this.raf = requestAnimationFrame(loop)
      this.draw(t)
    }
    this.raf = requestAnimationFrame(loop)
  }

  stop(): void {
    if (this.raf) cancelAnimationFrame(this.raf)
    this.raf = 0
  }

  get running(): boolean {
    return this.raf !== 0
  }

  pointerMove(x: number, y: number): void {
    const q = this.pointer
    q.x = x
    q.y = y
    if (q.on < 0.02) {
      q.ex = x
      q.ey = y
    }
    q.target = 1
  }

  pointerLeave(): void {
    this.pointer.target = 0
  }

  pulse(x: number, y: number): void {
    this.pulses.push({ x, y, t0: performance.now() })
  }

  private build(): void {
    const o = this.options
    if (!o) return
    const rand = seeded(SEED)
    if (o.scene === 'dome') {
      this.signal = null
      const wide = o.layout === 'wide'
      const { r, baseY } = domeFit(wide, o.width, o.height, o.clearTop)
      const points = domeLattice(r, wide ? 15 : 13, wide ? 0.12 : 0.2, rand)
      const dust: Dust[] = []
      const count = wide ? 70 : 45
      for (let i = 0; i < count; i++) {
        dust.push({
          x: rand() * o.width,
          y: 70 + rand() * (o.height - 90),
          vx: (rand() - 0.5) * 0.012,
          vy: (rand() - 0.5) * 0.008,
          ox: 0,
          oy: 0,
          pull: 0.05 + rand() * 0.2,
          seed: rand(),
          alpha: 0.25 + rand() * 0.45,
        })
      }
      this.dome = {
        r,
        cx: wide ? o.width * 0.7 : o.width * 0.5,
        baseY,
        points,
        dust,
      }
    } else {
      this.dome = null
      const gap = 22
      const bottom = o.height * 0.96
      const copyBottom = o.copy ? o.copy.y + o.copy.h : o.height * 0.5
      const top = Math.min(Math.max(o.height * 0.55, copyBottom + 12), bottom - gap * 3)
      const field = signalField(o.width, top, bottom, gap, 0.58, rand)
      const n = field.points.length
      this.signal = {
        field,
        order: new Float32Array(n),
        x: new Float32Array(n),
        y: new Float32Array(n),
        eased: new Float32Array(n),
        alpha: new Float32Array(n),
        side: new Int8Array(n),
      }
    }
  }

  private fadeAt(x: number, y: number): number {
    const o = this.options
    const r = o?.copy
    if (!o || !r) return 1
    const dx = Math.max(r.x - x, 0, x - (r.x + r.w))
    const dy = Math.max(r.y - y, 0, y - (r.y + r.h))
    return copyFade(Math.sqrt(dx * dx + dy * dy), o.layout)
  }

  private pulseAt(x: number, y: number, t: number): number {
    let g = 0
    for (const p of this.pulses) {
      const age = (t - p.t0) / PULSE_MS
      if (age >= 1) continue
      const d = Math.hypot(p.x - x, p.y - y)
      const band = 1 - Math.abs(d - (18 + age * 150)) / 28
      if (band > 0) g += band * (1 - age) * 1.3
    }
    return g
  }

  /** 0 where a point sits on the hero surface, 1 on the page. Only phones (signal) have both. */
  private pageAt(y: number): number {
    const o = this.options as HeroFieldOptions
    return o.scene === 'signal' ? surfaceMix(y, o.height) : 0
  }

  private inkAt(y: number): Ink {
    const inks = this.inks as { surface: Ink; page: Ink }
    return this.pageAt(y) > 0.5 ? inks.page : inks.surface
  }

  /** Draws one sprite, split between the two palettes where the surface fades into the page. */
  private put(kind: keyof Sprites, x: number, y: number, r: number, alpha: (look: Look) => number): void {
    const inks = this.inks as { surface: Ink; page: Ink }
    const m = this.pageAt(y)
    if (m < 1) this.blit(inks.surface, kind, x, y, r, alpha(inks.surface.look) * (1 - m))
    if (m > 0) this.blit(inks.page, kind, x, y, r, alpha(inks.page.look) * m)
  }

  private blit(ink: Ink, kind: keyof Sprites, x: number, y: number, r: number, a: number): void {
    if (a <= 0.004) return
    const ctx = this.ctx
    ctx.globalCompositeOperation = kind === 'raw' ? ink.look.rawBlend : ink.look.blend
    ctx.globalAlpha = clamp01(a)
    ctx.drawImage(ink.sprites[kind], x - r, y - r, r * 2, r * 2)
  }

  private draw(t: number): void {
    const o = this.options
    const inks = this.inks
    if (!o || !inks) return
    const dt = Math.min(50, Math.max(0, t - this.last))
    this.last = t
    const still = this.raf === 0
    const q = this.pointer
    if (!still) {
      q.ex += (q.x - q.ex) * 0.16
      q.ey += (q.y - q.ey) * 0.16
      q.on += (q.target - q.on) * 0.08
      if (q.on < 0.002) q.on = 0
    }
    this.pulses = this.pulses.filter((p) => t - p.t0 < PULSE_MS)
    const progress = this.progressSource()
    const ctx = this.ctx
    ctx.globalCompositeOperation = 'source-over'
    ctx.globalAlpha = 1
    ctx.clearRect(0, 0, o.width, o.height)
    const entrance = intro(t - this.builtAt, this.introMs)
    if (this.dome) this.drawDome(t, dt, progress, entrance, inks.surface)
    else if (this.signal) this.drawSignal(t, progress, entrance)

    ctx.globalCompositeOperation = 'source-over'
    ctx.lineWidth = 1
    for (const p of this.pulses) {
      const age = (t - p.t0) / PULSE_MS
      const ink = this.inkAt(p.y)
      ctx.strokeStyle = `rgba(${ink.rgb},${ink.look.ring})`
      ctx.globalAlpha = (1 - age) * 0.6
      ctx.beginPath()
      ctx.arc(p.x, p.y, 18 + age * 150, 0, Math.PI * 2)
      ctx.stroke()
    }
    ctx.globalAlpha = 1
    this.onFrame?.(progress)
  }

  /** The dome sits on the hero surface at every width it is shown at, so it uses one ink. */
  private drawDome(t: number, dt: number, progress: number, entrance: number, ink: Ink): void {
    const o = this.options as HeroFieldOptions
    const d = this.dome as Dome
    const ctx = this.ctx
    const q = this.pointer
    const wide = o.layout === 'wide'
    const glowGain = wide ? 1 : 1.35
    const size = wide ? 1 : 1.05
    const reach = wide ? 150 : 90
    const push = o.width * (wide ? 0.42 : 0.5)
    const split = domeSplit(progress)
    const ambient = this.raf ? Math.sin(t / 9000) * 0.05 : 0
    const yaw = DOME_YAW + ambient + (q.on > 0 ? (q.ex / o.width - 0.5) * 0.24 * q.on : 0)
    const pitch = DOME_PITCH + (q.on > 0 ? (q.ey / o.height - 0.5) * 0.1 * q.on : 0)
    const look = ink.look

    for (const p of d.points) {
      const pr = projectDome(p.x, p.y, p.z, d.r, yaw, pitch)
      let x = d.cx + pr.sx
      let y = d.baseY + pr.sy + (1 - entrance) * 24
      let a = (0.3 + 0.7 * (1 - pr.depth)) * entrance
      if (p.seam) {
        const fall = Math.pow(split, 1.3)
        y += fall * o.height * (0.25 + 0.35 * p.seed)
        x += (p.seed - 0.5) * 60 * fall
        a *= 1 - fall
      } else {
        x += p.side * split * push
        a *= 1 - 0.8 * split
      }
      let g = p.lit ? (this.raf ? 0.32 + 0.22 * Math.sin(t / 1500 + p.twinkle) : 0.4) : 0
      if (q.on > 0.01) {
        const dx = q.ex - x
        const dy = q.ey - y
        const dist = Math.hypot(dx, dy)
        if (dist < reach) {
          const f = 1 - dist / reach
          const f2 = f * f * q.on
          x += dx * f2 * 0.16
          y += dy * f2 * 0.16
          g += f2 * 1.4
        }
      }
      g += this.pulseAt(x, y, t)
      const fade = this.fadeAt(x, y)
      a *= fade
      g *= fade * (1 - 0.6 * split)
      if (a <= 0.01) continue
      if (g > 0.05) this.blit(ink, 'glow', x, y, (12 + 10 * Math.min(1, g)) * size, clamp01(g * look.glow * glowGain) * a)
      this.blit(ink, 'core', x, y, (0.9 + 0.8 * Math.min(1, g)) * pr.scale * size, a * look.core * (0.5 + 0.5 * Math.min(1, g + 0.2)))
    }

    for (const p of d.dust) {
      if (this.raf) {
        p.x += p.vx * dt
        p.y += p.vy * dt
        if (p.x < -10) p.x = o.width + 10
        else if (p.x > o.width + 10) p.x = -10
        if (p.y < 70) p.y = o.height - 20
        else if (p.y > o.height) p.y = 70
      }
      let tx = 0
      let ty = 0
      let g = 0
      if (q.on > 0.01) {
        const dx = q.ex - p.x
        const dy = q.ey - p.y
        const dist = Math.hypot(dx, dy)
        if (dist < 240) {
          const f = (1 - dist / 240) * q.on
          tx = dx * f * p.pull
          ty = dy * f * p.pull
          g = f * 1.2
        }
      }
      p.ox += (tx - p.ox) * 0.06
      p.oy += (ty - p.oy) * 0.06
      const x = p.x + p.ox
      const y = p.y + p.oy + split * 40 * p.seed
      g += this.pulseAt(x, y, t)
      // Dimmed behind the copy twice, like the dome's dots: on the surface a lit halo is white
      // light under white text.
      const fade = this.fadeAt(x, y)
      g *= fade
      const a = p.alpha * entrance * (1 - 0.7 * split) * fade
      if (a <= 0.01) continue
      if (g > 0.05) this.blit(ink, 'glow', x, y, (9 + 8 * Math.min(1, g)) * size, clamp01(g * look.glow * glowGain) * a)
      this.blit(ink, 'core', x, y, (0.8 + 0.6 * Math.min(1, g)) * size, a * look.core)
    }

    if (q.on > 0.02) {
      // The ring fades out over the copy, so a pointer resting on the text never draws a white
      // ring through it.
      ctx.globalCompositeOperation = 'source-over'
      ctx.globalAlpha = q.on * (1 - split) * this.fadeAt(q.ex, q.ey) ** 2
      ctx.strokeStyle = `rgba(${ink.rgb},${look.ring})`
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.arc(q.ex, q.ey, 22, 0, Math.PI * 2)
      ctx.stroke()
    }
  }

  /** Signal to record runs on phones, where the surface fades into the page across its band. */
  private drawSignal(t: number, progress: number, entrance: number): void {
    const o = this.options as HeroFieldOptions
    const s = this.signal as Signal
    const ctx = this.ctx
    const q = this.pointer
    const { field } = s
    const still = this.raf === 0
    const order = signalOrder(progress)
    const split = signalSplit(progress)
    const lens = 84
    const push = o.width * 0.55

    field.points.forEach((p, i) => {
      const nx = p.nx + (still ? 0 : Math.sin(t / 2600 + p.phase) * p.amplitude)
      const ny = p.ny + (still ? 0 : Math.cos(t / 3100 + p.phase * 1.3) * p.amplitude)
      let target = order
      if (q.on > 0.01) target = Math.max(target, (1 - smoothstep(lens * 0.45, lens, Math.hypot(q.ex - nx, q.ey - ny))) * q.on)
      for (const pu of this.pulses) {
        const age = (t - pu.t0) / PULSE_MS
        if (age >= 1) continue
        target = Math.max(target, (1 - smoothstep(lens * 0.6, lens * 1.2, Math.hypot(pu.x - nx, pu.y - ny))) * (1 - age * age))
      }
      // Eased while running; a one-off draw (theme change, resize) snaps straight to the target.
      s.order[i] = still ? target : s.order[i] + (target - s.order[i]) * 0.1
      const e = easeOutCubic(clamp01(s.order[i]))
      const side = p.gx < field.centre ? -1 : 1
      const x = nx + (p.gx - nx) * e + side * split * push
      const y = ny + (p.gy - ny) * e + (1 - entrance) * 16
      s.x[i] = x
      s.y[i] = y
      s.eased[i] = e
      s.side[i] = side
      s.alpha[i] = entrance * (1 - 0.75 * split) * this.fadeAt(x, y)
    })

    // The record: ordered neighbours on the grid link into a thin ledger, in the palette of the
    // background under each link (buckets 0 to 3 on the surface, 4 to 7 on the page).
    const inks = this.inks as { surface: Ink; page: Ink }
    const buckets: number[][] = [[], [], [], [], [], [], [], []]
    field.points.forEach((p, i) => {
      if (s.eased[i] < 0.55 || s.alpha[i] < 0.05) return
      const idx = p.row * field.cols + p.col
      const next = [p.col < field.cols - 1 ? field.cells[idx + 1] : -1, p.row < field.rows - 1 ? field.cells[idx + field.cols] : -1]
      for (const j of next) {
        if (j < 0 || s.eased[j] < 0.55 || s.side[j] !== s.side[i]) continue
        const v = Math.min(s.eased[i], s.eased[j]) * Math.min(s.alpha[i], s.alpha[j])
        const onPage = this.pageAt((s.y[i] + s.y[j]) / 2) > 0.5 ? 4 : 0
        buckets[Math.min(3, Math.floor(v * 4)) + onPage].push(s.x[i], s.y[i], s.x[j], s.y[j])
      }
    })
    const lineAlpha = [0.08, 0.16, 0.24, 0.34]
    ctx.lineWidth = 1
    buckets.forEach((segments, b) => {
      if (!segments.length) return
      const ink = b < 4 ? inks.surface : inks.page
      ctx.globalCompositeOperation = ink.look.blend
      ctx.strokeStyle = `rgb(${ink.rgb})`
      ctx.globalAlpha = clamp01(lineAlpha[b % 4] * ink.look.line * 1.35)
      ctx.beginPath()
      for (let k = 0; k < segments.length; k += 4) {
        ctx.moveTo(segments[k], segments[k + 1])
        ctx.lineTo(segments[k + 2], segments[k + 3])
      }
      ctx.stroke()
    })

    for (let i = 0; i < field.points.length; i++) {
      const a = s.alpha[i]
      if (a < 0.01) continue
      const e = s.eased[i]
      const x = s.x[i]
      const y = s.y[i]
      if (e > 0.6) this.put('glow', x, y, 11 * 1.05, (look) => clamp01(((e - 0.6) / 0.4) * look.glow * 1.35 * 0.9) * a)
      const r = (1.1 + 0.5 * e) * 1.05
      if (e < 0.98) this.put('raw', x, y, r, () => (1 - e) * 0.8 * a)
      if (e > 0.02) this.put('core', x, y, r, (look) => e * look.core * a)
    }

    if (q.on > 0.02 && split < 1) {
      ctx.globalCompositeOperation = 'source-over'
      ctx.globalAlpha = 0.6 * q.on * (1 - split)
      const ink = this.inkAt(q.ey)
      ctx.strokeStyle = `rgba(${ink.rgb},${ink.look.ring})`
      ctx.setLineDash([2, 5])
      ctx.beginPath()
      ctx.arc(q.ex, q.ey, lens * 0.72, 0, Math.PI * 2)
      ctx.stroke()
      ctx.setLineDash([])
    }
  }
}

function paletteKey(p: HeroPalette): string {
  return [p.dark, p.particle, p.glow, p.raw, p.surface.particle, p.surface.glow, p.surface.raw].join('|')
}

function makeSprites(p: HeroColours): Sprites {
  const sprite = (size: number, rgb: string, stops: [number, number][]) => {
    const c = document.createElement('canvas')
    c.width = size
    c.height = size
    const g = c.getContext('2d')
    if (g) {
      const h = size / 2
      const gradient = g.createRadialGradient(h, h, 0, h, h, h)
      for (const [at, alpha] of stops) gradient.addColorStop(at, `rgba(${rgb},${alpha})`)
      g.fillStyle = gradient
      g.fillRect(0, 0, size, size)
    }
    return c
  }
  const dot: [number, number][] = [
    [0, 1],
    [0.62, 1],
    [1, 0],
  ]
  const halo: [number, number][] = [
    [0, 1],
    [0.18, 0.5],
    [0.5, 0.12],
    [1, 0],
  ]
  return { core: sprite(32, p.particle, dot), raw: sprite(32, p.raw, dot), glow: sprite(64, p.glow, halo) }
}
