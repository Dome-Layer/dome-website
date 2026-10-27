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
  toRgb,
} from './heroMotion'
import { domeLattice, seeded, signalField } from './heroGeometry'

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
    expect(copyFade(0, 'wide')).toBeCloseTo(0.22)
    expect(copyFade(0, 'narrow')).toBeCloseTo(0.42)
    expect(copyFade(48, 'wide')).toBe(1)
    expect(copyFade(24, 'wide')).toBeGreaterThan(0.22)
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
