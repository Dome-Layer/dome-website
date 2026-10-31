import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider, useTheme } from './ThemeContext'

/**
 * The theme rule, shared with the tools (dome-ui v1.6.0): dark unless the visitor chose light, and
 * the choice lives in a cookie per environment. Staging reads `dome-theme-staging`, because the
 * production `dome-theme` cookie (`Domain=.domelayer.com`) also reaches staging hosts and, being
 * older, comes first in `document.cookie`.
 */

const THEME_INIT = readFileSync(resolve(__dirname, '../../public/theme-init.js'), 'utf8')

/** Runs public/theme-init.js against a fake host and cookie jar; returns data-theme. */
function runInit(host: string, cookie: string, stored: string | null = null): string | null {
  const attrs: Record<string, string> = {}
  const fakeWindow = { location: { hostname: host }, localStorage: { getItem: () => stored } }
  const fakeDocument = {
    cookie,
    documentElement: { setAttribute: (name: string, value: string) => (attrs[name] = value) },
  }
  new Function('window', 'document', THEME_INIT)(fakeWindow, fakeDocument)
  return attrs['data-theme'] ?? null
}

describe('public/theme-init.js', () => {
  it('is dark by default and light only when chosen', () => {
    expect(runInit('domelayer.com', '')).toBe('dark')
    expect(runInit('domelayer.com', 'dome_locale=it; dome-theme=light')).toBeNull()
  })

  it('on staging reads the staging cookie, not an older production one sent first', () => {
    expect(runInit('staging.domelayer.com', 'dome-theme=light; dome-theme-staging=dark')).toBe('dark')
    expect(runInit('staging.domelayer.com', 'dome-theme=dark; dome-theme-staging=light')).toBeNull()
  })

  it('on production ignores a staging cookie', () => {
    expect(runInit('domelayer.com', 'dome-theme-staging=light')).toBe('dark')
  })
})

function Probe() {
  const { theme, toggleTheme } = useTheme()
  return (
    <button type="button" onClick={toggleTheme}>
      {theme}
    </button>
  )
}

const realLocation = window.location

function setHostname(hostname: string) {
  Object.defineProperty(window, 'location', {
    value: { ...realLocation, hostname },
    writable: true,
    configurable: true,
  })
}

function clearThemeCookies() {
  document.cookie = 'dome-theme=; Max-Age=0; Path=/'
  document.cookie = 'dome-theme-staging=; Max-Age=0; Path=/'
}

describe('ThemeProvider', () => {
  afterEach(() => {
    Object.defineProperty(window, 'location', { value: realLocation, writable: true, configurable: true })
    clearThemeCookies()
    localStorage.clear()
  })

  it('on staging reads and writes dome-theme-staging', async () => {
    setHostname('staging.domelayer.com')
    document.cookie = 'dome-theme=light; Path=/'
    document.cookie = 'dome-theme-staging=dark; Path=/'
    render(
      <ThemeProvider>
        <Probe />
      </ThemeProvider>
    )
    const button = await screen.findByRole('button', { name: 'dark' })
    // jsdom refuses a cookie for another domain, so check what was written rather than the jar.
    const written = vi.spyOn(document, 'cookie', 'set')
    act(() => {
      fireEvent.click(button)
    })
    expect(screen.getByRole('button', { name: 'light' })).toBeTruthy()
    expect(written).toHaveBeenCalledTimes(1)
    expect(written.mock.calls[0][0]).toMatch(/^dome-theme-staging=light; .*Domain=\.staging\.domelayer\.com/)
    written.mockRestore()
  })

  it('on production keeps dome-theme', async () => {
    setHostname('localhost')
    document.cookie = 'dome-theme=light; Path=/'
    render(
      <ThemeProvider>
        <Probe />
      </ThemeProvider>
    )
    expect(await screen.findByRole('button', { name: 'light' })).toBeTruthy()
  })
})
