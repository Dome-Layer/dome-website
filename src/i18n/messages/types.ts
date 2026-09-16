import type { RouteId } from '../routes'

export interface PageMetaText {
  /** Short page name, used in breadcrumbs and llms.txt. */
  name: string
  title: string
  description: string
  ogDescription?: string
  twitterDescription?: string
  imageAlt: string
  twitterImageAlt?: string
}

/**
 * Shape of every message catalogue. Each locale's catalogue is typed with it, so a missing or
 * misspelt key fails `tsc`. Page body copy moves in here when the pages are rebuilt (plan 1c, 1d).
 */
export interface Messages {
  site: {
    /** One-paragraph description of DOME, for structured data and llms.txt. */
    description: string
    /** Longer llms.txt introduction. */
    llmsIntro: string
    llmsSections: { pages: string; tools: string; legal: string }
  }
  nav: {
    homeLabel: string
    method: string
    architecture: string
    tools: string
    engagement: string
    about: string
    contact: string
    signIn: string
    signOut: string
    yourTools: string
    openMenu: string
    closeMenu: string
  }
  switcher: {
    /** Accessible name of the switcher link, in the current page's language. */
    label: string
  }
  footer: {
    eyebrow: string
    heading: string
    intro: string
    emailLabel: string
    emailPlaceholder: string
    messageLabel: string
    messagePlaceholder: string
    send: string
    sending: string
    successTitle: string
    successBody: string
    sendAnother: string
    rateLimited: string
    genericError: string
    tagline: string
    privacy: string
    terms: string
    rights: string
  }
  errors: {
    notFoundTitle: string
    notFoundBody: string
    errorTitle: string
    errorBody: string
    homeLink: string
  }
  breadcrumbHome: string
  meta: Record<RouteId, PageMetaText>
}
