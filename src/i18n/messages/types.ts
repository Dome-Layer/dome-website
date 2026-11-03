import type { DescribedMediaId } from '../../content/media'
import type { Locale } from '../locales'
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

/** The project pages' closing panel: its buttons are shared words (`common`), so only the question is here. */
export interface ProjectClosingText {
  heading: string
  body: string
}

/** A page hero without buttons (About, Contact). */
export interface PlainHeroText {
  eyebrow: string
  heading: string
  lead: string
}

/**
 * Shape of every message catalogue. Each locale's catalogue is typed with it, so a missing or
 * misspelt key fails `tsc`. Page body copy moves in here when the pages are rebuilt (plan 1c, 1d).
 */
/** One of the three "what it does" points on a tool page: a short figure, a title and a line. */
export interface ToolFeature {
  figure: string
  title: string
  body: string
}

/**
 * A tool's page under /dome (tool pages redesign, canvas signed off 2026-11-03). Tool names and the
 * DOME phase names stay English in every locale; the governance event fields shown under "What it
 * records" are code identifiers and live in `src/content/toolPages.ts`, not here.
 */
export interface ToolPageText {
  /** The DOME phase the tool belongs to. */
  phase: string
  /** The line under the tool name. */
  tagline: string
  lead: string
  /** Launch button, e.g. "Open Process Analyzer". */
  open: string
  /** The screenshot of the tool: what it shows, and the caption saying the data is made up. */
  shot: { alt: string; caption: string }
  features: { heading: string; items: readonly [ToolFeature, ToolFeature, ToolFeature] }
  howItWorks: { heading: string; steps: readonly ItemText[] }
  record: { heading: string; lead: string }
  method: { heading: string; body: string }
  closing: ProjectClosingText
}

/**
 * One block of a legal document. Strings may use the inline markup rendered by
 * `LegalDocument`: **bold**, `code`, [label](target) where target is a route id such as
 * `privacy`, or a `mailto:` address, and a newline for a line break.
 */
export type LegalBlock =
  | { p: string }
  | { h3: string }
  /** A bold lead-in paragraph naming the data item that follows. */
  | { label: string }
  /** The legal basis line under a data item, set in small italics. */
  | { basis: string }
  | { list: readonly string[] }
  /** A highlighted notice box. */
  | { warning: string }
  | { table: { head: readonly string[]; rows: readonly (readonly string[])[] } }

export interface LegalDocumentText {
  back: string
  updated: string
  title: string
  appliesTo: string
  /**
   * Says that the English version is the binding one, under the title, followed by a link to it.
   * Set on the Dutch and German documents; unset in English, which is that version, and in Italian.
   */
  binding?: { note: string; link: string }
  sections: readonly { heading: string; blocks: readonly LegalBlock[] }[]
  /** Link to the sibling document at the foot of the page. */
  sibling: string
}

export interface Messages {
  site: {
    /** One-paragraph description of DOME, for structured data and llms.txt. */
    description: string
    /** Longer llms.txt introduction. */
    llmsIntro: string
    llmsSections: { pages: string; tools: string; legal: string }
    /** What DOME does, named one by one for the Organization's `knowsAbout` in the structured data. */
    knowsAbout: readonly string[]
  }
  nav: {
    homeLabel: string
    /** The tools page (/dome). */
    tools: string
    agentFlow: string
    dome: string
    about: string
    contact: string
    signIn: string
    signOut: string
    yourTools: string
    openMenu: string
    closeMenu: string
    switchToLight: string
    switchToDark: string
  }
  switcher: {
    /** "Language": names the language menu (three or more published languages) and its list. */
    language: string
    /**
     * Description of the two-language toggle, by the language it leads to ("Read this page in
     * Italian"), in the current page's language. The entry for the page's own language is unused.
     */
    readIn: Record<Locale, string>
  }
  footer: {
    tagline: string
    /** Accessible name of the footer navigation. */
    navLabel: string
    /** Heading of the column of this site's pages. */
    project: string
    /** Heading of the column of links off the site. */
    elsewhere: string
    /** Link to francescoprodomo.com, the consulting site. */
    workWith: string
    github: string
    /** Footer link to Francesco's LinkedIn profile (DOME has no LinkedIn page). */
    linkedin: string
    /** Label before the certified email (PEC) address in the footer's legal line. */
    pec: string
    privacy: string
    terms: string
    cookies: string
    rights: string
  }
  /**
   * The cookie notice shown at the foot of public pages until dismissed. Hardcoded English on every
   * locale until 2026-10-01. It must never say less than the cookie page does.
   */
  cookieNotice: {
    lead: string
    body: string
    link: string
    dismiss: string
  }
  /** The contact form, which moved out of the footer onto its own page (plan phase 1c). */
  contactForm: {
    heading: string
    intro: string
    nameLabel: string
    namePlaceholder: string
    emailLabel: string
    emailPlaceholder: string
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
  /** Metadata for every public page. */
  meta: Record<RouteId, PageMetaText>
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
    /**
     * Topics offered on the contact form: feedback, demo access (preselected by `?topic=demo`),
     * something else. Sent with the message as written, so the inbox shows the visitor's language.
     */
    topics: readonly [string, string, string]
    /** Sign in, then the /app hub (DOME_DECISIONS 2026-11-02). */
    tryTool: string
    watchRun: string
    askDemo: string
    /** The recorded Agent Flow run. Until the recording exists (roadmap row 7) it is this diagram and the steps. */
    run: {
      badge: string
      /** Accessible name of the diagram, which reads the stages in order. */
      diagramLabel: string
      stages: readonly [string, string, string, string, string]
      steps: readonly ItemText[]
    }
  }

  /**
   * Page body copy. It lived hardcoded in the components until phase 1d, which meant an Italian
   * page rendered Italian metadata around English headings. Keyed by page, then by section.
   */
  pages: {
    home: {
      /** `scrollCue` is the small label under the home hero's scene; it is decorative, never read out. */
      hero: { eyebrow: string; heading: string; lead: string; note: string; scrollCue: string }
      /** The DOME method: four phases, the tools under each, and the governance strip. */
      method: SectionText & {
        phaseLabel: string
        phases: readonly ItemText[]
        governance: string
        openDashboard: string
      }
      tools: SectionText & { all: string }
      run: SectionText & { lead: string; cta: string }
      closing: ProjectClosingText
      /** The quiet hire line under the closing panel; the link to francescoprodomo.com follows it. */
      hire: string
    }
    dome: {
      hero: HeroText & { note: string }
      blocks: SectionText & {
        openTool: string
        details: string
        items: readonly (ItemText & { phase: string })[]
      }
      agentFlow: SectionText & { lead: string; cta: string }
      governance: SectionText & { openDashboard: string; details: string }
      standards: SectionText & { items: readonly ItemText[] }
      closing: ProjectClosingText
      hire: string
    }
    about: {
      hero: PlainHeroText
      why: SectionText & { paragraphs: readonly string[] }
      facts: readonly { figure: string; label: string }[]
      builder: SectionText & { name: string; bio: string; workWith: string; github: string; linkedin: string }
      closing: ProjectClosingText
    }
    contact: {
      hero: PlainHeroText
      details: {
        heading: string
        email: string
        pec: string
        location: string
        locationValue: string
        /** Label of the GitHub link. */
        code: string
        legal: string
      }
      hire: { heading: string; text: string }
    }
    /** The DOME tool pages. Their copy was hardcoded in English until 2026-09-28. */
    tools: {
      /** Back link to the tools page. */
      back: string
      whatItDoes: string
      howItWorks: string
      whatItRecords: string
      /** Eyebrow of the method strip. */
      inMethod: string
      /** Marks the current tool in the method strip. */
      thisPage: string
      allTools: string
      processAnalyzer: ToolPageText
      llmCouncil: ToolPageText
      documentIntelligence: ToolPageText
      dataIntelligence: ToolPageText
      governanceDashboard: ToolPageText
      /** Agent Flow's page, with the governed invoice case merged in (site split, 2026-11-01). */
      agentFlow: {
        phase: string
        tagline: string
        lead: string
        shot: { alt: string; caption: string }
        /** Launch button, used only once Agent Flow is self-serve (AGENT_FLOW_LIVE). */
        openQueue: string
        askDemo: string
        demoNote: string
        why: { eyebrow: string; heading: string; paragraphs: readonly string[]; outcomes: readonly ItemText[] }
        run: { eyebrow: string; heading: string; lead: string; stages: readonly (ItemText & { tool: string })[] }
        record: { heading: string; lead: string; cta: string; events: readonly { what: string; review: string }[] }
        method: { heading: string; body: string }
        closing: ProjectClosingText
      }
    }
    privacy: LegalDocumentText
    terms: LegalDocumentText
    /** The cookie policy (Sprint C item 2): every cookie and browser storage entry, and why. */
    cookies: LegalDocumentText
  }
}
