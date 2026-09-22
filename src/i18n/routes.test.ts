import { describe, expect, it } from 'vitest'
import { isItalianPublished, LOCALES } from './locales'
import { MESSAGES } from './messages'
import { CLIENT_ONLY_PATHS, PUBLIC_ROUTES, ROUTE_IDS, localeFromPath, localizedHref, routeIdFromPath } from './routes'

describe('route manifest', () => {
  it('gives every page a unique path in every locale', () => {
    const paths = ROUTE_IDS.flatMap((id) => LOCALES.map((l) => PUBLIC_ROUTES[id].path[l]))
    expect(new Set(paths).size).toBe(paths.length)
  })

  it('keeps English at the root and Italian under /it', () => {
    for (const id of ROUTE_IDS) {
      expect(localeFromPath(localizedHref(id, 'en'))).toBe('en')
      expect(localizedHref(id, 'it')).toMatch(/^\/it(\/|$)/)
    }
  })

  it('never localises the client-only auth routes', () => {
    for (const path of CLIENT_ONLY_PATHS) expect(routeIdFromPath(path)).toBeUndefined()
  })

  it('resolves a path in either locale, with or without a trailing slash', () => {
    expect(routeIdFromPath('/it/termini/')).toBe('terms')
    expect(routeIdFromPath('/terms')).toBe('terms')
    expect(routeIdFromPath('/it')).toBe('home')
    expect(routeIdFromPath('/it/terms')).toBeUndefined()
    expect(localeFromPath('/italy')).toBe('en')
  })

  it('has dated sitemap entries', () => {
    for (const id of ROUTE_IDS) expect(PUBLIC_ROUTES[id].updatedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/)
  })
})

describe('message catalogues', () => {
  const strings = (value: unknown): string[] =>
    typeof value === 'string' ? [value] : Object.values(value as object).flatMap(strings)

  it('use no em or en dashes (house style)', () => {
    for (const locale of LOCALES) {
      expect(strings(MESSAGES[locale]).filter((s) => /[–—]/.test(s))).toEqual([])
    }
  })

  it('have no empty strings', () => {
    for (const locale of LOCALES) expect(strings(MESSAGES[locale]).filter((s) => !s.trim())).toEqual([])
  })
})

describe('isItalianPublished', () => {
  it('publishes outside Vercel so CI and local builds exercise Italian', () => {
    expect(isItalianPublished({})).toBe(true)
  })

  it('publishes on Vercel previews (staging) only', () => {
    expect(isItalianPublished({ VERCEL: '1', VERCEL_ENV: 'preview' })).toBe(true)
    expect(isItalianPublished({ VERCEL: '1', VERCEL_ENV: 'production' })).toBe(false)
    expect(isItalianPublished({ VERCEL: '1' })).toBe(false)
  })

  it('lets DOME_PUBLISH_IT override either way', () => {
    expect(isItalianPublished({ VERCEL: '1', VERCEL_ENV: 'production', DOME_PUBLISH_IT: 'true' })).toBe(true)
    expect(isItalianPublished({ DOME_PUBLISH_IT: 'false' })).toBe(false)
  })
})
