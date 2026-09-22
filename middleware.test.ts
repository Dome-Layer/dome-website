import { afterEach, describe, expect, it, vi } from 'vitest'
import middleware, { config } from './middleware'
import { ROUTE_IDS, localizedHref } from './src/i18n/routes'

const CHROME = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0 Safari/537.36'

const get = (path: string, headers: Record<string, string>) =>
  middleware(new Request(`https://domelayer.com${path}`, { headers: { 'user-agent': CHROME, ...headers } }))

afterEach(() => vi.unstubAllEnvs())

describe('middleware', () => {
  it('matches exactly the English public paths', () => {
    expect([...config.matcher].sort()).toEqual(ROUTE_IDS.map((id) => localizedHref(id, 'en')).sort())
  })

  it('redirects once with a 307, keeping the query string and setting the cookie', () => {
    const res = get('/tools/agent-flow?utm_source=email', { 'accept-language': 'it-IT,it;q=0.9' })
    expect(res.status).toBe(307)
    expect(res.headers.get('location')).toBe('/it/strumenti/agent-flow?utm_source=email')
    expect(res.headers.get('set-cookie')).toMatch(/^dome_locale=it; Path=\/; Max-Age=31536000; SameSite=Lax; Secure$/)
    expect(res.headers.get('cache-control')).toBe('private, no-store')
  })

  it('lets everything else through to the static page', () => {
    const res = get('/tools/agent-flow', { 'accept-language': 'it-IT', cookie: 'dome_locale=en' })
    expect(res.status).toBe(200)
    expect(res.headers.get('x-middleware-next')).toBe('1')
  })

  it('stays inert in a production deployment while Italian is unpublished', () => {
    vi.stubEnv('VERCEL', '1')
    vi.stubEnv('VERCEL_ENV', 'production')
    expect(get('/', { 'accept-language': 'it-IT' }).headers.get('x-middleware-next')).toBe('1')
  })
})
