/**
 * The pure maths behind the home hero scene: how far the visitor has scrolled through the hero, and
 * what each scene does at that point. Kept free of the DOM so it can be unit tested and so the
 * engine, the still frames and the tests all agree on the same numbers.
 *
 * The rules these encode are in DESIGN_SYSTEM.md v2.3, section 8, "Input-driven motion: the home
 * hero": motion follows scroll and pointer, timed parts stay within 600ms, and everything has
 * settled before the hero leaves the screen.
 */

/** Width from which the hero shows the dome; below it, signal to record. The hero's `md`. */
export const SCENE_BREAKPOINT = 768
/** Width from which the hero uses the desktop layout: copy on the left, side scrim, dome on the right. */
export const WIDE_BREAKPOINT = 1024
/** The one-off entrance, at the design system's ceiling. */
export const INTRO_MS = 600
/** A scene swap across the breakpoint fades in faster than the first entrance. */
export const SWAP_MS = 250
/** How long a tap pulse lives on touch screens. */
export const PULSE_MS = 1500
/** On phones the hero surface fades into the page across the scene band at the bottom of the hero. */
export const SURFACE_FADE_PX = 200

export type HeroScene = 'dome' | 'signal'
/** `wide` is the desktop layout, `medium` a tablet, `narrow` a phone. */
export type HeroLayout = 'wide' | 'medium' | 'narrow'

export const clamp01 = (v: number) => (v <= 0 ? 0 : v >= 1 ? 1 : v)
export const easeOutCubic = (v: number) => 1 - Math.pow(1 - v, 3)
export const easeInOutCubic = (v: number) => (v < 0.5 ? 4 * v * v * v : 1 - Math.pow(-2 * v + 2, 3) / 2)
export const smoothstep = (a: number, b: number, v: number) => {
  const x = clamp01((v - a) / (b - a))
  return x * x * (3 - 2 * x)
}

export function sceneForWidth(width: number): HeroScene {
  return width >= SCENE_BREAKPOINT ? 'dome' : 'signal'
}

export function layoutForWidth(width: number): HeroLayout {
  if (width >= WIDE_BREAKPOINT) return 'wide'
  return width >= SCENE_BREAKPOINT ? 'medium' : 'narrow'
}

/**
 * Scroll progress through the hero, 0 at the top of the page and 1 once the hero has scrolled
 * fully out of view, from the hero's own bounding box.
 */
export function heroProgress(top: number, height: number): number {
  return height > 0 ? clamp01(-top / height) : 0
}

/** The dome's two halves part over the first 85% of the hero, so they are gone before it is. */
export const domeSplit = (progress: number) => easeInOutCubic(clamp01(progress / 0.85))

/** Signal to record orders the whole field over the first half of the hero... */
export const signalOrder = (progress: number) => smoothstep(0, 0.5, progress)

/** ...then parts it to the left and right over the second half. */
export const signalSplit = (progress: number) => easeInOutCubic(clamp01((progress - 0.45) / 0.5))

/** Entrance progress, eased, for a scene built `elapsed` ms ago with an entrance of `duration` ms. */
export const intro = (elapsed: number, duration: number) => easeOutCubic(clamp01(elapsed / duration))

/**
 * A theme token as an `r,g,b` triple for the canvas. The production CSS build shortens hex where
 * it can (`#0066CC` ships as `#06c`), so both the three- and six-digit forms have to parse.
 */
export function toRgb(value: string, fallback: string): string {
  let hex = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(value.trim())?.[1]
  if (!hex) return fallback
  if (hex.length === 3) hex = hex.replace(/./g, '$&$&')
  return [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16)).join(',')
}

/**
 * How far a point at `y` has crossed from the hero surface onto the page on phones: 0 on the
 * surface, 1 on the page background. Matches the fade in `.hero-surface`, so dots change palette
 * where the background changes under them.
 */
export function surfaceMix(y: number, height: number): number {
  return smoothstep(height - SURFACE_FADE_PX, height, y)
}

/**
 * How much a particle may show at a given distance from the copy block. Particles dim behind the
 * text, with a soft 48px edge, so the copy keeps its contrast. Touch layouts have a lighter scrim,
 * so they dim less and let the scrim do more of the work. On the hero surface (v2.4) the dots add
 * white light, and white text on #0070E0 starts at only 4.78:1, so the floors are low: measured
 * with the scene running, the light lead stays above 4.5:1.
 */
export function copyFade(distance: number, layout: HeroLayout): number {
  const floor = layout === 'wide' ? 0.1 : 0.25
  return floor + (1 - floor) * clamp01(distance / 48)
}
