import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import * as Sentry from '@sentry/react'
import './index.css'
import App from './App'
import { ErrorBoundary } from './components/ErrorBoundary'
import { ThemeProvider } from './lib/ThemeContext'

if (import.meta.env.VITE_SENTRY_DSN) {
  Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    environment: import.meta.env.VITE_SENTRY_ENVIRONMENT || 'development',
    tracesSampleRate: 0.1,
    sendDefaultPii: false,
  })
}

// Staging banner (rendered in App.tsx) is a fixed 32px strip; reserve space for it
// so the fixed nav / scroll-progress sit below it. No-op in production.
if (import.meta.env.VITE_SENTRY_ENVIRONMENT === 'staging') {
  document.documentElement.style.setProperty('--dome-banner-h', '2rem')
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
)
