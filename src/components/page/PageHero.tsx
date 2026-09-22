import { Link } from 'react-router'
import { AiLabel, Picture } from '../media/Picture'
import { ButtonLink } from '../ui/Button'
import { Eyebrow } from '../ui/Eyebrow'
import type { MediaId } from '../../content/media'

interface Crumb {
  label: string
  to?: string
}

interface PageHeroProps {
  media: MediaId
  breadcrumbs?: Crumb[]
  eyebrow: string
  heading: string
  lead: string
  primary: { label: string; to: string }
  secondary: { label: string; to: string }
}

/**
 * The hero every page below the home page opens with: a full-bleed image behind the copy, held
 * legible by the same theme-keyed scrims the home hero uses, and fading into the page background
 * at the bottom edge.
 */
export function PageHero({ media, breadcrumbs, eyebrow, heading, lead, primary, secondary }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Picture id={media} priority className="h-full w-full object-cover" />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-scrim-strong)_0%,var(--color-scrim)_52%,transparent_85%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,transparent_70%,var(--color-media-fade)_100%)]"
        />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 py-24 md:px-12 md:py-32">
        <div className="flex max-w-[640px] flex-col gap-5">
          {breadcrumbs && (
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-[13px] text-[var(--color-text-secondary)]">
                {breadcrumbs.map((crumb, i) => (
                  <li key={crumb.label} className="flex items-center gap-2">
                    {i > 0 && <span aria-hidden="true">/</span>}
                    {crumb.to ? (
                      <Link to={crumb.to} className="hover:text-[var(--color-text-primary)]">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span aria-current="page">{crumb.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="text-balance text-[36px] font-bold leading-[1.08] tracking-[-0.03em] text-[var(--color-text-primary)] md:text-[52px]">
            {heading}
          </h1>
          <p className="max-w-[560px] text-[17px] leading-[1.7] text-[var(--color-text-secondary)] md:text-[18px]">
            {lead}
          </p>
          <div className="mt-2 flex flex-wrap gap-3">
            <ButtonLink to={primary.to}>{primary.label}</ButtonLink>
            <ButtonLink to={secondary.to} variant="secondary">
              {secondary.label}
            </ButtonLink>
          </div>
        </div>
      </div>

      <AiLabel id={media} className="!bottom-4 !left-auto right-4" />
    </section>
  )
}
