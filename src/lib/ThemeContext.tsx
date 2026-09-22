import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { cookieDomain, isHttpsHost } from '@dome-layer/dome-ui/utils'

type Theme = 'light' | 'dark'

interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

const COOKIE_NAME = 'dome-theme'
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365 // 1 year

// Host/cookie-domain helpers come from dome-ui (cookieDomain, isHttpsHost) — see imports.

function readThemeCookie(): Theme | null {
  const match = document.cookie.split('; ').find(r => r.startsWith(`${COOKIE_NAME}=`))
  if (!match) return null
  const val = match.split('=')[1]
  return val === 'light' || val === 'dark' ? val : null
}

function writeThemeCookie(theme: Theme): void {
  const domain = cookieDomain()
  const domainPart = domain ? `; Domain=${domain}` : ''
  const secure = isHttpsHost() ? '; Secure' : ''
  document.cookie = `${COOKIE_NAME}=${theme}; Path=/; SameSite=Lax; Max-Age=${COOKIE_MAX_AGE}${domainPart}${secure}`
}

/**
 * Dark by default.
 *
 * DOME is a dark-first brand, so the OS `prefers-color-scheme` is deliberately not consulted: a
 * visitor whose system is set to light still sees the site as designed. Only an explicit choice
 * through the theme toggle switches it, and that choice is remembered in the `dome-theme` cookie,
 * which is set for `*.domelayer.com` so it follows them into the tools.
 *
 * Keep in step with `public/theme-init.js`, which applies the same rule before first paint.
 */
function readInitialTheme(): Theme {
  // Cookie takes priority: shared across all *.domelayer.com subdomains
  const cookie = readThemeCookie()
  if (cookie) return cookie
  try {
    const stored = localStorage.getItem(COOKIE_NAME)
    if (stored === 'light' || stored === 'dark') return stored
  } catch {
    // localStorage may be unavailable
  }
  return 'dark'
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Pages are prerendered without a theme, so state starts unknown (identical on the server
  // and during hydration) and syncs from the browser after mount. public/theme-init.js has
  // already set data-theme before first paint, so there is no flash in the meantime.
  const [theme, setTheme] = useState<Theme | null>(null)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(readInitialTheme())
  }, [])

  // Apply only. Nothing is persisted here: the dark default is not a preference the visitor
  // expressed, and storing it would pin them to today's default for a year and make the cookie
  // notice's "remembers your theme preference" untrue for someone who never chose.
  useEffect(() => {
    if (theme === null) return
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
  }, [theme])

  /** The only thing that writes the cookie: an explicit choice by the visitor. */
  function toggleTheme() {
    setTheme(prev => {
      const next: Theme = prev === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem(COOKIE_NAME, next)
      } catch {
        // localStorage may be unavailable; the cookie still carries the choice.
      }
      writeThemeCookie(next)
      return next
    })
  }

  return (
    <ThemeContext.Provider value={{ theme: theme ?? 'dark', toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider')
  return ctx
}
