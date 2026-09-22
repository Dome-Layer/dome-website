import { useLocation } from 'react-router'
import type { Locale } from './locales'
import { MESSAGES, type Messages } from './messages'
import { IT_PUBLISHED } from './published'
import { localeFromPath } from './routes'

/**
 * The locale of the current page, taken from its URL. Client-only routes (/login, /app,
 * /auth/callback) have no prefix and read as English until they get their own strings (plan 1d).
 */
export function useLocale(): Locale {
  const { pathname } = useLocation()
  return IT_PUBLISHED ? localeFromPath(pathname) : 'en'
}

export function useMessages(): Messages {
  return MESSAGES[useLocale()]
}
