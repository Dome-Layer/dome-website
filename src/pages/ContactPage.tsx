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

const DETAILS = [
  { label: 'Email', value: 'hello@domelayer.com', href: 'mailto:hello@domelayer.com' },
  { label: 'Certified email (PEC)', value: 'francesco.prodomo@pec.it', href: 'mailto:francesco.prodomo@pec.it' },
  { label: 'Booking', value: 'cal.com/domelayer', href: CAL_PUBLIC_URL },
  { label: 'Location', value: 'Florence, Italy' },
]

export default function ContactPage() {
  const locale = useLocale()
  const t = useMessages().contactForm

  return (
    <PublicPage>
      <PageHero
        media="contactHero"
        eyebrow="Contact"
        heading="Tell us about your process."
        lead="Book a 30-minute call or send us a message. We reply within two working days."
        primary={{ label: 'Book a call', to: '#book' }}
        secondary={{ label: 'See our work', to: localizedHref('caseStudies', locale) }}
      />

      <section className="bg-[var(--color-bg-base)] py-16 md:py-20">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 md:px-12 lg:grid-cols-2 lg:gap-16">
          <div id="book" className="flex scroll-mt-24 flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-[26px] font-bold leading-[1.2] tracking-[-0.02em] md:text-[32px]">Book a call</h2>
              <p className="text-[15px] leading-[1.65] text-[var(--color-text-secondary)]">
                Pick a time that suits you. Choose a topic so we can prepare.
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
          <SectionHeading eyebrow="Other ways to reach us" heading="Company details" />
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
            Dome di Francesco Prodomo &middot; P.IVA 07242670482
          </p>
        </div>
      </section>
    </PublicPage>
  )
}
