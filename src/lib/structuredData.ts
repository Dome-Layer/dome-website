import { CONTENT_LANGUAGE, type Locale } from '../i18n/locales'
import { MESSAGES } from '../i18n/messages'
import { pageMeta } from '../i18n/pageMeta'
import { TOOL_ROUTE_IDS, localizedHref, type RouteId } from '../i18n/routes'
import { socialImagePath } from '../seo/socialImages'
import { COMPANY } from './company'

export const SITE_URL = 'https://domelayer.com'

const PERSON_ID = `${SITE_URL}/#person`
const WEBSITE_ID = `${SITE_URL}/#website`

/**
 * Francesco's own LinkedIn profile, linked from the footer, the About page and the person node. DOME
 * has no LinkedIn page: it is a project, not a company, and the page made for it was deactivated on
 * 2026-11-02.
 */
export const LINKEDIN_URL = 'https://www.linkedin.com/in/francesco-prodomo'

/** Francesco's own site, where the consulting work lives (the same address as `FRANCESCO_SITE_URL` in project.ts). */
const FRANCESCO_SITE_URL = 'https://francescoprodomo.com'

export const absoluteUrl = (path: string) => (path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`)

type Node = Record<string, unknown>

/**
 * Francesco Prodomo, who builds and runs DOME. DOME is a personal project, not a business
 * (DOME_DECISIONS 2026-10-31), so there is no Organization, ProfessionalService or Service node: the
 * legal identity the site has to publish (src/lib/company.ts) belongs to the person, and the
 * consulting work lives on francescoprodomo.com (site split, 2026-11-01). Deliberately no Product,
 * Offer, OfferCatalog or SoftwareApplication either: the tools are a project and never for sale.
 * `knowsAbout` names what the project covers, from the catalogue. The address stays at city level,
 * as on the site.
 */
function person(locale: Locale): Node {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: COMPANY.legalName,
    url: FRANCESCO_SITE_URL,
    sameAs: [FRANCESCO_SITE_URL, LINKEDIN_URL],
    vatID: COMPANY.vatId,
    email: COMPANY.email,
    address: { '@type': 'PostalAddress', addressLocality: COMPANY.locality, addressCountry: COMPANY.countryCode },
    knowsAbout: MESSAGES[locale].site.knowsAbout,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'general',
      url: absoluteUrl(localizedHref('contact', locale)),
      availableLanguage: ['English', 'Italian'],
    },
  }
}

/** DOME itself: the project's site, made and published by Francesco. */
function website(locale: Locale, locales: readonly Locale[]): Node {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: 'DOME',
    description: MESSAGES[locale].site.description,
    image: absoluteUrl(socialImagePath('home', locale)),
    inLanguage: locales.map((l) => CONTENT_LANGUAGE[l]),
    author: { '@id': PERSON_ID },
    publisher: { '@id': PERSON_ID },
  }
}

/** The JSON-LD graph for a public page: the person, the website, the page itself and, below home, a breadcrumb. */
export function pageStructuredData(id: RouteId, locale: Locale, locales: readonly Locale[]): Node {
  const t = pageMeta(id, locale)
  const url = absoluteUrl(localizedHref(id, locale))
  const page: Node = {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: t.title,
    description: t.description,
    inLanguage: CONTENT_LANGUAGE[locale],
    isPartOf: { '@id': WEBSITE_ID },
    author: { '@id': PERSON_ID },
  }
  const graph: Node[] = [person(locale), website(locale, locales), page]

  if (id !== 'home') {
    const breadcrumbId = `${url}#breadcrumb`
    page.breadcrumb = { '@id': breadcrumbId }
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': breadcrumbId,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: MESSAGES[locale].breadcrumbHome, item: absoluteUrl(localizedHref('home', locale)) },
        { '@type': 'ListItem', position: 2, name: t.name, item: url },
      ],
    })
  }
  if ((TOOL_ROUTE_IDS as readonly RouteId[]).includes(id)) {
    page.about = { '@type': 'Thing', name: t.name, description: t.description }
  }

  return { '@context': 'https://schema.org', '@graph': graph }
}
