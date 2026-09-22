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
        {/*
          Two scrims, same reasoning as the home hero. On phones the copy spans the full width, so a
          gradient that reaches transparent would leave the end of every line on bare media; the
          mobile one therefore covers the width and only softens at the very edge. From `md` up the
          copy sits in the left third, so the image can still show through on the right.
        */}
        <div
          aria-hidden="true"
          className="absolute inset-0 md:hidden bg-[linear-gradient(90deg,var(--color-scrim-strong)_0%,var(--color-scrim-strong)_78%,var(--color-scrim)_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden md:block bg-[linear-gradient(90deg,var(--color-scrim-strong)_0%,var(--color-scrim)_52%,transparent_85%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,transparent_70%,var(--color-media-fade)_100%)]"
        />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 py-20 md:px-12 md:py-32">
        <div className="flex max-w-[20rem] flex-col gap-5 sm:max-w-[30rem] md:max-w-[640px]">
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
          <h1 className="text-balance text-[32px] font-bold leading-[1.15] tracking-[-0.02em] text-[var(--color-text-primary)] md:text-[52px] md:leading-[1.08] md:tracking-[-0.03em]">
            {heading}
          </h1>
          <p className="max-w-[560px] text-[15px] leading-[1.6] text-[var(--color-text-primary)] sm:text-[16px] md:text-[18px] md:leading-[1.7] md:text-[var(--color-text-secondary)]">
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
