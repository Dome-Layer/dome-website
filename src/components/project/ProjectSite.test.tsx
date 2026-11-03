import { afterEach, describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router'
import { ThemeProvider } from '../../lib/ThemeContext'
import { LOCALES } from '../../i18n/locales'
import { MESSAGES } from '../../i18n/messages'
import { Footer } from '../Footer'
import { Navigation } from '../Navigation'
import { ContactForm } from '../page/ContactForm'

// domelayer.com as a project site (site split, DOME_DECISIONS 2026-11-01 and 2026-11-02).

afterEach(() => {
  window.history.replaceState(null, '', '/')
})

describe('the top bar', () => {
  it('offers Tools, Agent Flow, About and Contact, and no consulting pages', () => {
    const html = renderToString(
      <ThemeProvider>
        <MemoryRouter initialEntries={['/about']}>
          <Navigation />
        </MemoryRouter>
      </ThemeProvider>,
    )
    for (const href of ['/dome', '/dome/agent-flow', '/about', '/contact']) expect(html).toContain(`href="${href}"`)
    for (const href of ['/services/', '/case-studies']) expect(html).not.toContain(`href="${href}`)
  })
})

describe('the footer', () => {
  it('lists the project pages, then the links off the site, the hire link among them', () => {
    render(
      <MemoryRouter initialEntries={['/it']}>
        <Footer />
      </MemoryRouter>,
    )
    const nav = screen.getByRole('navigation')
    const hrefs = within(nav).getAllByRole('link').map((a) => a.getAttribute('href'))
    expect(hrefs).toEqual([
      '/it/dome',
      '/it/dome/agent-flow',
      '/it/chi-siamo',
      '/it/contatti',
      'https://francescoprodomo.com',
      'https://github.com/Dome-Layer',
      'https://www.linkedin.com/in/francesco-prodomo',
    ])
  })
})

describe('the contact form', () => {
  const form = () =>
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <ContactForm />
      </MemoryRouter>,
    )

  it('asks for feedback by default and has no company field', () => {
    form()
    expect(screen.getByRole('radio', { name: 'Feedback' })).toBeChecked()
    expect(screen.queryByLabelText(/company/i)).toBeNull()
  })

  it('picks demo access when the link asks for it', () => {
    window.history.replaceState(null, '', '/contact?topic=demo')
    form()
    expect(screen.getByRole('radio', { name: 'Demo access' })).toBeChecked()
  })
})

describe('booking a call left with the consulting work', () => {
  it.each(LOCALES)('no page or policy mentions Cal.com (%s)', (locale) => {
    expect(JSON.stringify(MESSAGES[locale])).not.toMatch(/cal\.com/i)
  })
})
