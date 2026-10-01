import { describe, expect, it } from 'vitest'
import { LOCALES } from './locales'
import { MESSAGES } from './messages'

/**
 * Every cookie and browser storage entry DOME writes, on the site and in the tools (inventory in
 * dome-docs sprints/SESSION_COOKIES_ANALYTICS.md, re-checked 2026-10-01). Adding a cookie or a
 * storage key anywhere means adding it here and to the cookie policy in both catalogues.
 */
const STORED_NAMES = [
  'dome_auth_token',
  'dome-theme',
  'dome_locale',
  'dome-cookie-notice-dismissed',
  'dome_pending_consent',
  'dome_consent_accepted',
  'sb-…-auth-token',
  'sb-…-code-verifier',
  'dome_auth_redirect',
  'react-router-scroll-positions',
  'dome_doc_result_…',
  'dome_session_…',
]

describe('cookie policy', () => {
  for (const locale of LOCALES) {
    const doc = MESSAGES[locale].pages.cookies
    const text = JSON.stringify(doc.sections)

    it(`names every stored entry (${locale})`, () => {
      for (const name of STORED_NAMES) expect(text, name).toContain(`\`${name}\``)
    })

    it(`is the page the cookie notice and the privacy policy point to (${locale})`, () => {
      expect(JSON.stringify(MESSAGES[locale].pages.privacy.sections)).toContain('](cookies)')
      expect(MESSAGES[locale].cookieNotice.link.length).toBeGreaterThan(0)
    })
  }
})
