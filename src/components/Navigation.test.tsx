import { describe, expect, it } from 'vitest'
import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router'
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
