import { FullBleedSection } from '../media/FullBleedSection'
import { Eyebrow } from '../ui/Eyebrow'
import type { MediaId } from '../../content/media'

const check = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

/**
 * A full-bleed band: a claim on the left and the four things that back it up on the right. Used
 * wherever a page has to show that the promise is structural rather than aspirational.
 */
export function FeatureBand({
  media,
  eyebrow,
  heading,
  lead,
  points,
}: {
  media: MediaId
  eyebrow: string
  heading: string
  lead: string
  points: readonly string[]
}) {
  return (
    <FullBleedSection media={media}>
      <div className="grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-4">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="text-[32px] font-bold leading-[1.15] tracking-[-0.025em] md:text-[40px]">{heading}</h2>
          <p className="text-[17px] leading-[1.7] text-[var(--color-text-secondary)] md:text-[18px]">{lead}</p>
        </div>
        <ul className="flex flex-col gap-4">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-accent-subtle)] text-[var(--color-text-accent)]">
                {check}
              </span>
              <p className="text-[15px] leading-[1.65] text-[var(--color-text-primary)]">{point}</p>
            </li>
          ))}
        </ul>
      </div>
    </FullBleedSection>
  )
}
