/**
 * Destinations for pages the restructure has not built yet (plan phase 1c).
 *
 * Everything already registered in `src/i18n/routes.ts` is linked with `localizedHref`, which is
 * locale-aware. These three are not pages yet, so they are collected here to keep the placeholder
 * in one place. **They 404 until the PR that builds them lands**: case studies in 3d, about and
 * contact in 3e. Delete this file then.
 */
export const SITE = {
  caseStudies: '/case-studies',
  about: '/about',
  contact: '/contact',
} as const
