import { describe, expect, it } from 'vitest'
import { ROUTE_IDS } from '../i18n/routes'
import { buildLlmsTxt, buildRobots, buildSitemap } from './files'

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
})
