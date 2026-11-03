import { DomeLogo } from './DomeLogo'
import { Container } from './Container'
import { localizedHref } from '../i18n/routes'
import { COMPANY } from '../lib/company'
import { LINKEDIN_URL } from '../lib/structuredData'
import { FRANCESCO_SITE_URL, GITHUB_URL } from '../lib/project'
import { useLocale, useMessages } from '../i18n/useLocale'

/**
 * The site footer: brand, the project's pages, the links off the site, and the legal line. The
 * hire link stays quiet: "Work with Francesco" here and one line above the footer on the pages
 * that have it (DOME_DECISIONS 2026-11-02).
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

  const columns = [
    {
      heading: t.project,
      links: [
        { href: localizedHref('dome', locale), label: messages.nav.tools },
        { href: localizedHref('agentFlow', locale), label: messages.nav.agentFlow },
        { href: localizedHref('about', locale), label: messages.nav.about },
        { href: localizedHref('contact', locale), label: messages.nav.contact },
      ],
    },
    {
      heading: t.elsewhere,
      links: [
        { href: FRANCESCO_SITE_URL, label: t.workWith },
        { href: GITHUB_URL, label: t.github },
        { href: LINKEDIN_URL, label: t.linkedin },
      ],
    },
  ]

  return (
    <footer className="bg-dome-void border-t border-dome-dark-edge py-16 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-2">
            <DomeLogo size="md" color="#FFFFFF" />
            <p className="mt-4 max-w-md text-body-sm text-dome-nickel">{t.tagline}</p>
          </div>

          <nav className="grid grid-cols-2 gap-8 text-body-sm" aria-label={t.navLabel}>
            {columns.map((column) => (
              <div key={column.heading} className="flex flex-col gap-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-dome-nickel">{column.heading}</p>
                {column.links.map((link) => (
                  <a key={link.href} href={link.href} className="text-[#F5F5F5] transition-colors hover:text-dome-signal-blue">
                    {link.label}
                  </a>
                ))}
              </div>
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
