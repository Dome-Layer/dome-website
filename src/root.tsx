import type { ReactNode } from 'react'
import { Links, Meta, Outlet, Scripts, ScrollRestoration, isRouteErrorResponse, type MetaFunction } from 'react-router'
import * as Sentry from '@sentry/react'
import { StagingBanner } from '@dome-layer/dome-ui'
import { ErrorBoundary as RenderErrorBoundary } from './components/ErrorBoundary'
import { ThemeProvider } from './lib/ThemeContext'
import { ErrorPage } from './components/errors/ErrorPage'
import { useLocale } from './i18n/useLocale'
import './index.css'

/**
 * Used only where a route has no meta of its own: the client-only login, callback and hub
 * pages served from the SPA fallback. Public pages all set full, indexable metadata.
 */
export const meta: MetaFunction = () => [
  { title: 'DOME' },
  { name: 'robots', content: 'noindex' },
]

export function Layout({ children }: { children: ReactNode }) {
  const locale = useLocale()
  return (
    // public/theme-init.js sets data-theme on <html> before hydration, so the attribute
    // legitimately differs from the prerendered markup.
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#FFFFFF" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=2" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=2" />
        <link rel="icon" type="image/png" sizes="64x64" href="/favicon-64.png?v=2" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png?v=2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=2" />
        {/* External, not inline: the CSP has no 'unsafe-inline' for scripts. */}
        <script src="/theme-init.js" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return (
    <RenderErrorBoundary>
      <ThemeProvider>
        <StagingBanner environment={import.meta.env.VITE_SENTRY_ENVIRONMENT} className="fixed top-0 left-0 right-0 z-[60]" />
        <Outlet />
      </ThemeProvider>
    </RenderErrorBoundary>
  )
}

/** Shown while a client-only route (login, callback, hub) loads from the SPA fallback. */
export function HydrateFallback() {
  return <div className="min-h-screen bg-[var(--color-bg-base)]" />
}

export function ErrorBoundary({ error }: { error: unknown }) {
  const notFound = isRouteErrorResponse(error) && error.status === 404
  if (!notFound) Sentry.captureException(error)

  // Rendered instead of the app shell, so it brings its own theme provider (Sprint LX).
  return (
    <ThemeProvider>
      <ErrorPage kind={notFound ? 'notFound' : 'error'} />
    </ThemeProvider>
  )
}
