import { describe, expect, it } from 'vitest'
import { LOCALES } from '../i18n/locales'
import { ROUTE_IDS, TOOL_ROUTE_IDS } from '../i18n/routes'
import { pageStructuredData } from './structuredData'

type Node = Record<string, unknown>
const graph = (id: Parameters<typeof pageStructuredData>[0], locale: 'en' | 'it' = 'en') =>
  (pageStructuredData(id, locale, ['en', 'it'])['@graph'] as Node[])
const byType = (nodes: Node[], type: string) => nodes.find((n) => n['@type'] === type)

describe('structured data', () => {
  it('describes DOME as a website by a person, never as a business or a service', () => {
    for (const id of ROUTE_IDS) {
      for (const locale of LOCALES) {
        const json = JSON.stringify(pageStructuredData(id, locale, [...LOCALES]))
        expect(json, `${id} ${locale}`).not.toMatch(/"(ProfessionalService|LocalBusiness|Organization|Corporation|Service|Product|Offer|OfferCatalog)"|"offers"/)
      }
    }
    const site = byType(graph('home'), 'WebSite')!
    expect(site.name).toBe('DOME')
    expect(site.url).toBe('https://domelayer.com/')
    expect(site.publisher).toEqual({ '@id': 'https://domelayer.com/#person' })
    expect(site.author).toEqual({ '@id': 'https://domelayer.com/#person' })
  })

  it('identifies the person behind DOME: legal name, VAT ID, email and city, without a street address', () => {
    const person = byType(graph('home'), 'Person')!
    expect(person['@id']).toBe('https://domelayer.com/#person')
    expect(person.name).toBe('Francesco Prodomo')
    expect(person.vatID).toBe('IT07242670482')
    expect(person.email).toBe('hello@domelayer.com')
    expect(person.address).toEqual({ '@type': 'PostalAddress', addressLocality: 'Florence', addressCountry: 'IT' })
  })

  it('links Francesco\'s own site and LinkedIn profile, and no LinkedIn page for DOME', () => {
    const nodes = graph('home', 'it')
    expect(byType(nodes, 'Person')!.sameAs).toEqual(['https://francescoprodomo.com', 'https://www.linkedin.com/in/francesco-prodomo'])
    expect(byType(nodes, 'WebSite')!.sameAs).toBeUndefined()
    expect(JSON.stringify(nodes)).not.toContain('linkedin.com/company')
  })

  it('names what the project covers and a contact point, in the language of the page', () => {
    const person = byType(graph('home'), 'Person')!
    expect(person.knowsAbout).toEqual(expect.arrayContaining(['AI governance', 'Audit trails for AI', 'Human-in-the-loop approval']))
    expect(byType(graph('home', 'it'), 'Person')!.knowsAbout).toContain('Governance dell’AI')
    expect((person.contactPoint as Node).url).toBe('https://domelayer.com/contact')
    expect(byType(graph('home', 'it'), 'WebSite')!.image).toBe('https://domelayer.com/social/home-it.jpg')
  })

  it('describes a tool page as the tool, part of the DOME website', () => {
    for (const id of TOOL_ROUTE_IDS) {
      const page = byType(graph(id), 'WebPage')!
      expect((page.about as Node)['@type'], id).toBe('Thing')
      expect((page.about as Node).name, id).toBeTruthy()
      expect(page.isPartOf).toEqual({ '@id': 'https://domelayer.com/#website' })
    }
  })

  it('gives every page below home a breadcrumb', () => {
    expect(byType(graph('home'), 'BreadcrumbList')).toBeUndefined()
    const crumbs = byType(graph('about', 'it'), 'BreadcrumbList')!
    expect((crumbs.itemListElement as Node[]).map((item) => item.item)).toEqual(['https://domelayer.com/it', 'https://domelayer.com/it/chi-siamo'])
  })
})
