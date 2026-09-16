import type { MetaDescriptor } from 'react-router'

export const SITE_URL = 'https://domelayer.com'
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`

interface PageMeta {
  title: string
  description: string
  /** Path from the site root, e.g. "/tools/llm-council". Builds canonical and og:url. */
  path: string
  ogDescription?: string
  twitterDescription?: string
  imageAlt: string
  twitterImageAlt?: string
  /** Structured data rendered as a JSON-LD script. */
  jsonLd?: Record<string, unknown>
}

/**
 * Full head metadata for a route's `meta` export. React Router uses only the deepest
 * matching route's meta, so every page returns the complete set from here.
 */
export function buildMeta(page: PageMeta): MetaDescriptor[] {
  const url = `${SITE_URL}${page.path}`
  const meta: MetaDescriptor[] = [
    { title: page.title },
    { name: 'description', content: page.description },
    { name: 'robots', content: 'index, follow' },
    { tagName: 'link', rel: 'canonical', href: url },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'DOME' },
    { property: 'og:url', content: url },
    { property: 'og:title', content: page.title },
    { property: 'og:description', content: page.ogDescription ?? page.description },
    { property: 'og:image', content: DEFAULT_OG_IMAGE },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: page.imageAlt },
    { property: 'og:locale', content: 'en_GB' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@domelayer' },
    { name: 'twitter:title', content: page.title },
    { name: 'twitter:description', content: page.twitterDescription ?? page.description },
    { name: 'twitter:image', content: DEFAULT_OG_IMAGE },
    { name: 'twitter:image:alt', content: page.twitterImageAlt ?? page.imageAlt },
  ]
  if (page.jsonLd) meta.push({ 'script:ld+json': page.jsonLd })
  return meta
}
