import { DOME_MERIDIANS, DOME_PITCH, DOME_RINGS, DOME_YAW, SEED, projectDome, seeded, signalField } from './heroGeometry'
import { easeOutCubic } from './heroMotion'

/**
 * The still frames of the home hero scene, one per scene, as SVG in the prerendered HTML.
 *
 * They are what visitors see with reduced motion or Save-Data on, without JavaScript, and for the
 * moment before the live scene's first frame. They are built from the same geometry and seed as
 * the live scene, at its resting state, so the hand-over is a crossfade rather than a jump. The
 * dome's rings and meridians are dotted strokes (a zero-length dash with round caps), which keeps
 * the markup to a few paths instead of a thousand circles.
 */

const round = (v: number) => Math.round(v * 10) / 10

/** Front and back dotted paths for a dome of radius `r` centred at `cx` on a base at `baseY`. */
function domePaths(r: number, cx: number, baseY: number) {
  let front = ''
  let back = ''
  const curve = (pts: [number, number, number][]) => {
    let run: 'front' | 'back' | null = null
    for (const [x, y, z] of pts) {
      const p = projectDome(x, y, z, r, DOME_YAW, DOME_PITCH)
      const side = p.depth < 0.5 ? 'front' : 'back'
      const seg = `${side === run ? 'L' : 'M'}${round(cx + p.sx)} ${round(baseY + p.sy)}`
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
  return { front, back }
}

// The live scene's resting geometry at a 780px tall hero: desktop at 1440 wide, tablet at 768.
const WIDE = domePaths(Math.min(1440 * 0.3, 780 * 0.6), 1440 * 0.7, 780 * 0.97 - 432 * Math.sin(DOME_PITCH))
const MEDIUM = domePaths(Math.min(768 * 0.5, 780 * 0.6), 768 * 0.5, 780 * 0.99 - 384 * Math.sin(DOME_PITCH))

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
  stroke: 'var(--color-hero-particle)',
  strokeLinecap: 'round' as const,
}

export function HeroStatic({ hidden }: { hidden: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 transition-opacity duration-[600ms] ${hidden ? 'opacity-0' : 'opacity-100'}`}
    >
      <svg className="absolute inset-0 hidden h-full w-full lg:block" viewBox="0 0 1440 780" preserveAspectRatio="xMaxYMax slice">
        <path d={WIDE.back} {...dots} strokeWidth={2} strokeDasharray="0 15" opacity={0.3} />
        <path d={WIDE.front} {...dots} strokeWidth={2.2} strokeDasharray="0 15" opacity={0.75} />
      </svg>
      <svg className="absolute inset-0 hidden h-full w-full md:block lg:hidden" viewBox="0 0 768 780" preserveAspectRatio="xMidYMax slice">
        <path d={MEDIUM.back} {...dots} strokeWidth={2} strokeDasharray="0 13" opacity={0.3} />
        <path d={MEDIUM.front} {...dots} strokeWidth={2.2} strokeDasharray="0 13" opacity={0.75} />
      </svg>
      <svg className="absolute inset-x-0 bottom-0 h-[200px] w-full md:hidden" viewBox="0 0 390 200" preserveAspectRatio="xMidYMax meet">
        <path d={SIGNAL.links} fill="none" stroke="var(--color-hero-particle)" strokeWidth={1} opacity={0.35} />
        {SIGNAL.raw.map((p, i) => (
          <circle key={`r${i}`} cx={p.x} cy={p.y} r={1.6} fill="var(--color-hero-raw)" opacity={0.8} />
        ))}
        {SIGNAL.ordered.map((p, i) => (
          <circle key={`o${i}`} cx={p.x} cy={p.y} r={1.8} fill="var(--color-hero-particle)" />
        ))}
      </svg>
    </div>
  )
}
