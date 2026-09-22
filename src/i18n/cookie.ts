import { LOCALE_COOKIE, LOCALE_COOKIE_MAX_AGE, isLocale, type Locale } from './locales'

/** Set-Cookie / document.cookie value that records a language choice. Host-only, all paths. */
export function localeCookie(locale: Locale): string {
  return `${LOCALE_COOKIE}=${locale}; Path=/; Max-Age=${LOCALE_COOKIE_MAX_AGE}; SameSite=Lax; Secure`
}

/** The locale stored in a Cookie header or document.cookie string, if valid. */
export function readLocaleCookie(cookieHeader: string | null | undefined): Locale | undefined {
  if (!cookieHeader) return undefined
  for (const part of cookieHeader.split(';')) {
    const [name, ...rest] = part.trim().split('=')
    if (name === LOCALE_COOKIE) {
      const value = rest.join('=')
      return isLocale(value) ? value : undefined
    }
  }
  return undefined
}

export function rememberLocale(locale: Locale): void {
  document.cookie = localeCookie(locale)
}
