import { useEffect, useId, useRef, useState, type FocusEvent } from 'react'
import { useLocation } from 'react-router'
import { localeCookie } from '../i18n/cookie'
import { LOCALE_NAMES, type Locale } from '../i18n/locales'
import { PUBLISHED_LOCALES } from '../i18n/published'
import { localizedHref, routeIdFromPath } from '../i18n/routes'
import { useLocale, useMessages } from '../i18n/useLocale'
import { track } from '../lib/analytics'

interface LanguageSwitcherProps {
  className?: string
  /** The published locales; the build's list unless a test sets it. */
  published?: readonly Locale[]
}

/** Remembers a manual choice, which also stops the first-visit redirect from overriding it. */
function choose(target: Locale) {
  document.cookie = localeCookie(target)
  track('locale_switch', { to: target })
}

const control =
  'h-9 min-w-9 px-2 rounded-lg inline-flex items-center justify-center gap-1 text-[12px] font-semibold tracking-[0.08em] transition-colors duration-150 text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-muted)] hover:text-[var(--color-text-primary)]'

/**
 * Links the current page to its counterparts in the other published languages and remembers the
 * choice in the dome_locale cookie. Plain links on purpose: each target is a separate prerendered
 * page and the cookie must be set first. Renders nothing while English is the only published
 * language, or on pages without a counterpart.
 *
 * With two languages it is the original toggle: one link naming the other language. From three it
 * is a disclosure: a button with the current language's code opens a short list of the languages,
 * each named in its own language, on the page colour below the bar (DESIGN_SYSTEM 7.5).
 */
export function LanguageSwitcher({ className = '', published = PUBLISHED_LOCALES }: LanguageSwitcherProps) {
  const { pathname, search, hash } = useLocation()
  const locale = useLocale()
  // Prerendered HTML has no query string, so it joins the href only after mount (hydration match).
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  const id = routeIdFromPath(pathname)
  if (!id || published.length < 2) return null
  const href = (target: Locale) => localizedHref(id, target) + (mounted ? search + hash : '')

  if (published.length === 2) {
    const target = published.find((l) => l !== locale) ?? published[0]
    return <LanguageToggle target={target} href={href(target)} className={className} />
  }
  return <LanguageMenu locale={locale} published={published} href={href} className={className} />
}

function LanguageToggle({ target, href, className }: { target: Locale; href: string; className: string }) {
  const t = useMessages().switcher
  return (
    <a
      href={href}
      hrefLang={target}
      lang={target}
      // The accessible name is the visible "IT"/"EN" (WCAG 2.5.3, label in name); the sentence is the
      // description, read after the name and shown as a tooltip.
      title={t.readIn[target]}
      onClick={() => choose(target)}
      className={`${control} ${className}`}
    >
      {target.toUpperCase()}
    </a>
  )
}

interface LanguageMenuProps {
  locale: Locale
  published: readonly Locale[]
  href: (target: Locale) => string
  className: string
}

function LanguageMenu({ locale, published, href, className }: LanguageMenuProps) {
  const t = useMessages().switcher
  const [open, setOpen] = useState(false)
  const root = useRef<HTMLDivElement>(null)
  const button = useRef<HTMLButtonElement>(null)
  const panelId = useId()

  // Escape closes and hands focus back to the button; a click anywhere else closes.
  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setOpen(false)
      button.current?.focus()
    }
    const onPointer = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [open])

  // Tabbing out of the list closes it, so it never sits open behind the next control.
  const onBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!root.current?.contains(event.relatedTarget as Node | null)) setOpen(false)
  }

  const code = locale.toUpperCase()
  return (
    <div ref={root} className={`relative ${className}`} onBlur={onBlur}>
      <button
        ref={button}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        // The name keeps the visible code (WCAG 2.5.3, label in name) and says what the button is for.
        // The code stands as its own word: axe does not count it inside parentheses, "English (EN)".
        aria-label={`${t.language}: ${LOCALE_NAMES[locale]}, ${code}`}
        onClick={() => setOpen((value) => !value)}
        className={control}
      >
        {code}
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={`transition-transform duration-150 motion-reduce:transition-none ${open ? 'rotate-180' : ''}`}
        >
          <polyline points="2 3.5 5 6.5 8 3.5" />
        </svg>
      </button>
      {/* On the page colour, not the bar's blue: .on-page-surface restores the page tokens here. */}
      <div
        id={panelId}
        hidden={!open}
        className="on-page-surface absolute right-0 top-full mt-2 w-52 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-base)] p-1 shadow-[var(--shadow-md)]"
      >
        <ul role="list" aria-label={t.language}>
          {published.map((target) =>
            target === locale ? (
              <li key={target}>
                <span
                  aria-current="true"
                  lang={target}
                  className="flex min-h-11 items-center justify-between gap-3 rounded-md px-3 text-[13px] font-semibold text-[var(--color-text-primary)]"
                >
                  {LOCALE_NAMES[target]}
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-[var(--color-text-accent)]">
                    <polyline points="3 8.5 6.5 12 13 4.5" />
                  </svg>
                </span>
              </li>
            ) : (
              <li key={target}>
                <a
                  href={href(target)}
                  hrefLang={target}
                  lang={target}
                  onClick={() => choose(target)}
                  className="flex min-h-11 items-center justify-between gap-3 rounded-md px-3 text-[13px] font-medium text-[var(--color-text-secondary)] transition-colors duration-150 hover:bg-[var(--color-bg-muted)] hover:text-[var(--color-text-primary)]"
                >
                  {LOCALE_NAMES[target]}
                  <span aria-hidden="true" className="text-[11px] font-semibold tracking-[0.08em] text-[var(--color-text-tertiary)]">
                    {target.toUpperCase()}
                  </span>
                </a>
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  )
}
