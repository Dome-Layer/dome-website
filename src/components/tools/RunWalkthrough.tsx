import { useRef, useState, type KeyboardEvent } from 'react'

/**
 * The recorded run (roadmap row 2, agreed with Francesco 2026-11-25): one real governed invoice run,
 * invoice-2026-11-25-521829ae on staging, one screen per stage. Each screen is the real tool's own
 * frontend showing that run's record (sources and scripts in `_design/agent-flow-run/`).
 *
 * From `lg` the stage list is a vertical tab list that switches the screen beside it; below `lg`
 * every stage carries its own screen, so a phone reads the run top to bottom with nothing to tap.
 */

type RunFrame = {
  /** File stem: `/screens/<slug>-<theme>-<width>.<avif|jpg>`. */
  slug: string
  /** Height at the full width (1576 px). */
  height: number
  /** n8n's form has one theme, so its screen ships in light only. */
  themed: boolean
}

const RUN_FRAMES: readonly RunFrame[] = [
  { slug: 'run-1-intake', height: 1546, themed: false },
  { slug: 'run-2-extraction', height: 712, themed: true },
  { slug: 'run-3-rules', height: 364, themed: true },
  { slug: 'run-4-council', height: 748, themed: true },
  { slug: 'run-5-approver', height: 428, themed: true },
]

const FULL = 1576
const WIDTHS = [800, FULL] as const

function srcSet(slug: string, theme: 'dark' | 'light', ext: 'avif' | 'jpg') {
  return WIDTHS.map((w) => `/screens/${slug}-${theme}-${w}.${ext} ${w}w`).join(', ')
}

function Shot({ frame, alt, sizes }: { frame: RunFrame; alt: string; sizes: string }) {
  // Each screen links to its full-size image, so a phone can open the tool's own text at a size it can read.
  const picture = (theme: 'dark' | 'light', className: string) => (
    <a key={theme} href={`/screens/${frame.slug}-${theme}-${FULL}.jpg`} className={className}>
      <picture>
        <source type="image/avif" srcSet={srcSet(frame.slug, theme, 'avif')} sizes={sizes} />
        <img
        src={`/screens/${frame.slug}-${theme}-800.jpg`}
        srcSet={srcSet(frame.slug, theme, 'jpg')}
        sizes={sizes}
        width={FULL}
        height={frame.height}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="block h-auto w-full"
        />
      </picture>
    </a>
  )
  return (
    <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-strong)] bg-[var(--color-bg-base)] shadow-[0_24px_64px_rgba(10,10,10,0.10)] dark:shadow-[0_24px_64px_rgba(0,0,0,0.5)]">
      {frame.themed ? [picture('light', 'block dark:hidden'), picture('dark', 'hidden dark:block')] : picture('light', 'block')}
    </div>
  )
}

type Stage = { tool: string; title: string; body: string }
type ShotText = { alt: string; caption: string }

export function RunWalkthrough({
  stages,
  shots,
  label,
  accent,
}: {
  stages: readonly Stage[]
  shots: readonly ShotText[]
  label: string
  accent: string
}) {
  const [active, setActive] = useState(0)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  const kicker = (index: number) => `${String(index + 1).padStart(2, '0')} · ${stages[index].tool}`

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const last = stages.length - 1
    const next =
      event.key === 'ArrowDown' || event.key === 'ArrowRight'
        ? (active + 1) % stages.length
        : event.key === 'ArrowUp' || event.key === 'ArrowLeft'
          ? (active + last) % stages.length
          : event.key === 'Home'
            ? 0
            : event.key === 'End'
              ? last
              : null
    if (next === null) return
    event.preventDefault()
    setActive(next)
    tabs.current[next]?.focus()
  }

  return (
    <>
      {/* Phones and tablets: every stage with its screen. */}
      <ol className="flex flex-col gap-12 lg:hidden">
        {stages.map((stage, index) => (
          <li key={stage.title} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[var(--color-text-tertiary)]">{kicker(index)}</p>
              <h3 className="text-[20px] font-semibold leading-[1.3]">{stage.title}</h3>
              <p className="text-[15px] leading-[1.65] text-[var(--color-text-secondary)]">{stage.body}</p>
            </div>
            <figure className="m-0">
              <Shot frame={RUN_FRAMES[index]} alt={shots[index].alt} sizes="100vw" />
              <figcaption className="mt-2.5 text-[13px] text-[var(--color-text-tertiary)]">{shots[index].caption}</figcaption>
            </figure>
          </li>
        ))}
      </ol>

      {/* Desktop: the stage list switches the screen beside it. */}
      <div className="hidden items-start gap-12 lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div role="tablist" aria-label={label} aria-orientation="vertical" onKeyDown={onKeyDown} className="flex flex-col gap-2">
          {stages.map((stage, index) => {
            const selected = index === active
            return (
              <button
                key={stage.title}
                ref={(node) => {
                  tabs.current[index] = node
                }}
                type="button"
                role="tab"
                id={`run-tab-${index}`}
                aria-selected={selected}
                aria-controls="run-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(index)}
                className={`relative flex flex-col gap-1.5 overflow-hidden rounded-[var(--radius-lg)] border py-4 pl-6 pr-5 text-left transition-colors ${
                  selected
                    ? 'border-[var(--color-border-strong)] bg-[var(--color-bg-base)]'
                    : 'border-transparent hover:bg-[var(--color-bg-muted)]'
                }`}
              >
                {selected && <span aria-hidden="true" className={`absolute inset-y-0 left-0 w-[3px] bg-current ${accent}`} />}
                <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[var(--color-text-tertiary)]">{kicker(index)}</span>
                <span className="text-[18px] font-semibold leading-[1.3]">{stage.title}</span>
                <span className="text-[15px] leading-[1.6] text-[var(--color-text-secondary)]">{stage.body}</span>
              </button>
            )
          })}
        </div>
        <figure id="run-panel" role="tabpanel" aria-labelledby={`run-tab-${active}`} tabIndex={0} className="sticky top-24 m-0">
          <Shot key={active} frame={RUN_FRAMES[active]} alt={shots[active].alt} sizes="(min-width: 1280px) 680px, 56vw" />
          <figcaption className="mt-3 text-[13px] text-[var(--color-text-tertiary)]">{shots[active].caption}</figcaption>
        </figure>
      </div>
    </>
  )
}
