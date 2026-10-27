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

// The prerendered bar must already match the page under it: on the home page it starts blended
// into the hero surface (DESIGN_SYSTEM v2.4), so hydration never flashes the normal bar over blue.
describe('top bar over the home hero surface', () => {
  it('starts transparent over the surface on the home page, in both languages', () => {
    for (const path of ['/', '/it', '/it/']) {
      const html = bar(path)
      expect(html).toContain('data-surface="top"')
      expect(html).toContain('on-hero-surface')
    }
  })

  it('is the normal bar on every other page', () => {
    for (const path of ['/about', '/it/chi-siamo', '/dome']) {
      const html = bar(path)
      expect(html).not.toContain('data-surface')
      expect(html).not.toContain('on-hero-surface')
    }
  })
})
