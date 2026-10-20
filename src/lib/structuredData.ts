import { CONTENT_LANGUAGE, type Locale } from '../i18n/locales'
import { MESSAGES } from '../i18n/messages'
import { pageMeta } from '../i18n/pageMeta'
import { CASE_STUDY_ROUTE_IDS, PUBLIC_ROUTES, TOOL_ROUTE_IDS, localizedHref, type RouteId } from '../i18n/routes'
import { socialImagePath } from '../seo/socialImages'

export const SITE_URL = 'https://domelayer.com'

const ORGANIZATION_ID = `${SITE_URL}/#organization`
const WEBSITE_ID = `${SITE_URL}/#website`

/** DOME's company page on LinkedIn, also linked from the footer. */
export const LINKEDIN_URL = 'https://www.linkedin.com/company/domelayer/'

export const absoluteUrl = (path: string) => (path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`)

type Node = Record<string, unknown>

/** The consulting services, each with its own page. They are described, not offered for sale online. */
const SERVICE_ROUTE_IDS = ['aiProcessAutomation', 'enterpriseUx'] as const satisfies readonly RouteId[]

/**
 * DOME the company. Deliberately no Product, Offer, OfferCatalog or SoftwareApplication: the tools
 * are capability proof and never for sale. The consulting services are named in `knowsAbout` (from the
 * catalogue, one entry per service including process mapping, business analysis and data visualisation) and
 * described as `Service` nodes on their own pages, which says what DOME does without an offer.
 * The postal address is added once the legal notice address is settled.
 */
function organization(locale: Locale): Node {
  return {
    '@type': 'ProfessionalService',
    '@id': ORGANIZATION_ID,
    name: 'DOME',
    legalName: 'Dome di Francesco Prodomo',
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/logo-512.png`,
    image: absoluteUrl(socialImagePath('home', locale)),
    sameAs: [LINKEDIN_URL],
    description: MESSAGES[locale].site.description,
    vatID: 'IT07242670482',
    areaServed: { '@type': 'Place', name: 'European Union' },
    knowsLanguage: ['en', 'it'],
    knowsAbout: MESSAGES[locale].site.knowsAbout,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      url: absoluteUrl(localizedHref('contact', locale)),
      availableLanguage: ['English', 'Italian'],
    },
    founder: {
      '@type': 'Person',
      name: 'Francesco Prodomo',
      url: 'https://francescoprodomo.com',
      sameAs: ['https://francescoprodomo.com', 'https://www.linkedin.com/in/francesco-prodomo'],
    },
  }
}

function website(locales: Locale[]): Node {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: 'DOME',
    inLanguage: locales.map((l) => CONTENT_LANGUAGE[l]),
    publisher: { '@id': ORGANIZATION_ID },
  }
}

/** The JSON-LD graph for a public page: organisation, website, the page itself and, below home, a breadcrumb. */
export function pageStructuredData(id: RouteId, locale: Locale, locales: Locale[]): Node {
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
    publisher: { '@id': ORGANIZATION_ID },
  }
  const graph: Node[] = [organization(locale), website(locales), page]

  if (id === 'home') {
    page.about = { '@id': ORGANIZATION_ID }
  } else {
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
  if ((SERVICE_ROUTE_IDS as readonly RouteId[]).includes(id)) {
    page.about = {
      '@type': 'Service',
      '@id': `${url}#service`,
      name: t.name,
      serviceType: t.name,
      description: t.description,
      provider: { '@id': ORGANIZATION_ID },
      areaServed: { '@type': 'Place', name: 'European Union' },
    }
  }
  if (CASE_STUDY_ROUTE_IDS.includes(id)) {
    graph.push({
      '@type': 'Article',
      '@id': `${url}#article`,
      headline: t.name,
      description: t.description,
      image: absoluteUrl(socialImagePath(id, locale)),
      inLanguage: CONTENT_LANGUAGE[locale],
      mainEntityOfPage: { '@id': `${url}#webpage` },
      author: { '@id': ORGANIZATION_ID },
      publisher: { '@id': ORGANIZATION_ID },
      dateModified: PUBLIC_ROUTES[id].updatedAt,
    })
  }

  return { '@context': 'https://schema.org', '@graph': graph }
}
