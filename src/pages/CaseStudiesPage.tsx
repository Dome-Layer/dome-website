import { PublicPage } from '../layouts/PublicPage'
import { PageHero } from '../components/page/PageHero'
import { CaseCard } from '../components/page/RelatedWork'
import { ClosingCta } from '../components/page/ClosingCta'
import { SectionHeading } from '../components/ui/SectionHeading'
import { CASE_STUDIES, type Segment } from '../content/caseStudies'
import { localizedHref } from '../i18n/routes'
import { useLocale } from '../i18n/useLocale'
import { SITE } from '../lib/siteRoutes'
import { routeMeta } from '../lib/seo'

export const meta = routeMeta('caseStudies')

const GROUPS: { segment: Segment; eyebrow: string; heading: string }[] = [
  { segment: 'ux', eyebrow: 'Enterprise UX and product', heading: 'Platforms people have to use every day' },
  { segment: 'automation', eyebrow: 'AI process automation', heading: 'Work that follows a policy' },
  { segment: 'dome', eyebrow: 'DOME capabilities', heading: 'The method running end to end' },
]

export default function CaseStudiesPage() {
  const locale = useLocale()
  return (
    <PublicPage>
      <PageHero
        media="caseStudiesHero"
        eyebrow="Case studies"
        heading="What we built, and what changed."
        lead="Anonymised accounts of the work: the problem as the client described it, what we did, and the outcomes the engagement actually produced."
        primary={{ label: 'Talk about your project', to: SITE.contact }}
        secondary={{ label: 'See what we build', to: localizedHref('dome', locale) }}
      />

      {GROUPS.map((group) => {
        const studies = CASE_STUDIES.filter((study) => study.segment === group.segment)
        if (studies.length === 0) return null
        return (
          <section key={group.segment} className="bg-[var(--color-bg-base)] py-16 md:py-20">
            <div className="mx-auto flex max-w-[1280px] flex-col gap-10 px-6 md:px-12">
              <SectionHeading eyebrow={group.eyebrow} heading={group.heading} />
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {studies.map((study) => (
                  <CaseCard key={study.id} study={study} />
                ))}
              </div>
            </div>
          </section>
        )
      })}

      <section className="bg-[var(--color-bg-base)] pb-16">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <p className="text-sm text-[var(--color-text-secondary)]">
            Client details are anonymised throughout: we describe the sector and the function, never
            the organisation. Only outcomes the engagement actually produced are claimed.
          </p>
        </div>
      </section>

      <ClosingCta
        heading="Recognise one of these problems?"
        body="Tell us which one, and we will tell you how we would approach it."
        primaryLabel="Book an introductory call"
      />
    </PublicPage>
  )
}
