import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { AiLabel, Picture } from '../media/Picture'
import { Eyebrow } from '../ui/Eyebrow'
import { ArrowRight } from '../ui/icons'
import { PHASES, PHASE_TOOLS, SCREEN_WIDTHS, type ToolId, type ToolScreen as Screen } from '../../content/toolPages'
import type { MediaId } from '../../content/media'
import { localizedHref } from '../../i18n/routes'
import { useLocale, useMessages } from '../../i18n/useLocale'

// The building blocks of a tool page (tool pages redesign, canvas signed off 2026-11-03). Every
// section spans the site's 1280 container, like the rest of the site.

const container = 'mx-auto max-w-[1280px] px-6 md:px-12'

function srcSet(slug: string, theme: 'dark' | 'light', ext: 'avif' | 'jpg') {
  return SCREEN_WIDTHS.map((w) => `/screens/${slug}-${theme}-${w}.${ext} ${w}w`).join(', ')
}

/**
 * The real tool in a browser frame. Both themes ship and the page's own theme picks one, through
 * `[data-theme]` like the rest of the site, so the screenshot always matches what the reader sees.
 */
export function ToolScreen({ screen, alt, caption, label }: { screen: Screen; alt: string; caption: string; label: string }) {
  const sizes = '(min-width: 1024px) 760px, 100vw'
  const picture = (theme: 'dark' | 'light', className: string) => (
    <picture className={className}>
      <source type="image/avif" srcSet={srcSet(screen.slug, theme, 'avif')} sizes={sizes} />
      <img
        src={`/screens/${screen.slug}-${theme}-1600.jpg`}
        srcSet={srcSet(screen.slug, theme, 'jpg')}
        sizes={sizes}
        width={screen.width}
        height={screen.height}
        alt={alt}
        className="block h-auto w-full"
      />
    </picture>
  )
  return (
    <figure className="m-0">
      <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-strong)] bg-[var(--color-bg-base)] shadow-[0_24px_64px_rgba(10,10,10,0.12)] dark:shadow-[0_24px_64px_rgba(0,0,0,0.55)]">
        <div aria-hidden="true" className="flex h-[34px] items-center gap-[7px] border-b border-[var(--color-border-default)] px-3.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-border-strong)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-border-strong)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-border-strong)]" />
          <span className="ml-3 truncate text-[12px] text-[var(--color-text-tertiary)]">{label}</span>
        </div>
        {picture('light', 'block dark:hidden')}
        {picture('dark', 'hidden dark:block')}
      </div>
      <figcaption className="mt-2.5 text-[12px] text-[var(--color-text-tertiary)]">{caption}</figcaption>
    </figure>
  )
}

/** "Phase 03 · Model" in the tool's accent; the governance layer has no number. */
export function PhaseLabel({ phase, name, accent }: { phase: number | null; name: string; accent: string }) {
  const label = useMessages().pages.home.method.phaseLabel
  return (
    <p className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${accent}`}>
      {phase === null ? name : `${label} ${String(phase + 1).padStart(2, '0')} · ${name}`}
    </p>
  )
}

/** The hero: the copy and its actions on the left, the tool on the right. */
export function ToolHero({
  name,
  labelledBy,
  phaseLabel,
  badge,
  tagline,
  lead,
  actions,
  note,
  screen,
}: {
  name: string
  labelledBy: string
  phaseLabel: ReactNode
  badge?: ReactNode
  tagline: string
  lead: string
  actions: ReactNode
  note?: string
  screen: ReactNode
}) {
  const locale = useLocale()
  const t = useMessages().pages.tools
  return (
    <section
      aria-labelledby={labelledBy}
      className="relative overflow-hidden pb-16 pt-[calc(6.5rem+var(--dome-banner-h,0px))] md:pb-24 md:pt-[calc(9rem+var(--dome-banner-h,0px))]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_78%_40%,rgba(0,112,224,0.10)_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse_50%_60%_at_78%_40%,rgba(0,112,224,0.22)_0%,transparent_70%)]"
      />
      <div className={`relative grid items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14 ${container}`}>
        <div className="flex flex-col gap-5">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-[13px] text-[var(--color-text-secondary)]">
              <li>
                <Link to={localizedHref('dome', locale)} className="hover:text-[var(--color-text-primary)]">
                  {t.back}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">{name}</li>
            </ol>
          </nav>
          <div className="flex flex-wrap items-center gap-3">
            {phaseLabel}
            {badge}
          </div>
          <h1 id={labelledBy} className="text-[40px] font-bold leading-[1.08] tracking-[-0.03em] md:text-[56px]">
            {name}
          </h1>
          <p className="text-[20px] font-semibold leading-[1.3] tracking-[-0.015em] md:text-[24px]">{tagline}</p>
          <p className="max-w-[540px] text-[17px] leading-[1.7] text-[var(--color-text-secondary)] md:text-[18px]">{lead}</p>
          <div className="mt-1 flex flex-wrap gap-3">{actions}</div>
          {note && <p className="text-[13px] leading-[1.6] text-[var(--color-text-secondary)]">{note}</p>}
        </div>
        <div className="lg:-mr-28">{screen}</div>
      </div>
    </section>
  )
}

/** A link styled as the primary button, for actions that leave the site (the tool hosts). */
export function ExternalButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-accent)] px-7 py-3.5 text-sm font-semibold text-[var(--color-text-on-accent)] transition-colors hover:bg-[var(--color-accent-hover)]"
    >
      {children}
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M7 17L17 7M9 7h8v8" />
      </svg>
    </a>
  )
}

/** The three "what it does" points. */
export function FeatureCards({ items }: { items: readonly { figure: string; title: string; body: string }[] }) {
  return (
    <ul className="grid gap-5 md:grid-cols-3">
      {items.map((item) => (
        <li
          key={item.title}
          className="flex flex-col gap-2.5 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-subtle)] p-6"
        >
          <p className="text-[28px] font-bold leading-none tracking-[-0.02em] text-[var(--color-text-accent)]">{item.figure}</p>
          <h3 className="text-[17px] font-semibold leading-[1.35]">{item.title}</h3>
          <p className="text-[15px] leading-[1.6] text-[var(--color-text-secondary)]">{item.body}</p>
        </li>
      ))}
    </ul>
  )
}

/** The steps, stacked on a line, each dot in the tool's accent. `kicker` sits above each title. */
export function StepsTimeline({
  steps,
  accent,
  kicker,
}: {
  steps: readonly { title: string; body: string }[]
  accent: string
  kicker: (index: number) => string
}) {
  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute bottom-2.5 left-[7px] top-2.5 w-[2px] bg-[var(--color-border-strong)]" />
      <ol className="relative flex flex-col gap-9 pl-9">
        {steps.map((step, index) => (
          <li key={step.title} className="relative flex flex-col gap-1.5">
            <span
              aria-hidden="true"
              className={`absolute -left-9 top-[3px] h-4 w-4 rounded-full bg-current shadow-[0_0_0_4px_var(--color-bg-subtle)] ${accent}`}
            />
            <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[var(--color-text-tertiary)]">{kicker(index)}</p>
            <h3 className="text-[20px] font-semibold leading-[1.3]">{step.title}</h3>
            <p className="max-w-[560px] text-[15px] leading-[1.65] text-[var(--color-text-secondary)]">{step.body}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

/** The workplace photo beside the steps, with its AI label. */
export function ToolPhoto({ id }: { id: MediaId }) {
  return (
    <figure className="relative m-0 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-default)]">
      <Picture id={id} sizes="(min-width: 1024px) 480px, 100vw" className="block h-[260px] w-full object-cover md:h-[460px]" />
      <AiLabel id={id} className="!bottom-3 !left-auto right-3" />
    </figure>
  )
}

/** The governance event a run writes, field by field, as stored. */
export function RecordCard({ rows }: { rows: readonly (readonly [string, string])[] }) {
  return (
    <dl className="m-0 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-strong)] bg-[var(--color-bg-base)]">
      {rows.map(([key, value]) => (
        <div key={key} className="grid grid-cols-[110px_minmax(0,1fr)] gap-3 border-b border-[var(--color-border-default)] px-5 py-3 last:border-b-0 md:grid-cols-[180px_minmax(0,1fr)]">
          <dt className="font-mono text-[13px] text-[var(--color-text-tertiary)]">{key}</dt>
          <dd className="m-0 break-words font-mono text-[13px] font-medium">{value}</dd>
        </div>
      ))}
    </dl>
  )
}

/**
 * The method strip: the four phases, the tools under each, this tool's phase picked out. The
 * governance layer runs through every phase, so on its page all four are picked out.
 */
export function MethodStrip({ current, heading, body }: { current: ToolId; heading: string; body: string }) {
  const locale = useLocale()
  const messages = useMessages()
  const t = messages.pages.tools
  const all = current === 'governanceDashboard'
  return (
    <section aria-labelledby="method-heading" className="pb-20 md:pb-24">
      <div className={container}>
        <div className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-default)] p-7 md:p-12">
          <Picture id="textureNetwork" className="absolute inset-0 h-full w-full object-cover" />
          <div aria-hidden="true" className="absolute inset-0 bg-[var(--color-scrim-strong)]" />
          <div className="relative flex flex-col gap-7">
            <div className="flex max-w-[720px] flex-col gap-3">
              <Eyebrow>{t.inMethod}</Eyebrow>
              <h2 id="method-heading" className="text-[28px] font-bold leading-[1.15] tracking-[-0.025em] md:text-[40px]">
                {heading}
              </h2>
              <p className="text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">{body}</p>
            </div>
            <ol className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              {PHASES.map((phase, index) => {
                const tools = PHASE_TOOLS[index]
                const lit = all || tools.includes(current)
                return (
                  <li
                    key={phase}
                    className={`flex flex-col gap-1.5 rounded-[var(--radius-lg)] border p-4 ${
                      lit
                        ? 'border-[var(--color-accent)] bg-[var(--color-accent-subtle)]'
                        : 'border-[var(--color-border-default)] bg-[var(--color-bg-base)]'
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`text-[40px] font-bold leading-none tracking-[-0.03em] ${
                        lit ? 'text-[var(--color-text-accent)]' : 'text-[var(--color-border-strong)]'
                      }`}
                    >
                      {phase[0]}
                    </span>
                    <span className="text-[15px] font-semibold">{phase}</span>
                    <ul className="flex flex-col">
                      {tools.map((id) => (
                        <li key={id} className="text-[13px]">
                          {id === current ? (
                            <span className="text-[var(--color-text-secondary)]">
                              {messages.meta[id].name}, {t.thisPage}
                            </span>
                          ) : (
                            <Link to={localizedHref(id, locale)} className="text-[var(--color-text-accent)] hover:underline">
                              {messages.meta[id].name}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

/** A section heading with the shared eyebrow, used by every tool page section. */
export function ToolSectionHeading({ id, eyebrow, heading, lead }: { id: string; eyebrow: string; heading: string; lead?: string }) {
  return (
    <div className="flex max-w-[720px] flex-col gap-4">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 id={id} className="text-[28px] font-bold leading-[1.15] tracking-[-0.025em] md:text-[40px]">
        {heading}
      </h2>
      {lead && <p className="text-[17px] leading-[1.7] text-[var(--color-text-secondary)] md:text-[18px]">{lead}</p>}
    </div>
  )
}

/** The "see the other tools" link, for closings and record sections. */
export function AllToolsLink() {
  const locale = useLocale()
  const t = useMessages().pages.tools
  return (
    <Link to={localizedHref('dome', locale)} className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-text-accent)] hover:underline">
      {t.allTools}
      <ArrowRight />
    </Link>
  )
}

export { container as TOOL_CONTAINER }
