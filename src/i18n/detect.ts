import { readLocaleCookie } from './cookie'
import { DEFAULT_LOCALE, type Locale } from './locales'
import { localeFromPath, localizedHref, routeIdFromPath } from './routes'

/**
 * Crawlers, link unfurlers and AI agents. They must always get the URL they asked for, so every
 * locale stays indexable. Deliberately broad: a missed human only means no automatic redirect.
 */
const BOT_UA =
  /bot|crawl|spider|slurp|archiver|facebookexternalhit|embedly|preview|lighthouse|headless|whatsapp|telegram|slack|discord|skype|pinterest|quora|perplexity|anthropic|claude|chatgpt|openai|gptbot|cohere|bytespider|ccbot|diffbot|yandex|baidu|duckduck|semrush|ahrefs|mj12|petal|validator/i

export function isBot(userAgent: string | null | undefined): boolean {
  return !userAgent || BOT_UA.test(userAgent)
}

/** Primary language subtag of the highest-weighted Accept-Language entry, e.g. "it" for "it-IT,en;q=0.8". */
export function preferredLanguage(acceptLanguage: string | null | undefined): string | undefined {
  if (!acceptLanguage) return undefined
  const ranked = acceptLanguage
    .split(',')
    .map((entry, index) => {
      const [tag, ...params] = entry.trim().split(';')
      const q = params.map((p) => p.trim()).find((p) => p.startsWith('q='))
      return { tag: tag.trim().toLowerCase(), q: q ? Number(q.slice(2)) : 1, index }
    })
    .filter(({ tag, q }) => tag && tag !== '*' && Number.isFinite(q) && q > 0)
    .sort((a, b) => b.q - a.q || a.index - b.index)
  return ranked[0]?.tag.split('-')[0]
}

export interface LocaleRedirectInput {
  method: string
  pathname: string
  cookie: string | null
  acceptLanguage: string | null
  userAgent: string | null
  /** The locales published where the request is served (see publishedLocales in locales.ts). */
  published: readonly Locale[]
}

export interface LocaleRedirect {
  locale: Locale
  /** Path of the counterpart page in that locale, without the query string. */
  path: string
}

/**
 * Where a first-time visitor whose browser prefers another published language should be sent,
 * or undefined to serve the page as asked. Only an unprefixed public page, requested with GET by
 * a browser that has no language cookie and whose top preference is a published locale other than
 * English, is redirected. A manual choice (the cookie) always wins, and a locale deep link such as
 * /it/... is never touched. Regional variants count as the language: de-AT and de-CH go to German.
 */
export function localeRedirectTarget(input: LocaleRedirectInput): LocaleRedirect | undefined {
  if (input.method !== 'GET') return undefined
  if (readLocaleCookie(input.cookie)) return undefined
  if (isBot(input.userAgent)) return undefined
  const preferred = preferredLanguage(input.acceptLanguage)
  const locale = input.published.find((l) => l !== DEFAULT_LOCALE && l === preferred)
  if (!locale) return undefined
  const id = routeIdFromPath(input.pathname)
  if (!id || localeFromPath(input.pathname) !== DEFAULT_LOCALE) return undefined
  return { locale, path: localizedHref(id, locale) }
}
