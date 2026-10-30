import { describe, expect, it } from 'vitest'
import { readLocaleCookie } from './cookie'
import { isBot, localeRedirectTarget, preferredLanguage, type LocaleRedirectInput } from './detect'

const CHROME = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0 Safari/537.36'

const request = (overrides: Partial<LocaleRedirectInput> = {}): LocaleRedirectInput => ({
  method: 'GET',
  pathname: '/dome/llm-council',
  cookie: null,
  acceptLanguage: 'it-IT,it;q=0.9,en;q=0.8',
  userAgent: CHROME,
  published: ['en', 'it', 'nl', 'de'],
  ...overrides,
})

const path = (input: LocaleRedirectInput) => localeRedirectTarget(input)?.path

describe('localeRedirectTarget', () => {
  it('sends a first-time Italian browser to the Italian counterpart', () => {
    expect(localeRedirectTarget(request())).toEqual({ locale: 'it', path: '/it/dome/llm-council' })
    expect(path(request({ pathname: '/' }))).toBe('/it')
  })

  it('sends Dutch and German browsers to their counterparts, regional variants included', () => {
    expect(localeRedirectTarget(request({ acceptLanguage: 'nl-NL,nl;q=0.9,en;q=0.8' }))).toEqual({ locale: 'nl', path: '/nl/dome/llm-council' })
    expect(path(request({ acceptLanguage: 'nl-BE', pathname: '/contact' }))).toBe('/nl/contact')
    expect(localeRedirectTarget(request({ acceptLanguage: 'de-DE,de;q=0.9', pathname: '/about' }))).toEqual({ locale: 'de', path: '/de/ueber-uns' })
    expect(path(request({ acceptLanguage: 'de-CH', pathname: '/' }))).toBe('/de')
  })

  it('only sends visitors to published locales', () => {
    const production = { published: ['en', 'it'] as const }
    expect(localeRedirectTarget(request({ ...production, acceptLanguage: 'nl-NL,nl;q=0.9' }))).toBeUndefined()
    expect(localeRedirectTarget(request({ ...production, acceptLanguage: 'de-DE' }))).toBeUndefined()
    expect(path(request({ ...production }))).toBe('/it/dome/llm-council')
    expect(path(request({ published: ['en', 'de'], acceptLanguage: 'de' }))).toBe('/de/dome/llm-council')
    // Only the top preference counts: a German-first browser that also reads Italian is not sent to Italian.
    expect(localeRedirectTarget(request({ published: ['en', 'it'], acceptLanguage: 'de-DE,it;q=0.8' }))).toBeUndefined()
  })

  it('respects a stored choice, in either language', () => {
    expect(localeRedirectTarget(request({ cookie: 'dome_locale=en' }))).toBeUndefined()
    expect(localeRedirectTarget(request({ cookie: 'theme=dark; dome_locale=it' }))).toBeUndefined()
  })

  it('ignores an invalid cookie value', () => {
    expect(path(request({ cookie: 'dome_locale=fr' }))).toBe('/it/dome/llm-council')
    expect(localeRedirectTarget(request({ cookie: 'dome_locale=nl', acceptLanguage: 'de' }))).toBeUndefined()
  })

  it('never redirects crawlers or AI agents', () => {
    for (const ua of [
      'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
      'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; GPTBot/1.2; +https://openai.com/gptbot)',
      'Mozilla/5.0 (compatible; ClaudeBot/1.0; +claudebot@anthropic.com)',
      'facebookexternalhit/1.1',
      '',
    ]) {
      expect(localeRedirectTarget(request({ userAgent: ua }))).toBeUndefined()
    }
  })

  it('leaves English-first browsers alone', () => {
    expect(localeRedirectTarget(request({ acceptLanguage: 'en-GB,en;q=0.9,it;q=0.8' }))).toBeUndefined()
    expect(localeRedirectTarget(request({ acceptLanguage: null }))).toBeUndefined()
  })

  it('never touches Italian deep links, auth routes or unknown paths', () => {
    expect(localeRedirectTarget(request({ pathname: '/it/dome/llm-council' }))).toBeUndefined()
    expect(localeRedirectTarget(request({ pathname: '/nl/dome/llm-council', acceptLanguage: 'de' }))).toBeUndefined()
    expect(localeRedirectTarget(request({ pathname: '/login' }))).toBeUndefined()
    expect(localeRedirectTarget(request({ pathname: '/app' }))).toBeUndefined()
    expect(localeRedirectTarget(request({ pathname: '/api/contact' }))).toBeUndefined()
  })

  it('only redirects GET, and only while the locale is published', () => {
    expect(localeRedirectTarget(request({ method: 'POST' }))).toBeUndefined()
    expect(localeRedirectTarget(request({ published: ['en'] }))).toBeUndefined()
  })
})

describe('preferredLanguage', () => {
  it('picks the highest weight, keeping header order on ties', () => {
    expect(preferredLanguage('en;q=0.5, it-IT;q=0.9')).toBe('it')
    expect(preferredLanguage('it, en')).toBe('it')
    expect(preferredLanguage('*, en;q=0.1')).toBe('en')
    expect(preferredLanguage('it;q=0, en')).toBe('en')
    expect(preferredLanguage('')).toBeUndefined()
  })
})

describe('helpers', () => {
  it('treats a missing user agent as a bot', () => {
    expect(isBot(null)).toBe(true)
    expect(isBot(CHROME)).toBe(false)
  })

  it('reads the locale cookie among others', () => {
    expect(readLocaleCookie('a=1; dome_locale=it; b=2')).toBe('it')
    expect(readLocaleCookie('xdome_locale=it')).toBeUndefined()
    expect(readLocaleCookie('dome_locale=de')).toBe('de')
    expect(readLocaleCookie('dome_locale=fr')).toBeUndefined()
  })
})
