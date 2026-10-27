import type { CSSProperties } from 'react'
import { DOME_CLEARANCE, DOME_MERIDIANS, DOME_PITCH, DOME_RINGS, DOME_RISE, DOME_YAW, SEED, projectDome, seeded, signalField } from './heroGeometry'
import { easeOutCubic } from './heroMotion'

/**
 * The still frames of the home hero scene, one per scene, as SVG in the prerendered HTML.
 *
 * They are what visitors see with reduced motion or Save-Data on, without JavaScript, and for the
 * moment before the live scene's first frame. They are built from the same geometry and seed as
 * the live scene, at its resting state, so the hand-over is a crossfade rather than a jump. The
 * dome's rings and meridians are dotted strokes (a zero-length dash with round caps), which keeps
 * the markup to a few paths instead of a thousand circles.
 *
 * Each dome is drawn once around the centre of its base and placed with CSS, which sizes and
 * positions it exactly as `domeFit` does for the live scene: a share of the hero's width (`cqw`),
 * capped by its height and by the top bar's bottom edge plus the clearance.
 *
 * Both sit on the hero surface (v2.4): the dome in its white dots; the phone band in colours that
 * run from the surface palette to the page palette down the band, as the surface fades under it.
 */

const round = (v: number) => Math.round(v * 10) / 10

/** Front and back dotted paths for a dome of radius `r` around the centre of its base, and their box. */
function domePaths(r: number) {
  let front = ''
  let back = ''
  const box = { minX: 0, minY: 0, maxX: 0, maxY: 0 }
  const curve = (pts: [number, number, number][]) => {
    let run: 'front' | 'back' | null = null
    for (const [x, y, z] of pts) {
      const p = projectDome(x, y, z, r, DOME_YAW, DOME_PITCH)
      const side = p.depth < 0.5 ? 'front' : 'back'
      box.minX = Math.min(box.minX, p.sx)
      box.minY = Math.min(box.minY, p.sy)
      box.maxX = Math.max(box.maxX, p.sx)
      box.maxY = Math.max(box.maxY, p.sy)
      const seg = `${side === run ? 'L' : 'M'}${round(p.sx)} ${round(p.sy)}`
      if (side === 'front') front += seg
      else back += seg
      run = side
    }
  }
  for (const deg of DOME_RINGS) {
    const phi = (deg * Math.PI) / 180
    const rr = r * Math.cos(phi)
    const pts: [number, number, number][] = []
    for (let i = 0; i <= 72; i++) {
      const th = (i / 72) * Math.PI * 2
      pts.push([rr * Math.cos(th), r * Math.sin(phi), rr * Math.sin(th)])
    }
    curve(pts)
  }
  for (let m = 0; m < DOME_MERIDIANS; m++) {
    const th = (m / DOME_MERIDIANS) * Math.PI * 2
    const pts: [number, number, number][] = []
    for (let i = 0; i <= 20; i++) {
      const phi = (i / 20) * (Math.PI / 2)
      pts.push([r * Math.cos(phi) * Math.cos(th), r * Math.sin(phi), r * Math.cos(phi) * Math.sin(th)])
    }
    curve(pts)
  }
  // A little room for the round caps of the dots.
  const pad = 4
  const viewBox = [box.minX - pad, box.minY - pad, box.maxX - box.minX + pad * 2, box.maxY - box.minY + pad * 2]
  return { front, back, viewBox: viewBox.map(round).join(' '), r, origin: { x: viewBox[0], y: viewBox[1] }, size: { w: viewBox[2], h: viewBox[3] } }
}

type Dome = ReturnType<typeof domePaths>

/** The hero is 780px tall wherever the dome shows (from `md`). */
const HERO_H = 780
const n = (v: number) => v.toFixed(4)

/**
 * CSS that sizes and places a dome drawn by `domePaths` the way `domeFit` does: radius `share` of
 * the hero's width, at most 60% of its height, and small enough that its top stays the clearance
 * below the top bar (64px, plus the staging banner when there is one). `cx` is the base centre.
 */
function domeStyle(d: Dome, share: number, cx: number, baseShare: number): CSSProperties {
  const base = HERO_H * baseShare
  const fit = `calc((${base}px - 64px - var(--dome-banner-h, 0px) - ${DOME_CLEARANCE}px) / ${n(Math.sin(DOME_PITCH) + DOME_RISE)})`
  const r = `min(${share * 100}cqw, ${HERO_H * 0.6}px, ${fit})`
  const k = (v: number) => n(v / d.r)
  return {
    position: 'absolute',
    left: `calc(${cx * 100}cqw + ${r} * ${k(d.origin.x)})`,
    top: `calc(${base}px + ${r} * ${n(d.origin.y / d.r - Math.sin(DOME_PITCH))})`,
    width: `calc(${r} * ${k(d.size.w)})`,
    height: `calc(${r} * ${k(d.size.h)})`,
  }
}

// Drawn at the live scene's size at 1440 and 768 wide, so the dots keep their spacing there.
const WIDE = domePaths(432)
const MEDIUM = domePaths(384)
const WIDE_STYLE = domeStyle(WIDE, 0.3, 0.7, 0.97)
const MEDIUM_STYLE = domeStyle(MEDIUM, 0.5, 0.5, 0.99)

/** Signal to record at rest on a phone: raw on the left, the right third already a record. */
function signalStill() {
  const field = signalField(390, 20, 192, 22, 0.58, seeded(SEED))
  const at = field.points.map((p) => {
    const e = easeOutCubic(p.still)
    return { x: round(p.nx + (p.gx - p.nx) * e), y: round(p.ny + (p.gy - p.ny) * e), e }
  })
  let links = ''
  field.points.forEach((p, i) => {
    if (at[i].e < 0.55) return
    const idx = p.row * field.cols + p.col
    for (const j of [p.col < field.cols - 1 ? field.cells[idx + 1] : -1, p.row < field.rows - 1 ? field.cells[idx + field.cols] : -1]) {
      if (j >= 0 && at[j].e >= 0.55) links += `M${at[i].x} ${at[i].y}L${at[j].x} ${at[j].y}`
    }
  })
  return { raw: at.filter((p) => p.e < 0.55), ordered: at.filter((p) => p.e >= 0.55), links }
}

const SIGNAL = signalStill()

const dots = {
  fill: 'none',
  stroke: 'var(--color-hero-on-particle)',
  strokeLinecap: 'round' as const,
}

/** A top to bottom blend over the 200px band, matching the surface fading into the page. */
function BandGradient({ id, from, to }: { id: string; from: string; to: string }) {
  return (
    <linearGradient id={id} x1="0" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse">
      <stop offset="0" style={{ stopColor: from }} />
      <stop offset="0.3" style={{ stopColor: from }} />
      <stop offset="0.7" style={{ stopColor: to }} />
      <stop offset="1" style={{ stopColor: to }} />
    </linearGradient>
  )
}

export function HeroStatic({ hidden }: { hidden: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 [container-type:inline-size] transition-opacity duration-[600ms] ${hidden ? 'opacity-0' : 'opacity-100'}`}
    >
      <svg className="hidden lg:block" style={WIDE_STYLE} viewBox={WIDE.viewBox}>
        <path d={WIDE.back} {...dots} strokeWidth={2} strokeDasharray="0 15" opacity={0.3} />
        <path d={WIDE.front} {...dots} strokeWidth={2.2} strokeDasharray="0 15" opacity={0.75} />
      </svg>
      <svg className="hidden md:block lg:hidden" style={MEDIUM_STYLE} viewBox={MEDIUM.viewBox}>
        <path d={MEDIUM.back} {...dots} strokeWidth={2} strokeDasharray="0 13" opacity={0.3} />
        <path d={MEDIUM.front} {...dots} strokeWidth={2.2} strokeDasharray="0 13" opacity={0.75} />
      </svg>
      <svg className="absolute inset-x-0 bottom-0 h-[200px] w-full md:hidden" viewBox="0 0 390 200" preserveAspectRatio="xMidYMax meet">
        <defs>
          <BandGradient id="hero-band-dot" from="var(--color-hero-on-particle)" to="var(--color-hero-particle)" />
          <BandGradient id="hero-band-raw" from="var(--color-hero-on-raw)" to="var(--color-hero-raw)" />
        </defs>
        <path d={SIGNAL.links} fill="none" stroke="url(#hero-band-dot)" strokeWidth={1} opacity={0.35} />
        {SIGNAL.raw.map((p, i) => (
          <circle key={`r${i}`} cx={p.x} cy={p.y} r={1.6} fill="url(#hero-band-raw)" opacity={0.8} />
        ))}
        {SIGNAL.ordered.map((p, i) => (
          <circle key={`o${i}`} cx={p.x} cy={p.y} r={1.8} fill="url(#hero-band-dot)" />
        ))}
      </svg>
    </div>
  )
}
