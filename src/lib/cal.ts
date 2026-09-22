/**
 * Cal.com booking links.
 *
 * Embedded as a plain iframe, loaded only after the visitor asks for it, rather than through
 * Cal.com's JavaScript embed. That keeps a third-party script off every page, needs only
 * `frame-src https://cal.com` in the CSP rather than a `script-src` exception, and means nothing
 * from Cal.com runs until someone chooses to book. The cookie notice's "no analytics, no tracking"
 * claim stays true for anyone who does not.
 */
export const CAL_USERNAME = 'domelayer'

export const CAL_EVENTS = {
  short: { slug: '15min', minutes: 15 },
  standard: { slug: '30min', minutes: 30 },
} as const

export type CalEvent = keyof typeof CAL_EVENTS

/** The public booking page, for linking out. */
export const CAL_PUBLIC_URL = `https://cal.com/${CAL_USERNAME}`

/**
 * An embeddable booking URL. `topic` is passed through as the booking note, so a call arrives with
 * the context the visitor picked instead of us asking again.
 */
export function calUrl(event: CalEvent, topic?: string): string {
  const url = new URL(`${CAL_PUBLIC_URL}/${CAL_EVENTS[event].slug}`)
  if (topic) url.searchParams.set('notes', topic)
  return url.toString()
}
