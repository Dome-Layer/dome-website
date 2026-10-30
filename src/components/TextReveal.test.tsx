import { describe, expect, it } from 'vitest'
import { renderToString } from 'react-dom/server'
import { TextReveal } from './TextReveal'

// The prerender is what crawlers, AI assistants and readers without JavaScript get.
describe('TextReveal', () => {
  it('puts the whole text in the server-rendered HTML', () => {
    const html = renderToString(<TextReveal as="h1">Governed Agent Flow</TextReveal>)
    const text = html.replace(/<[^>]+>/g, '')
    expect(html.startsWith('<h1')).toBe(true)
    expect(text).toBe('Governed Agent Flow')
  })

  it('does not hide the words from assistive technology', () => {
    const html = renderToString(<TextReveal>Every decision is recorded</TextReveal>)
    expect(html).not.toContain('aria-hidden')
  })

  // index.css shows these words at once under prefers-reduced-motion; it finds them by this class.
  it('marks every word for the reduced-motion override', () => {
    const html = renderToString(<TextReveal>Every decision is recorded</TextReveal>)
    expect(html.match(/text-reveal-word/g)).toHaveLength(4)
  })
})
