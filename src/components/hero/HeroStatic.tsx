import type { CSSProperties } from 'react'
import { DOME_CLEARANCE, DOME_PITCH, DOME_RISE, domePaths } from './heroGeometry'
import { recordStill } from './heroStill'

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

const SIGNAL = recordStill()

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
