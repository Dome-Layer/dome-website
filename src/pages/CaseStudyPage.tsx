import { useLocation } from 'react-router'
import { PublicPage } from '../layouts/PublicPage'
import { CaseCard } from '../components/page/RelatedWork'
import { ClosingCta } from '../components/page/ClosingCta'
import { AiLabel, Picture } from '../components/media/Picture'
import { ButtonLink, ForwardLink } from '../components/ui/Button'
import { Eyebrow } from '../components/ui/Eyebrow'
import { caseStudy, type CaseStudy } from '../content/caseStudies'
import { caseStudyIdFor, localizedHref, routeIdFromPath } from '../i18n/routes'
import { useLocale, useMessages } from '../i18n/useLocale'
import { pathRouteMeta } from '../lib/seo'

/** One module serves all eight case studies, so the study comes from the URL. */
export const meta = pathRouteMeta()

const TABLET_MOCKUP = '/DOME%20iPad%20Mockup.png'

function Panel({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[var(--color-text-tertiary)]">
        {title}
      </h2>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item} className="text-[15px] leading-[1.6] text-[var(--color-text-primary)]">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function Study({ study }: { study: CaseStudy }) {
  const locale = useLocale()
  const messages = useMessages()
  const t = messages.pages.caseStudy
  const related = study.related.map((id) => caseStudy(id)).filter((s): s is CaseStudy => s !== undefined)

  return (
    <>
      <section className="bg-[var(--color-bg-base)] pb-12 pt-16 md:pt-20">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-6 md:px-12">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-[13px] text-[var(--color-text-secondary)]">
              <li>
                <ForwardLink to={localizedHref('caseStudies', locale)}>{t.back}</ForwardLink>
              </li>
            </ol>
          </nav>
          <div className="flex max-w-[860px] flex-col gap-5">
            <Eyebrow>{study.descriptor[locale]}</Eyebrow>
            <h1 className="text-balance text-[32px] font-bold leading-[1.1] tracking-[-0.03em] md:text-[48px]">
              {study.title[locale]}
            </h1>
            <p className="text-[17px] leading-[1.7] text-[var(--color-text-secondary)] md:text-[19px]">
              {study.summary[locale]}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-bg-base)] pb-16">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <div className="relative flex items-center justify-center overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-default)] bg-[var(--color-bg-muted)]">
            {study.media === 'tabletMockup' ? (
              <img
                src={TABLET_MOCKUP}
                alt={messages.media.tabletMockup}
                width={760}
                height={570}
                className="my-10 h-auto w-[min(560px,80%)]"
              />
            ) : (
              <>
                <Picture id={study.media} priority sizes="(min-width: 1280px) 1232px, 100vw" className="w-full" />
                <AiLabel id={study.media} />
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-bg-base)] pb-16">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 md:px-12 lg:grid-cols-[1fr_320px] lg:gap-16">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <h2 className="text-[26px] font-bold leading-[1.2] tracking-[-0.02em] md:text-[32px]">{t.challenge}</h2>
              {study.challenge[locale].map((paragraph) => (
                <p key={paragraph} className="text-[17px] leading-[1.75] text-[var(--color-text-secondary)]">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="text-[26px] font-bold leading-[1.2] tracking-[-0.02em] md:text-[32px]">{t.whatWeDid}</h2>
              <ol className="flex flex-col">
                {study.steps[locale].map((step, index) => (
                  <li key={step.title} className="flex gap-5 border-t border-[var(--color-border-default)] py-6">
                    <span className="w-8 shrink-0 text-[13px] font-semibold text-[var(--color-text-tertiary)]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-lg font-semibold leading-[1.3]">{step.title}</h3>
                      <p className="text-[15px] leading-[1.65] text-[var(--color-text-secondary)]">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="flex flex-col gap-4 rounded-[var(--radius-lg)] border border-[var(--color-border-accent)] bg-[var(--color-accent-subtle)] p-8">
              <h2 className="text-[22px] font-bold leading-[1.2] tracking-[-0.02em]">{t.outcomes}</h2>
              <ul className="flex flex-col gap-3">
                {study.outcomes[locale].map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                    <p className="text-[15px] leading-[1.65] text-[var(--color-text-primary)]">{outcome}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="flex flex-col gap-8 lg:sticky lg:top-24 lg:self-start">
            <Panel title={t.client} items={[study.client[locale]]} />
            <Panel title={t.role} items={[study.role[locale]]} />
            <Panel title={t.capabilities} items={study.capabilities[locale]} />
            <ButtonLink to={localizedHref('contact', locale)}>{t.cta}</ButtonLink>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-[var(--color-bg-base)] pb-20 md:pb-24">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-6 md:px-12">
            <h2 className="text-[26px] font-bold leading-[1.2] tracking-[-0.02em] md:text-[32px]">{t.readNext}</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {related.map((item) => (
                <CaseCard key={item.id} study={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default function CaseStudyPage() {
  const t = useMessages().pages.caseStudy
  const { pathname } = useLocation()
  const routeId = routeIdFromPath(pathname)
  const studyId = routeId ? caseStudyIdFor(routeId) : undefined
  const study = studyId ? caseStudy(studyId) : undefined

  return (
    <PublicPage>
      {study ? (
        <Study study={study} />
      ) : (
        <section className="mx-auto max-w-[1280px] px-6 py-32 md:px-12">
          <h1 className="text-[32px] font-bold">{t.notFound}</h1>
        </section>
      )}
      <ClosingCta text={t.closing} />
    </PublicPage>
  )
}
