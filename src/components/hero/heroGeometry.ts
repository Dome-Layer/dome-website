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
