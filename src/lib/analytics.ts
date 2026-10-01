import { CLIENT_ONLY_PATHS, PUBLIC_ROUTES } from '../i18n/routes'

/**
 * Aggregate, cookie-free measurement with Umami Cloud (Sprint C item 3, DOME_DECISIONS 2026-09-30).
 *
 * The tracker is a reviewed copy served from our own domain (public/vendor/umami.js), so the CSP's
 * script-src stays 'self': no third-party script runs next to the JS-readable sign-in cookie. Only
 * its beacon host is allowed in connect-src.
 *
 * It loads only when the build has VITE_UMAMI_WEBSITE_ID, and only sends from domelayer.com
 * (data-domains), so staging, workers.dev and local dev load it but never report. Do Not Track is
 * honoured. The cookie page and the notice describe exactly this; change them together.
 */

/** The five goal events (DOME_DECISIONS 2026-09-30). Names are reused if a tier 3 ever arrives. */
export type AnalyticsEvent =
  | 'contact_sent'
  | 'booking_opened'
  | 'demo_cta_click'
  | 'sign_in_started'
  | 'locale_switch'

interface UmamiPayload {
  url?: string
  [key: string]: unknown
}

declare global {
  interface Window {
    umami?: { track: (event: string, data?: Record<string, string>) => unknown }
    domeUmamiBeforeSend?: (type: string, payload: UmamiPayload) => UmamiPayload | null
  }
}

export const TRACKER_SRC = '/vendor/umami.js'
export const TRACKED_HOST = 'domelayer.com'

/**
 * Last check before anything is sent. The sign-in routes carry one-time values in their query
 * (an OAuth `code`, a `redirect` back to a tool), which must never leave the site, so those pages
 * are reported by path alone. Public pages keep their query, which is where UTM tags live.
 */
export function beforeSend(_type: string, payload: UmamiPayload): UmamiPayload | null {
  if (!payload || typeof payload.url !== 'string') return payload
  const url = new URL(payload.url, `https://${TRACKED_HOST}`)
  if ((CLIENT_ONLY_PATHS as readonly string[]).includes(url.pathname.replace(/\/+$/, '') || '/')) {
    return { ...payload, url: url.pathname }
  }
  return payload
}

/** Injects the tracker once, on the client. A no-op in builds without a website id. */
export function startAnalytics(websiteId = import.meta.env.VITE_UMAMI_WEBSITE_ID as string | undefined): void {
  if (!websiteId || typeof document === 'undefined') return
  if (document.querySelector(`script[src="${TRACKER_SRC}"]`)) return
  // Defined before the script exists, so the very first pageview already goes through it.
  window.domeUmamiBeforeSend = beforeSend
  const script = document.createElement('script')
  script.src = TRACKER_SRC
  script.defer = true
  script.dataset.websiteId = websiteId
  script.dataset.domains = TRACKED_HOST
  script.dataset.doNotTrack = 'true'
  script.dataset.beforeSend = 'domeUmamiBeforeSend'
  document.head.appendChild(script)
  document.addEventListener('click', trackConversationCta, true)
}

/** Records a goal event. Never throws: measurement must not break the page. */
export function track(event: AnalyticsEvent, data?: Record<string, string>): void {
  try {
    window.umami?.track(event, data)
  } catch {
    // ignore
  }
}

const CONTACT_PATHS = new Set(Object.values(PUBLIC_ROUTES.contact.path))

/**
 * demo_cta_click: any link that takes a visitor to the booking calendar or the contact page from
 * another page ("Book a private demo", "Request a demo", the closing CTAs). One listener instead of
 * one handler per button, so a new CTA is counted without remembering to wire it.
 */
export function trackConversationCta(event: MouseEvent): void {
  const link = (event.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null
  if (!link || link.origin !== location.origin) return
  const target = link.pathname.replace(/\/+$/, '') || '/'
  if (!CONTACT_PATHS.has(target) && link.hash !== '#book') return
  if (target === (location.pathname.replace(/\/+$/, '') || '/') && link.hash !== '#book') return
  track('demo_cta_click', { from: location.pathname, to: link.hash === '#book' ? 'booking' : 'contact' })
}
