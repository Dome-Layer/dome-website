import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { ThemeProvider } from '../../lib/ThemeContext'
import { ErrorPage } from './ErrorPage'

const renderAt = (path: string, kind: 'notFound' | 'error') =>
  render(
    <ThemeProvider>
      <MemoryRouter initialEntries={[path]}>
        <ErrorPage kind={kind} />
      </MemoryRouter>
    </ThemeProvider>,
  )

describe('error pages', () => {
  it('shows the 404 in English with the full bar, transparent over the surface', () => {
    const { container } = renderAt('/nope', 'notFound')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Page not found')
    expect(screen.getByRole('link', { name: /go to the home page/i })).toHaveAttribute('href', '/')
    expect(container.querySelector('header')).toHaveAttribute('data-surface', 'top')
    expect(container.querySelectorAll('.error-dot')).toHaveLength(44)
  })

  it('shows the 404 in Italian under /it', () => {
    renderAt('/it/nulla', 'notFound')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Pagina non trovata')
    expect(screen.getByRole('link', { name: /torna alla home/i })).toHaveAttribute('href', '/it')
  })

  it('keeps the error page to the wordmark home, with no record and no menu', () => {
    const { container } = renderAt('/about', 'error')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Something went wrong')
    expect(container.querySelectorAll('.error-dot')).toHaveLength(0)
    expect(screen.queryByRole('button', { name: /open menu/i })).toBeNull()
  })
})
