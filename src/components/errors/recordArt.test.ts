import { describe, expect, it } from 'vitest'
import { CELL, ENTRANCE_MS, errorArt } from './recordArt'

describe('error page art', () => {
  it('draws 404 as a record of dots linked along rows only', () => {
    const art = errorArt('notFound')
    // A 4 has 14 dots, a 0 has 16.
    expect(art.dots).toHaveLength(14 + 16 + 14)
    const segments = [...art.links.matchAll(/M([\d.]+) ([\d.]+)L([\d.]+) ([\d.]+)/g)]
    expect(segments.length).toBeGreaterThan(5)
    for (const [, x1, y1, x2, y2] of segments) {
      expect(y2).toBe(y1)
      expect(Number(x2) - Number(x1)).toBeCloseTo(CELL)
    }
  })

  it('lets every dot settle within the entrance time', () => {
    for (const dot of errorArt('notFound').dots) {
      expect(dot.delay + 420).toBeLessThanOrEqual(ENTRANCE_MS)
      expect(Math.hypot(dot.dx, dot.dy)).toBeGreaterThan(0)
    }
  })

  it('keeps the error page to loose signal, with no record', () => {
    const art = errorArt('error')
    expect(art.dots).toHaveLength(0)
    expect(art.links).toBe('')
    expect(art.raw.length).toBeGreaterThan(0)
  })
})
