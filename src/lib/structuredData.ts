import { CONTENT_LANGUAGE, type Locale } from '../i18n/locales'
import { MESSAGES } from '../i18n/messages'
import { pageMeta } from '../i18n/pageMeta'
import { TOOL_ROUTE_IDS, localizedHref, type RouteId } from '../i18n/routes'

export const SITE_URL = 'https://domelayer.com'

const ORGANIZATION_ID = `${SITE_URL}/#organization`
const WEBSITE_ID = `${SITE_URL}/#website`

export const absoluteUrl = (path: string) => (path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`)

type Node = Record<string, unknown>

/**
 * DOME the company. Deliberately no Product, Offer, OfferCatalog or SoftwareApplication: the tools
 * are capability proof and never for sale. The postal address is added once the legal notice
 * address is settled.
 */
function organization(locale: Locale): Node {
  return {
    '@type': 'ProfessionalService',
    '@id': ORGANIZATION_ID,
    name: 'DOME',
    legalName: 'Dome di Francesco Prodomo',
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/favicon.svg`,
    image: `${SITE_URL}/og-image.png`,
    description: MESSAGES[locale].site.description,
    vatID: 'IT07242670482',
    areaServed: { '@type': 'Place', name: 'European Union' },
    knowsLanguage: ['en', 'it'],
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

  return { '@context': 'https://schema.org', '@graph': graph }
}
