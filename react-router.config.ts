import type { Config } from '@react-router/dev/config'

/**
 * Routes that only make sense in the browser (auth flows and the signed-in hub). They are not
 * prerendered; Vercel serves them `build/client/__spa-fallback.html` (see vercel.json).
 */
const CLIENT_ONLY_PATHS = new Set(['/login', '/auth/callback', '/app'])

export default {
  appDirectory: 'src',
  // No runtime server: every public page is prerendered to static HTML at build time, so
  // crawlers that do not run JavaScript still get real content and per-page metadata.
  ssr: false,
  async prerender({ getStaticPaths }) {
    return getStaticPaths().filter((path) => !CLIENT_ONLY_PATHS.has(path))
  },
} satisfies Config
