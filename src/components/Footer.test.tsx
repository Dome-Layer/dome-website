import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { COMPANY } from '../lib/company'
import { Footer } from './Footer'

const legalLine = (path: string) => {
  const { container } = render(
    <MemoryRouter initialEntries={[path]}>
      <Footer />
    </MemoryRouter>,
  )
  return container.querySelector('[data-legal-line]') as HTMLElement
}

// Italian law asks a business website to identify the business on its pages (D.Lgs. 70/2003 art. 7).
describe('the footer legal line', () => {
  it.each([
    ['/', 'P.IVA 07242670482', 'Florence, Italy'],
    ['/it', 'P.IVA 07242670482', 'Firenze, Italia'],
    ['/nl', 'btw-nummer IT07242670482', 'Florence, Italië'],
    ['/de', 'USt-IdNr. IT07242670482', 'Florenz, Italien'],
  ])('names the business, its VAT number, city, email and PEC on %s', (path, vat, city) => {
    const line = legalLine(path)
    expect(line).toHaveTextContent(COMPANY.legalName)
    expect(line).toHaveTextContent(vat)
    expect(line).toHaveTextContent(city)
    const hrefs = [...line.querySelectorAll('a')].map((a) => a.getAttribute('href'))
    expect(hrefs).toEqual([`mailto:${COMPANY.email}`, `mailto:${COMPANY.pec}`])
  })
})
