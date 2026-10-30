import { describe, expect, it } from 'vitest'
import type { MetaDescriptor } from 'react-router'
import { CONTENT_LANGUAGE, LOCALES, OG_LOCALE, type Locale } from '../i18n/locales'
import { ROUTE_IDS } from '../i18n/routes'
import { buildMeta } from './seo'

const links = (meta: MetaDescriptor[], rel: string) =>
  meta.filter((m) => 'tagName' in m && m.rel === rel) as Array<{ hrefLang?: string; href: string }>

describe('buildMeta', () => {
  it('sets canonical and a full hreflang set when Italian is published', () => {
    const meta = buildMeta('terms', 'it', ['en', 'it'])
    expect(links(meta, 'canonical')).toEqual([expect.objectContaining({ href: 'https://domelayer.com/it/termini' })])
    expect(links(meta, 'alternate').map((l) => [l.hrefLang, l.href])).toEqual([
      ['en', 'https://domelayer.com/terms'],
      ['it', 'https://domelayer.com/it/termini'],
      ['x-default', 'https://domelayer.com/terms'],
    ])
    expect(meta).toContainEqual({ property: 'og:locale', content: 'it_IT' })
    expect(meta).toContainEqual({ property: 'og:locale:alternate', content: 'en_GB' })
  })

  it('gives each page the social image of its own language', () => {
    expect(buildMeta('enterpriseUx', 'it')).toContainEqual({ property: 'og:image', content: 'https://domelayer.com/social/enterprise-ux-it.jpg' })
    expect(buildMeta('llmCouncil', 'en')).toContainEqual({ name: 'twitter:image', content: 'https://domelayer.com/social/dome-en.jpg' })
  })

  it('points only at English while Italian is dormant', () => {
    const meta = buildMeta('home', 'en', ['en'])
    expect(links(meta, 'alternate').map((l) => l.href)).toEqual(['https://domelayer.com/', 'https://domelayer.com/'])
    expect(meta.some((m) => 'property' in m && m.property === 'og:locale:alternate')).toBe(false)
  })

  it('lists hreflang, og:locale and inLanguage for exactly the published locales, in every combination', () => {
    const others = LOCALES.filter((l) => l !== 'en')
    const combinations = others.reduce<Locale[][]>((sets, l) => [...sets, ...sets.map((set) => [...set, l])], [['en']])
    expect(combinations).toHaveLength(8)
    for (const published of combinations) {
      for (const locale of published) {
        const meta = buildMeta('contact', locale, published)
        const alternates = links(meta, 'alternate')
        expect(alternates.map((l) => l.hrefLang)).toEqual([...published, 'x-default'])
        expect(alternates.find((l) => l.hrefLang === locale)?.href).toBe(links(meta, 'canonical')[0].href)
        expect(meta).toContainEqual({ property: 'og:locale', content: OG_LOCALE[locale] })
        const altLocales = meta.filter((m) => 'property' in m && m.property === 'og:locale:alternate').map((m) => (m as { content: string }).content)
        expect(altLocales).toEqual(published.filter((l) => l !== locale).map((l) => OG_LOCALE[l]))
        const ld = JSON.stringify(meta.find((m) => 'script:ld+json' in m))
        expect(ld).toContain(`"inLanguage":${JSON.stringify(published.map((l) => CONTENT_LANGUAGE[l]))}`)
        for (const hidden of others.filter((l) => !published.includes(l))) {
          expect(JSON.stringify(meta), `${published} ${locale}: no ${hidden}`).not.toContain(`domelayer.com/${hidden}`)
        }
      }
    }
  })

  it('uses the Dutch and German page metadata and social images', () => {
    const nl = buildMeta('about', 'nl', [...LOCALES])
    expect(links(nl, 'canonical')[0].href).toBe('https://domelayer.com/nl/over-ons')
    expect(nl).toContainEqual({ property: 'og:locale', content: 'nl_NL' })
    expect(nl).toContainEqual({ property: 'og:image', content: 'https://domelayer.com/social/about-nl.jpg' })
    const de = buildMeta('caseInvoice', 'de', [...LOCALES])
    expect(de[0]).toEqual({ title: 'Von der Rechnung zur Freigabe, mit eingebauter Governance | DOME' })
    expect(links(de, 'canonical')[0].href).toBe('https://domelayer.com/de/fallstudien/rechnungsfreigabe-mit-governance')
  })

  it('never describes DOME as something for sale in structured data', () => {
    for (const id of ROUTE_IDS) {
      for (const locale of LOCALES) {
        const ld = buildMeta(id, locale, [...LOCALES]).find((m) => 'script:ld+json' in m)
        const json = JSON.stringify(ld)
        expect(json).toContain('"ProfessionalService"')
        expect(json).not.toMatch(/"(Product|Offer|OfferCatalog|AggregateOffer|SoftwareApplication|WebApplication)"|"offers"|"price/)
      }
    }
  })
})
