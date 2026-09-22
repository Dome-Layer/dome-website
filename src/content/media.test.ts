import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { describe, expect, it } from 'vitest'
import { en } from '../i18n/messages/en'
import { it as itMessages } from '../i18n/messages/it'
import {
  DESCRIBED_MEDIA_IDS,
  MEDIA,
  MEDIA_IDS,
  type MediaAsset,
  type MediaId,
  type MediaSource,
  largest,
  mediaFiles,
  srcSet,
} from './media'

const MEDIA_DIR = resolve(__dirname, '../../public/media')

/** Every path the manifest references, as a flat list. */
const manifestPaths = MEDIA_IDS.flatMap((id) => mediaFiles(MEDIA[id]))

describe('the manifest and the files on disk agree', () => {
  it('references only files that exist', () => {
    const missing = manifestPaths.filter(
      (src) => !existsSync(join(MEDIA_DIR, src.replace('/media/', ''))),
    )
    expect(missing).toEqual([])
  })

  it('leaves no file in public/media unreferenced', () => {
    const referenced = new Set(manifestPaths.map((src) => src.replace('/media/', '')))
    const orphans = readdirSync(MEDIA_DIR)
      .filter((name) => name !== 'CREDITS.md')
      .filter((name) => !referenced.has(name))
    expect(orphans).toEqual([])
  })

  it('credits every asset publicly, keyed by its usedOn line', () => {
    // CREDITS.md is a visitor-facing attribution record, not a file listing, so it is keyed on the
    // human `usedOn` string rather than on file names. The legal notice points at it, so an asset
    // missing from it is a compliance gap, not just untidiness.
    const credits = readFileSync(join(MEDIA_DIR, 'CREDITS.md'), 'utf8')
    const uncredited = MEDIA_IDS.filter((id) => !credits.includes(MEDIA[id].usedOn))
    expect(uncredited).toEqual([])
  })

  it('credits nothing that is not in the manifest', () => {
    const credits = readFileSync(join(MEDIA_DIR, 'CREDITS.md'), 'utf8')
    const used = new Set(MEDIA_IDS.map((id) => MEDIA[id].usedOn))
    const rows = credits
      .split('\n')
      .filter((line) => line.startsWith('| ') && !line.startsWith('| Used on') && !line.startsWith('|---'))
      .map((line) => line.split('|')[1].trim())
    expect(rows.filter((row) => !used.has(row))).toEqual([])
    expect(rows).toHaveLength(MEDIA_IDS.length)
  })
})

describe('alt text', () => {
  it('describes exactly the non-decorative assets', () => {
    const shouldBeDescribed = MEDIA_IDS.filter((id) => !MEDIA[id].decorative).sort()
    expect([...DESCRIBED_MEDIA_IDS].sort()).toEqual(shouldBeDescribed)
  })

  it('is present and non-empty in both locales', () => {
    for (const id of DESCRIBED_MEDIA_IDS) {
      expect(en.media[id].trim().length, `en alt for ${id}`).toBeGreaterThan(0)
      expect(itMessages.media[id].trim().length, `it alt for ${id}`).toBeGreaterThan(0)
    }
  })

  it('translates the alt text rather than copying the English', () => {
    // Proper nouns are the same in both languages; everything else must actually differ.
    const properNouns: MediaId[] = ['francescoProdomo', 'ionitaLogo']
    for (const id of DESCRIBED_MEDIA_IDS) {
      if (properNouns.includes(id)) continue
      expect(itMessages.media[id], `it alt for ${id}`).not.toBe(en.media[id])
    }
  })
})

describe('provenance', () => {
  it('labels every AI-generated asset, and nothing else', () => {
    for (const id of MEDIA_IDS) {
      expect(MEDIA[id].aiLabel, `aiLabel for ${id}`).toBe(MEDIA[id].source === 'ai')
    }
  })

  it('has a visible label string in both locales', () => {
    expect(en.aiGeneratedLabel).toBe('AI-generated image')
    expect(itMessages.aiGeneratedLabel.length).toBeGreaterThan(0)
  })

  it('names a licence for anything we did not make ourselves', () => {
    const needsLicence: MediaSource[] = ['stock', 'partner']
    for (const id of MEDIA_IDS) {
      // Widened to the declared interface: `satisfies` keeps each entry's literal type, and
      // `licence` is optional, so it is absent from the literal types that do not set it.
      const asset: MediaAsset = MEDIA[id]
      if (!needsLicence.includes(asset.source)) continue
      expect(asset.licence, `licence for ${id}`).toBeTruthy()
    }
  })

  it('self-hosts everything, so the CSP needs no media-src', () => {
    for (const src of manifestPaths) {
      expect(src.startsWith('/media/'), src).toBe(true)
    }
  })
})

describe('layout stability', () => {
  it('gives every variant an intrinsic width and height', () => {
    for (const id of MEDIA_IDS) {
      const asset = MEDIA[id]
      if (asset.kind === 'video') continue
      const variants =
        asset.kind === 'image'
          ? [...asset.avif, ...asset.jpeg]
          : [asset.themes.onLight, asset.themes.onDark]
      for (const variant of variants) {
        expect(variant.width, `${id} ${variant.src} width`).toBeGreaterThan(0)
        expect(variant.height, `${id} ${variant.src} height`).toBeGreaterThan(0)
      }
    }
  })

  it('offers AVIF and JPEG at matching sizes, so the fallback cannot shift the layout', () => {
    for (const id of MEDIA_IDS) {
      const asset = MEDIA[id]
      if (asset.kind !== 'image') continue
      expect(asset.avif.map((v) => [v.width, v.height])).toEqual(
        asset.jpeg.map((v) => [v.width, v.height]),
      )
    }
  })

  it('orders srcset variants narrowest first', () => {
    for (const id of MEDIA_IDS) {
      const asset = MEDIA[id]
      if (asset.kind !== 'image') continue
      for (const variants of [asset.avif, asset.jpeg]) {
        const widths = variants.map((v) => v.width)
        expect(widths, `${id} widths`).toEqual([...widths].sort((a, b) => a - b))
      }
    }
  })
})

describe('the hero video', () => {
  it('offers AV1 first with an H.264 fallback', () => {
    const video = MEDIA.homeHeroVideo
    expect(video.sources.map((s) => s.src)).toEqual([
      '/media/hero-home-1080.webm',
      '/media/hero-home-720.mp4',
    ])
    expect(video.sources[0].type).toContain('video/webm')
    expect(video.sources[1].type).toContain('video/mp4')
  })

  it('is decorative, and points at a poster that exists', () => {
    expect(MEDIA.homeHeroVideo.decorative).toBe(true)
    expect(MEDIA[MEDIA.homeHeroVideo.poster]).toBeDefined()
  })
})

describe('helpers', () => {
  it('builds a srcset with width descriptors', () => {
    expect(srcSet(MEDIA.aboutHero.avif)).toBe(
      '/media/hero-about-768.avif 768w, /media/hero-about-1376.avif 1376w',
    )
  })

  it('picks the largest variant for a plain src', () => {
    expect(largest(MEDIA.aboutHero.jpeg).src).toBe('/media/hero-about-1376.jpg')
  })
})
