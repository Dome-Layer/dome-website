import { afterEach, describe, expect, it, vi } from 'vitest'
import { renderToString } from 'react-dom/server'
import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes, useLocation } from 'react-router'
import { ThemeProvider } from '../lib/ThemeContext'
import { Navigation } from './Navigation'

const bar = (path: string) =>
  renderToString(
    <ThemeProvider>
      <MemoryRouter initialEntries={[path]}>
        <Navigation />
      </MemoryRouter>
    </ThemeProvider>,
  )

// The bar sits on the primary on every page (DESIGN_SYSTEM v2.5). The prerendered bar must already
// match: transparent at the top of the home page so the hero shows through, solid everywhere else,
// so hydration never flashes the wrong one.
describe('top bar on the primary', () => {
  it('starts transparent over the hero on the home page, in both languages', () => {
    for (const path of ['/', '/it', '/it/']) {
      const html = bar(path)
      expect(html).toContain('data-surface="top"')
      expect(html).toContain('on-hero-surface')
    }
  })

  it('is the solid blue bar on every other page, with the current page underlined', () => {
    for (const path of ['/about', '/it/chi-siamo', '/dome']) {
      const html = bar(path)
      expect(html).toContain('data-surface="bar"')
      expect(html).toContain('bg-[var(--color-bar)]')
    }
    expect(bar('/about')).toMatch(/aria-current="page"[^>]*underline|underline[^>]*aria-current="page"/)
  })
})

// The logo used to be a plain link, so on the home page it reloaded the same URL, ScrollRestoration
// put the page back where it was, and the bar, which only listened for scroll events, stayed
// transparent over the content (2026-10-28, iPhone Safari).
describe('the logo', () => {
  const Where = () => <span data-testid="path">{useLocation().pathname}</span>
  const mount = (path: string) =>
    render(
      <ThemeProvider>
        <MemoryRouter initialEntries={[path]}>
          <Navigation />
          <Routes>
            <Route path="*" element={<Where />} />
          </Routes>
        </MemoryRouter>
      </ThemeProvider>,
    )
  const header = () => document.querySelector('header') as HTMLElement

  afterEach(() => {
    vi.restoreAllMocks()
    window.scrollY = 0
  })

  it('scrolls back to the hero on the home page instead of loading it again', () => {
    const scrollTo = vi.spyOn(window, 'scrollTo').mockImplementation(() => {})
    mount('/')
    const logo = screen.getAllByRole('link', { name: /home/i })[0]
    expect(fireEvent.click(logo)).toBe(false)
    expect(scrollTo).toHaveBeenCalledWith(expect.objectContaining({ top: 0 }))
    expect(screen.getByTestId('path')).toHaveTextContent(/^\/$/)
  })

  it('opens home from another page without a full load', () => {
    const scrollTo = vi.spyOn(window, 'scrollTo').mockImplementation(() => {})
    mount('/it/chi-siamo')
    fireEvent.click(screen.getAllByRole('link', { name: /home/i })[0])
    expect(screen.getByTestId('path')).toHaveTextContent(/^\/it$/)
    expect(scrollTo).not.toHaveBeenCalled()
  })

  it('keeps the bar solid when the home page opens part way down', () => {
    window.scrollY = 1800
    mount('/')
    expect(header().dataset.surface).toBe('bar')
  })
})
