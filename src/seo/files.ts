import { DEFAULT_LOCALE, type Locale } from '../i18n/locales'
import { MESSAGES } from '../i18n/messages'
import { PAGE_IDS, PUBLIC_ROUTES, ROUTE_IDS, TOOL_ROUTE_IDS, localizedHref, type RouteId } from '../i18n/routes'
import { SITE_URL, absoluteUrl } from '../lib/structuredData'

// Crawler-facing files written into build/client at the end of the build (react-router.config.ts).

const escapeXml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

/** Every published page in every published locale, each with its hreflang alternates and x-default. */
export function buildSitemap(locales: Locale[]): string {
  const urls = ROUTE_IDS.flatMap((id) =>
    locales.map((locale) => {
      const alternates = [
        ...locales.map((l) => [l, localizedHref(id, l)] as const),
        ['x-default', localizedHref(id, DEFAULT_LOCALE)] as const,
      ]
        .map(([lang, path]) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${escapeXml(absoluteUrl(path))}"/>`)
        .join('\n')
      return [
        '  <url>',
        `    <loc>${escapeXml(absoluteUrl(localizedHref(id, locale)))}</loc>`,
        `    <lastmod>${PUBLIC_ROUTES[id].updatedAt}</lastmod>`,
        alternates,
        '  </url>',
      ].join('\n')
    }),
  )
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...urls,
    '</urlset>',
    '',
  ].join('\n')
}

/** Open to every crawler, retrieval and training alike (DOME_DECISIONS 2026-09-15). */
export function buildRobots(): string {
  return ['User-agent: *', 'Allow: /', '', `Sitemap: ${SITE_URL}/sitemap.xml`, ''].join('\n')
}

const LEGAL_IDS: RouteId[] = ['privacy', 'terms']

function linkList(ids: readonly RouteId[], locale: Locale): string[] {
  const meta = MESSAGES[locale].meta
  return ids.map((id) => `- [${meta[id].name}](${absoluteUrl(localizedHref(id, locale))}): ${meta[id].description}`)
}

function llmsSection(locale: Locale): string[] {
  const t = MESSAGES[locale].site
  return [
    `## ${t.llmsSections.pages}`,
    '',
    ...linkList(PAGE_IDS, locale),
    '',
    `## ${t.llmsSections.tools}`,
    '',
    ...linkList(TOOL_ROUTE_IDS, locale),
    '',
    `## ${t.llmsSections.legal}`,
    '',
    ...linkList(LEGAL_IDS, locale),
  ]
}

/** llms.txt (https://llmstxt.org): an English summary with curated links, then one section per other locale. */
export function buildLlmsTxt(locales: Locale[]): string {
  const en = MESSAGES.en.site
  const lines = ['# DOME', '', `> ${en.description}`, '', en.llmsIntro, '', ...llmsSection('en')]
  for (const locale of locales.filter((l) => l !== DEFAULT_LOCALE)) {
    const t = MESSAGES[locale].site
    lines.push('', `## ${locale === 'it' ? 'Italiano' : locale}`, '', t.description, '', t.llmsIntro, '', ...llmsSection(locale).map((l) => (l.startsWith('## ') ? `#${l}` : l)))
  }
  return lines.join('\n') + '\n'
}
