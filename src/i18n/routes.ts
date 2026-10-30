import { DEFAULT_LOCALE, LOCALES, type Locale } from './locales'

interface PublicRoute {
  /** Route module, relative to src (the React Router appDirectory). */
  file: string
  path: Record<Locale, string>
  /** Last meaningful content change, used for the sitemap lastmod (YYYY-MM-DD). */
  updatedAt: string
  /**
   * Case study this route renders, by id. Such a route takes its title and description from the
   * case content rather than from the message catalogues, so a summary lives in exactly one place.
   */
  caseStudy?: string
}

/**
 * Every public, prerendered page and its URL in each locale. English sits at the root, every other
 * locale under /<locale>/ with slugs in its own language (tool slugs stay English, like the names). src/routes.ts, the prerender list, hreflang, the sitemap, the
 * language switcher and the redirect middleware all read from here.
 *
 * Adding a route: add it here, add its meta to every message catalogue and add its English path
 * to the matcher in middleware.ts (a test checks the last two).
 */
export const PUBLIC_ROUTES = {
  home: { file: 'pages/HomePage.tsx', path: { en: '/', it: '/it', nl: '/nl', de: '/de' }, updatedAt: '2026-10-13' },
  aiProcessAutomation: {
    file: 'pages/AiProcessAutomationPage.tsx',
    path: {
      en: '/services/ai-process-automation',
      it: '/it/servizi/automazione-processi-ai',
      nl: '/nl/diensten/ai-procesautomatisering',
      de: '/de/leistungen/ki-prozessautomatisierung',
    },
    updatedAt: '2026-10-13',
  },
  enterpriseUx: {
    file: 'pages/EnterpriseUxPage.tsx',
    path: {
      en: '/services/enterprise-ux',
      it: '/it/servizi/ux-enterprise',
      nl: '/nl/diensten/enterprise-ux',
      de: '/de/leistungen/enterprise-ux',
    },
    updatedAt: '2026-10-13',
  },
  dome: { file: 'pages/DomePage.tsx', path: { en: '/dome', it: '/it/dome', nl: '/nl/dome', de: '/de/dome' }, updatedAt: '2026-09-22' },
  processAnalyzer: {
    file: 'pages/ProcessAnalyzerPage.tsx',
    path: { en: '/dome/process-analyzer', it: '/it/dome/process-analyzer', nl: '/nl/dome/process-analyzer', de: '/de/dome/process-analyzer' },
    updatedAt: '2026-09-28',
  },
  dataIntelligence: {
    file: 'pages/DataIntelligencePage.tsx',
    path: { en: '/dome/data-intelligence', it: '/it/dome/data-intelligence', nl: '/nl/dome/data-intelligence', de: '/de/dome/data-intelligence' },
    updatedAt: '2026-09-28',
  },
  llmCouncil: {
    file: 'pages/LlmCouncilPage.tsx',
    path: { en: '/dome/llm-council', it: '/it/dome/llm-council', nl: '/nl/dome/llm-council', de: '/de/dome/llm-council' },
    updatedAt: '2026-09-28',
  },
  documentIntelligence: {
    file: 'pages/DocumentIntelligencePage.tsx',
    path: { en: '/dome/document-intelligence', it: '/it/dome/document-intelligence', nl: '/nl/dome/document-intelligence', de: '/de/dome/document-intelligence' },
    updatedAt: '2026-09-28',
  },
  governanceDashboard: {
    file: 'pages/GovernanceDashboardPage.tsx',
    path: { en: '/dome/governance-dashboard', it: '/it/dome/governance-dashboard', nl: '/nl/dome/governance-dashboard', de: '/de/dome/governance-dashboard' },
    updatedAt: '2026-09-28',
  },
  agentFlow: {
    file: 'pages/AgentFlowPage.tsx',
    path: { en: '/dome/agent-flow', it: '/it/dome/agent-flow', nl: '/nl/dome/agent-flow', de: '/de/dome/agent-flow' },
    updatedAt: '2026-09-28',
  },
  about: { file: 'pages/AboutPage.tsx', path: { en: '/about', it: '/it/chi-siamo', nl: '/nl/over-ons', de: '/de/ueber-uns' }, updatedAt: '2026-09-22' },
  contact: { file: 'pages/ContactPage.tsx', path: { en: '/contact', it: '/it/contatti', nl: '/nl/contact', de: '/de/kontakt' }, updatedAt: '2026-09-22' },
  caseStudies: {
    file: 'pages/CaseStudiesPage.tsx',
    path: { en: '/case-studies', it: '/it/casi-studio', nl: '/nl/cases', de: '/de/fallstudien' },
    updatedAt: '2026-09-22',
  },
  caseProcurement: {
    file: 'pages/CaseStudyPage.tsx',
    path: {
      en: '/case-studies/procurement-workflow-redesign',
      it: '/it/casi-studio/riprogettazione-acquisti',
      nl: '/nl/cases/herontwerp-inkoopproces',
      de: '/de/fallstudien/neugestaltung-einkaufsprozesse',
    },
    updatedAt: '2026-09-22',
    caseStudy: 'procurement',
  },
  caseCompliance: {
    file: 'pages/CaseStudyPage.tsx',
    path: {
      en: '/case-studies/ai-compliance-assessments',
      it: '/it/casi-studio/valutazioni-conformita-ai',
      nl: '/nl/cases/ai-compliancebeoordelingen',
      de: '/de/fallstudien/ki-compliance-bewertungen',
    },
    updatedAt: '2026-09-22',
    caseStudy: 'compliance',
  },
  caseInvoice: {
    file: 'pages/CaseStudyPage.tsx',
    path: {
      en: '/case-studies/governed-invoice-approval',
      it: '/it/casi-studio/approvazione-fatture-governata',
      nl: '/nl/cases/factuurgoedkeuring-met-governance',
      de: '/de/fallstudien/rechnungsfreigabe-mit-governance',
    },
    updatedAt: '2026-09-22',
    caseStudy: 'invoice',
  },
  caseMetals: {
    file: 'pages/CaseStudyPage.tsx',
    path: {
      en: '/case-studies/metals-trading-platform',
      it: '/it/casi-studio/piattaforma-trading-metalli',
      nl: '/nl/cases/handelsplatform-metalen',
      de: '/de/fallstudien/handelsplattform-metalle',
    },
    updatedAt: '2026-09-22',
    caseStudy: 'metals',
  },
  caseTraceability: {
    file: 'pages/CaseStudyPage.tsx',
    path: {
      en: '/case-studies/food-traceability-platform',
      it: '/it/casi-studio/piattaforma-tracciabilita-alimentare',
      nl: '/nl/cases/traceerbaarheid-voedselketen',
      de: '/de/fallstudien/rueckverfolgbarkeit-lebensmittel',
    },
    updatedAt: '2026-09-22',
    caseStudy: 'traceability',
  },
  caseTrading: {
    file: 'pages/CaseStudyPage.tsx',
    path: {
      en: '/case-studies/trading-app-redesign',
      it: '/it/casi-studio/riprogettazione-app-trading',
      nl: '/nl/cases/herontwerp-trading-app',
      de: '/de/fallstudien/neugestaltung-trading-app',
    },
    updatedAt: '2026-09-22',
    caseStudy: 'trading',
  },
  casePlatform: {
    file: 'pages/CaseStudyPage.tsx',
    path: {
      en: '/case-studies/ai-procurement-platform',
      it: '/it/casi-studio/piattaforma-acquisti-ai',
      nl: '/nl/cases/ai-inkoopplatform',
      de: '/de/fallstudien/ki-einkaufsplattform',
    },
    updatedAt: '2026-09-22',
    caseStudy: 'platform',
  },
  caseTraining: {
    file: 'pages/CaseStudyPage.tsx',
    path: {
      en: '/case-studies/ai-training-videos',
      it: '/it/casi-studio/video-formativi-ai',
      nl: '/nl/cases/ai-trainingsvideos',
      de: '/de/fallstudien/ki-schulungsvideos',
    },
    updatedAt: '2026-09-22',
    caseStudy: 'training',
  },
  privacy: { file: 'pages/PrivacyPage.tsx', path: { en: '/privacy', it: '/it/privacy', nl: '/nl/privacy', de: '/de/datenschutz' }, updatedAt: '2026-10-01' },
  terms: { file: 'pages/TermsPage.tsx', path: { en: '/terms', it: '/it/termini', nl: '/nl/voorwaarden', de: '/de/nutzungsbedingungen' }, updatedAt: '2026-09-28' },
  cookies: { file: 'pages/CookiesPage.tsx', path: { en: '/cookies', it: '/it/cookie', nl: '/nl/cookies', de: '/de/cookies' }, updatedAt: '2026-10-30' },
} satisfies Record<string, PublicRoute>

export type RouteId = keyof typeof PUBLIC_ROUTES

export const ROUTE_IDS = Object.keys(PUBLIC_ROUTES) as RouteId[]

/** Routes whose metadata is hand-written in the message catalogues (everything but case studies). */
export type StaticRouteId = Exclude<RouteId, 'caseProcurement' | 'caseCompliance' | 'caseInvoice' | 'caseMetals' | 'caseTraceability' | 'caseTrading' | 'casePlatform' | 'caseTraining'>

/** Route ids that render a case study, in manifest order. */
export const CASE_STUDY_ROUTE_IDS = ROUTE_IDS.filter((id) => caseStudyIdFor(id) !== undefined)

/**
 * The case study a route renders, if it renders one. Widened to the declared interface because
 * `satisfies` keeps each entry's literal type, and `caseStudy` is absent from the ones that omit it.
 */
export function caseStudyIdFor(id: RouteId): string | undefined {
  return (PUBLIC_ROUTES[id] as PublicRoute).caseStudy
}

/** The route that renders a given case study, for linking from a card. */
export function caseStudyHref(studyId: string, locale: Locale): string {
  const id = ROUTE_IDS.find((routeId) => caseStudyIdFor(routeId) === studyId)
  if (!id) throw new Error(`No route renders case study "${studyId}"`)
  return localizedHref(id, locale)
}

/** Pages that are neither a tool nor legal: the ones llms.txt lists first. */
export const PAGE_IDS = ['home', 'aiProcessAutomation', 'enterpriseUx', 'dome', 'caseStudies', 'about', 'contact'] as const satisfies readonly RouteId[]

/** Tool pages, in the order the site presents them. */
export const TOOL_ROUTE_IDS = [
  'processAnalyzer',
  'dataIntelligence',
  'llmCouncil',
  'documentIntelligence',
  'governanceDashboard',
  'agentFlow',
] as const satisfies readonly RouteId[]

/**
 * Client-only routes (not prerendered, served from the SPA fallback). They keep unprefixed URLs in
 * every language because the tool subdomains redirect to /login?redirect=, and they are noindex.
 */
export const CLIENT_ONLY_PATHS = ['/login', '/auth/callback', '/app'] as const

/** The prerendered 404 page of a locale: /404 for English, /<locale>/404 otherwise. */
export function localeNotFoundPath(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? '/404' : `/${locale}/404`
}

/** The 404 page in every locale; the Worker serves one for unknown addresses. */
export const NOT_FOUND_PATHS: readonly string[] = LOCALES.map(localeNotFoundPath)

/** The 404 page for an unknown address: the one of the locale its prefix names, while that locale is published. */
export function notFoundPath(pathname: string, published: readonly Locale[]): string {
  const locale = localeFromPath(pathname)
  return published.includes(locale) ? localeNotFoundPath(locale) : localeNotFoundPath(DEFAULT_LOCALE)
}

export function localizedHref(id: RouteId, locale: Locale): string {
  return PUBLIC_ROUTES[id].path[locale]
}

function normalise(pathname: string): string {
  return pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
}

/** The locale a path belongs to, from its first segment; anything without a locale prefix is English. */
export function localeFromPath(pathname: string): Locale {
  const first = normalise(pathname).split('/')[1]
  const locale = LOCALES.find((l) => l !== DEFAULT_LOCALE && l === first)
  return locale ?? DEFAULT_LOCALE
}

const ID_BY_PATH = new Map<string, RouteId>(
  ROUTE_IDS.flatMap((id) => Object.values(PUBLIC_ROUTES[id].path).map((path) => [path, id] as const)),
)

/** The public route a path belongs to, in any locale, or undefined (auth routes, unknown paths). */
export function routeIdFromPath(pathname: string): RouteId | undefined {
  return ID_BY_PATH.get(normalise(pathname))
}
