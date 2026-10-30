import { readdirSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import type { Config } from '@react-router/dev/config'
import { LOCALES as ALL_LOCALES, publishedLocales } from './src/i18n/locales'
import { CLIENT_ONLY_PATHS, NOT_FOUND_PATHS, localeFromPath } from './src/i18n/routes'
import { buildLlmsTxt, buildRobots, buildSitemap } from './src/seo/files'

const LOCALES = publishedLocales(process.env)
const CLIENT_ONLY = new Set<string>(CLIENT_ONLY_PATHS)

export default {
  appDirectory: 'src',
  // No runtime server: every public page is prerendered to static HTML at build time, so
  // crawlers that do not run JavaScript still get real content and per-page metadata.
  ssr: false,
  async prerender({ getStaticPaths }) {
    // Auth routes are served from the SPA fallback (vercel.json); unpublished locales not at all.
    // The 404 page is prerendered once per published locale (/404, /it/404, ...); the Worker serves it
    // with the 404 status for any address the site does not have.
    const pages = getStaticPaths().filter((path) => !CLIENT_ONLY.has(path) && LOCALES.includes(localeFromPath(path)))
    return [...pages, ...NOT_FOUND_PATHS.filter((path) => LOCALES.includes(localeFromPath(path)))]
  },
  async buildEnd({ reactRouterConfig }) {
    const client = join(reactRouterConfig.buildDirectory, 'client')
    writeFileSync(join(client, 'sitemap.xml'), buildSitemap(LOCALES))
    writeFileSync(join(client, 'robots.txt'), buildRobots())
    writeFileSync(join(client, 'llms.txt'), buildLlmsTxt(LOCALES))
    // The social images of an unpublished locale are committed in public/ but not deployed.
    const unpublished = ALL_LOCALES.filter((locale) => !LOCALES.includes(locale))
    const social = join(client, 'social')
    for (const file of readdirSync(social)) {
      if (unpublished.some((locale) => file.endsWith(`-${locale}.jpg`))) rmSync(join(social, file))
    }
    console.log(`SEO files written for locales: ${LOCALES.join(', ')}`)
  },
} satisfies Config
