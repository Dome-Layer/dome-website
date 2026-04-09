import type { ReactNode } from 'react'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

interface ToolPageLayoutProps {
  children: ReactNode
}

export function ToolPageLayout({ children }: ToolPageLayoutProps) {
  return (
    <div className="min-h-screen bg-[var(--color-bg-base)]">
      <Navigation />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
    </div>
  )
}
