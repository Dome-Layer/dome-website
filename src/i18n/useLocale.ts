import { useLocation } from 'react-router'
import type { Locale } from './locales'
import { MESSAGES, type Messages } from './messages'
import { isPublished } from './published'
import { localeFromPath } from './routes'

/**
 * The locale of the current page, taken from its URL. Client-only routes (/login, /app,
 * /auth/callback) have no prefix and read as English until they get their own strings (plan 1d).
 * A path under an unpublished locale reads as English too.
 */
export function useLocale(): Locale {
  const { pathname } = useLocation()
  const locale = localeFromPath(pathname)
  return isPublished(locale) ? locale : 'en'
}

export function useMessages(): Messages {
  return MESSAGES[useLocale()]
}
