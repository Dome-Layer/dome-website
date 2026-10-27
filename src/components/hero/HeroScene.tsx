import { useEffect, useRef, useState, useSyncExternalStore, type RefObject } from 'react'
import { useMessages } from '../../i18n/useLocale'
import { useMediaQuery } from '../../lib/useMediaQuery'
import { HeroField, type HeroPalette } from './heroField'
import { heroProgress, layoutForWidth, sceneForWidth, toRgb } from './heroMotion'
import { HeroStatic } from './HeroStatic'

/**
 * Save-Data and "are we in the browser" are client-only values. `useSyncExternalStore` gives the
 * server snapshot (false) to the prerender and the real value on the client without a hydration
 * mismatch, the same way `HeroMedia` reads Save-Data. Neither changes within a page view.
 */
const noSubscribe = () => () => {}
const readSaveData = () =>
  Boolean((navigator as { connection?: { saveData?: boolean } }).connection?.saveData)

/**
 * The scene's colours come from the theme tokens, so the toggle re-tints it without a reload: the
 * page palette, and the palette on the hero surface (v2.4).
 */
function readPalette(): HeroPalette {
  const root = document.documentElement
  const css = getComputedStyle(root)
  const token = (name: string, fallback: string) => toRgb(css.getPropertyValue(name), fallback)
  return {
    particle: token('--color-hero-particle', '64,168,255'),
    glow: token('--color-hero-glow', '0,128,255'),
    raw: token('--color-hero-raw', '133,133,133'),
    surface: {
      particle: token('--color-hero-on-particle', '255,255,255'),
      glow: token('--color-hero-on-glow', '140,200,255'),
      raw: token('--color-hero-on-raw', '0,45,110'),
    },
    dark: root.getAttribute('data-theme') === 'dark',
  }
}

/**
 * The home hero's background: a generative particle scene that answers scroll and pointer (the
 * dome from 768px, signal to record on phones), its still frames, the scrims and the scroll cue.
 * Rendered straight into the hero `<section>`, whose box it measures and listens on.
 *
 * Isolation from the rest of the page is deliberate (DESIGN_SYSTEM.md v2.3, section 8): no window
 * scroll listener, no smooth scroll, no `preventDefault`, no wrapper around the page. Scroll
 * progress is read once per frame, and the loop only runs while the hero is on screen and the tab
 * is visible. With reduced motion or Save-Data the canvas is never created and the still frame
 * stays.
 */
export function HeroScene({ copyRef }: { copyRef: RefObject<HTMLElement | null> }) {
  const t = useMessages().pages.home.hero
  const reduced = useMediaQuery('(prefers-reduced-motion: reduce)')
  const saveData = useSyncExternalStore(noSubscribe, readSaveData, () => false)
  const client = useSyncExternalStore(noSubscribe, () => true, () => false)
  const animate = client && !reduced && !saveData

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const cueRef = useRef<HTMLDivElement>(null)
  const [live, setLive] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    const section = canvas?.parentElement
    if (!animate || !canvas || !section) return
    const field = HeroField.create(canvas)
    if (!field) return

    let visible = true
    let shown = false
    field.progressSource = () => heroProgress(section.getBoundingClientRect().top, section.offsetHeight)
    field.onFrame = (progress) => {
      if (!shown) {
        shown = true
        setLive(true)
      }
      cueRef.current?.toggleAttribute('data-hidden', progress > 0.04)
    }

    const measure = () => {
      const box = section.getBoundingClientRect()
      const copy = copyRef.current?.getBoundingClientRect()
      // The scene follows the same viewport width the CSS breakpoints use, scrollbar included.
      const viewport = window.innerWidth
      field.configure({
        scene: sceneForWidth(viewport),
        layout: layoutForWidth(viewport),
        width: box.width,
        height: box.height,
        copy: copy ? { x: copy.left - box.left - 16, y: copy.top - box.top - 16, w: copy.width + 32, h: copy.height + 32 } : null,
        palette: readPalette(),
      })
    }
    measure()

    const run = () => {
      if (visible && !document.hidden) field.start()
      else field.stop()
    }
    const io = typeof IntersectionObserver === 'undefined' ? null : new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      run()
    })
    io?.observe(section)
    run()

    // Size changes (resize, rotation, fonts arriving, the copy switching language) and theme changes.
    const ro = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(measure)
    ro?.observe(section)
    if (copyRef.current) ro?.observe(copyRef.current)
    const mo = new MutationObserver(measure)
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

    const local = (e: PointerEvent): [number, number] => {
      const box = section.getBoundingClientRect()
      return [e.clientX - box.left, e.clientY - box.top]
    }
    // Hover for mouse and pen; a touch only sends a pulse, and a touch drag is the page scrolling.
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'touch') field.pointerMove(...local(e))
    }
    const onLeave = () => field.pointerLeave()
    const onDown = (e: PointerEvent) => {
      if (e.pointerType === 'touch') field.pulse(...local(e))
    }
    section.addEventListener('pointermove', onMove, { passive: true })
    section.addEventListener('pointerleave', onLeave, { passive: true })
    section.addEventListener('pointerdown', onDown, { passive: true })
    document.addEventListener('visibilitychange', run)

    return () => {
      field.stop()
      io?.disconnect()
      ro?.disconnect()
      mo.disconnect()
      section.removeEventListener('pointermove', onMove)
      section.removeEventListener('pointerleave', onLeave)
      section.removeEventListener('pointerdown', onDown)
      document.removeEventListener('visibilitychange', run)
      setLive(false)
    }
  }, [animate, copyRef])

  return (
    <>
      <HeroStatic hidden={live} />
      {animate && <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none absolute inset-0 block h-full w-full" />}

      {/*
        Scrims, tinted with the hero surface (v2.4), never white or black. From `lg` the copy sits
        on the left and the dome on the right, so the scrim runs sideways. Below `lg` the copy spans
        the width and the scene lives in the band under the buttons, so the scrim runs top to bottom
        and clears before that band. The surface itself (`.hero-surface` on the section) does the
        fade into the page on phones; from `md` the hero ends on a clean edge.
      */}
      <div
        aria-hidden="true"
        className="absolute inset-0 md:hidden bg-[linear-gradient(180deg,var(--color-hero-scrim-strong)_0%,var(--color-hero-scrim-strong)_30%,var(--color-hero-scrim)_54%,transparent_72%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden md:block lg:hidden bg-[linear-gradient(180deg,var(--color-hero-scrim-strong)_0%,var(--color-hero-scrim-strong)_22%,var(--color-hero-scrim)_50%,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden lg:block bg-[linear-gradient(90deg,var(--color-hero-scrim-strong)_0%,var(--color-hero-scrim)_42%,transparent_72%)]"
      />

      <div
        ref={cueRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-6 z-[1] flex flex-col items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-tertiary)] md:text-white/80 transition-opacity duration-[250ms] data-[hidden]:opacity-0"
      >
        <span>{t.scrollCue}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </>
  )
}
