import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'
import { PUBLIC_ROUTES, TOOL_ROUTE_IDS } from '../i18n/routes'

interface Redirect {
  source: string
  destination: string
  permanent?: boolean
  has?: unknown
}

const config = JSON.parse(
  readFileSync(resolve(__dirname, '../../vercel.json'), 'utf8'),
) as { redirects: Redirect[] }

/** Resolve a path against Vercel's `:param` source syntax, or undefined if the rule does not match. */
function applyRedirect(rule: Redirect, path: string): string | undefined {
  if (rule.has) return undefined // host-gated rules are production-only
  const names: string[] = []
  const pattern = rule.source
    .replace(/[.+?^${}()|[\]\\]/g, '\\$&')
    .replace(/:(\w+)/g, (_, name: string) => {
      names.push(name)
      return '([^/]+)'
    })
  const match = new RegExp(`^${pattern}$`).exec(path)
  if (!match) return undefined
  return names.reduce((dest, name, i) => dest.replace(`:${name}`, match[i + 1]), rule.destination)
}

function redirectFor(path: string): { to: string; permanent: boolean } | undefined {
  for (const rule of config.redirects) {
    const to = applyRedirect(rule, path)
    if (to !== undefined) return { to, permanent: rule.permanent === true }
  }
  return undefined
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
