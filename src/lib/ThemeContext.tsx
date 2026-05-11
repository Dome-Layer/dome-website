import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

const COOKIE_NAME = 'dome-theme'
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365 // 1 year

function isStagingHost(host: string): boolean {
  return host === 'staging.domelayer.com' || host.endsWith('.staging.domelayer.com')
}

function isProductionHost(host: string): boolean {
  if (isStagingHost(host)) return false
  return host === 'domelayer.com' || host.endsWith('.domelayer.com')
}

function isHttpsHost(): boolean {
  const host = window.location.hostname
  return isStagingHost(host) || isProductionHost(host)
}

function cookieDomain(): string {
  const host = window.location.hostname
  if (isStagingHost(host)) return '.staging.domelayer.com'
  if (isProductionHost(host)) return '.domelayer.com'
  return ''
}

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

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Cookie takes priority — shared across all *.domelayer.com subdomains
    const cookie = readThemeCookie()
    if (cookie) return cookie
    const stored = localStorage.getItem(COOKIE_NAME)
    if (stored === 'light' || stored === 'dark') return stored
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
    localStorage.setItem(COOKIE_NAME, theme)
    writeThemeCookie(theme)
  }, [theme])

  function toggleTheme() {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
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
