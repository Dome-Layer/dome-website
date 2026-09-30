import siteConfig from '../vercel.json';
import { localeCookie } from '../src/i18n/cookie';
import { localeRedirectTarget } from '../src/i18n/detect';
import { isItalianPublished } from '../src/i18n/locales';
import { handleContact, type ContactEnv } from './contact';
import {
  findRedirect,
  findRewrite,
  headersFor,
  type HeaderRule,
  type RedirectRule,
  type RewriteRule,
} from './routing';

/**
 * Cloudflare Worker for domelayer.com (Sprint H phase 1). It runs only for page routes and the API
 * (see run_worker_first in wrangler.jsonc); /assets/* and /media/* are served straight from the
 * static assets, which do not count against the free plan's daily request limit.
 *
 * Order matches Vercel: redirects, then the contact function, then the locale redirect that
 * middleware.ts does on Vercel, then rewrites and the static page, with vercel.json's header rules
 * on every response.
 */

export interface Env extends ContactEnv {
  ASSETS: Fetcher;
  DOME_PUBLISH_IT?: string;
  /** "true" on staging: every response gets X-Robots-Tag: noindex. */
  DOME_NOINDEX?: string;
}

const redirects = siteConfig.redirects as RedirectRule[];
const rewrites = siteConfig.rewrites as RewriteRule[];
const headerRules = siteConfig.headers as HeaderRule[];

function withSiteHeaders(response: Response, url: URL, env: Env): Response {
  const result = new Response(response.body, response);
  for (const [key, value] of Object.entries(headersFor(headerRules, url))) {
    result.headers.set(key, value);
  }
  // vercel.json's noindex rules name Vercel hosts; these are the Cloudflare equivalents.
  if (env.DOME_NOINDEX === 'true' || url.host.endsWith('.workers.dev')) {
    result.headers.set('X-Robots-Tag', 'noindex');
  }
  return result;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    const redirect = findRedirect(redirects, url);
    if (redirect) {
      return withSiteHeaders(
        new Response(null, { status: redirect.status, headers: { Location: redirect.location } }),
        url,
        env,
      );
    }

    if (url.pathname === '/api/contact') {
      return withSiteHeaders(await handleContact(request, env), url, env);
    }

    const target = localeRedirectTarget({
      method: request.method,
      pathname: url.pathname,
      cookie: request.headers.get('cookie'),
      acceptLanguage: request.headers.get('accept-language'),
      userAgent: request.headers.get('user-agent'),
      italianPublished: isItalianPublished({ DOME_PUBLISH_IT: env.DOME_PUBLISH_IT }),
    });
    if (target) {
      return withSiteHeaders(
        new Response(null, {
          status: 307,
          headers: {
            // Keep the query string: campaign links carry UTM tags.
            Location: target + url.search,
            // Set with the redirect so it happens once; the switcher overwrites it on a manual choice.
            'Set-Cookie': localeCookie('it'),
            'Cache-Control': 'private, no-store',
            Vary: 'Accept-Language, Cookie',
          },
        }),
        url,
        env,
      );
    }

    // html_handling serves foo.html at /foo and redirects /foo.html there, so an internal rewrite
    // to an .html file must ask for the extensionless path or the visitor gets that redirect.
    const rewrite = findRewrite(rewrites, url)?.replace(/\.html$/, '');
    const assetRequest = rewrite ? new Request(new URL(rewrite, url), request) : request;
    return withSiteHeaders(await env.ASSETS.fetch(assetRequest), url, env);
  },
} satisfies ExportedHandler<Env>;
