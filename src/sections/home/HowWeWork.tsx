import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform, type MotionValue } from 'framer-motion'
import { Picture } from '../../components/media/Picture'
import { Eyebrow } from '../../components/ui/Eyebrow'
import { useMediaQuery } from '../../lib/useMediaQuery'
import { useReducedMotion } from '../../lib/useReducedMotion'
import { useMessages } from '../../i18n/useLocale'
import type { ItemText } from '../../i18n/messages/types'


/** Share of the scroll the phases take, leaving the last slice for the governance strip. */
const PHASE_SHARE = 0.82

/** The four phase letters spell DOME, so they stay in English in every locale (design round 1). */
const LETTERS = ['D', 'O', 'M', 'E']

function Phase({
  phase,
  index,
  label,
  progress,
  animated,
}: {
  phase: ItemText
  label: string
  index: number
  progress: MotionValue<number>
  animated: boolean
}) {
  // Each phase fades and lifts over its own slice of the scroll, one after another.
  const start = (index / LETTERS.length) * PHASE_SHARE
  const end = start + PHASE_SHARE / LETTERS.length / 2
  const opacity = useTransform(progress, [start, end], [0, 1])
  const y = useTransform(progress, [start, end], [16, 0])
  const dotScale = useTransform(progress, [start, start + 0.02], [0, 1])

  return (
    <motion.li className="relative pr-0 pt-0 md:pr-8 md:pt-10" style={animated ? { opacity, y } : undefined}>
      <motion.div
        aria-hidden="true"
        className="absolute -top-[5px] left-0 hidden h-[11px] w-[11px] rounded-full bg-[var(--color-accent)] md:block"
        style={animated ? { scale: dotScale } : undefined}
      />
      <div className="flex flex-col gap-2.5">
        <Eyebrow>
          {label} {String(index + 1).padStart(2, '0')}
        </Eyebrow>
        <p
          aria-hidden="true"
          className="text-[64px] font-bold leading-none tracking-[-0.03em] text-[var(--color-border-strong)]"
        >
          {LETTERS[index]}
        </p>
        <h3 className="text-2xl font-semibold leading-[1.25] tracking-[-0.015em]">{phase.title}</h3>
        <p className="text-[15px] leading-[1.65] text-[var(--color-text-secondary)]">{phase.body}</p>
      </div>
    </motion.li>
  )
}

/**
 * The method, uncovered as you scroll: the connecting line draws across, each phase pops its dot
 * and fades up in turn, and the governance strip lands last (design round 1, motion option A).
 *
 * The frame is pinned with `position: sticky` inside a tall runway, so the reveal is driven by
 * scroll position rather than a timer. Built on framer-motion, which the site already ships,
 * rather than bringing back the GSAP and Lenis stack the rebuild removed.
 *
 * Under `prefers-reduced-motion`, and below `lg` where pinning fights a small viewport, every
 * element renders in its final state in normal flow. Nothing is revealed only by motion, so the
 * section reads the same either way.
 */
export function HowWeWork() {
  const t = useMessages().pages.home.howWeWork
  const prefersReduced = useReducedMotion()
  /**
   * Only animate where the frame is actually pinned. The sticky layout is `lg:` and up, and below
   * that the runway maths is meaningless: the section is still taller than the viewport because its
   * own content is, so a height-based guard cannot tell the two apart and would leave every phase
   * stuck at opacity 0.
   */
  const pinned = useMediaQuery('(min-width: 1024px)')
  const runway = useRef<HTMLElement>(null)
  const animated = !prefersReduced && pinned

  /**
   * How far through the runway the pinned frame is, 0 to 1.
   *
   * Computed from the runway's own rect rather than with `useScroll`'s `target`/`offset`, which
   * measured as a constant 0 here and left every phase invisible. This is a couple of lines, it is
   * obvious what it does, and it degrades correctly: below `lg` the runway has no extra height, so
   * `total` is not positive and progress pins to 1, leaving the section fully revealed.
   */
  // Starts revealed. If anything stops the effect running, the section reads as finished rather
  // than as four invisible columns.
  const progress = useMotionValue(animated ? 0 : 1)
  useEffect(() => {
    const el = runway.current
    if (!el || !animated) return
    const update = () => {
      const rect = el.getBoundingClientRect()
      const total = rect.height - window.innerHeight
      progress.set(total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 1)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [animated, progress])

  useEffect(() => {
    if (!animated) progress.set(1)
  }, [animated, progress])

  const lineScale = useTransform(progress, [0, PHASE_SHARE], [0, 1])
  const stripOpacity = useTransform(progress, [PHASE_SHARE, PHASE_SHARE + 0.1], [0, 1])
  const stripY = useTransform(progress, [PHASE_SHARE, PHASE_SHARE + 0.1], [16, 0])

  const frame = (
    <div className="relative overflow-hidden">
      <Picture id="textureNetwork" className="absolute inset-0 h-full w-full object-cover" />
      <div aria-hidden="true" className="absolute inset-0 bg-[var(--color-scrim-strong)]" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,var(--color-media-fade)_0%,transparent_18%,transparent_82%,var(--color-media-fade)_100%)]"
      />
      <div className="relative mx-auto flex max-w-[1280px] flex-col justify-center gap-10 px-6 py-20 md:px-12 md:py-28 lg:h-screen lg:gap-14 lg:py-0">
        <div className="flex max-w-[720px] flex-col gap-4">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2 className="text-[32px] font-bold leading-[1.15] tracking-[-0.025em] md:text-[40px]">
            {t.heading}
          </h2>
          <p className="text-[17px] leading-[1.7] text-[var(--color-text-secondary)] md:text-[18px]">
            {t.lead}
          </p>
        </div>

        <div className="relative">
          <motion.div
            aria-hidden="true"
            className="absolute inset-x-0 -top-px hidden h-[3px] origin-left bg-[var(--color-accent)] md:block"
            style={animated ? { scaleX: lineScale } : undefined}
          />
          <ol className="grid gap-8 md:grid-cols-4 md:gap-0">
            {t.phases.map((phase, index) => (
              <Phase
                key={phase.title}
                phase={phase}
                index={index}
                label={t.phaseLabel}
                progress={progress}
                animated={animated}
              />
            ))}
          </ol>
        </div>

        <motion.div
          className="flex items-center gap-3 rounded-[var(--radius-md)] border border-[var(--color-border-accent)] bg-[var(--color-accent-subtle)] px-6 py-4"
          style={animated ? { opacity: stripOpacity, y: stripY } : undefined}
        >
          <div aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent)]" />
          <Eyebrow>{t.governance}</Eyebrow>
        </motion.div>
      </div>
    </div>
  )

  if (!animated) return <section>{frame}</section>

  // 320vh of runway: roughly one viewport per phase, plus the governance strip.
  return (
    <section ref={runway} className="relative lg:h-[320vh]">
      <div className="lg:sticky lg:top-0">{frame}</div>
    </section>
  )
}
