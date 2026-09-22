export const LOCALES = ['en', 'it'] as const
export type Locale = (typeof LOCALES)[number]

/** English lives at the site root and is the x-default; other locales sit under /<locale>/. */
export const DEFAULT_LOCALE: Locale = 'en'

/** Functional cookie holding the visitor's language choice (12 months). */
export const LOCALE_COOKIE = 'dome_locale'
export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365

export const OG_LOCALE: Record<Locale, string> = { en: 'en_GB', it: 'it_IT' }
export const CONTENT_LANGUAGE: Record<Locale, string> = { en: 'en-GB', it: 'it-IT' }

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (LOCALES as readonly string[]).includes(value)
}

type Env = Record<string, string | undefined>

/**
 * Whether the Italian site is published in this build or runtime.
 *
 * Italian stays dormant in production until its pages are translated: no /it/ pages are
 * prerendered, the switcher is hidden, the redirect is off and the sitemap lists English only.
 * `DOME_PUBLISH_IT=true|false` forces it either way. Otherwise a Vercel build publishes it on
 * previews (staging) only, and a build outside Vercel (local, CI) publishes it so it is tested.
 * An unexpected Vercel environment falls back to unpublished.
 */
export function isItalianPublished(env: Env): boolean {
  if (env.DOME_PUBLISH_IT === 'true') return true
  if (env.DOME_PUBLISH_IT === 'false') return false
  if (env.VERCEL === '1') return env.VERCEL_ENV === 'preview'
  return true
}

export function publishedLocales(italianPublished: boolean): Locale[] {
  return italianPublished ? ['en', 'it'] : ['en']
}
