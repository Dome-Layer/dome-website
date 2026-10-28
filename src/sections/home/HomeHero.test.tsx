import { afterEach, describe, expect, it, vi } from 'vitest'
import { render } from '@testing-library/react'
import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router'
import { HomeHero } from './HomeHero'

const hero = (path: string) => (
  <MemoryRouter initialEntries={[path]}>
    <HomeHero />
  </MemoryRouter>
)

/** jsdom has no matchMedia; this one matches only the queries listed. */
function stubMatchMedia(matching: string[]) {
  vi.stubGlobal('matchMedia', (query: string) => ({
    matches: matching.includes(query),
    media: query,
    addEventListener: () => {},
    removeEventListener: () => {},
  }))
}

afterEach(() => {
  vi.unstubAllGlobals()
  vi.restoreAllMocks()
})

// The prerender is what crawlers, readers without JavaScript and the first paint get.
describe('HomeHero prerender', () => {
  it('carries the English copy, the scroll cue and the still frame, but no canvas', () => {
    const html = renderToString(hero('/'))
    expect(html).toContain('Enterprise software people use, and AI you can audit.')
    expect(html).toContain('Scroll')
    expect(html).toContain('<svg')
    expect(html).not.toContain('<canvas')
    expect(html).not.toContain('<video')
  })

  it('carries the Italian copy on /it', () => {
    const html = renderToString(hero('/it'))
    expect(html).toContain('Software che le persone usano. AI che potete verificare.')
    expect(html).toContain('Scorri')
  })
})

describe('HomeHero in the browser', () => {
  it('keeps the still frame and never creates the canvas with reduced motion on', () => {
    stubMatchMedia(['(prefers-reduced-motion: reduce)'])
    const { container } = render(hero('/'))
    expect(container.querySelector('canvas')).toBeNull()
    expect(container.querySelector('.opacity-100 svg')).not.toBeNull()
  })

  it('keeps the still frame when Canvas 2D is unavailable', () => {
    stubMatchMedia([])
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(null)
    const { container } = render(hero('/'))
    expect(container.querySelector('canvas')).not.toBeNull()
    expect(container.querySelector('.opacity-100 svg')).not.toBeNull()
  })
})
