import type { ReactNode } from 'react'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { CookieNotice } from '../components/CookieNotice'

/**
 * The shell every public page shares: navigation, the page itself, the footer and the cookie
 * notice. Replaces the old split between a bespoke home layout and `ToolPageLayout`.
 */
export function PublicPage({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--color-bg-base)]">
      <Navigation />
      <main>{children}</main>
      <Footer />
      <CookieNotice />
    </div>
  )
}
