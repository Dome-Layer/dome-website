import { afterEach, describe, expect, it, vi } from 'vitest'
import { MESSAGES } from '../i18n/messages'
import { LOCALES } from '../i18n/locales'
import { TRACKER_SRC, beforeSend, startAnalytics, trackConversationCta } from './analytics'

afterEach(() => {
  document.head.querySelectorAll(`script[src="${TRACKER_SRC}"]`).forEach((s) => s.remove())
  delete window.umami
  delete window.domeUmamiBeforeSend
  document.body.innerHTML = ''
})

describe('beforeSend', () => {
  it('drops the query and hash from the sign-in routes', () => {
    expect(beforeSend('event', { url: '/auth/callback?code=secret#x' })).toMatchObject({ url: '/auth/callback' })
    expect(beforeSend('event', { url: 'https://domelayer.com/login?redirect=https%3A%2F%2Fanalyzer.domelayer.com' })).toMatchObject({
      url: '/login',
    })
  })

  it('keeps the query on public pages, where UTM tags live', () => {
    const payload = { url: '/dome/llm-council?utm_source=linkedin' }
    expect(beforeSend('event', payload)).toBe(payload)
  })
})

describe('startAnalytics', () => {
  it('does nothing without a website id', () => {
    startAnalytics('')
    expect(document.querySelector(`script[src="${TRACKER_SRC}"]`)).toBeNull()
  })

  it('loads our own copy of the tracker once, reporting only from domelayer.com, honouring DNT', () => {
    startAnalytics('site-id')
    startAnalytics('site-id')
    const scripts = document.querySelectorAll<HTMLScriptElement>(`script[src="${TRACKER_SRC}"]`)
    expect(scripts).toHaveLength(1)
    expect(scripts[0].dataset).toMatchObject({
      websiteId: 'site-id',
      domains: 'domelayer.com',
      doNotTrack: 'true',
      beforeSend: 'domeUmamiBeforeSend',
    })
    expect(window.domeUmamiBeforeSend).toBe(beforeSend)
  })
})

describe('demo_cta_click', () => {
  function clickLink(href: string) {
    const track = vi.fn()
    window.umami = { track }
    document.body.innerHTML = `<a href="${href}"><span>Book</span></a>`
    const span = document.querySelector('span')!
    trackConversationCta({ target: span } as unknown as MouseEvent)
    return track
  }

  it('counts links to the contact page, and says when they ask for demo access', () => {
    expect(clickLink('/contact')).toHaveBeenCalledWith('demo_cta_click', { from: '/', to: 'contact' })
    expect(clickLink('/it/contatti?topic=demo')).toHaveBeenCalledWith('demo_cta_click', { from: '/', to: 'demo' })
  })

  it('ignores other links', () => {
    expect(clickLink('/about')).not.toHaveBeenCalled()
    expect(clickLink('https://francescoprodomo.com')).not.toHaveBeenCalled()
  })
})

describe('the policy says what the code does', () => {
  for (const locale of LOCALES) {
    it(`names Umami on the cookie page and in the privacy policy, and the notice no longer says "no analytics" (${locale})`, () => {
      const m = MESSAGES[locale]
      expect(JSON.stringify(m.pages.cookies.sections)).toContain('Umami')
      expect(JSON.stringify(m.pages.privacy.sections)).toContain('Umami Software, Inc.')
      expect(m.cookieNotice.body).not.toMatch(/no analytics|nessuna analisi/i)
    })
  }
})
