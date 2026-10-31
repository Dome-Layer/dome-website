export const LOCALES = ['en', 'it', 'nl', 'de'] as const
export type Locale = (typeof LOCALES)[number]

/** English lives at the site root and is the x-default; other locales sit under /<locale>/. */
export const DEFAULT_LOCALE: Locale = 'en'

/** Functional cookie holding the visitor's language choice (12 months). */
export const LOCALE_COOKIE = 'dome_locale'
export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365

export const OG_LOCALE: Record<Locale, string> = { en: 'en_GB', it: 'it_IT', nl: 'nl_NL', de: 'de_DE' }
export const CONTENT_LANGUAGE: Record<Locale, string> = { en: 'en-GB', it: 'it-IT', nl: 'nl-NL', de: 'de-DE' }

/** Each language's name in that language, as the switcher and llms.txt show it. */
export const LOCALE_NAMES: Record<Locale, string> = { en: 'English', it: 'Italiano', nl: 'Nederlands', de: 'Deutsch' }

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (LOCALES as readonly string[]).includes(value)
}

type Env = Record<string, string | undefined>

/** The environment variable that publishes a locale, for example `DOME_PUBLISH_NL`. */
export function publishFlag(locale: Locale): string {
  return `DOME_PUBLISH_${locale.toUpperCase()}`
}

/**
 * Whether each locale is published when its flag is not set. Italian has been live since
 * 2026-09-28, Dutch and German since 2026-11. A new locale starts at false, so a build or a Worker
 * that misses its flag cannot publish it before it is ready.
 */
const PUBLISHED_BY_DEFAULT: Record<Locale, boolean> = { en: true, it: true, nl: true, de: true }

/**
 * Whether a locale is published in this build or runtime. English always is.
 *
 * An unpublished locale leaves no trace: none of its pages are prerendered, the switcher does not
 * offer it, the redirect never sends anyone to it, and the sitemap, hreflang and llms.txt leave it
 * out. `DOME_PUBLISH_<LOCALE>=true|false` (for example `DOME_PUBLISH_NL`) forces it either way.
 * Otherwise a locale that is unpublished by default stays unpublished, and a published one keeps
 * Italian's original rule: a Vercel build publishes it on previews only, any other build publishes it.
 */
export function isLocalePublished(locale: Locale, env: Env): boolean {
  if (locale === DEFAULT_LOCALE) return true
  const flag = env[publishFlag(locale)]
  if (flag === 'true') return true
  if (flag === 'false') return false
  if (!PUBLISHED_BY_DEFAULT[locale]) return false
  if (env.VERCEL === '1') return env.VERCEL_ENV === 'preview'
  return true
}

/** The published locales, English first, in `LOCALES` order. */
export function publishedLocales(env: Env): Locale[] {
  return LOCALES.filter((locale) => isLocalePublished(locale, env))
}

/** Only the publish flags of an environment, for passing a Worker's bindings to `publishedLocales`. */
export function publishFlags(env: object): Env {
  const source = env as Env
  return Object.fromEntries(LOCALES.map((locale) => [publishFlag(locale), source[publishFlag(locale)]]))
}
