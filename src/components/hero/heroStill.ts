import { RECORD_LINK, SEED, nextInRow, seeded, signalField } from './heroGeometry'
import { easeOutCubic } from './heroMotion'

const round = (v: number) => Math.round(v * 10) / 10

/**
 * Signal to record at rest on a phone: raw on the left, the right third already a record. The
 * field is 390 wide with its grid from y 20 to `bottom`; the home hero's band uses 192, the
 * sign-in page's shorter band 150. Same seed, so both read as the same record.
 */
export function recordStill(bottom = 192) {
  const field = signalField(390, 20, bottom, 22, 0.58, seeded(SEED))
  const at = field.points.map((p) => {
    const e = easeOutCubic(p.still)
    return { x: round(p.nx + (p.gx - p.nx) * e), y: round(p.ny + (p.gy - p.ny) * e), e }
  })
  let links = ''
  field.points.forEach((_, i) => {
    if (at[i].e < RECORD_LINK) return
    const j = nextInRow(field, i)
    if (j >= 0 && at[j].e >= RECORD_LINK) links += `M${at[i].x} ${at[i].y}L${at[j].x} ${at[j].y}`
  })
  return { raw: at.filter((p) => p.e < 0.55), ordered: at.filter((p) => p.e >= 0.55), links }
}
