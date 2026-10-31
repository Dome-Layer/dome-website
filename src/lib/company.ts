/**
 * The person behind the site, as Italian law asks a business website to identify it
 * (D.Lgs. 70/2003 art. 7: name, domicile, contact details including email, VAT number). The
 * footer shows these on every page; the contact page and the structured data read them from here.
 *
 * DOME is a personal project, not a business (DOME_DECISIONS 2026-10-31): the partita IVA is in
 * Francesco Prodomo's own name with no "Dome" business name, so the legal name is the person's.
 * The domicile stays at city level by decision (2026-10-31); the full street address is not
 * published. There is no Registro delle Imprese (REA) number to show: Francesco is a libero
 * professionista with a partita IVA only, not entered in the register.
 */
export const COMPANY = {
  legalName: 'Francesco Prodomo',
  /** Partita IVA; with the country prefix it is the EU VAT ID. */
  vatNumber: '07242670482',
  vatId: 'IT07242670482',
  email: 'hello@domelayer.com',
  /** Posta elettronica certificata: the certified address for formal notices. */
  pec: 'francesco.prodomo@pec.it',
  locality: 'Florence',
  countryCode: 'IT',
} as const
