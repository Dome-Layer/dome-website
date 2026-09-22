import { writeFileSync } from 'node:fs'
import { join } from 'node:path'
import type { Config } from '@react-router/dev/config'
import { isItalianPublished, publishedLocales } from './src/i18n/locales'
import { CLIENT_ONLY_PATHS, localeFromPath } from './src/i18n/routes'
import { buildLlmsTxt, buildRobots, buildSitemap } from './src/seo/files'

const LOCALES = publishedLocales(isItalianPublished(process.env))
const CLIENT_ONLY = new Set<string>(CLIENT_ONLY_PATHS)

export default {
  appDirectory: 'src',
  // No runtime server: every public page is prerendered to static HTML at build time, so
  // crawlers that do not run JavaScript still get real content and per-page metadata.
  ssr: false,
  async prerender({ getStaticPaths }) {
    // Auth routes are served from the SPA fallback (vercel.json); unpublished locales not at all.
    return getStaticPaths().filter((path) => !CLIENT_ONLY.has(path) && LOCALES.includes(localeFromPath(path)))
  },
  async buildEnd({ reactRouterConfig }) {
    const client = join(reactRouterConfig.buildDirectory, 'client')
    writeFileSync(join(client, 'sitemap.xml'), buildSitemap(LOCALES))
    writeFileSync(join(client, 'robots.txt'), buildRobots())
    writeFileSync(join(client, 'llms.txt'), buildLlmsTxt(LOCALES))
    console.log(`SEO files written for locales: ${LOCALES.join(', ')}`)
  },
} satisfies Config
