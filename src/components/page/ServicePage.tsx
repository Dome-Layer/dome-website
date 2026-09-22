import { PublicPage } from '../../layouts/PublicPage'
import { PageHero } from './PageHero'
import { FeatureBand } from './FeatureBand'
import { NumberedSteps } from './NumberedSteps'
import { RelatedWork } from './RelatedWork'
import { ClosingCta } from './ClosingCta'
import { SectionHeading } from '../ui/SectionHeading'
import { caseStudiesFor, type Segment } from '../../content/caseStudies'
import type { MediaId } from '../../content/media'
import type { ServicePageText } from '../../i18n/messages/types'
import { localizedHref } from '../../i18n/routes'
import { useLocale, useMessages } from '../../i18n/useLocale'
import type { ReactNode } from 'react'

interface ServicePageProps {
  text: ServicePageText
  heroMedia: MediaId
  bandMedia: MediaId
  segment: Segment
  /** Where the hero's secondary action goes. */
  secondaryTo: string
  /** Optional media block between the sections, where the design calls for one. */
  split?: ReactNode
}

/**
 * Both service lines are the same page with different content, so they share one component. The
 * copy comes from the catalogue; only the imagery and the matched case studies differ.
 */
export function ServicePage({ text, heroMedia, bandMedia, segment, secondaryTo, split }: ServicePageProps) {
  const locale = useLocale()
  const breadcrumb = useMessages().pages.services.breadcrumb

  return (
    <PublicPage>
      <PageHero
        media={heroMedia}
        breadcrumbs={[{ label: breadcrumb }, { label: text.hero.eyebrow }]}
        eyebrow={text.hero.eyebrow}
        heading={text.hero.heading}
        lead={text.hero.lead}
        primary={{ label: text.hero.primary, to: localizedHref('contact', locale) }}
        secondary={{ label: text.hero.secondary, to: secondaryTo }}
      />

      <section className="bg-[var(--color-bg-base)] py-20 md:py-24">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-6 md:px-12">
          <SectionHeading eyebrow={text.intro.eyebrow} heading={text.intro.heading} />
          <div className="grid gap-6 md:grid-cols-3">
            {text.intro.items.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-subtle)] p-8"
              >
                <h3 className="text-xl font-semibold leading-[1.3] tracking-[-0.01em]">{item.title}</h3>
                <p className="text-[15px] leading-[1.65] text-[var(--color-text-secondary)]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {text.deliver && (
        <section className="bg-[var(--color-bg-base)] pb-20 md:pb-24">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-6 md:px-12">
            <SectionHeading eyebrow={text.deliver.eyebrow} heading={text.deliver.heading} />
            <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
              {text.deliver.items.map((item) => (
                <div key={item.title} className="flex flex-col gap-2 border-t border-[var(--color-border-default)] pt-6">
                  <h3 className="text-lg font-semibold leading-[1.3]">{item.title}</h3>
                  <p className="text-[15px] leading-[1.65] text-[var(--color-text-secondary)]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {split}

      <FeatureBand
        media={bandMedia}
        eyebrow={text.band.eyebrow}
        heading={text.band.heading}
        lead={text.band.lead ?? ''}
        points={text.band.points}
      />

      {!split && (
        <section className="bg-[var(--color-bg-base)] py-20 md:py-24">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-6 md:px-12">
            <SectionHeading eyebrow={text.steps.eyebrow} heading={text.steps.heading} />
            <NumberedSteps steps={text.steps.items} />
          </div>
        </section>
      )}

      <RelatedWork heading={text.related} studies={caseStudiesFor(segment, 3)} />
      <ClosingCta text={text.closing} />
    </PublicPage>
  )
}
