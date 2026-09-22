import { AiLabel, Picture } from '../media/Picture'
import { ForwardLink } from '../ui/Button'
import { Eyebrow } from '../ui/Eyebrow'
import type { CaseStudy } from '../../content/caseStudies'
import { SITE } from '../../lib/siteRoutes'

const CARD_SIZES = '(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw'

/**
 * The tablet mockup is the existing product shot in `public/`, not a manifest asset: the real tool
 * screenshots in both themes are still to be captured, and they join the manifest when they land.
 */
const TABLET_MOCKUP = '/DOME%20iPad%20Mockup.png'

export function CaseCard({ study }: { study: CaseStudy }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-base)]">
      <div className="relative flex h-[220px] items-center justify-center overflow-hidden bg-[var(--color-bg-muted)]">
        {study.media === 'tabletMockup' ? (
          <img
            src={TABLET_MOCKUP}
            alt="A DOME tool shown on a tablet"
            width={760}
            height={570}
            loading="lazy"
            className="h-[190px] w-auto"
          />
        ) : (
          <>
            <Picture id={study.media} sizes={CARD_SIZES} className="h-full w-full object-cover" />
            <AiLabel id={study.media} />
          </>
        )}
      </div>
      <div className="flex flex-col gap-3 p-7">
        <p className="text-xs font-semibold text-[var(--color-text-accent)]">{study.descriptor}</p>
        <h3 className="text-xl font-semibold leading-[1.3] tracking-[-0.01em]">{study.title}</h3>
        <p className="text-sm leading-[1.6] text-[var(--color-text-secondary)]">{study.summary}</p>
      </div>
    </article>
  )
}

/** A row of matched case studies, with the standing note that clients are anonymised. */
export function RelatedWork({
  eyebrow = 'Related work',
  heading,
  studies,
}: {
  eyebrow?: string
  heading: string
  studies: CaseStudy[]
}) {
  return (
    <section className="bg-[var(--color-bg-base)] py-20 md:py-24">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-6 md:px-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="flex max-w-[720px] flex-col gap-4">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="text-[32px] font-bold leading-[1.15] tracking-[-0.025em] md:text-[40px]">{heading}</h2>
            <p className="text-sm text-[var(--color-text-secondary)]">Client details are anonymised.</p>
          </div>
          <ForwardLink to={SITE.caseStudies}>View all case studies</ForwardLink>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {studies.map((study) => (
            <CaseCard key={study.id} study={study} />
          ))}
        </div>
      </div>
    </section>
  )
}
