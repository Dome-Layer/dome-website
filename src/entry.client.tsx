import { StrictMode, startTransition } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { HydratedRouter } from 'react-router/dom'
import * as Sentry from '@sentry/react'

if (import.meta.env.VITE_SENTRY_DSN) {
  Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    environment: import.meta.env.VITE_SENTRY_ENVIRONMENT || 'development',
    tracesSampleRate: 0.1,
    sendDefaultPii: false,
  })
}

// Staging banner (rendered in root.tsx) is a fixed 32px strip; reserve space for it
// so the fixed nav / scroll-progress sit below it. No-op in production.
if (import.meta.env.VITE_SENTRY_ENVIRONMENT === 'staging') {
  document.documentElement.style.setProperty('--dome-banner-h', '2rem')
}

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <HydratedRouter />
    </StrictMode>,
  )
})
