import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { rememberLocale } from '../i18n/cookie'
import type { Locale } from '../i18n/locales'
import { IT_PUBLISHED } from '../i18n/published'
import { localizedHref, routeIdFromPath } from '../i18n/routes'
import { useLocale, useMessages } from '../i18n/useLocale'

const OTHER: Record<Locale, Locale> = { en: 'it', it: 'en' }

interface LanguageSwitcherProps {
  className?: string
}

/**
 * Links the current page to its counterpart in the other language and remembers the choice in
 * the dome_locale cookie, which also stops the first-visit redirect from overriding it. A plain
 * link on purpose: the target is a separate prerendered page and the cookie must be set first.
 * Renders nothing while Italian is unpublished, or on pages without a counterpart.
 */
export function LanguageSwitcher({ className = '' }: LanguageSwitcherProps) {
  const { pathname, search, hash } = useLocation()
  const locale = useLocale()
  const t = useMessages()
  // Prerendered HTML has no query string, so it joins the href only after mount (hydration match).
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  const id = routeIdFromPath(pathname)
  if (!IT_PUBLISHED || !id) return null

  const target = OTHER[locale]
  const href = localizedHref(id, target) + (mounted ? search + hash : '')

  return (
    <a
      href={href}
      hrefLang={target}
      lang={target}
      aria-label={t.switcher.label}
      onClick={() => rememberLocale(target)}
      className={`h-9 min-w-9 px-2 rounded-lg inline-flex items-center justify-center text-[12px] font-semibold tracking-[0.08em] transition-colors duration-150 text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-muted)] hover:text-[var(--color-text-primary)] ${className}`}
    >
      {target.toUpperCase()}
    </a>
  )
}
