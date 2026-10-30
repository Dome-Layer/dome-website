import { describe, expect, it } from 'vitest'
import { CASE_STUDIES } from '../content/caseStudies'
import { DEFAULT_LOCALE, LOCALES, isLocalePublished, publishFlags, publishedLocales } from './locales'
import { MESSAGES } from './messages'
import {
  CASE_STUDY_ROUTE_IDS,
  CLIENT_ONLY_PATHS,
  NOT_FOUND_PATHS,
  PUBLIC_ROUTES,
  ROUTE_IDS,
  caseStudyIdFor,
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

  it('gives each case study the slug its route ends with, in every locale', () => {
    expect(CASE_STUDY_ROUTE_IDS).toHaveLength(CASE_STUDIES.length)
    for (const id of CASE_STUDY_ROUTE_IDS) {
      const study = CASE_STUDIES.find((s) => s.id === caseStudyIdFor(id))!
      for (const l of LOCALES) expect(localizedHref(id, l).endsWith(`/${study.slug[l]}`), `${id} ${l}`).toBe(true)
    }
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
    const caseText = (locale: 'nl' | 'de') =>
      CASE_STUDIES.flatMap((s) => [s.title[locale], s.summary[locale], ...s.challenge[locale], ...s.outcomes[locale], ...s.steps[locale].flatMap((x) => [x.title, x.body])])
    const nl = [...strings(MESSAGES.nl), ...caseText('nl')].join(' ')
    const de = [...strings(MESSAGES.de), ...caseText('de')].join(' ')
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

describe('case studies', () => {
  it('are complete in every locale, with no dashes', () => {
    for (const study of CASE_STUDIES) {
      for (const l of LOCALES) {
        const text = [study.slug[l], study.descriptor[l], study.title[l], study.summary[l], study.client[l], study.role[l],
          ...study.challenge[l], ...study.outcomes[l], ...study.capabilities[l], ...study.steps[l].flatMap((s) => [s.title, s.body])]
        expect(text.every((s) => s.trim().length > 0), `${study.id} ${l}`).toBe(true)
        expect(text.filter((s) => /[\u2013\u2014]/.test(s)), `${study.id} ${l}`).toEqual([])
        expect(study.steps[l]).toHaveLength(study.steps.en.length)
        expect(study.challenge[l]).toHaveLength(study.challenge.en.length)
        expect(study.outcomes[l]).toHaveLength(study.outcomes.en.length)
      }
      for (const title of Object.values(study.metaTitle ?? {})) expect(title.trim(), study.id).toBeTruthy()
    }
  })
})

describe('publishing', () => {
  it('always publishes English', () => {
    expect(isLocalePublished('en', { DOME_PUBLISH_EN: 'false' })).toBe(true)
  })

  it('publishes Italian outside Vercel so CI and local builds exercise it', () => {
    expect(isLocalePublished('it', {})).toBe(true)
  })

  it('publishes Italian on Vercel previews (staging) only when its flag is unset', () => {
    expect(isLocalePublished('it', { VERCEL: '1', VERCEL_ENV: 'preview' })).toBe(true)
    expect(isLocalePublished('it', { VERCEL: '1', VERCEL_ENV: 'production' })).toBe(false)
    expect(isLocalePublished('it', { VERCEL: '1' })).toBe(false)
  })

  it('never publishes Dutch or German without their flag, wherever the build runs', () => {
    for (const env of [{}, { VERCEL: '1', VERCEL_ENV: 'preview' }, { DOME_PUBLISH_IT: 'true' }, { DOME_PUBLISH_NL: 'yes' }, { DOME_PUBLISH_NL: 'TRUE' }]) {
      expect(isLocalePublished('nl', env), JSON.stringify(env)).toBe(false)
      expect(isLocalePublished('de', env), JSON.stringify(env)).toBe(false)
    }
  })

  it('lets each DOME_PUBLISH_<LOCALE> flag decide its own locale, either way', () => {
    expect(isLocalePublished('it', { VERCEL: '1', VERCEL_ENV: 'production', DOME_PUBLISH_IT: 'true' })).toBe(true)
    expect(isLocalePublished('it', { DOME_PUBLISH_IT: 'false' })).toBe(false)
    expect(isLocalePublished('nl', { DOME_PUBLISH_NL: 'true' })).toBe(true)
    expect(isLocalePublished('de', { DOME_PUBLISH_NL: 'true' })).toBe(false)
    expect(isLocalePublished('de', { DOME_PUBLISH_DE: 'true' })).toBe(true)
  })

  it('lists the published locales in order, English first', () => {
    expect(publishedLocales({})).toEqual(['en', 'it'])
    expect(publishedLocales({ DOME_PUBLISH_NL: 'true', DOME_PUBLISH_DE: 'true' })).toEqual(['en', 'it', 'nl', 'de'])
    expect(publishedLocales({ DOME_PUBLISH_DE: 'true', DOME_PUBLISH_IT: 'false' })).toEqual(['en', 'de'])
  })

  // The settings this PR ships (wrangler.jsonc and the deploy workflow).
  it('publishes everything on staging and keeps Dutch and German out of production', () => {
    const staging = { DOME_PUBLISH_IT: 'true', DOME_PUBLISH_NL: 'true', DOME_PUBLISH_DE: 'true' }
    const production = { DOME_PUBLISH_IT: 'true', DOME_PUBLISH_NL: 'false', DOME_PUBLISH_DE: 'false' }
    expect(publishedLocales(staging)).toEqual(['en', 'it', 'nl', 'de'])
    expect(publishedLocales(production)).toEqual(['en', 'it'])
  })

  it('reads only the publish flags from a Worker environment', () => {
    const env = { ASSETS: {}, DOME_PUBLISH_NL: 'true', VERCEL: '1', VERCEL_ENV: 'production' }
    expect(publishFlags(env)).toEqual({ DOME_PUBLISH_EN: undefined, DOME_PUBLISH_IT: undefined, DOME_PUBLISH_NL: 'true', DOME_PUBLISH_DE: undefined })
    expect(publishedLocales(publishFlags(env))).toEqual(['en', 'it', 'nl'])
  })
})
