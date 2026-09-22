/**
 * The media manifest: every image, video and logo the public site serves from `public/media/`.
 *
 * One registry, so that provenance, licensing and the AI-generated label cannot drift from the
 * files themselves. Structural facts (paths, intrinsic sizes, formats, source, licence) live here;
 * the translatable alt text lives in the message catalogues under `media`, keyed by the same id,
 * so a missing translation fails `tsc` exactly like any other string.
 *
 * Everything is self-hosted, so the CSP's `default-src 'self'` already covers it and no `media-src`
 * entry is needed. If an asset ever moves to a CDN, add `media-src` to `vercel.json` at the same
 * time.
 *
 * Adding an asset: add the files under `public/media/`, add an entry here, add its alt text to both
 * catalogues (or mark it decorative), and add a row to `public/media/CREDITS.md` keyed by this
 * entry's `usedOn` string. `media.test.ts` checks all of that, so none of the four can drift.
 *
 * ## Why CREDITS.md is public
 *
 * The legal notice states that the AI-generated background textures "are listed in our image
 * credits". Those textures are decorative and carry no on-page label, so that promise is what
 * discharges the disclosure duty for them, and the credits therefore have to stay reachable.
 * It is deliberately an attribution record for visitors, not an engineering one: the encoding
 * detail that used to sit in it lives below instead. **PR3b replaces it with a localised
 * `/credits` page rendered from this manifest**, at which point the raw file goes.
 *
 * ## Encoding
 *
 * Every raster asset ships as AVIF with a JPEG fallback in two widths. Full-bleed imagery is 16:9
 * at 1376x768 and 768x428 (the narrow variant is 428 rather than 432 because the encoder rounds to
 * even heights); the portrait is square at 600x600 and 320x320; the hero poster is 1920x1080 and
 * 960x540. The hero video is AV1 in WebM (1920x1080, 1.1 MB) with an H.264 MP4 fallback (1280x720,
 * 2.1 MB, 30 s). Both are silent, the audio track having been stripped at encode time, which
 * matters because the video autoplays.
 *
 * Reproducing them:
 *
 * ```
 * ffmpeg -i in -vf scale=W:-2:flags=lanczos -q:v 4 out.jpg
 * ffmpeg -i in -vf scale=W:-2:flags=lanczos,format=yuv420p10le -c:v libsvtav1 -crf 34 -frames:v 1 out.avif
 * ffmpeg -i in -an -c:v libsvtav1 -crf 40 hero-home-1080.webm
 * ffmpeg -i in -an -vf scale=1280:-2 -c:v libx264 -preset slow -crf 26 -movflags +faststart hero-home-720.mp4
 * ```
 *
 * Originals live outside the deployed folder, in `_design/media-originals/` under the DOME root.
 * The prompts the AI images were generated from are in `_design/domelayer-redesign/IMAGE_BRIEF.md`.
 */

/** Where an asset came from. Drives the credit line and the visible AI label. */
export type MediaSource =
  /** Francesco's own file. */
  | 'own'
  /** Generated to a brief in `_design/domelayer-redesign/IMAGE_BRIEF.md`. */
  | 'ai'
  /** Licensed stock. `licence` must name the licence. */
  | 'stock'
  /** A screenshot of a DOME tool, captured in both themes. */
  | 'screenshot'
  /** Supplied by a partner and used with permission. */
  | 'partner'

export interface MediaVariant {
  /** Path as the browser requests it, relative to the site root. */
  src: string
  /** Intrinsic pixel size. Always rendered as width/height so nothing shifts on load. */
  width: number
  height: number
}

interface MediaAssetBase {
  /**
   * Decorative assets are rendered `aria-hidden` and carry no alt text, so the surrounding copy
   * has to carry the meaning. Everything else needs alt text in both locales.
   */
  decorative: boolean
  source: MediaSource
  /**
   * AI-generated imagery shows a visible "AI-generated image" label, which the legal notice
   * commits us to. It is false for the portrait, which is a real photograph: labelling that would
   * be misleading in the other direction.
   */
  aiLabel: boolean
  /** Licence or permission, for anything that is not ours outright. */
  licence?: string
  /** Where the asset is used, so an unused file is easy to spot. */
  usedOn: string
}

export interface ImageAsset extends MediaAssetBase {
  kind: 'image'
  /** Narrowest first, ready for `srcset`. AVIF is offered first, JPEG is the fallback. */
  avif: readonly MediaVariant[]
  jpeg: readonly MediaVariant[]
}

export interface VideoAsset extends MediaAssetBase {
  kind: 'video'
  /** Preferred codec first. Both files are silent: the audio track was stripped at encode time. */
  sources: readonly { src: string; type: string }[]
  /** Id of the still shown before playback, and instead of it under reduced motion or Save-Data. */
  poster: 'homeHeroPoster'
}

export interface VectorAsset extends MediaAssetBase {
  kind: 'vector'
  /**
   * Chosen by the active theme through `[data-theme]`, not through `<picture media>`, so the
   * manual toggle is honoured rather than only the OS preference.
   */
  themes: { onLight: MediaVariant; onDark: MediaVariant }
}

export type MediaAsset = ImageAsset | VideoAsset | VectorAsset

/** The 16:9 pair every full-bleed image ships in. */
function wideImage(base: string): Pick<ImageAsset, 'avif' | 'jpeg'> {
  return {
    avif: [
      { src: `/media/${base}-768.avif`, width: 768, height: 428 },
      { src: `/media/${base}-1376.avif`, width: 1376, height: 768 },
    ],
    jpeg: [
      { src: `/media/${base}-768.jpg`, width: 768, height: 428 },
      { src: `/media/${base}-1376.jpg`, width: 1376, height: 768 },
    ],
  }
}

export const MEDIA = {
  // ── Home hero ────────────────────────────────────────────────────────────────────────────────
  homeHeroVideo: {
    kind: 'video',
    sources: [
      { src: '/media/hero-home-1080.webm', type: 'video/webm; codecs="av01.0.05M.08"' },
      { src: '/media/hero-home-720.mp4', type: 'video/mp4; codecs="avc1.640028"' },
    ],
    poster: 'homeHeroPoster',
    decorative: true,
    source: 'own',
    aiLabel: false,
    usedOn: 'Home hero background',
  },
  homeHeroPoster: {
    kind: 'image',
    avif: [
      { src: '/media/hero-home-poster-960.avif', width: 960, height: 540 },
      { src: '/media/hero-home-poster-1920.avif', width: 1920, height: 1080 },
    ],
    jpeg: [
      { src: '/media/hero-home-poster-960.jpg', width: 960, height: 540 },
      { src: '/media/hero-home-poster-1920.jpg', width: 1920, height: 1080 },
    ],
    decorative: true,
    source: 'own',
    aiLabel: false,
    usedOn: 'Home hero poster frame',
  },
  homeHeroStill: {
    kind: 'image',
    ...wideImage('hero-home-still'),
    decorative: false,
    source: 'ai',
    aiLabel: true,
    usedOn: 'Home hero, still alternative to the video',
  },

  // ── Page heroes ──────────────────────────────────────────────────────────────────────────────
  aiProcessAutomationHero: {
    kind: 'image',
    ...wideImage('hero-ai-process-automation'),
    decorative: false,
    source: 'ai',
    aiLabel: true,
    usedOn: 'AI process automation hero',
  },
  enterpriseUxHero: {
    kind: 'image',
    ...wideImage('hero-enterprise-ux'),
    decorative: false,
    source: 'ai',
    aiLabel: true,
    usedOn: 'Enterprise UX hero',
  },
  capabilitiesHero: {
    kind: 'image',
    ...wideImage('hero-capabilities'),
    decorative: false,
    source: 'ai',
    aiLabel: true,
    usedOn: 'DOME capabilities hero',
  },
  aboutHero: {
    kind: 'image',
    ...wideImage('hero-about'),
    decorative: false,
    source: 'ai',
    aiLabel: true,
    usedOn: 'About hero',
  },
  caseStudiesHero: {
    kind: 'image',
    ...wideImage('hero-case-studies'),
    decorative: false,
    source: 'ai',
    aiLabel: true,
    usedOn: 'Case studies index hero',
  },
  contactHero: {
    kind: 'image',
    ...wideImage('hero-contact'),
    decorative: false,
    source: 'ai',
    aiLabel: true,
    usedOn: 'Contact hero',
  },

  // ── Textures ─────────────────────────────────────────────────────────────────────────────────
  textureNetwork: {
    kind: 'image',
    ...wideImage('texture-network'),
    decorative: true,
    source: 'ai',
    aiLabel: true,
    usedOn: 'How we work, and the call-to-action backgrounds',
  },
  textureArchitecture: {
    kind: 'image',
    ...wideImage('texture-architecture'),
    decorative: true,
    source: 'ai',
    aiLabel: true,
    usedOn: 'Built for regulated work, and Where we work',
  },

  // ── Case studies ─────────────────────────────────────────────────────────────────────────────
  caseProcurementWorkflowRedesign: {
    kind: 'image',
    ...wideImage('case-procurement-workflow-redesign'),
    decorative: false,
    source: 'ai',
    aiLabel: true,
    usedOn: 'Case study: procurement workflow redesign',
  },
  caseAiComplianceAssessments: {
    kind: 'image',
    ...wideImage('case-ai-compliance-assessments'),
    decorative: false,
    source: 'ai',
    aiLabel: true,
    usedOn: 'Case study: AI compliance assessments',
  },
  caseMetalsTradingPlatform: {
    kind: 'image',
    ...wideImage('case-metals-trading-platform'),
    decorative: false,
    source: 'ai',
    aiLabel: true,
    usedOn: 'Case study: metals trading platform',
  },
  caseFoodTraceabilityPlatform: {
    kind: 'image',
    ...wideImage('case-food-traceability-platform'),
    decorative: false,
    source: 'ai',
    aiLabel: true,
    usedOn: 'Case study: food traceability platform',
  },
  caseTradingAppRedesign: {
    kind: 'image',
    ...wideImage('case-trading-app-redesign'),
    decorative: false,
    source: 'ai',
    aiLabel: true,
    usedOn: 'Case study: trading app redesign',
  },
  caseAiProcurementPlatform: {
    kind: 'image',
    ...wideImage('case-ai-procurement-platform'),
    decorative: false,
    source: 'ai',
    aiLabel: true,
    usedOn: 'Case study: AI procurement platform',
  },
  caseAiTrainingVideos: {
    kind: 'image',
    ...wideImage('case-ai-training-videos'),
    decorative: false,
    source: 'ai',
    aiLabel: true,
    usedOn: 'Case study: AI training videos',
  },

  // ── People and partners ──────────────────────────────────────────────────────────────────────
  francescoProdomo: {
    kind: 'image',
    avif: [
      { src: '/media/team-francesco-prodomo-320.avif', width: 320, height: 320 },
      { src: '/media/team-francesco-prodomo-600.avif', width: 600, height: 600 },
    ],
    jpeg: [
      { src: '/media/team-francesco-prodomo-320.jpg', width: 320, height: 320 },
      { src: '/media/team-francesco-prodomo-600.jpg', width: 600, height: 600 },
    ],
    decorative: false,
    source: 'own',
    aiLabel: false,
    usedOn: 'About, and the leadership card',
  },
  ionitaLogo: {
    kind: 'vector',
    themes: {
      onLight: { src: '/media/partner-ionita-logo-light-bg.svg', width: 300, height: 150 },
      onDark: { src: '/media/partner-ionita-logo-dark-bg.svg', width: 300, height: 150 },
    },
    decorative: false,
    source: 'partner',
    aiLabel: false,
    licence: 'Supplied by Ionita Consulting and used with permission.',
    usedOn: 'About, and DOME capabilities',
  },
} satisfies Record<string, MediaAsset>

/**
 * Not here yet: the invoice-to-approval case study wants **real DOME tool screenshots**, captured
 * in both themes. They get a `screenshot` entry here and a row in CREDITS.md when they land.
 */

export type MediaId = keyof typeof MEDIA

export const MEDIA_IDS = Object.keys(MEDIA) as MediaId[]

/**
 * Assets that carry meaning and therefore need alt text in every locale. The decorative four (the
 * home hero video and its poster, and the two textures) are deliberately absent: they render
 * `aria-hidden`. `media.test.ts` keeps this list and the manifest's `decorative` flags in step.
 */
export const DESCRIBED_MEDIA_IDS = [
  'homeHeroStill',
  'aiProcessAutomationHero',
  'enterpriseUxHero',
  'capabilitiesHero',
  'aboutHero',
  'caseStudiesHero',
  'contactHero',
  'caseProcurementWorkflowRedesign',
  'caseAiComplianceAssessments',
  'caseMetalsTradingPlatform',
  'caseFoodTraceabilityPlatform',
  'caseTradingAppRedesign',
  'caseAiProcurementPlatform',
  'caseAiTrainingVideos',
  'francescoProdomo',
  'ionitaLogo',
] as const satisfies readonly MediaId[]

export type DescribedMediaId = (typeof DESCRIBED_MEDIA_IDS)[number]

/** Every file the manifest references, for the on-disk check in `media.test.ts`. */
export function mediaFiles(asset: MediaAsset): string[] {
  switch (asset.kind) {
    case 'image':
      return [...asset.avif, ...asset.jpeg].map((v) => v.src)
    case 'video':
      return asset.sources.map((s) => s.src)
    case 'vector':
      return [asset.themes.onLight.src, asset.themes.onDark.src]
  }
}

/** `srcset` for one format, widest last, as the browser expects. */
export function srcSet(variants: readonly MediaVariant[]): string {
  return variants.map((v) => `${v.src} ${v.width}w`).join(', ')
}

/** The variant a plain `src` should point at: the largest, so it is never the blurry one. */
export function largest(variants: readonly MediaVariant[]): MediaVariant {
  return variants.reduce((a, b) => (b.width > a.width ? b : a))
}
