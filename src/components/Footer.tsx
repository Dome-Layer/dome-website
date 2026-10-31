import { DomeLogo } from './DomeLogo'
import { Container } from './Container'
import { localizedHref } from '../i18n/routes'
import { COMPANY } from '../lib/company'
import { LINKEDIN_URL } from '../lib/structuredData'
import { useLocale, useMessages } from '../i18n/useLocale'

/**
 * The site footer: brand, navigation and the legal line.
 *
 * The contact form used to live here, under every page. It moved to the contact page (plan phase
 * 1c) so it sits where someone went looking for it, beside the booking calendar and the company
 * details.
 *
 * The legal line identifies the business on every page, as Italian law asks of a business website
 * (D.Lgs. 70/2003 art. 7): name, VAT number, domicile, email and certified email (PEC). The domicile
 * stays at city level by decision (src/lib/company.ts). Name, VAT and city come from the catalogue,
 * so each language shows them as its contact page does.
 */
export function Footer() {
  const locale = useLocale()
  const messages = useMessages()
  const t = messages.footer
  const details = messages.pages.contact.details

  const links = [
    { href: localizedHref('aiProcessAutomation', locale), label: messages.nav.aiAutomation },
    { href: localizedHref('enterpriseUx', locale), label: messages.nav.enterpriseUx },
    { href: localizedHref('dome', locale), label: messages.nav.dome },
    { href: localizedHref('caseStudies', locale), label: messages.nav.caseStudies },
    { href: localizedHref('about', locale), label: messages.nav.about },
    { href: localizedHref('contact', locale), label: messages.nav.contact },
    { href: LINKEDIN_URL, label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-dome-void border-t border-dome-dark-edge py-16 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-2">
            <DomeLogo size="md" color="#FFFFFF" />
            <p className="mt-4 max-w-md text-body-sm text-dome-nickel">{t.tagline}</p>
          </div>

          <nav className="grid grid-cols-2 gap-3 text-body-sm text-dome-nickel" aria-label="Footer">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-dome-signal-blue">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-dome-dark-edge pt-8 text-caption text-dome-nickel/80">
          <p className="flex flex-wrap gap-x-2 gap-y-1" data-legal-line>
            <span>{details.legal}</span>
            <span aria-hidden="true">&middot;</span>
            <span>{details.locationValue}</span>
            <span aria-hidden="true">&middot;</span>
            <a href={`mailto:${COMPANY.email}`} className="transition-colors hover:text-dome-nickel">
              {COMPANY.email}
            </a>
            <span aria-hidden="true">&middot;</span>
            <span>
              {t.pec}{' '}
              <a href={`mailto:${COMPANY.pec}`} className="transition-colors hover:text-dome-nickel">
                {COMPANY.pec}
              </a>
            </span>
          </p>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <a href={localizedHref('privacy', locale)} className="transition-colors hover:text-dome-nickel">
                {t.privacy}
              </a>
              <span aria-hidden="true">&middot;</span>
              <a href={localizedHref('terms', locale)} className="transition-colors hover:text-dome-nickel">
                {t.terms}
              </a>
              <span aria-hidden="true">&middot;</span>
              <a href={localizedHref('cookies', locale)} className="transition-colors hover:text-dome-nickel">
                {t.cookies}
              </a>
            </div>
            <span>
              &copy; {new Date().getFullYear()} DOME. {t.rights}
            </span>
          </div>
        </div>
      </Container>
    </footer>
  )
}
