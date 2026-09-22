import { type RouteConfig, index, route } from '@react-router/dev/routes'
import { LOCALES } from './i18n/locales'
import { PUBLIC_ROUTES, ROUTE_IDS } from './i18n/routes'

// Paths are relative to `appDirectory` (src). Every public page is registered once per locale from
// the manifest in i18n/routes.ts. Unpublished locales are registered but not prerendered (see
// react-router.config.ts), so they 404 on the deployed site. Auth routes are never prerendered.
const publicRoutes = ROUTE_IDS.flatMap((id) =>
  LOCALES.map((locale) => {
    const { file, path } = PUBLIC_ROUTES[id]
    const routeId = `${id}.${locale}`
    return path[locale] === '/' ? index(file, { id: routeId }) : route(path[locale].slice(1), file, { id: routeId })
  }),
)

export default [
  ...publicRoutes,
  route('login', 'pages/LoginPage.tsx'),
  route('auth/callback', 'pages/AuthCallbackPage.tsx'),
  // Keep in sync with HUB_PATH in src/lib/routes.ts.
  route('app', 'pages/ToolsHubPage.tsx'),
] satisfies RouteConfig
