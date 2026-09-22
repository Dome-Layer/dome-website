/**
 * Destinations for pages the restructure has not built yet (plan phase 1c).
 *
 * Everything already registered in `src/i18n/routes.ts` is linked with `localizedHref`, which is
 * locale-aware. These three are not pages yet, so they are collected here to keep the placeholder
 * in one place. **They 404 until PR3e builds them.** Delete this file then.
 */
export const SITE = {
  about: '/about',
  contact: '/contact',
} as const
