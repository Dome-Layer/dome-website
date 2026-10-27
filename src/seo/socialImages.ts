import { caseStudy } from '../content/caseStudies'
import { MEDIA, largest, type MediaId } from '../content/media'
import type { Locale } from '../i18n/locales'
import { MESSAGES } from '../i18n/messages'
import { ROUTE_IDS, TOOL_ROUTE_IDS, caseStudyIdFor, type RouteId } from '../i18n/routes'

/**
 * The social images: the Open Graph and Twitter card for every page, 1200x630 JPEG in
 * public/social/, one per page group and locale (SEO audit M1, 2026-10-20). Each shows the page's
 * hero eyebrow and heading over its hero image, so a shared link reads like the page it opens. The
 * home card, which legal pages share, sits on the home hero's blue surface with the globe instead
 * (DESIGN_SYSTEM v2.4 and v2.5), like the page it opens.
 *
 * `npm run social-images` renders them from this file. Rerun it after changing a hero eyebrow or
 * heading, a case study title or descriptor, a hero image, or after adding a locale; the test in
 * socialImages.test.ts fails while a page points at an image that does not exist.
 */

const LEGAL_ROUTE_IDS: readonly RouteId[] = ['privacy', 'terms', 'cookies']

/** The page whose image a route uses: tool pages share the capabilities image, legal pages the home one. */
export function socialImageRoute(id: RouteId): RouteId {
  if ((TOOL_ROUTE_IDS as readonly RouteId[]).includes(id)) return 'dome'
  if (LEGAL_ROUTE_IDS.includes(id)) return 'home'
  return id
}

/** Every route that has an image of its own. */
export const SOCIAL_IMAGE_ROUTE_IDS: readonly RouteId[] = [...new Set(ROUTE_IDS.map(socialImageRoute))]

const kebab = (id: string) => id.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`)

/** Site-relative path of the image a page uses in a locale, for example `/social/about-it.jpg`. */
export function socialImagePath(id: RouteId, locale: Locale): string {
  return `/social/${kebab(socialImageRoute(id))}-${locale}.jpg`
}

export interface SocialImageSpec {
  eyebrow: string
  heading: string
  /** Site-relative path of the background photograph; absent on the home card. */
  background?: string
  /** The home card: the hero's blue surface and the dotted globe instead of a photograph. */
  surface?: boolean
  /** The AI-generated label, set when the background is an AI image the site labels too. */
  aiLabel?: string
}

/** Background photograph of each page with its own hero, except home (see `socialImageSpec`). */
const HERO_MEDIA = {
  aiProcessAutomation: 'aiProcessAutomationHero',
  enterpriseUx: 'enterpriseUxHero',
  dome: 'capabilitiesHero',
  caseStudies: 'caseStudiesHero',
  about: 'aboutHero',
  contact: 'contactHero',
} as const satisfies Partial<Record<RouteId, MediaId>>

function heroText(id: keyof typeof HERO_MEDIA, locale: Locale): { eyebrow: string; heading: string } {
  const pages = MESSAGES[locale].pages
  switch (id) {
    case 'aiProcessAutomation':
    case 'enterpriseUx':
      return pages.services[id].hero
    default:
      return pages[id].hero
  }
}

function spec(eyebrow: string, heading: string, media: MediaId, locale: Locale): SocialImageSpec {
  const asset = MEDIA[media]
  if (asset.kind !== 'image') throw new Error(`Social image background "${media}" is not an image`)
  const labelled = asset.aiLabel && !asset.decorative
  return {
    eyebrow,
    heading,
    background: largest(asset.jpeg).src,
    ...(labelled ? { aiLabel: MESSAGES[locale].aiGeneratedLabel } : {}),
  }
}

/** What the image for a route shows. `id` must be in SOCIAL_IMAGE_ROUTE_IDS. */
export function socialImageSpec(id: RouteId, locale: Locale): SocialImageSpec {
  const studyId = caseStudyIdFor(id)
  if (studyId) {
    const study = caseStudy(studyId)
    if (!study) throw new Error(`Route "${id}" names case study "${studyId}", which does not exist`)
    // The DOME capability study shows a tablet mockup on its page; its card uses the capabilities hero.
    const media = study.media === 'tabletMockup' ? 'capabilitiesHero' : study.media
    return spec(study.descriptor[locale], study.title[locale], media, locale)
  }
  if (id === 'home') {
    const { eyebrow, heading } = MESSAGES[locale].pages.home.hero
    return { eyebrow, heading, surface: true }
  }
  if (!(id in HERO_MEDIA)) throw new Error(`Route "${id}" has no social image of its own`)
  const heroId = id as keyof typeof HERO_MEDIA
  const { eyebrow, heading } = heroText(heroId, locale)
  return spec(eyebrow, heading, HERO_MEDIA[heroId], locale)
}
