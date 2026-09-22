import { PublicPage } from '../layouts/PublicPage'
import { PageHero } from '../components/page/PageHero'
import { CalEmbed } from '../components/page/CalEmbed'
import { ContactForm } from '../components/page/ContactForm'
import { SectionHeading } from '../components/ui/SectionHeading'
import { useMessages } from '../i18n/useLocale'
import { CAL_PUBLIC_URL } from '../lib/cal'
import { localizedHref } from '../i18n/routes'
import { useLocale } from '../i18n/useLocale'
import { routeMeta } from '../lib/seo'

export const meta = routeMeta('contact')


export default function ContactPage() {
  const locale = useLocale()
  const messages = useMessages()
  const t = messages.contactForm
  const p = messages.pages.contact
  const DETAILS = [
    { label: p.details.email, value: 'hello@domelayer.com', href: 'mailto:hello@domelayer.com' },
    { label: p.details.pec, value: 'francesco.prodomo@pec.it', href: 'mailto:francesco.prodomo@pec.it' },
    { label: p.details.booking, value: 'cal.com/domelayer', href: CAL_PUBLIC_URL },
    { label: p.details.location, value: p.details.locationValue },
  ]

  return (
    <PublicPage>
      <PageHero
        media="contactHero"
        eyebrow={p.hero.eyebrow}
        heading={p.hero.heading}
        lead={p.hero.lead}
        primary={{ label: p.hero.primary, to: '#book' }}
        secondary={{ label: p.hero.secondary, to: localizedHref('caseStudies', locale) }}
      />

      <section className="bg-[var(--color-bg-base)] py-16 md:py-20">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 md:px-12 lg:grid-cols-2 lg:gap-16">
          <div id="book" className="flex scroll-mt-24 flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-[26px] font-bold leading-[1.2] tracking-[-0.02em] md:text-[32px]">{p.book.heading}</h2>
              <p className="text-[15px] leading-[1.65] text-[var(--color-text-secondary)]">
                {p.book.lead}
              </p>
            </div>
            <CalEmbed />
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-[26px] font-bold leading-[1.2] tracking-[-0.02em] md:text-[32px]">{t.heading}</h2>
              <p className="text-[15px] leading-[1.65] text-[var(--color-text-secondary)]">{t.intro}</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-bg-subtle)] border-t border-[var(--color-border-subtle)] py-16 md:py-20">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-10 px-6 md:px-12">
          <SectionHeading eyebrow={p.details.eyebrow} heading={p.details.heading} />
          <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {DETAILS.map((detail) => (
              <div key={detail.label} className="flex flex-col gap-2">
                <dt className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[var(--color-text-tertiary)]">
                  {detail.label}
                </dt>
                <dd className="text-[15px] text-[var(--color-text-primary)]">
                  {detail.href ? (
                    <a href={detail.href} className="hover:text-[var(--color-text-accent)]">
                      {detail.value}
                    </a>
                  ) : (
                    detail.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
          <p className="text-sm text-[var(--color-text-secondary)]">
            {p.details.legal}
          </p>
        </div>
      </section>
    </PublicPage>
  )
}
