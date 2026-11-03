import { PublicPage } from '../layouts/PublicPage'
import { PageHero } from '../components/page/PageHero'
import { Picture } from '../components/media/Picture'
import { ProjectClosing } from '../components/project/ProjectClosing'
import { SectionHeading } from '../components/ui/SectionHeading'
import { FRANCESCO_SITE_URL, GITHUB_URL, RUN_ANCHOR, useTryHref } from '../lib/project'
import { LINKEDIN_URL } from '../lib/structuredData'
import { localizedHref } from '../i18n/routes'
import { useLocale, useMessages } from '../i18n/useLocale'
import { routeMeta } from '../lib/seo'

export const meta = routeMeta('about')

const link =
  'inline-flex min-h-11 items-center text-sm font-semibold text-[var(--color-text-accent)] underline underline-offset-[3px] hover:text-[var(--color-text-primary)]'

/** About the project: why it exists and who builds it. It speaks as I (DOME_DECISIONS 2026-11-02). */
export default function AboutPage() {
  const locale = useLocale()
  const messages = useMessages()
  const t = messages.pages.about
  const tryHref = useTryHref()

  return (
    <PublicPage>
      <PageHero media="aboutHero" eyebrow={t.hero.eyebrow} heading={t.hero.heading} lead={t.hero.lead} />

      <section className="bg-[var(--color-bg-base)] py-20 md:py-24">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 md:px-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeading eyebrow={t.why.eyebrow} heading={t.why.heading} />
          <div className="flex flex-col gap-4">
            {t.why.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-[17px] leading-[1.75] text-[var(--color-text-secondary)]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-[1280px] gap-6 px-6 sm:grid-cols-3 md:px-12">
          {t.facts.map((fact) => (
            <div
              key={fact.label}
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

      <section className="border-y border-[var(--color-border-subtle)] bg-[var(--color-bg-subtle)] py-20 md:py-24">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-10 px-6 md:px-12">
          <SectionHeading eyebrow={t.builder.eyebrow} heading={t.builder.heading} />
          <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center">
            <div className="w-[160px] shrink-0 overflow-hidden rounded-[var(--radius-lg)]">
              <Picture id="francescoProdomo" sizes="160px" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xl font-semibold">{t.builder.name}</p>
              <p className="max-w-[560px] text-[15px] leading-[1.65] text-[var(--color-text-secondary)]">
                {t.builder.bio}
              </p>
              <ul className="mt-1 flex flex-wrap gap-x-6">
                <li>
                  <a href={FRANCESCO_SITE_URL} className={link}>
                    {t.builder.workWith}
                  </a>
                </li>
                <li>
                  <a href={GITHUB_URL} className={link}>
                    {t.builder.github}
                  </a>
                </li>
                <li>
                  <a href={LINKEDIN_URL} className={link}>
                    {t.builder.linkedin}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ProjectClosing
        className="pt-20 md:pt-24"
        text={t.closing}
        primary={{ label: messages.common.tryTool, to: tryHref }}
        secondary={{ label: messages.common.watchRun, to: `${localizedHref('home', locale)}#${RUN_ANCHOR}` }}
      />
    </PublicPage>
  )
}
