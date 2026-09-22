import type { DescribedMediaId } from '../../content/media'
import type { StaticRouteId } from '../routes'

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
    enterpriseUx: string
    aiAutomation: string
    dome: string
    caseStudies: string
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
    tagline: string
    privacy: string
    terms: string
    rights: string
  }
  /** The contact form, which moved out of the footer onto its own page (plan phase 1c). */
  contactForm: {
    heading: string
    intro: string
    nameLabel: string
    namePlaceholder: string
    emailLabel: string
    emailPlaceholder: string
    companyLabel: string
    companyOptional: string
    companyPlaceholder: string
    topicLabel: string
    messageLabel: string
    messagePlaceholder: string
    privacyNote: string
    privacyLink: string
    send: string
    sending: string
    successTitle: string
    successBody: string
    sendAnother: string
    rateLimited: string
    genericError: string
  }
  errors: {
    notFoundTitle: string
    notFoundBody: string
    errorTitle: string
    errorBody: string
    homeLink: string
  }
  breadcrumbHome: string
  /**
   * Metadata for every page whose words are not already content. Case study routes are absent:
   * their title and description come from the study itself, through `pageMeta`.
   */
  meta: Record<StaticRouteId, PageMetaText>
  /**
   * Alt text for every non-decorative asset in `src/content/media.ts`, keyed by media id. The
   * decorative assets are absent on purpose: they render `aria-hidden`.
   */
  media: Record<DescribedMediaId, string>
  /** Visible label on AI-generated imagery, which the legal notice commits us to showing. */
  aiGeneratedLabel: string
}
