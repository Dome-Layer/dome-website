import { DEFAULT_LOCALE, LOCALES, type Locale } from './locales'

interface PublicRoute {
  /** Route module, relative to src (the React Router appDirectory). */
  file: string
  path: Record<Locale, string>
  /** Last meaningful content change, used for the sitemap lastmod (YYYY-MM-DD). */
  updatedAt: string
}

/**
 * Every public, prerendered page and its URL in each locale. English sits at the root, every other
 * locale under /<locale>/ with slugs in its own language (tool slugs stay English, like the names). src/routes.ts, the prerender list, hreflang, the sitemap, the
 * language switcher and the first-visit locale redirect (src/i18n/detect.ts, run by the Worker) all
 * read from here.
 *
 * Adding a route: add it here and add its meta to every message catalogue (a test checks it).
 * The locale redirect picks it up from here.
 */
export const PUBLIC_ROUTES = {
  home: { file: 'pages/HomePage.tsx', path: { en: '/', it: '/it', nl: '/nl', de: '/de' }, updatedAt: '2026-11-03' },
  dome: { file: 'pages/DomePage.tsx', path: { en: '/dome', it: '/it/dome', nl: '/nl/dome', de: '/de/dome' }, updatedAt: '2026-11-03' },
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
    updatedAt: '2026-11-03',
  },
  about: { file: 'pages/AboutPage.tsx', path: { en: '/about', it: '/it/chi-siamo', nl: '/nl/over-ons', de: '/de/ueber-uns' }, updatedAt: '2026-11-03' },
  contact: { file: 'pages/ContactPage.tsx', path: { en: '/contact', it: '/it/contatti', nl: '/nl/contact', de: '/de/kontakt' }, updatedAt: '2026-11-03' },
  privacy: { file: 'pages/PrivacyPage.tsx', path: { en: '/privacy', it: '/it/privacy', nl: '/nl/privacy', de: '/de/datenschutz' }, updatedAt: '2026-11-03' },
  terms: { file: 'pages/TermsPage.tsx', path: { en: '/terms', it: '/it/termini', nl: '/nl/voorwaarden', de: '/de/nutzungsbedingungen' }, updatedAt: '2026-09-28' },
  cookies: { file: 'pages/CookiesPage.tsx', path: { en: '/cookies', it: '/it/cookie', nl: '/nl/cookies', de: '/de/cookies' }, updatedAt: '2026-11-03' },
} satisfies Record<string, PublicRoute>

export type RouteId = keyof typeof PUBLIC_ROUTES

export const ROUTE_IDS = Object.keys(PUBLIC_ROUTES) as RouteId[]

/** Pages that are neither a tool nor legal: the ones llms.txt lists first. */
export const PAGE_IDS = ['home', 'dome', 'about', 'contact'] as const satisfies readonly RouteId[]

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
