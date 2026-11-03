import { describe, expect, it } from 'vitest'
import { DEFAULT_LOCALE, LOCALES, isLocalePublished, publishFlags, publishedLocales } from './locales'
import { MESSAGES } from './messages'
import { pageMeta } from './pageMeta'
import {
  CLIENT_ONLY_PATHS,
  NOT_FOUND_PATHS,
  PUBLIC_ROUTES,
  ROUTE_IDS,
  localeFromPath,
  localizedHref,
  notFoundPath,
  routeIdFromPath,
} from './routes'

describe('route manifest', () => {
  it('gives every page a unique path in every locale', () => {
    const paths = ROUTE_IDS.flatMap((id) => LOCALES.map((l) => PUBLIC_ROUTES[id].path[l]))
    expect(new Set(paths).size).toBe(paths.length)
  })

  it('keeps English at the root and every other locale under its own prefix', () => {
    for (const id of ROUTE_IDS) {
      expect(localeFromPath(localizedHref(id, 'en'))).toBe('en')
      for (const locale of LOCALES.filter((l) => l !== DEFAULT_LOCALE)) {
        expect(localizedHref(id, locale)).toMatch(new RegExp(`^/${locale}(/|$)`))
        expect(localeFromPath(localizedHref(id, locale))).toBe(locale)
      }
    }
  })

  it('uses lower-case ASCII slugs, so every URL is the same however it is typed or shared', () => {
    for (const id of ROUTE_IDS) for (const l of LOCALES) expect(PUBLIC_ROUTES[id].path[l]).toMatch(/^\/[a-z0-9/-]*$/)
  })

  it('never localises the client-only auth routes', () => {
    for (const path of CLIENT_ONLY_PATHS) expect(routeIdFromPath(path)).toBeUndefined()
  })

  it('resolves a path in any locale, with or without a trailing slash', () => {
    expect(routeIdFromPath('/it/termini/')).toBe('terms')
    expect(routeIdFromPath('/terms')).toBe('terms')
    expect(routeIdFromPath('/it')).toBe('home')
    expect(routeIdFromPath('/it/terms')).toBeUndefined()
    expect(routeIdFromPath('/nl/voorwaarden')).toBe('terms')
    expect(routeIdFromPath('/de/nutzungsbedingungen/')).toBe('terms')
    expect(routeIdFromPath('/de/')).toBe('home')
    expect(localeFromPath('/italy')).toBe('en')
    expect(localeFromPath('/nlx/about')).toBe('en')
    expect(localeFromPath('/de')).toBe('de')
  })

  it('has dated sitemap entries', () => {
    for (const id of ROUTE_IDS) expect(PUBLIC_ROUTES[id].updatedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/)
  })
})

describe('404 pages', () => {
  it('has one per locale', () => {
    expect(NOT_FOUND_PATHS).toEqual(['/404', '/it/404', '/nl/404', '/de/404'])
  })

  it('answers an unknown address in the language of a published prefix, English otherwise', () => {
    const all = [...LOCALES]
    expect(notFoundPath('/nl/bestaat-niet', all)).toBe('/nl/404')
    expect(notFoundPath('/de', all)).toBe('/de/404')
    expect(notFoundPath('/it/nulla', all)).toBe('/it/404')
    expect(notFoundPath('/nope', all)).toBe('/404')
    // Unpublished: no trace of the locale, the English 404 answers.
    expect(notFoundPath('/nl/bestaat-niet', ['en', 'it'])).toBe('/404')
    expect(notFoundPath('/de/gibt-es-nicht', ['en', 'it'])).toBe('/404')
  })
})

describe('message catalogues', () => {
  const strings = (value: unknown): string[] =>
    typeof value === 'string' ? [value] : Object.values(value as object).flatMap(strings)

  it('use no em or en dashes (house style)', () => {
    for (const locale of LOCALES) {
      expect(strings(MESSAGES[locale]).filter((s) => /[\u2013\u2014]/.test(s)), locale).toEqual([])
    }
  })

  it('have no empty strings', () => {
    for (const locale of LOCALES) expect(strings(MESSAGES[locale]).filter((s) => !s.trim()), locale).toEqual([])
  })

  it('are written for their readers, not left in English', () => {
    const english = new Set(strings(MESSAGES.en))
    for (const locale of LOCALES.filter((l) => l !== 'en')) {
      const all = strings(MESSAGES[locale])
      // Only the company's legal name and VAT line may read the same as the English.
      const same = all.filter((s) => english.has(s) && s.length > 40 && !s.startsWith('Dome di Francesco Prodomo'))
      expect(same, locale).toEqual([])
    }
  })

  // Formal address only: "u" in Dutch (decided 2026-09-29), "Sie" in German.
  it('address the reader formally', () => {
    const nl = strings(MESSAGES.nl).join(' ')
    const de = strings(MESSAGES.de).join(' ')
    expect(nl.match(/\bu\b/g)?.length).toBeGreaterThan(20)
    expect(de.match(/\bSie\b/g)?.length).toBeGreaterThan(20)
    expect(nl.match(/\b(je|jij|jou|jouw|jullie)\b/gi)).toBeNull()
    expect(de.match(/\b(du|dich|dir|dein|deine|deinen|deinem|deiner|euch|euer|eure)\b/gi)).toBeNull()
  })

  it('say near the top of every translated legal page that the English version binds', () => {
    for (const locale of ['nl', 'de'] as const) {
      for (const doc of ['privacy', 'terms', 'cookies'] as const) {
        const binding = MESSAGES[locale].pages[doc].binding
        expect(binding?.note, `${locale} ${doc}`).toMatch(locale === 'nl' ? /Engelse versie/ : /englische Fassung/)
        expect(binding?.link.length).toBeGreaterThan(0)
      }
    }
    for (const doc of ['privacy', 'terms', 'cookies'] as const) expect(MESSAGES.en.pages[doc].binding).toBeUndefined()
  })
})

// Search results cut a description at about 155 to 160 characters and a title at about 60.
// Link previews show more, about 200.
describe('search snippets', () => {
  for (const locale of LOCALES) {
    it(`fit in search results (${locale})`, () => {
      const over: string[] = []
      for (const id of ROUTE_IDS) {
        const meta = pageMeta(id, locale)
        if (meta.description.length > 160) over.push(`${id} description ${meta.description.length}`)
        if (meta.ogDescription && meta.ogDescription.length > 200) over.push(`${id} og ${meta.ogDescription.length}`)
        if (meta.title.length > 65) over.push(`${id} title ${meta.title.length}`)
      }
      expect(over).toEqual([])
    })
  }
})

describe('publishing', () => {
  it('always publishes English', () => {
    expect(isLocalePublished('en', { DOME_PUBLISH_EN: 'false' })).toBe(true)
  })

  it('publishes Italian, Dutch and German when their flags are unset, so CI and local builds exercise them', () => {
    for (const locale of ['it', 'nl', 'de'] as const) expect(isLocalePublished(locale, {}), locale).toBe(true)
  })

  it('lets each DOME_PUBLISH_<LOCALE> flag decide its own locale, either way', () => {
    expect(isLocalePublished('it', { DOME_PUBLISH_IT: 'true' })).toBe(true)
    expect(isLocalePublished('it', { DOME_PUBLISH_IT: 'false' })).toBe(false)
    expect(isLocalePublished('nl', { DOME_PUBLISH_NL: 'false' })).toBe(false)
    expect(isLocalePublished('de', { DOME_PUBLISH_NL: 'false' })).toBe(true)
    expect(isLocalePublished('de', { DOME_PUBLISH_DE: 'false' })).toBe(false)
  })

  it('lists the published locales in order, English first', () => {
    expect(publishedLocales({})).toEqual(['en', 'it', 'nl', 'de'])
    expect(publishedLocales({ DOME_PUBLISH_NL: 'false' })).toEqual(['en', 'it', 'de'])
    expect(publishedLocales({ DOME_PUBLISH_IT: 'false', DOME_PUBLISH_NL: 'false', DOME_PUBLISH_DE: 'false' })).toEqual(['en'])
  })

  // The settings this PR ships (wrangler.jsonc and the deploy workflow).
  it('publishes all four languages on staging and in production', () => {
    const deployed = { DOME_PUBLISH_IT: 'true', DOME_PUBLISH_NL: 'true', DOME_PUBLISH_DE: 'true' }
    expect(publishedLocales(deployed)).toEqual(['en', 'it', 'nl', 'de'])
  })

  it('reads only the publish flags from a Worker environment', () => {
    const env = { ASSETS: {}, DOME_PUBLISH_NL: 'false', ENVIRONMENT: 'production' }
    expect(publishFlags(env)).toEqual({ DOME_PUBLISH_EN: undefined, DOME_PUBLISH_IT: undefined, DOME_PUBLISH_NL: 'false', DOME_PUBLISH_DE: undefined })
    // Every other binding is dropped, so the unset flags fall back to published.
    expect(publishedLocales(publishFlags(env))).toEqual(['en', 'it', 'de'])
  })
})
