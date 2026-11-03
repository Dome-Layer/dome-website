import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'
import { LOCALES } from '../i18n/locales'
import { PUBLIC_ROUTES, TOOL_ROUTE_IDS, routeIdFromPath } from '../i18n/routes'
import { findRedirect, type RedirectRule } from '../../worker/routing'

const config = JSON.parse(readFileSync(resolve(__dirname, '../../site.config.json'), 'utf8')) as {
  redirects: RedirectRule[]
}

/** Where the Worker sends a domelayer.com path, and whether permanently (308), or undefined. */
function redirectFor(path: string): { to: string; permanent: boolean } | undefined {
  const found = findRedirect(config.redirects, new URL(path, 'https://domelayer.com'))
  return found ? { to: found.location, permanent: found.status === 308 } : undefined
}

/**
 * The tool pages moved from /tools/* to /dome/* in plan phase 1c. Those old URLs were submitted to
 * Google Search Console and Bing, so every one of them has to keep resolving, permanently, or the
 * move throws away the indexing.
 */
describe('the tool pages moved to /dome', () => {
  it('redirects every old English tool URL to its new one, permanently', () => {
    for (const id of TOOL_ROUTE_IDS) {
      const newPath = PUBLIC_ROUTES[id].path.en
      expect(newPath, `${id} should live under /dome`).toMatch(/^\/dome\//)
      const slug = newPath.slice('/dome/'.length)
      expect(redirectFor(`/tools/${slug}`), `/tools/${slug}`).toEqual({ to: newPath, permanent: true })
    }
  })

  it('redirects every old Italian tool URL to its new one, permanently', () => {
    for (const id of TOOL_ROUTE_IDS) {
      const newPath = PUBLIC_ROUTES[id].path.it
      expect(newPath, `${id} should live under /it/dome`).toMatch(/^\/it\/dome\//)
      const slug = newPath.slice('/it/dome/'.length)
      expect(redirectFor(`/it/strumenti/${slug}`), `/it/strumenti/${slug}`).toEqual({
        to: newPath,
        permanent: true,
      })
    }
  })

  it('redirects the old /tools index to the capabilities page', () => {
    expect(redirectFor('/tools')).toEqual({ to: PUBLIC_ROUTES.dome.path.en, permanent: true })
  })

  it('leaves the new URLs alone', () => {
    for (const id of TOOL_ROUTE_IDS) {
      expect(redirectFor(PUBLIC_ROUTES[id].path.en), id).toBeUndefined()
      expect(redirectFor(PUBLIC_ROUTES[id].path.it), id).toBeUndefined()
    }
    expect(redirectFor('/')).toBeUndefined()
    expect(redirectFor('/dome')).toBeUndefined()
  })
})

/**
 * Site split, step 4 (DOME_DECISIONS 2026-11-01): the service pages and case studies left this
 * site. Every old URL, in all four languages, answers 308 with the address the plan names:
 * francescoprodomo.com for the consulting pages (English only there), and the Agent Flow page in
 * the same language for the governed invoice case. site-split-redirects.csv is a copy of
 * `_notes/site-split-2026-11-01/redirects.csv`, the list `redirect-check.mjs` checks in production.
 */
describe('the consulting pages moved off the site', () => {
  const [header, ...lines] = readFileSync(resolve(__dirname, 'site-split-redirects.csv'), 'utf8').trim().split('\n')
  const columns = header.split(',')
  const rows = lines.map((line) => Object.fromEntries(line.split(',').map((value, i) => [columns[i], value])))

  it('covers 44 old URLs, eleven pages in each of the four languages', () => {
    expect(rows).toHaveLength(44)
    for (const locale of LOCALES) expect(rows.filter((row) => row.language === locale), locale).toHaveLength(11)
    expect(new Set(rows.map((row) => row.from)).size).toBe(44)
  })

  it('answers every old URL with a 308 to the address in the plan, as the Worker serves it', () => {
    for (const row of rows) {
      const from = new URL(row.from)
      const found = findRedirect(config.redirects, from)
      expect(found?.status, row.from).toBe(Number(row.status))
      expect(new URL(found!.location, from).href, row.from).toBe(new URL(row.to).href)
    }
  })

  it('keeps the query string, so campaign tags survive the move', () => {
    const found = findRedirect(config.redirects, new URL('https://domelayer.com/case-studies?utm_source=linkedin'))
    expect(found).toEqual({ location: 'https://francescoprodomo.com/work?utm_source=linkedin', status: 308 })
  })

  it('redirects only addresses that are no longer pages here', () => {
    for (const row of rows) expect(routeIdFromPath(new URL(row.from).pathname), row.from).toBeUndefined()
  })

  it('sends the governed invoice case to the Agent Flow page of its own language', () => {
    const invoice = rows.filter((row) => row.to.startsWith('https://domelayer.com/'))
    expect(invoice).toHaveLength(4)
    for (const row of invoice) {
      expect(routeIdFromPath(new URL(row.to).pathname), row.to).toBe('agentFlow')
      expect(new URL(row.to).pathname).toBe(PUBLIC_ROUTES.agentFlow.path[row.language as (typeof LOCALES)[number]])
    }
  })
})
