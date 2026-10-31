import { describe, expect, it, vi } from 'vitest'
import worker, { type Env } from './index'
import siteConfig from '../vercel.json'
import { findRedirect, findRewrite, headersFor, type HeaderRule, type RedirectRule } from './routing'

const CHROME = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0 Safari/537.36'

// A stand-in for the static assets binding: echoes the path it was asked for.
function makeEnv(overrides: Partial<Env> = {}): Env {
  const ASSETS = {
    fetch: vi.fn(async (input: Request | string) => {
      const url = new URL(typeof input === 'string' ? input : input.url)
      return new Response(`asset:${url.pathname}`, { status: 200, headers: { 'Content-Type': 'text/html' } })
    }),
  }
  return { ASSETS, DOME_PUBLISH_IT: 'true', ENVIRONMENT: 'production', ...overrides } as unknown as Env
}

const get = (url: string, headers: Record<string, string> = {}, env = makeEnv()) =>
  worker.fetch(new Request(url, { headers: { 'user-agent': CHROME, ...headers } }), env)

describe('routing (vercel.json semantics)', () => {
  const redirects = siteConfig.redirects as RedirectRule[]

  it('redirects /tools/:slug permanently to /dome/:slug, keeping the query', () => {
    expect(findRedirect(redirects, new URL('https://domelayer.com/tools/llm-council?utm_source=x'))).toEqual({
      location: '/dome/llm-council?utm_source=x',
      status: 308,
    })
    expect(findRedirect(redirects, new URL('https://domelayer.com/tools'))?.location).toBe('/dome')
    expect(findRedirect(redirects, new URL('https://domelayer.com/it/strumenti/x'))?.location).toBe('/it/dome/x')
  })

  it('sends www to the apex only for the www host', () => {
    expect(findRedirect(redirects, new URL('https://www.domelayer.com/about'))?.location).toBe(
      'https://domelayer.com/about',
    )
    expect(findRedirect(redirects, new URL('https://domelayer.com/about'))).toBeNull()
  })

  it('does not treat /tools/a/b as a single :slug', () => {
    expect(findRedirect(redirects, new URL('https://domelayer.com/tools/a/b'))).toBeNull()
  })

  it('rewrites the client-only routes to the SPA fallback', () => {
    for (const path of ['/login', '/auth/callback', '/app']) {
      expect(findRewrite(siteConfig.rewrites, new URL(`https://domelayer.com${path}`))).toBe('/__spa-fallback.html')
    }
    expect(findRewrite(siteConfig.rewrites, new URL('https://domelayer.com/about'))).toBeNull()
  })

  it('applies header rules in order, host conditions included', () => {
    const rules = siteConfig.headers as HeaderRule[]
    const prod = headersFor(rules, new URL('https://domelayer.com/'))
    expect(prod['Content-Security-Policy']).toContain("default-src 'self'")
    expect(prod['X-Frame-Options']).toBe('DENY')
    expect(prod['X-Robots-Tag']).toBeUndefined()
    expect(headersFor(rules, new URL('https://staging.domelayer.com/'))['X-Robots-Tag']).toBe('noindex')
    expect(headersFor(rules, new URL('https://domelayer.com/llms.txt'))['Content-Type']).toBe('text/plain; charset=utf-8')
    expect(headersFor(rules, new URL('https://domelayer.com/favicon.svg'))['Cache-Control']).toContain('max-age=3600')
  })
})

describe('worker', () => {
  it('serves a page from the assets with the site headers', async () => {
    const res = await get('https://domelayer.com/about', { 'accept-language': 'en' })
    expect(res.status).toBe(200)
    expect(await res.text()).toBe('asset:/about')
    expect(res.headers.get('content-security-policy')).toContain("frame-ancestors 'none'")
    expect(res.headers.get('x-robots-tag')).toBeNull()
  })

  it('drops a trailing slash with a permanent redirect, keeping the query', async () => {
    const res = await get('https://domelayer.com/it/chi-siamo/?utm_source=email', { 'accept-language': 'en' })
    expect(res.status).toBe(308)
    expect(res.headers.get('location')).toBe('/it/chi-siamo?utm_source=email')
  })

  it('does the first-visit locale redirect the Vercel middleware does', async () => {
    const res = await get('https://domelayer.com/dome/agent-flow?utm_source=email', { 'accept-language': 'it-IT,it;q=0.9' })
    expect(res.status).toBe(307)
    expect(res.headers.get('location')).toBe('/it/dome/agent-flow?utm_source=email')
    expect(res.headers.get('set-cookie')).toMatch(/^dome_locale=it; Path=\/; Max-Age=31536000; SameSite=Lax; Secure$/)
  })

  it('sends Dutch and German browsers to their language once those are published', async () => {
    const staging = makeEnv({ DOME_PUBLISH_NL: 'true', DOME_PUBLISH_DE: 'true' })
    const nl = await get('https://domelayer.com/about?utm_source=email', { 'accept-language': 'nl-NL,nl;q=0.9,en;q=0.8' }, staging)
    expect(nl.status).toBe(307)
    expect(nl.headers.get('location')).toBe('/nl/over-ons?utm_source=email')
    expect(nl.headers.get('set-cookie')).toMatch(/^dome_locale=nl;/)
    const de = await get('https://domelayer.com/case-studies', { 'accept-language': 'de-AT,de;q=0.9' }, staging)
    expect(de.headers.get('location')).toBe('/de/fallstudien')
    expect(de.headers.get('set-cookie')).toMatch(/^dome_locale=de;/)
  })

  it('never sends anyone to a locale whose flag is false', async () => {
    for (const env of [makeEnv({ DOME_PUBLISH_NL: 'false', DOME_PUBLISH_DE: 'false' })]) {
      for (const language of ['nl-NL,nl;q=0.9', 'de-DE,de;q=0.9']) {
        const res = await get('https://domelayer.com/about', { 'accept-language': language }, env)
        expect(res.status).toBe(200)
        expect(res.headers.get('set-cookie')).toBeNull()
      }
    }
  })

  it('leaves the page alone once a language is chosen, or while Italian is unpublished', async () => {
    expect((await get('https://domelayer.com/', { 'accept-language': 'it-IT', cookie: 'dome_locale=en' })).status).toBe(200)
    const unpublished = makeEnv({ DOME_PUBLISH_IT: 'false' })
    expect((await get('https://domelayer.com/', { 'accept-language': 'it-IT' }, unpublished)).status).toBe(200)
  })

  it('answers an unknown address with the 404 page and the 404 status', async () => {
    // Assets that exist answer 200; anything else 404, as the assets binding does.
    const pages = new Set(['/about', '/404', '/it/404'])
    const ASSETS = {
      fetch: vi.fn(async (input: Request | string) => {
        const { pathname } = new URL(typeof input === 'string' ? input : input.url)
        return pages.has(pathname)
          ? new Response(`asset:${pathname}`, { status: 200, headers: { 'Content-Type': 'text/html' } })
          : new Response(null, { status: 404 })
      }),
    }
    const env = makeEnv({ ASSETS } as unknown as Partial<Env>)
    const en = await get('https://domelayer.com/nope', { 'accept-language': 'en' }, env)
    expect(en.status).toBe(404)
    expect(await en.text()).toBe('asset:/404')
    expect(en.headers.get('content-security-policy')).toContain("frame-ancestors 'none'")
    const it = await get('https://domelayer.com/it/nulla', { 'accept-language': 'en' }, env)
    expect(it.status).toBe(404)
    expect(await it.text()).toBe('asset:/it/404')
    const direct = await get('https://domelayer.com/404', { 'accept-language': 'en' }, env)
    expect(direct.status).toBe(404)
    expect((await get('https://domelayer.com/about', { 'accept-language': 'en' }, env)).status).toBe(200)
    const unpublished = makeEnv({ ASSETS, DOME_PUBLISH_IT: 'false' } as unknown as Partial<Env>)
    expect(await (await get('https://domelayer.com/it/nulla', {}, unpublished)).text()).toBe('asset:/404')
  })

  it('answers under /nl and /de with their own 404 only while they are published', async () => {
    // Production: the Dutch and German pages and 404s are not in the build, so /nl and /de are unknown.
    const production = new Set(['/404', '/it/404'])
    const staging = new Set([...production, '/nl/404', '/de/404', '/nl/over-ons'])
    const assets = (pages: Set<string>) => ({
      fetch: vi.fn(async (input: Request | string) => {
        const { pathname } = new URL(typeof input === 'string' ? input : input.url)
        return pages.has(pathname) ? new Response(`asset:${pathname}`, { status: 200 }) : new Response(null, { status: 404 })
      }),
    })
    const prod = makeEnv({ ASSETS: assets(production), DOME_PUBLISH_NL: 'false', DOME_PUBLISH_DE: 'false' } as unknown as Partial<Env>)
    for (const path of ['/nl', '/nl/over-ons', '/de/kontakt']) {
      const res = await get(`https://domelayer.com${path}`, { 'accept-language': 'en' }, prod)
      expect(res.status).toBe(404)
      expect(await res.text()).toBe('asset:/404')
    }
    const stag = makeEnv({ ASSETS: assets(staging), DOME_PUBLISH_NL: 'true', DOME_PUBLISH_DE: 'true' } as unknown as Partial<Env>)
    expect(await (await get('https://domelayer.com/nl/over-ons', {}, stag)).text()).toBe('asset:/nl/over-ons')
    const nl = await get('https://domelayer.com/nl/bestaat-niet', {}, stag)
    expect(nl.status).toBe(404)
    expect(await nl.text()).toBe('asset:/nl/404')
    expect(await (await get('https://domelayer.com/de/gibt-es-nicht', {}, stag)).text()).toBe('asset:/de/404')
  })

  it('serves /login from the SPA fallback', async () => {
    expect(await (await get('https://domelayer.com/login')).text()).toBe('asset:/__spa-fallback')
  })

  it('marks staging and workers.dev as noindex', async () => {
    const staging = makeEnv({ DOME_NOINDEX: 'true' })
    expect((await get('https://staging.domelayer.com/', {}, staging)).headers.get('x-robots-tag')).toBe('noindex')
    expect((await get('https://dome-website.example.workers.dev/')).headers.get('x-robots-tag')).toBe('noindex')
  })

  it('answers the contact endpoint without sending mail for bad input', async () => {
    const env = makeEnv({ ENVIRONMENT: 'staging' })
    const options = await worker.fetch(new Request('https://domelayer.com/api/contact', { method: 'OPTIONS' }), env)
    expect(options.status).toBe(204)
    expect(options.headers.get('access-control-allow-origin')).toBe('https://domelayer.com')
    const getRes = await worker.fetch(new Request('https://domelayer.com/api/contact'), env)
    expect(getRes.status).toBe(405)
    const post = (body: unknown) =>
      worker.fetch(
        new Request('https://domelayer.com/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        }),
        env,
      )
    expect((await post({})).status).toBe(400)
    expect(await (await post({ email: 'nope', message: 'x' })).json()).toEqual({ error: 'Invalid email address' })
    expect((await post({ email: 123, message: 'x' })).status).toBe(400)
    // The honeypot answers success without doing anything.
    expect(await (await post({ hp: 'bot', email: 'a@b.co', message: 'x' })).json()).toEqual({ success: true })
  })

  it('uses the rate-limiting binding keyed by the client IP', async () => {
    const limit = vi.fn(async () => ({ success: false }))
    const env = makeEnv({ CONTACT_RATE_LIMITER: { limit } as unknown as RateLimit })
    const res = await worker.fetch(
      new Request('https://domelayer.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'cf-connecting-ip': '203.0.113.7' },
        body: JSON.stringify({ email: 'a@b.co', message: 'hello' }),
      }),
      env,
    )
    expect(res.status).toBe(429)
    expect(res.headers.get('retry-after')).toBe('60')
    expect(limit).toHaveBeenCalledWith({ key: '203.0.113.7' })

    limit.mockResolvedValueOnce({ success: true })
    const allowed = await worker.fetch(
      new Request('https://domelayer.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'cf-connecting-ip': '203.0.113.7' },
        body: JSON.stringify({ email: 'not-an-email', message: 'hello' }),
      }),
      env,
    )
    expect(allowed.status).toBe(400)
  })

  it('fails closed in production when the rate limiter is not configured', async () => {
    const res = await worker.fetch(
      new Request('https://domelayer.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: 'a@b.co', message: 'hello' }),
      }),
      makeEnv({ ENVIRONMENT: 'production' }),
    )
    expect(res.status).toBe(429)
  })
})
