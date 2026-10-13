import { describe, expect, it } from 'vitest'
import { CASE_STUDY_ROUTE_IDS } from '../i18n/routes'
import { pageStructuredData } from './structuredData'

type Node = Record<string, unknown>
const graph = (id: Parameters<typeof pageStructuredData>[0], locale: 'en' | 'it' = 'en') =>
  (pageStructuredData(id, locale, ['en', 'it'])['@graph'] as Node[])
const byType = (nodes: Node[], type: string) => nodes.find((n) => n['@type'] === type)

describe('structured data', () => {
  it('names the services and a contact point on the organisation, with a raster logo', () => {
    const org = byType(graph('home'), 'ProfessionalService')!
    expect(org.logo).toBe('https://domelayer.com/logo-512.png')
    expect(org.knowsAbout).toEqual(expect.arrayContaining(['AI process automation', 'Business analysis', 'Data visualisation']))
    expect(byType(graph('home', 'it'), 'ProfessionalService')!.knowsAbout).toContain('Analisi di business')
    expect((org.contactPoint as Node).url).toBe('https://domelayer.com/contact')
    expect(JSON.stringify(graph('home'))).not.toContain('Offer')
  })

  it('describes a service page as a Service provided by DOME', () => {
    const page = byType(graph('aiProcessAutomation', 'it'), 'WebPage')!
    const service = page.about as Node
    expect(service['@type']).toBe('Service')
    expect(service.provider).toEqual({ '@id': 'https://domelayer.com/#organization' })
  })

  it('marks every case study up as an Article', () => {
    for (const id of CASE_STUDY_ROUTE_IDS) {
      const article = byType(graph(id), 'Article')!
      expect(article.headline).toBeTruthy()
      expect(article.dateModified).toMatch(/^\d{4}-\d{2}-\d{2}$/)
    }
  })
})
