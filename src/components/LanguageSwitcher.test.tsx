import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import type { Locale } from '../i18n/locales'
import { LanguageSwitcher } from './LanguageSwitcher'

const renderAt = (path: string, published?: readonly Locale[]) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <LanguageSwitcher published={published} />
      <button type="button">Elsewhere</button>
    </MemoryRouter>,
  )

const noFollow = (link: HTMLElement) => link.addEventListener('click', (e) => e.preventDefault())

// Production today: English and Italian only. The switcher stays the one-click toggle it has been.
describe('LanguageSwitcher with two published languages', () => {
  const production = ['en', 'it'] as const

  it('links an English page to its Italian counterpart', () => {
    renderAt('/dome/llm-council?utm_source=email', production)
    const link = screen.getByRole('link', { name: 'IT', description: 'Read this page in Italian' })
    expect(link).toHaveAttribute('href', '/it/dome/llm-council?utm_source=email')
    expect(link).toHaveAttribute('hreflang', 'it')
    expect(link).toHaveTextContent('IT')
    expect(screen.queryByRole('button', { name: /language/i })).toBeNull()
  })

  it('links an Italian page back to English and remembers the choice', () => {
    renderAt('/it/termini', production)
    const link = screen.getByRole('link', { name: 'EN', description: 'Versione inglese di questa pagina' })
    expect(link).toHaveAttribute('href', '/terms')
    noFollow(link)
    fireEvent.click(link)
    expect(document.cookie).toContain('dome_locale=en')
  })

  it('never offers an unpublished language', () => {
    renderAt('/about', production)
    expect(screen.getAllByRole('link')).toHaveLength(1)
    expect(document.body.innerHTML).not.toMatch(/\/nl\/|\/de\/|Nederlands|Deutsch/)
  })

  it('works for any pair, for example English and German', () => {
    renderAt('/de/kontakt', ['en', 'de'])
    expect(screen.getByRole('link', { name: 'EN', description: 'Diese Seite auf Englisch lesen' })).toHaveAttribute('href', '/contact')
  })
})

// Staging: four languages. The toggle becomes a disclosure with the languages named in their own language.
describe('LanguageSwitcher with four published languages', () => {
  const button = () => screen.getByRole('button', { name: /^Language: / })

  it('shows the current language and opens a list of all four', () => {
    renderAt('/nl/over-ons?utm_source=email')
    const toggle = screen.getByRole('button', { name: 'Taal: Nederlands (NL)' })
    expect(toggle).toHaveTextContent('NL')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    const list = screen.getByRole('list', { hidden: true })
    expect(list.closest('[hidden]')).not.toBeNull()

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(document.getElementById(toggle.getAttribute('aria-controls')!)).not.toHaveAttribute('hidden')
    const menu = screen.getByRole('list', { name: 'Taal' })
    expect(within(menu).getAllByRole('listitem').map((li) => li.textContent)).toEqual(['EnglishEN', 'ItalianoIT', 'Nederlands', 'DeutschDE'])
    expect(within(menu).getByText('Nederlands')).toHaveAttribute('aria-current', 'true')
    const links = within(menu).getAllByRole('link')
    expect(links.map((a) => a.getAttribute('href'))).toEqual(['/about?utm_source=email', '/it/chi-siamo?utm_source=email', '/de/ueber-uns?utm_source=email'])
    expect(links.map((a) => a.getAttribute('lang'))).toEqual(['en', 'it', 'de'])
  })

  it('remembers the choice in the language cookie', () => {
    renderAt('/case-studies')
    fireEvent.click(button())
    const deutsch = screen.getByRole('link', { name: /Deutsch/ })
    expect(deutsch).toHaveAttribute('href', '/de/fallstudien')
    noFollow(deutsch)
    fireEvent.click(deutsch)
    expect(document.cookie).toContain('dome_locale=de')
  })

  it('closes on Escape and hands focus back to the button', () => {
    renderAt('/')
    const toggle = screen.getByRole('button', { name: 'Language: English (EN)' })
    fireEvent.click(toggle)
    screen.getByRole('link', { name: /Italiano/ }).focus()
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(document.activeElement).toBe(toggle)
  })

  it('closes on a click elsewhere, and when focus leaves it', () => {
    renderAt('/de')
    const toggle = screen.getByRole('button', { name: 'Sprache: Deutsch (DE)' })
    fireEvent.click(toggle)
    fireEvent.pointerDown(document.body)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(toggle)
    fireEvent.blur(toggle, { relatedTarget: screen.getByRole('button', { name: 'Elsewhere' }) })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('stays open while focus moves inside it', () => {
    renderAt('/it')
    const toggle = screen.getByRole('button', { name: 'Lingua: Italiano (IT)' })
    fireEvent.click(toggle)
    fireEvent.blur(toggle, { relatedTarget: screen.getByRole('link', { name: /English/ }) })
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
  })

  it('opens on the page colour, not the bar blue', () => {
    renderAt('/')
    const panel = document.getElementById(button().getAttribute('aria-controls')!)!
    expect(panel).toHaveClass('on-page-surface')
  })
})

describe('LanguageSwitcher anywhere', () => {
  it('renders nothing on pages without a counterpart', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/login']}>
        <LanguageSwitcher />
      </MemoryRouter>,
    )
    expect(container).toBeEmptyDOMElement()
  })

  it('renders nothing while English is the only published language', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/about']}>
        <LanguageSwitcher published={['en']} />
      </MemoryRouter>,
    )
    expect(container).toBeEmptyDOMElement()
  })
})
