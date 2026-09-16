import { DEFAULT_LOCALE, type Locale } from './locales'

interface PublicRoute {
  /** Route module, relative to src (the React Router appDirectory). */
  file: string
  path: Record<Locale, string>
  /** Last meaningful content change, used for the sitemap lastmod (YYYY-MM-DD). */
  updatedAt: string
}

/**
 * Every public, prerendered page and its URL in each locale. English sits at the root, Italian
 * under /it/ with Italian slugs. src/routes.ts, the prerender list, hreflang, the sitemap, the
 * language switcher and the redirect middleware all read from here.
 *
 * Adding a route: add it here, add its meta to both message catalogues and add its English path
 * to the matcher in middleware.ts (a test checks the last two).
 */
export const PUBLIC_ROUTES = {
  home: { file: 'pages/HomePage.tsx', path: { en: '/', it: '/it' }, updatedAt: '2026-09-11' },
  processAnalyzer: {
    file: 'pages/ProcessAnalyzerPage.tsx',
    path: { en: '/tools/process-analyzer', it: '/it/strumenti/process-analyzer' },
    updatedAt: '2026-04-09',
  },
  dataIntelligence: {
    file: 'pages/DataIntelligencePage.tsx',
    path: { en: '/tools/data-intelligence', it: '/it/strumenti/data-intelligence' },
    updatedAt: '2026-04-09',
  },
  llmCouncil: {
    file: 'pages/LlmCouncilPage.tsx',
    path: { en: '/tools/llm-council', it: '/it/strumenti/llm-council' },
    updatedAt: '2026-04-13',
  },
  documentIntelligence: {
    file: 'pages/DocumentIntelligencePage.tsx',
    path: { en: '/tools/document-intelligence', it: '/it/strumenti/document-intelligence' },
    updatedAt: '2026-04-29',
  },
  governanceDashboard: {
    file: 'pages/GovernanceDashboardPage.tsx',
    path: { en: '/tools/governance-dashboard', it: '/it/strumenti/governance-dashboard' },
    updatedAt: '2026-06-12',
  },
  agentFlow: {
    file: 'pages/AgentFlowPage.tsx',
    path: { en: '/tools/agent-flow', it: '/it/strumenti/agent-flow' },
    updatedAt: '2026-09-11',
  },
  privacy: { file: 'pages/PrivacyPage.tsx', path: { en: '/privacy', it: '/it/privacy' }, updatedAt: '2026-04-17' },
  terms: { file: 'pages/TermsPage.tsx', path: { en: '/terms', it: '/it/termini' }, updatedAt: '2026-04-17' },
} satisfies Record<string, PublicRoute>

export type RouteId = keyof typeof PUBLIC_ROUTES

export const ROUTE_IDS = Object.keys(PUBLIC_ROUTES) as RouteId[]

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

export function localizedHref(id: RouteId, locale: Locale): string {
  return PUBLIC_ROUTES[id].path[locale]
}

function normalise(pathname: string): string {
  return pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
}

export function localeFromPath(pathname: string): Locale {
  const path = normalise(pathname)
  return path === '/it' || path.startsWith('/it/') ? 'it' : DEFAULT_LOCALE
}

const ID_BY_PATH = new Map<string, RouteId>(
  ROUTE_IDS.flatMap((id) => Object.values(PUBLIC_ROUTES[id].path).map((path) => [path, id] as const)),
)

/** The public route a path belongs to, in any locale, or undefined (auth routes, unknown paths). */
export function routeIdFromPath(pathname: string): RouteId | undefined {
  return ID_BY_PATH.get(normalise(pathname))
}
