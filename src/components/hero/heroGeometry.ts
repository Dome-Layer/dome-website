/**
 * Geometry shared by the live scene and its still frames: the dotted hemisphere (the DOME mark) and
 * the signal field. Random choices come from a seeded generator, so the still frame in the
 * prerendered HTML and the scene built in the browser are the same on every load, and a rebuild
 * after a resize keeps every particle where it was.
 */

/** The one seed every scene and still frame is built from. */
export const SEED = 20261027

/** A small, fast seeded PRNG (mulberry32). Same seed, same sequence. */
export function seeded(seed: number): () => number {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export interface DomePoint {
  x: number
  y: number
  z: number
  /** -1 for the left half, 1 for the right half: the side it travels to on scroll. */
  side: -1 | 1
  /** Points on the front and back meridian, which fall instead of travelling. */
  seam: boolean
  seed: number
  twinkle: number
  /** A minority of points glow softly at rest. */
  lit: boolean
}

/** Latitudes of the dotted rings, in degrees from the base. */
export const DOME_RINGS = [0, 15, 30, 45, 60, 74, 86]
/** Number of meridians, so the front and back ones (the seam) fall on 90 and 270 degrees. */
export const DOME_MERIDIANS = 12
/** The camera looks down on the dome at this angle, in radians. */
export const DOME_PITCH = 0.36
/** The resting yaw, a slight turn so the dome does not look flat on. */
export const DOME_YAW = -0.2

/** A hemisphere of radius `r` made of rings and meridians, one point every `gap` px. */
export function domeLattice(r: number, gap: number, litShare: number, rand: () => number): DomePoint[] {
  const points: DomePoint[] = []
  const add = (x: number, y: number, z: number) =>
    points.push({
      x,
      y,
      z,
      side: x < 0 ? -1 : 1,
      seam: Math.abs(x) < r * 0.045,
      seed: rand(),
      twinkle: rand() * Math.PI * 2,
      lit: rand() < litShare,
    })
  for (const deg of DOME_RINGS) {
    const phi = (deg * Math.PI) / 180
    const rr = r * Math.cos(phi)
    const y = r * Math.sin(phi)
    const n = Math.max(8, Math.round((2 * Math.PI * rr) / gap))
    for (let i = 0; i < n; i++) {
      const th = (i / n) * Math.PI * 2
      add(rr * Math.cos(th), y, rr * Math.sin(th))
    }
  }
  const n = Math.round((Math.PI * r) / 2 / gap)
  for (let m = 0; m < DOME_MERIDIANS; m++) {
    const th = (m / DOME_MERIDIANS) * Math.PI * 2
    for (let i = 1; i < n; i++) {
      const phi = (i / n) * (Math.PI / 2)
      add(r * Math.cos(phi) * Math.cos(th), r * Math.sin(phi), r * Math.cos(phi) * Math.sin(th))
    }
  }
  add(0, r, 0)
  return points
}

/**
 * Projects a point of a dome of radius `r` to screen offsets from the centre of its base, with a
 * simple perspective. `depth` is 0 at the front and 1 at the back.
 */
export function projectDome(
  x: number,
  y: number,
  z: number,
  r: number,
  yaw: number,
  pitch: number,
): { sx: number; sy: number; scale: number; depth: number } {
  const cy = Math.cos(yaw)
  const sy = Math.sin(yaw)
  const cp = Math.cos(pitch)
  const sp = Math.sin(pitch)
  const x1 = x * cy + z * sy
  const z1 = -x * sy + z * cy
  const y2 = y * cp + z1 * sp
  const z2 = -y * sp + z1 * cp
  const f = r * 3.2
  const scale = f / (f + z2)
  return { sx: x1 * scale, sy: -y2 * scale, scale, depth: Math.min(1, Math.max(0, (z2 / r + 1) / 2)) }
}

const round = (v: number) => Math.round(v * 10) / 10

/**
 * Front and back dotted paths for a dome of radius `r` around the centre of its base, and their box:
 * the rings and meridians as polylines, drawn as dots with a zero-length dash. Used by the still
 * frames and the social cards.
 */
export function domePaths(r: number) {
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

/**
 * How far the top of the dome rises above the centre of its base, per px of radius, at the resting
 * yaw and pitch. The perspective scales with the radius, so this is one number for every size.
 */
export const DOME_RISE = (() => {
  let top = 0
  for (let phi = 0; phi <= 90; phi += 1) {
    for (let th = 0; th < 360; th += 2) {
      const p = (phi * Math.PI) / 180
      const t = (th * Math.PI) / 180
      top = Math.min(top, projectDome(Math.cos(p) * Math.cos(t), Math.sin(p), Math.cos(p) * Math.sin(t), 1, DOME_YAW, DOME_PITCH).sy)
    }
  }
  return -top
})()

/** Space between the top of the dome and the bottom of the top bar. */
export const DOME_CLEARANCE = 40

/**
 * The dome's radius and the line its base sits on, for a hero `width` by `height` px. Its natural
 * size is a share of the width (30% on a desktop, 50% on a tablet), up to 60% of the height; on
 * wide screens it is also kept `clearTop` px below the top of the hero, which is the bottom of the
 * top bar plus `DOME_CLEARANCE`. The live scene and the still frames both size the dome with this.
 */
export function domeFit(wide: boolean, width: number, height: number, clearTop: number): { r: number; baseY: number } {
  const base = height * (wide ? 0.97 : 0.99)
  const natural = Math.min(width * (wide ? 0.3 : 0.5), height * 0.6)
  const fit = (base - clearTop) / (Math.sin(DOME_PITCH) + DOME_RISE)
  const r = Math.max(0, Math.min(natural, fit))
  return { r, baseY: base - r * Math.sin(DOME_PITCH) }
}

export interface SignalPoint {
  /** Its cell on the record grid. */
  gx: number
  gy: number
  col: number
  row: number
  /** Where it sits while still raw. */
  nx: number
  ny: number
  phase: number
  amplitude: number
  /** Order in the still frame: the right side of the field already reads as a record. */
  still: number
}

export interface SignalField {
  points: SignalPoint[]
  /** Grid cell to point index, -1 for an empty cell. */
  cells: number[]
  cols: number
  rows: number
  /** The middle of the grid: points left of it travel left on scroll, the rest right. */
  centre: number
}

/**
 * The signal field for a phone: a record grid in the band from `top` to `bottom`, and each
 * particle's raw position scattered in uneven clusters around that band, with a few strays.
 */
export function signalField(
  width: number,
  top: number,
  bottom: number,
  gap: number,
  fill: number,
  rand: () => number,
): SignalField {
  const x0 = width * 0.07
  const x1 = width * 0.93
  const cols = Math.floor((x1 - x0) / gap) + 1
  const rows = Math.max(1, Math.floor((bottom - top) / gap) + 1)
  const band = bottom - top
  const centres = [
    [0.25, 0.3],
    [0.7, 0.5],
    [0.5, 0.85],
    [0.85, 0.15],
    [0.15, 0.75],
  ]
  const sigma = Math.min(60, band * 0.45)
  const gauss = () => {
    const u = Math.max(rand(), 1e-9)
    const v = rand()
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v)
  }
  const field: SignalField = { points: [], cells: new Array(cols * rows).fill(-1), cols, rows, centre: (x0 + x1) / 2 }
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (rand() > fill) continue
      let nx: number
      let ny: number
      if (rand() < 0.78) {
        const c = centres[Math.floor(rand() * centres.length)]
        nx = c[0] * width + gauss() * sigma
        ny = top + c[1] * band + gauss() * sigma * 0.8
      } else {
        nx = width * (0.04 + rand() * 0.92)
        ny = top - band * 0.4 + rand() * band * 1.4
      }
      field.cells[row * cols + col] = field.points.length
      field.points.push({
        gx: x0 + col * gap,
        gy: top + row * gap,
        col,
        row,
        nx,
        ny,
        phase: rand() * Math.PI * 2,
        amplitude: 2 + rand() * 5,
        still: col > cols * 0.62 ? 1 : col > cols * 0.5 ? 0.45 : 0,
      })
    }
  }
  return field
}

/**
 * The record's one link from a point: the next point along its row, empty cells skipped, or -1.
 * Rows alone read as the lines of a register, and with no vertical links the record can never
 * form hooked or crossed shapes (2026-10-28).
 */
/**
 * How far both ends of a row link must have travelled onto the grid before it is drawn, so a link
 * only appears once it is nearly level and never as a slanting line across the field.
 */
export const RECORD_LINK = 0.92

export function nextInRow(field: SignalField, i: number): number {
  const p = field.points[i]
  const start = p.row * field.cols
  for (let col = p.col + 1; col < field.cols; col++) {
    const j = field.cells[start + col]
    if (j >= 0) return j
  }
  return -1
}
