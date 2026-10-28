/**
 * The art on the error pages (Sprint LX): signal to record, as on the home hero.
 *
 * On the 404 the number is a record, white dots on a grid linked along rows only, inside a field of
 * loose signal that never made it into the record. On the "Something went wrong" page there is only
 * the loose signal. Each record dot also carries where it starts in the signal for the entrance
 * (`dx`, `dy`, relative to its place) and a small delay, so the page can play it with CSS alone.
 *
 * Coordinates are in the art's own units: 26 per grid cell, the field 714 by 402.
 */

export type ErrorArtKind = 'notFound' | 'error'

export interface RecordDot {
  x: number
  y: number
  /** Offset of the dot's start in the loose signal, for the entrance. */
  dx: number
  dy: number
  /** Entrance delay in ms. */
  delay: number
}

export interface ErrorArt {
  width: number
  height: number
  dots: RecordDot[]
  /** Row links of the record, as one path. */
  links: string
  /** The loose signal, as dot paths (`M x y h0`, drawn with round caps). */
  raw: string
  mid: string
}

/** 5 by 7 dot glyphs. */
const GLYPHS: Record<string, readonly string[]> = {
  '4': ['...X.', '..XX.', '.X.X.', 'X..X.', 'XXXXX', '...X.', '...X.'],
  '0': ['.XXX.', 'X...X', 'X...X', 'X...X', 'X...X', 'X...X', '.XXX.'],
}

export const CELL = 26
const PAD = 110
const COLS = 19
const ROWS = 7
/** Entrance: each dot moves for 420ms after a delay of up to 180ms, so all settle by 600ms. */
export const ENTRANCE_MS = 600
const MAX_DELAY = 180

const r1 = (v: number) => Math.round(v * 10) / 10

function seeded(seed: number) {
  let s = seed >>> 0
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0
    return s / 4294967296
  }
}

export function errorArt(kind: ErrorArtKind): ErrorArt {
  const width = COLS * CELL + PAD * 2
  const height = ROWS * CELL + PAD * 2
  const at = (c: number, r: number) => [r1(PAD + c * CELL + CELL / 2), r1(PAD + r * CELL + CELL / 2)]

  const on: { c: number; r: number }[] = []
  if (kind === 'notFound') {
    ;['4', '0', '4'].forEach((glyph, g) => {
      GLYPHS[glyph].forEach((row, r) => {
        for (let c = 0; c < 5; c++) if (row[c] === 'X') on.push({ c: g * 7 + c, r })
      })
    })
  }
  const has = new Set(on.map(({ c, r }) => `${c},${r}`))

  const start = seeded(4040)
  const dots: RecordDot[] = []
  let links = ''
  for (const { c, r } of on) {
    const [x, y] = at(c, r)
    const sx = r1(width / 2 + (start() + start() - 1) * width * 0.48)
    const sy = r1(height / 2 + (start() + start() - 1) * height * 0.55)
    dots.push({ x, y, dx: r1(sx - x), dy: r1(sy - y), delay: Math.round(start() * MAX_DELAY) })
    // Rows only: a dot links to the dot right after it in the same row, never down.
    if (has.has(`${c + 1},${r}`)) links += `M${x} ${y}L${at(c + 1, r)[0]} ${y}`
  }

  const rand = seeded(kind === 'notFound' ? 404 : 500)
  const nearRecord = (x: number, y: number) =>
    on.some(({ c, r }) => {
      const [px, py] = at(c, r)
      return Math.hypot(px - x, py - y) < CELL * 0.9
    })
  let raw = ''
  let mid = ''
  const count = kind === 'notFound' ? 46 : 120
  for (let i = 0; i < count; i++) {
    // Loosely clustered, denser towards the middle, like the hero's raw signal.
    const x = r1(width / 2 + (rand() + rand() + rand() - 1.5) * width * 0.62)
    const y = r1(height / 2 + (rand() + rand() + rand() - 1.5) * height * 0.7)
    if (x < 2 || y < 2 || x > width - 2 || y > height - 2 || nearRecord(x, y)) continue
    if (kind === 'notFound' && i % 7 === 0) mid += `M${x} ${y}h0`
    else raw += `M${x} ${y}h0`
  }

  return { width, height, dots, links, raw, mid }
}
