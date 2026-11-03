import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import { motion, useMotionValue, useTransform, type MotionValue, type Variants } from 'framer-motion'
import { Picture } from '../../components/media/Picture'
import { Eyebrow } from '../../components/ui/Eyebrow'
import { ArrowRight } from '../../components/ui/icons'
import { useMediaQuery } from '../../lib/useMediaQuery'
import { useReducedMotion } from '../../lib/useReducedMotion'
import { useToolHref } from '../../lib/tools'
import { localizedHref, type RouteId } from '../../i18n/routes'
import { useLocale, useMessages } from '../../i18n/useLocale'
import type { ItemText } from '../../i18n/messages/types'


/** Share of the scroll the phases take, leaving the last slice for the governance strip. */
const PHASE_SHARE = 0.82

/** The four phase letters spell DOME, so they stay in English in every locale (design round 1). */
const LETTERS = ['D', 'O', 'M', 'E']

/** The tools under each phase, linked to their pages. Tool names stay English in every locale. */
const PHASE_TOOLS: readonly (readonly RouteId[])[] = [
  ['processAnalyzer'],
  ['llmCouncil'],
  ['documentIntelligence', 'dataIntelligence'],
  ['agentFlow'],
]

/**
 * On phones each phase reveals as it reaches about 60% of the screen: the dot pops, the copy fades
 * up (project site canvas round 2, "Method motion on phones"). No pinning there.
 */
const PHONE_VIEWPORT = { once: true, margin: '0px 0px -40% 0px' } as const
const phaseReveal: Variants = { hidden: { opacity: 0, y: 16 }, shown: { opacity: 1, y: 0, transition: { duration: 0.5 } } }
const dotReveal: Variants = { hidden: { scale: 0 }, shown: { scale: 1, transition: { duration: 0.25 } } }

type Motion = 'none' | 'pinned' | 'phone'

function Phase({
  phase,
  index,
  label,
  progress,
  motionMode,
}: {
  phase: ItemText
  label: string
  index: number
  progress: MotionValue<number>
  motionMode: Motion
}) {
  const locale = useLocale()
  const meta = useMessages().meta
  // Pinned (lg and up): each phase fades and lifts over its own slice of the scroll, in turn.
  const start = (index / LETTERS.length) * PHASE_SHARE
  const end = start + PHASE_SHARE / LETTERS.length / 2
  const opacity = useTransform(progress, [start, end], [0, 1])
  const y = useTransform(progress, [start, end], [16, 0])
  const dotScale = useTransform(progress, [start, start + 0.02], [0, 1])

  const phone = motionMode === 'phone'
  return (
    <motion.li
      className="relative md:pr-8 md:pt-10"
      style={motionMode === 'pinned' ? { opacity, y } : undefined}
      {...(phone ? { initial: 'hidden', whileInView: 'shown', viewport: PHONE_VIEWPORT } : {})}
    >
      <motion.div
        aria-hidden="true"
        className="absolute -left-8 top-[3px] h-[11px] w-[11px] rounded-full bg-[var(--color-accent)] md:-top-[5px] md:left-0"
        style={motionMode === 'pinned' ? { scale: dotScale } : undefined}
        variants={phone ? dotReveal : undefined}
      />
      <motion.div className="flex flex-col gap-2.5" variants={phone ? phaseReveal : undefined}>
        <Eyebrow>
          {label} {String(index + 1).padStart(2, '0')}
        </Eyebrow>
        <div className="flex items-baseline gap-3.5 md:flex-col md:items-start md:gap-2.5">
          <p
            aria-hidden="true"
            className="text-[48px] font-bold leading-none tracking-[-0.03em] text-[var(--color-border-strong)] md:text-[64px]"
          >
            {LETTERS[index]}
          </p>
          <h3 className="text-[22px] font-semibold leading-[1.25] tracking-[-0.015em] md:text-2xl">{phase.title}</h3>
        </div>
        <p className="text-[15px] leading-[1.65] text-[var(--color-text-secondary)]">{phase.body}</p>
        <ul className="mt-1 flex flex-col">
          {PHASE_TOOLS[index].map((id) => (
            <li key={id}>
              <Link
                to={localizedHref(id, locale)}
                className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-[var(--color-text-accent)] hover:underline md:min-h-8"
              >
                {meta[id].name}
                <ArrowRight size={14} />
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.li>
  )
}

/**
 * The DOME method: four phases, the tools under each, and the governance strip.
 *
 * From `lg` it is uncovered as you scroll: the frame is pinned with `position: sticky` inside a tall
 * runway, the connecting line draws across, each phase pops its dot and fades up in turn, and the
 * governance strip lands last (design round 1, motion option A). Built on framer-motion, which the
 * site already ships, rather than bringing back the GSAP and Lenis stack the rebuild removed.
 *
 * Phones get a vertical version without pinning: the line draws down as you scroll and each phase
 * reveals as it reaches about 60% of the screen (project site canvas round 2). Tablets, between
 * the two, show the four columns in their final state.
 *
 * Under `prefers-reduced-motion` every element renders in its final state in normal flow. Nothing
 * is revealed only by motion, so the section reads the same either way.
 */
export function Method() {
  const t = useMessages().pages.home.method
  const dashboardHref = useToolHref('governance.domelayer.com')
  const prefersReduced = useReducedMotion()
  /**
   * Only pin where the frame is actually pinned. The sticky layout is `lg:` and up, and below that
   * the runway maths is meaningless: the section is still taller than the viewport because its own
   * content is, so a height-based guard cannot tell the two apart and would leave every phase stuck
   * at opacity 0. Both queries are false in the prerender, which is the safe, revealed state.
   */
  const pinned = useMediaQuery('(min-width: 1024px)')
  const narrow = useMediaQuery('(max-width: 767px)')
  const motionMode: Motion = prefersReduced ? 'none' : pinned ? 'pinned' : narrow ? 'phone' : 'none'
  const runway = useRef<HTMLElement>(null)
  const list = useRef<HTMLOListElement>(null)

  /**
   * Pinned: how far through the runway the frame is, 0 to 1. Phone: how much of the list has passed
   * the 60% line of the screen, which draws the vertical line down.
   *
   * Computed from the element's own rect rather than with `useScroll`'s `target`/`offset`, which
   * measured as a constant 0 here and left every phase invisible. It starts revealed: if anything
   * stops the effect running, the section reads as finished rather than as invisible columns.
   */
  const progress = useMotionValue(motionMode === 'none' ? 1 : 0)
  useEffect(() => {
    const el = motionMode === 'pinned' ? runway.current : motionMode === 'phone' ? list.current : null
    if (!el) {
      progress.set(1)
      return
    }
    const update = () => {
      const rect = el.getBoundingClientRect()
      if (motionMode === 'pinned') {
        const total = rect.height - window.innerHeight
        progress.set(total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 1)
      } else {
        const drawn = window.innerHeight * 0.6 - rect.top
        progress.set(rect.height > 0 ? Math.min(1, Math.max(0, drawn / rect.height)) : 1)
      }
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [motionMode, progress])

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
          {/* Across from `md`, down the left on phones. */}
          <motion.div
            aria-hidden="true"
            className="absolute inset-x-0 -top-px hidden h-[3px] origin-left bg-[var(--color-accent)] md:block"
            style={motionMode === 'pinned' ? { scaleX: lineScale } : undefined}
          />
          <motion.div
            aria-hidden="true"
            className="absolute bottom-2 left-1 top-2 w-[3px] origin-top bg-[var(--color-accent)] md:hidden"
            style={motionMode === 'phone' ? { scaleY: progress } : undefined}
          />
          <ol ref={list} className="flex flex-col gap-10 pl-8 md:grid md:grid-cols-4 md:gap-0 md:pl-0">
            {t.phases.map((phase, index) => (
              <Phase
                // Keyed on the mode as well: the queries resolve after hydration, and a phase must
                // remount to take the phone's hidden start state.
                key={`${phase.title}-${motionMode}`}
                phase={phase}
                index={index}
                label={t.phaseLabel}
                progress={progress}
                motionMode={motionMode}
              />
            ))}
          </ol>
        </div>

        <motion.div
          key={motionMode}
          className="flex flex-col gap-3 rounded-[var(--radius-md)] border border-[var(--color-border-accent)] bg-[var(--color-accent-subtle)] px-6 py-4 md:flex-row md:items-center md:justify-between"
          style={motionMode === 'pinned' ? { opacity: stripOpacity, y: stripY } : undefined}
          {...(motionMode === 'phone'
            ? { initial: 'hidden', whileInView: 'shown', viewport: PHONE_VIEWPORT, variants: phaseReveal }
            : {})}
        >
          <div className="flex items-center gap-3">
            <div aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent)]" />
            <Eyebrow>{t.governance}</Eyebrow>
          </div>
          <a
            href={dashboardHref}
            className="inline-flex min-h-11 items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-[var(--color-text-accent)] hover:underline"
          >
            {t.openDashboard}
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </div>
  )

  if (motionMode !== 'pinned') return <section aria-label={t.eyebrow}>{frame}</section>

  // 320vh of runway: roughly one viewport per phase, plus the governance strip.
  return (
    <section ref={runway} aria-label={t.eyebrow} className="relative lg:h-[320vh]">
      <div className="lg:sticky lg:top-0">{frame}</div>
    </section>
  )
}
