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

/** A heading with its eyebrow and optional standfirst: the shape most sections open with. */
export interface SectionText {
  eyebrow: string
  heading: string
  lead?: string
}

/** A titled item in a list: a card, a step, a row. */
export interface ItemText {
  title: string
  body: string
}

/** A hero: eyebrow, headline, standfirst and two calls to action. */
export interface HeroText {
  eyebrow: string
  heading: string
  lead: string
  primary: string
  secondary: string
}

/** The panel every page closes on. */
export interface ClosingText {
  heading: string
  body: string
  primary: string
}

/** A service line page. Both service lines are built from the same sections. */
export interface ServicePageText {
  hero: HeroText
  intro: SectionText & { items: readonly ItemText[] }
  /** The UX page has a deliverables list; the automation page goes straight to its steps. */
  deliver?: SectionText & { items: readonly ItemText[] }
  band: SectionText & { points: readonly string[] }
  steps: SectionText & { items: readonly ItemText[] }
  related: string
  closing: ClosingText
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
  media: Record<DescribedMediaId, string> & {
    /** The tablet product shot, which is not a manifest asset yet. */
    tabletMockup: string
  }
  /** Visible label on AI-generated imagery, which the legal notice commits us to showing. */
  aiGeneratedLabel: string

  /** Copy shared by more than one page. */
  common: {
    sendMessage: string
    relatedWork: string
    anonymised: string
    viewAllCaseStudies: string
    /** Topics offered on the contact form and the booking calendar, in service-line order. */
    topics: readonly [string, string, string, string]
  }

  /**
   * Page body copy. It lived hardcoded in the components until phase 1d, which meant an Italian
   * page rendered Italian metadata around English headings. Keyed by page, then by section.
   */
  pages: {
    home: {
      hero: HeroText
      sectors: { eyebrow: string; items: readonly string[] }
      services: SectionText & { items: readonly (ItemText & { cta: string })[] }
      howWeWork: SectionText & {
        phaseLabel: string
        phases: readonly ItemText[]
        governance: string
      }
      selectedWork: { eyebrow: string; heading: string }
      capabilities: SectionText & { tools: readonly string[]; cta: string }
      operatingModel: SectionText & { cta: string; items: readonly ItemText[] }
      closing: ClosingText
    }
    /** The two service lines share a shape; see `ServicePageText`. */
    services: {
      breadcrumb: string
      aiProcessAutomation: ServicePageText
      enterpriseUx: ServicePageText
    }
    dome: {
      hero: HeroText
      blocks: SectionText & {
        openTool: string
        details: string
        items: readonly (ItemText & { phase: string })[]
      }
      agentFlow: SectionText & { badge: string; cta: string; steps: readonly ItemText[] }
      governance: SectionText & { openDashboard: string; details: string }
      standards: SectionText & { items: readonly ItemText[] }
      partner: { text: string; cta: string }
      closing: ClosingText
    }
    caseStudies: {
      hero: HeroText
      groups: readonly { eyebrow: string; heading: string }[]
      note: string
      closing: ClosingText
    }
    caseStudy: {
      back: string
      challenge: string
      whatWeDid: string
      outcomes: string
      client: string
      role: string
      capabilities: string
      cta: string
      readNext: string
      notFound: string
      closing: ClosingText
    }
    about: {
      hero: HeroText
      who: SectionText & { paragraphs: readonly string[] }
      facts: readonly { figure: string; label: string }[]
      setup: SectionText & { items: readonly ItemText[] }
      expect: SectionText & { items: readonly ItemText[] }
      partner: SectionText & { body: string }
      leadership: SectionText & { name: string; role: string; bio: string; linkedin: string }
      where: SectionText & { cta: string }
      closing: ClosingText
    }
    contact: {
      hero: HeroText
      book: { heading: string; lead: string }
      calendar: {
        topicLegend: string
        notLoaded: string
        show30: string
        show15: string
        notice: string
        noticeEnd: string
      }
      details: SectionText & {
        email: string
        pec: string
        booking: string
        location: string
        locationValue: string
        legal: string
      }
    }
  }
}
