import { PublicPage } from '../layouts/PublicPage'
import { PageHero } from '../components/page/PageHero'
import { CaseCard } from '../components/page/RelatedWork'
import { ClosingCta } from '../components/page/ClosingCta'
import { SectionHeading } from '../components/ui/SectionHeading'
import { CASE_STUDIES, type Segment } from '../content/caseStudies'
import { localizedHref } from '../i18n/routes'
import { useLocale, useMessages } from '../i18n/useLocale'
import { routeMeta } from '../lib/seo'

export const meta = routeMeta('caseStudies')


export default function CaseStudiesPage() {
  const locale = useLocale()
  const t = useMessages().pages.caseStudies
  const segments: Segment[] = ['automation', 'ux', 'dome']
  return (
    <PublicPage>
      <PageHero
        media="caseStudiesHero"
        eyebrow={t.hero.eyebrow}
        heading={t.hero.heading}
        lead={t.hero.lead}
        primary={{ label: t.hero.primary, to: localizedHref('contact', locale) }}
        secondary={{ label: t.hero.secondary, to: localizedHref('dome', locale) }}
      />

      {t.groups.map((group, i) => {
        const studies = CASE_STUDIES.filter((study) => study.segment === segments[i])
        if (studies.length === 0) return null
        return (
          <section key={group.eyebrow} className="bg-[var(--color-bg-base)] py-16 md:py-20">
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
            {t.note}
          </p>
        </div>
      </section>

      <ClosingCta text={t.closing} />
    </PublicPage>
  )
}
