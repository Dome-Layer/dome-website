import { PublicPage } from '../layouts/PublicPage'
import { PageHero } from '../components/page/PageHero'
import { ContactForm } from '../components/page/ContactForm'
import { HireLine } from '../components/project/HireLine'
import { useMessages } from '../i18n/useLocale'
import { COMPANY } from '../lib/company'
import { GITHUB_URL } from '../lib/project'
import { routeMeta } from '../lib/seo'

export const meta = routeMeta('contact')

/**
 * The project's light contact route: feedback, demo access, questions about the tools. It speaks as
 * I. Booking a call is consulting, so it lives on francescoprodomo.com (site split 2026-11-01).
 */
export default function ContactPage() {
  const messages = useMessages()
  const t = messages.contactForm
  const p = messages.pages.contact
  const details = [
    { label: p.details.email, value: COMPANY.email, href: `mailto:${COMPANY.email}` },
    { label: p.details.pec, value: COMPANY.pec, href: `mailto:${COMPANY.pec}` },
    { label: p.details.location, value: p.details.locationValue },
    { label: p.details.code, value: 'GitHub', href: GITHUB_URL },
  ]

  return (
    <PublicPage>
      <PageHero media="contactHero" eyebrow={p.hero.eyebrow} heading={p.hero.heading} lead={p.hero.lead} />

      <section className="bg-[var(--color-bg-base)] py-16 md:py-20">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 md:px-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-16">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-[26px] font-bold leading-[1.2] tracking-[-0.02em] md:text-[32px]">{t.heading}</h2>
              <p className="text-[15px] leading-[1.65] text-[var(--color-text-secondary)]">{t.intro}</p>
            </div>
            <ContactForm />
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <h2 className="text-[20px] font-semibold leading-[1.3]">{p.details.heading}</h2>
              <dl className="flex flex-col gap-5">
                {details.map((detail) => (
                  <div key={detail.label} className="flex flex-col gap-1">
                    <dt className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[var(--color-text-tertiary)]">
                      {detail.label}
                    </dt>
                    <dd className="text-[15px] text-[var(--color-text-primary)]">
                      {detail.href ? (
                        <a href={detail.href} className="underline underline-offset-[3px] hover:text-[var(--color-text-accent)]">
                          {detail.value}
                        </a>
                      ) : (
                        detail.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="text-sm text-[var(--color-text-secondary)]">{p.details.legal}</p>
            </div>
            <div className="flex flex-col gap-2 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-subtle)] p-6">
              <h2 className="text-[17px] font-semibold leading-[1.3]">{p.hire.heading}</h2>
              <HireLine text={p.hire.text} />
            </div>
          </div>
        </div>
      </section>
    </PublicPage>
  )
}
