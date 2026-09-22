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
  italianPublished: true,
  ...overrides,
})

describe('localeRedirectTarget', () => {
  it('sends a first-time Italian browser to the Italian counterpart', () => {
    expect(localeRedirectTarget(request())).toBe('/it/dome/llm-council')
    expect(localeRedirectTarget(request({ pathname: '/' }))).toBe('/it')
  })

  it('respects a stored choice, in either language', () => {
    expect(localeRedirectTarget(request({ cookie: 'dome_locale=en' }))).toBeUndefined()
    expect(localeRedirectTarget(request({ cookie: 'theme=dark; dome_locale=it' }))).toBeUndefined()
  })

  it('ignores an invalid cookie value', () => {
    expect(localeRedirectTarget(request({ cookie: 'dome_locale=fr' }))).toBe('/it/dome/llm-council')
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
    expect(localeRedirectTarget(request({ pathname: '/login' }))).toBeUndefined()
    expect(localeRedirectTarget(request({ pathname: '/app' }))).toBeUndefined()
    expect(localeRedirectTarget(request({ pathname: '/api/contact' }))).toBeUndefined()
  })

  it('only redirects GET, and only while Italian is published', () => {
    expect(localeRedirectTarget(request({ method: 'POST' }))).toBeUndefined()
    expect(localeRedirectTarget(request({ italianPublished: false }))).toBeUndefined()
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
  })
})
