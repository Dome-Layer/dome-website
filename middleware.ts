import { localeCookie } from './src/i18n/cookie'
import { localeRedirectTarget } from './src/i18n/detect'
import { isItalianPublished } from './src/i18n/locales'

/**
 * Vercel Routing Middleware: sends a first-time visitor whose browser prefers Italian from an
 * English page to its Italian counterpart, once. All the rules live in localeRedirectTarget.
 *
 * The matcher lists the English public paths from src/i18n/routes.ts, so the middleware never runs
 * for assets, the API, /it/ pages or the auth routes. It must be a literal (Vercel reads it
 * statically); middleware.test.ts checks it against the route manifest.
 */
export const config = {
  matcher: [
    '/',
    '/tools/process-analyzer',
    '/tools/data-intelligence',
    '/tools/llm-council',
    '/tools/document-intelligence',
    '/tools/governance-dashboard',
    '/tools/agent-flow',
    '/privacy',
    '/terms',
  ],
}

// What next() from @vercel/functions returns: an empty response that tells Vercel to carry on
// serving the request. Built here to avoid that package's dependency tree.
const continueRequest = () => new Response(null, { headers: { 'x-middleware-next': '1' } })

export default function middleware(request: Request): Response {
  const url = new URL(request.url)
  const target = localeRedirectTarget({
    method: request.method,
    pathname: url.pathname,
    cookie: request.headers.get('cookie'),
    acceptLanguage: request.headers.get('accept-language'),
    userAgent: request.headers.get('user-agent'),
    italianPublished: isItalianPublished(process.env),
  })
  if (!target) return continueRequest()

  return new Response(null, {
    status: 307,
    headers: {
      // Keep the query string: campaign links carry UTM tags.
      Location: target + url.search,
      // Set with the redirect so it happens once; the switcher overwrites it on a manual choice.
      'Set-Cookie': localeCookie('it'),
      'Cache-Control': 'private, no-store',
      Vary: 'Accept-Language, Cookie',
    },
  })
}
