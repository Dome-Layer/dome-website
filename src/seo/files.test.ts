import { describe, expect, it } from 'vitest'
import { LOCALES, LOCALE_NAMES, type Locale } from '../i18n/locales'
import { ROUTE_IDS, localizedHref } from '../i18n/routes'
import { absoluteUrl } from '../lib/structuredData'
import { buildLlmsTxt, buildRobots, buildSitemap } from './files'

/** Every set of published locales the flags can produce: English plus any subset of the others. */
const COMBINATIONS: Locale[][] = LOCALES.filter((l) => l !== 'en').reduce<Locale[][]>(
  (sets, locale) => [...sets, ...sets.map((set) => [...set, locale])],
  [['en']],
)

describe('sitemap.xml', () => {
  it('lists every page per published locale with hreflang alternates', () => {
    const xml = buildSitemap(['en', 'it'])
    expect(xml.match(/<url>/g)).toHaveLength(ROUTE_IDS.length * 2)
    expect(xml).toContain('<loc>https://domelayer.com/it/dome/agent-flow</loc>')
    expect(xml).toContain('<xhtml:link rel="alternate" hreflang="x-default" href="https://domelayer.com/dome/agent-flow"/>')
  })

  it('lists English only while Italian is dormant', () => {
    const xml = buildSitemap(['en'])
    expect(xml.match(/<url>/g)).toHaveLength(ROUTE_IDS.length)
    expect(xml).not.toContain('/it')
  })
})

describe('sitemap.xml for every combination of published locales', () => {
  it('covers the eight combinations', () => {
    expect(COMBINATIONS).toHaveLength(8)
  })

  for (const published of COMBINATIONS) {
    it(`lists exactly ${published.join(', ')}, each page with a full alternate set`, () => {
      const xml = buildSitemap(published)
      const urls = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => m[1])
      expect(urls).toHaveLength(ROUTE_IDS.length * published.length)
      for (const block of urls) {
        const langs = [...block.matchAll(/hreflang="([^"]+)"/g)].map((m) => m[1])
        expect(langs).toEqual([...published, 'x-default'])
      }
      for (const locale of LOCALES) {
        const loc = `<loc>${absoluteUrl(localizedHref('about', locale))}</loc>`
        const alternate = `hreflang="${locale}"`
        expect(xml.includes(loc), `${locale} loc`).toBe(published.includes(locale))
        expect(xml.includes(alternate), `${locale} alternate`).toBe(published.includes(locale))
      }
      for (const locale of LOCALES.filter((l) => l !== 'en' && !published.includes(l))) {
        expect(xml, `no trace of ${locale}`).not.toContain(`domelayer.com/${locale}`)
      }
    })

    it(`writes llms.txt for ${published.join(', ')} only`, () => {
      const txt = buildLlmsTxt(published)
      for (const locale of LOCALES.filter((l) => l !== 'en')) {
        expect(txt.includes(`## ${LOCALE_NAMES[locale]}`), locale).toBe(published.includes(locale))
        expect(txt.includes(`domelayer.com/${locale}/`), locale).toBe(published.includes(locale))
      }
    })
  }
})

describe('robots.txt and llms.txt', () => {
  it('allows every crawler and points at the sitemap', () => {
    expect(buildRobots()).toBe('User-agent: *\nAllow: /\n\nSitemap: https://domelayer.com/sitemap.xml\n')
  })

  it('adds an Italian section only when Italian is published', () => {
    expect(buildLlmsTxt(['en'])).not.toContain('## Italiano')
    const txt = buildLlmsTxt(['en', 'it'])
    expect(txt.startsWith('# DOME\n\n> ')).toBe(true)
    expect(txt).toContain('## Italiano')
    expect(txt).toContain('(https://domelayer.com/it/termini)')
  })

  it('lists every sitemap URL, case studies included', () => {
    const txt = buildLlmsTxt([...LOCALES])
    const urls = [...buildSitemap([...LOCALES]).matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
    expect(urls.length).toBeGreaterThan(80)
    expect(txt).toContain('## Nederlands')
    expect(txt).toContain('## Deutsch')
    expect(txt).toContain('(https://domelayer.com/de/nutzungsbedingungen)')
    for (const url of urls) expect(txt).toContain(`(${url})`)
  })
})
