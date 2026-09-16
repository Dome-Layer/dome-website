import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { LanguageSwitcher } from './LanguageSwitcher'

const renderAt = (path: string) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <LanguageSwitcher />
    </MemoryRouter>,
  )

describe('LanguageSwitcher', () => {
  it('links an English page to its Italian counterpart', () => {
    renderAt('/tools/llm-council?utm_source=email')
    const link = screen.getByRole('link', { name: 'Read this page in Italian' })
    expect(link).toHaveAttribute('href', '/it/strumenti/llm-council?utm_source=email')
    expect(link).toHaveAttribute('hreflang', 'it')
    expect(link).toHaveTextContent('IT')
  })

  it('links an Italian page back to English and remembers the choice', () => {
    renderAt('/it/termini')
    const link = screen.getByRole('link', { name: 'Leggi questa pagina in inglese' })
    expect(link).toHaveAttribute('href', '/terms')
    link.addEventListener('click', (e) => e.preventDefault())
    fireEvent.click(link)
    expect(document.cookie).toContain('dome_locale=en')
  })

  it('renders nothing on pages without a counterpart', () => {
    const { container } = renderAt('/login')
    expect(container).toBeEmptyDOMElement()
  })
})
