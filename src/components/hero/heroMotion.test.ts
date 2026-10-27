import { describe, expect, it } from 'vitest'
import {
  INTRO_MS,
  SWAP_MS,
  copyFade,
  domeSplit,
  heroProgress,
  intro,
  layoutForWidth,
  sceneForWidth,
  signalOrder,
  signalSplit,
  surfaceMix,
  toRgb,
} from './heroMotion'
import { DOME_CLEARANCE, DOME_PITCH, DOME_RISE, domeFit, domeLattice, seeded, signalField } from './heroGeometry'

describe('scene and layout by width', () => {
  it('shows the dome from 768px and signal to record below', () => {
    expect(sceneForWidth(767)).toBe('signal')
    expect(sceneForWidth(768)).toBe('dome')
    expect(sceneForWidth(1440)).toBe('dome')
  })

  it('switches to the desktop layout at 1024px', () => {
    expect(layoutForWidth(390)).toBe('narrow')
    expect(layoutForWidth(768)).toBe('medium')
    expect(layoutForWidth(1023)).toBe('medium')
    expect(layoutForWidth(1024)).toBe('wide')
  })
})

describe('scroll progress', () => {
  it('runs from 0 at the top of the page to 1 once the hero has left', () => {
    expect(heroProgress(0, 780)).toBe(0)
    expect(heroProgress(-390, 780)).toBe(0.5)
    expect(heroProgress(-2000, 780)).toBe(1)
    expect(heroProgress(120, 780)).toBe(0)
    expect(heroProgress(0, 0)).toBe(0)
  })

  // The effect must be over before the next section arrives, so How we work is never touched.
  it('finishes both scenes inside the hero', () => {
    expect(domeSplit(0)).toBe(0)
    expect(domeSplit(0.85)).toBe(1)
    expect(signalOrder(0)).toBe(0)
    expect(signalOrder(0.5)).toBe(1)
    expect(signalSplit(0.45)).toBe(0)
    expect(signalSplit(0.95)).toBe(1)
  })

  it('never runs backwards as the visitor scrolls down', () => {
    let previous = -1
    for (let p = 0; p <= 1; p += 0.01) {
      const v = domeSplit(p) + signalOrder(p) + signalSplit(p)
      expect(v).toBeGreaterThanOrEqual(previous)
      previous = v
    }
  })
})

describe('timed parts keep the design system ceiling', () => {
  it('enters within 600ms and swaps scenes within 250ms', () => {
    expect(INTRO_MS).toBeLessThanOrEqual(600)
    expect(SWAP_MS).toBeLessThanOrEqual(250)
    expect(intro(0, INTRO_MS)).toBe(0)
    expect(intro(INTRO_MS, INTRO_MS)).toBe(1)
  })
})

describe('particles behind the copy', () => {
  it('dim to a floor inside the copy block and recover over 48px', () => {
    expect(copyFade(0, 'wide')).toBeCloseTo(0.1)
    expect(copyFade(0, 'narrow')).toBeCloseTo(0.25)
    expect(copyFade(48, 'wide')).toBe(1)
    expect(copyFade(24, 'wide')).toBeGreaterThan(0.1)
  })
})

// On phones the surface fades into the page across the bottom 200px; the dots follow it.
describe('surface to page on phones', () => {
  it('keeps the surface palette above the band and the page palette at the bottom', () => {
    expect(surfaceMix(0, 800)).toBe(0)
    expect(surfaceMix(600, 800)).toBe(0)
    expect(surfaceMix(700, 800)).toBeCloseTo(0.5)
    expect(surfaceMix(800, 800)).toBe(1)
  })
})

// The build minifies `#0066CC` to `#06c`; reading only the long form left light mode drawing in
// the dark theme's blue on staging.
describe('theme colours', () => {
  it('read in both hex forms the build can ship', () => {
    expect(toRgb('#06c', 'x')).toBe('0,102,204')
    expect(toRgb(' #0066CC ', 'x')).toBe('0,102,204')
    expect(toRgb('#40a8ff', 'x')).toBe('64,168,255')
    expect(toRgb('', 'x')).toBe('x')
    expect(toRgb('rgb(0 0 0)', 'x')).toBe('x')
  })
})

// On wide screens the dome stopped growing at 60% of the hero's height and its top came within a
// few px of the top bar (3px on staging, under the banner). It now keeps a 40px clearance.
describe('dome size and the top bar', () => {
  const top = (wide: boolean, w: number, clear: number) => {
    const { r, baseY } = domeFit(wide, w, 780, clear)
    return baseY - r * DOME_RISE
  }

  it('keeps the top of the dome 40px below the bar at every desktop width, banner or not', () => {
    for (const bar of [64, 96]) {
      const clear = bar + DOME_CLEARANCE
      for (let w = 1024; w <= 3840; w += 16) expect(top(true, w, clear)).toBeGreaterThanOrEqual(clear - 0.01)
      for (let w = 768; w < 1024; w += 16) expect(top(false, w, clear)).toBeGreaterThanOrEqual(clear - 0.01)
    }
  })

  it('leaves the signed-off size alone where there was room', () => {
    expect(domeFit(true, 1440, 780, 104).r).toBeCloseTo(432)
    expect(domeFit(true, 1280, 780, 104).r).toBeCloseTo(384)
    expect(domeFit(false, 768, 780, 104).r).toBeCloseTo(384)
    expect(domeFit(true, 1440, 780, 104).baseY).toBeCloseTo(780 * 0.97 - 432 * Math.sin(DOME_PITCH))
  })

  it('never shrinks as the screen gets wider', () => {
    let last = 0
    for (let w = 1024; w <= 3840; w += 16) {
      const { r } = domeFit(true, w, 780, 104)
      expect(r).toBeGreaterThanOrEqual(last - 1e-9)
      last = r
    }
  })
})

describe('geometry', () => {
  it('is the same on every build, so the still frame matches the live scene', () => {
    const a = domeLattice(100, 15, 0.12, seeded(7))
    const b = domeLattice(100, 15, 0.12, seeded(7))
    expect(a).toEqual(b)
  })

  it('splits the dome into two halves with a falling seam down the middle', () => {
    const points = domeLattice(100, 15, 0.12, seeded(7))
    expect(points.some((p) => p.side === -1)).toBe(true)
    expect(points.some((p) => p.side === 1)).toBe(true)
    expect(points.filter((p) => p.seam).every((p) => Math.abs(p.x) < 4.5)).toBe(true)
  })

  it('lays the record grid inside the band under the buttons', () => {
    const field = signalField(390, 600, 780, 22, 0.58, seeded(7))
    expect(field.points.length).toBeGreaterThan(20)
    for (const p of field.points) {
      expect(p.gy).toBeGreaterThanOrEqual(600)
      expect(p.gy).toBeLessThanOrEqual(780)
      expect(field.cells[p.row * field.cols + p.col]).toBeGreaterThanOrEqual(0)
    }
  })
})
