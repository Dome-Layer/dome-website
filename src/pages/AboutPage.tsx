import { PublicPage } from '../layouts/PublicPage'
import { PageHero } from '../components/page/PageHero'
import { FullBleedSection } from '../components/media/FullBleedSection'
import { ClosingCta } from '../components/page/ClosingCta'
import { Picture } from '../components/media/Picture'
import { ForwardLink } from '../components/ui/Button'
import { Eyebrow } from '../components/ui/Eyebrow'
import { SectionHeading } from '../components/ui/SectionHeading'
import { localizedHref } from '../i18n/routes'
import { useLocale, useMessages } from '../i18n/useLocale'
import { routeMeta } from '../lib/seo'

export const meta = routeMeta('about')




export default function AboutPage() {
  const locale = useLocale()
  const messages = useMessages()
  const t = messages.pages.about

  return (
    <PublicPage>
      <PageHero
        media="aboutHero"
        eyebrow={t.hero.eyebrow}
        heading={t.hero.heading}
        lead={t.hero.lead}
        primary={{ label: t.hero.primary, to: localizedHref('contact', locale) }}
        secondary={{ label: t.hero.secondary, to: localizedHref('caseStudies', locale) }}
      />

      <section className="bg-[var(--color-bg-base)] py-20 md:py-24">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 md:px-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            eyebrow={t.who.eyebrow}
            heading={t.who.heading}
          />
          <div className="flex flex-col gap-4">
            {t.who.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-[17px] leading-[1.75] text-[var(--color-text-secondary)]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-[1280px] gap-6 px-6 md:px-12 sm:grid-cols-2 lg:grid-cols-4">
          {t.facts.map((fact) => (
            <div
              key={fact.figure}
              className="flex flex-col gap-2 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-subtle)] p-6"
            >
              <p className="text-[40px] font-bold leading-none tracking-[-0.03em] text-[var(--color-text-accent)]">
                {fact.figure}
              </p>
              <p className="text-[14px] leading-[1.5] text-[var(--color-text-secondary)]">{fact.label}</p>
            </div>
          ))}
        </div>
      </section>

      <FullBleedSection media="textureNetwork">
        <div className="flex flex-col gap-12 py-20 md:py-28">
          <SectionHeading
            eyebrow={t.setup.eyebrow}
            heading={t.setup.heading}
            lead={t.setup.lead}
          />
          <div className="grid gap-6 md:grid-cols-3">
            {t.setup.items.map((item) => (
              <div key={item.title} className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold leading-[1.3]">{item.title}</h3>
                <p className="text-[15px] leading-[1.65] text-[var(--color-text-secondary)]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </FullBleedSection>

      <section className="bg-[var(--color-bg-base)] py-20 md:py-24">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-6 md:px-12">
          <SectionHeading eyebrow={t.expect.eyebrow} heading={t.expect.heading} />
          <div className="grid gap-6 md:grid-cols-3">
            {t.expect.items.map((item) => (
              <div key={item.title} className="flex flex-col gap-3 border-t border-[var(--color-border-default)] pt-6">
                <h3 className="text-lg font-semibold leading-[1.3]">{item.title}</h3>
                <p className="text-[15px] leading-[1.65] text-[var(--color-text-secondary)]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--color-border-subtle)] bg-[var(--color-bg-subtle)] py-16 md:py-20">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-6 md:px-12 lg:grid-cols-[1fr_280px]">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t.partner.eyebrow}</Eyebrow>
            <h2 className="text-[28px] font-bold leading-[1.2] tracking-[-0.02em] md:text-[32px]">
              {t.partner.heading}
            </h2>
            <p className="text-[17px] leading-[1.7] text-[var(--color-text-secondary)]">
              {t.partner.body}
            </p>
          </div>
          <div>
            <img
              src="/media/partner-ionita-logo-light-bg.svg"
              alt={messages.media.ionitaLogo}
              width={300}
              height={150}
              loading="lazy"
              className="h-14 w-auto dark:hidden"
            />
            <img
              src="/media/partner-ionita-logo-dark-bg.svg"
              alt={messages.media.ionitaLogo}
              width={300}
              height={150}
              loading="lazy"
              className="hidden h-14 w-auto dark:block"
            />
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-bg-base)] py-20 md:py-24">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-10 px-6 md:px-12">
          <SectionHeading eyebrow={t.leadership.eyebrow} heading={t.leadership.heading} />
          <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center">
            <div className="w-[160px] shrink-0 overflow-hidden rounded-[var(--radius-lg)]">
              <Picture id="francescoProdomo" sizes="160px" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xl font-semibold">{t.leadership.name}</p>
              <p className="text-[15px] text-[var(--color-text-accent)]">{t.leadership.role}</p>
              <p className="max-w-[560px] text-[15px] leading-[1.65] text-[var(--color-text-secondary)]">
                {t.leadership.bio}
              </p>
              <a
                href="https://www.linkedin.com/in/francesco-prodomo"
                className="mt-1 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[var(--color-text-accent)] hover:underline"
              >
                {t.leadership.linkedin}
              </a>
            </div>
          </div>
        </div>
      </section>

      <FullBleedSection media="textureArchitecture">
        <div className="flex flex-col items-start gap-6 py-16 md:py-20">
          <SectionHeading
            eyebrow={t.where.eyebrow}
            heading={t.where.heading}
            lead={t.where.lead}
          />
          <ForwardLink to={localizedHref('caseStudies', locale)}>{t.where.cta}</ForwardLink>
        </div>
      </FullBleedSection>

      <ClosingCta text={t.closing} />
    </PublicPage>
  )
}
