import { publishedLocales } from './locales'

/** Resolved at build time in vite.config.ts from isItalianPublished(process.env). */
export const IT_PUBLISHED: boolean = __DOME_IT_PUBLISHED__

export const PUBLISHED_LOCALES = publishedLocales(IT_PUBLISHED)
