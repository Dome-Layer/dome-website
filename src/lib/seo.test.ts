import { describe, expect, it } from 'vitest'
import type { MetaDescriptor } from 'react-router'
import { LOCALES } from '../i18n/locales'
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

  it('points only at English while Italian is dormant', () => {
    const meta = buildMeta('home', 'en', ['en'])
    expect(links(meta, 'alternate').map((l) => l.href)).toEqual(['https://domelayer.com/', 'https://domelayer.com/'])
    expect(meta.some((m) => 'property' in m && m.property === 'og:locale:alternate')).toBe(false)
  })

  it('never describes DOME as something for sale in structured data', () => {
    for (const id of ROUTE_IDS) {
      for (const locale of LOCALES) {
        const ld = buildMeta(id, locale, ['en', 'it']).find((m) => 'script:ld+json' in m)
        const json = JSON.stringify(ld)
        expect(json).toContain('"ProfessionalService"')
        expect(json).not.toMatch(/"(Product|Offer|OfferCatalog|AggregateOffer|SoftwareApplication|WebApplication)"|"offers"|"price/)
      }
    }
  })
})
