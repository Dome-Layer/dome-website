import { useState } from 'react'
import { CAL_EVENTS, CAL_PUBLIC_URL, calUrl, type CalEvent } from '../../lib/cal'

const TOPICS = [
  'Enterprise UX and product',
  'AI process automation',
  'DOME capabilities',
  'Something else',
] as const

/**
 * The booking calendar, behind one click.
 *
 * Nothing from Cal.com loads until the visitor asks for it, so no third-party frame, cookie or
 * request exists for someone who only reads the page. The note under the button says so plainly
 * before they choose, which is the point of the two-click pattern.
 */
export function CalEmbed() {
  const [topic, setTopic] = useState<string>(TOPICS[0])
  const [loaded, setLoaded] = useState<CalEvent | null>(null)

  return (
    <div className="flex flex-col gap-5">
      <fieldset className="flex flex-col gap-3">
        <legend className="mb-3 text-[13px] font-medium text-[var(--color-text-secondary)]">
          What would you like to talk about?
        </legend>
        <div className="flex flex-wrap gap-2">
          {TOPICS.map((option) => (
            <button
              key={option}
              type="button"
              aria-pressed={topic === option}
              onClick={() => setTopic(option)}
              className={`rounded-full border px-3 py-1.5 text-[13px] transition-colors ${
                topic === option
                  ? 'border-[var(--color-border-accent)] bg-[var(--color-accent-subtle)] text-[var(--color-text-accent)]'
                  : 'border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-strong)]'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </fieldset>

      {loaded ? (
        <iframe
          key={`${loaded}-${topic}`}
          src={calUrl(loaded, topic)}
          title={`Book a ${CAL_EVENTS[loaded].minutes} minute call`}
          className="h-[620px] w-full rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-base)]"
          loading="lazy"
        />
      ) : (
        <div className="flex flex-col items-start gap-3 rounded-[var(--radius-lg)] border border-dashed border-[var(--color-border-default)] bg-[var(--color-bg-subtle)] p-8">
          <p className="text-[15px] text-[var(--color-text-secondary)]">
            The calendar has not loaded yet. It opens here when you choose a length.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setLoaded('standard')}
              className="inline-flex items-center rounded-[var(--radius-md)] bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-[var(--color-text-on-accent)] hover:bg-[var(--color-accent-hover)]"
            >
              Show available times (30 min)
            </button>
            <button
              type="button"
              onClick={() => setLoaded('short')}
              className="inline-flex items-center rounded-[var(--radius-md)] border border-[var(--color-border-strong)] px-6 py-3 text-sm font-semibold text-[var(--color-text-primary)] hover:bg-[var(--color-bg-muted)]"
            >
              Just 15 minutes
            </button>
          </div>
        </div>
      )}

      <p className="text-[13px] leading-[1.6] text-[var(--color-text-tertiary)]">
        The calendar is provided by Cal.com and loads only when you click.{' '}
        <a href={CAL_PUBLIC_URL} className="underline hover:text-[var(--color-text-secondary)]">
          Cal.com
        </a>{' '}
        privacy policy then applies. Nothing is sent to them before that.
      </p>
    </div>
  )
}
