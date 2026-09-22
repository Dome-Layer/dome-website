import type { MetaDescriptor, MetaFunction } from 'react-router'
import { DEFAULT_LOCALE, OG_LOCALE, type Locale } from '../i18n/locales'
import { PUBLISHED_LOCALES } from '../i18n/published'
import { pageMeta } from '../i18n/pageMeta'
import { localeFromPath, localizedHref, routeIdFromPath, type RouteId } from '../i18n/routes'
import { SITE_URL, absoluteUrl, pageStructuredData } from './structuredData'

export { SITE_URL }

const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`

/**
 * Full head metadata for a public page in one locale: title, description, canonical, hreflang
 * alternates (one per published locale plus x-default), Open Graph, Twitter and JSON-LD. React
 * Router uses only the deepest matching route's meta, so every page returns the complete set.
 */
export function buildMeta(id: RouteId, locale: Locale, locales: Locale[] = PUBLISHED_LOCALES): MetaDescriptor[] {
  const page = pageMeta(id, locale)
  const url = absoluteUrl(localizedHref(id, locale))
  return [
    { title: page.title },
    { name: 'description', content: page.description },
    { name: 'robots', content: 'index, follow' },
    { tagName: 'link', rel: 'canonical', href: url },
    ...locales.map((l) => ({ tagName: 'link', rel: 'alternate', hrefLang: l, href: absoluteUrl(localizedHref(id, l)) })),
    { tagName: 'link', rel: 'alternate', hrefLang: 'x-default', href: absoluteUrl(localizedHref(id, DEFAULT_LOCALE)) },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'DOME' },
    { property: 'og:url', content: url },
    { property: 'og:title', content: page.title },
    { property: 'og:description', content: page.ogDescription ?? page.description },
    { property: 'og:image', content: DEFAULT_OG_IMAGE },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: page.imageAlt },
    { property: 'og:locale', content: OG_LOCALE[locale] },
    ...locales.filter((l) => l !== locale).map((l) => ({ property: 'og:locale:alternate', content: OG_LOCALE[l] })),
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@domelayer' },
    { name: 'twitter:title', content: page.title },
    { name: 'twitter:description', content: page.twitterDescription ?? page.description },
    { name: 'twitter:image', content: DEFAULT_OG_IMAGE },
    { name: 'twitter:image:alt', content: page.twitterImageAlt ?? page.imageAlt },
    { 'script:ld+json': pageStructuredData(id, locale, locales) },
  ]
}

/** A route module's `meta` export: the locale comes from the URL being rendered. */
export function routeMeta(id: RouteId): MetaFunction {
  return ({ location }) => buildMeta(id, localeFromPath(location.pathname))
}

/**
 * A `meta` export for a route module that several routes share, as the case study pages do: the
 * route is resolved from the URL being rendered rather than named up front.
 */
export function pathRouteMeta(): MetaFunction {
  return ({ location }) => {
    const id = routeIdFromPath(location.pathname)
    return id ? buildMeta(id, localeFromPath(location.pathname)) : []
  }
}
