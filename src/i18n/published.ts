import { DEFAULT_LOCALE, type Locale } from './locales'

/**
 * The locales published in this build, English first. Resolved at build time in vite.config.ts
 * from publishedLocales(process.env); see isLocalePublished in locales.ts.
 */
export const PUBLISHED_LOCALES: readonly Locale[] = __DOME_PUBLISHED_LOCALES__

export function isPublished(locale: Locale): boolean {
  return locale === DEFAULT_LOCALE || PUBLISHED_LOCALES.includes(locale)
}
