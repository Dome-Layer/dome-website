import { existsSync, readFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { describe, expect, it } from 'vitest'
import { LOCALES } from '../i18n/locales'
import { ROUTE_IDS } from '../i18n/routes'
import { SOCIAL_IMAGE_ROUTE_IDS, socialImagePath, socialImageRoute, socialImageSpec } from './socialImages'

const PUBLIC = resolve(__dirname, '../../public')

/** Width and height from a baseline or progressive JPEG's start-of-frame marker. */
function jpegSize(file: string): { width: number; height: number } {
  const b = readFileSync(file)
  let i = 2
  while (i < b.length) {
    const marker = b[i + 1]
    const length = b.readUInt16BE(i + 2)
    if (marker === 0xc0 || marker === 0xc2) return { height: b.readUInt16BE(i + 5), width: b.readUInt16BE(i + 7) }
    i += 2 + length
  }
  throw new Error(`${file}: no frame header`)
}

describe('social images', () => {
  it('exist for every page and locale, at 1200x630 and under 300 KB', () => {
    for (const id of ROUTE_IDS) {
      for (const locale of LOCALES) {
        const file = join(PUBLIC, socialImagePath(id, locale))
        expect(existsSync(file), `${id} ${locale}: ${file}`).toBe(true)
        expect(jpegSize(file)).toEqual({ width: 1200, height: 630 })
        expect(readFileSync(file).length).toBeLessThan(300_000)
      }
    }
  })

  it('give tool pages the capabilities image and legal pages the home image', () => {
    expect(socialImageRoute('llmCouncil')).toBe('dome')
    expect(socialImageRoute('privacy')).toBe('home')
    expect(socialImageRoute('caseProcurement')).toBe('caseProcurement')
    expect(socialImagePath('enterpriseUx', 'it')).toBe('/social/enterprise-ux-it.jpg')
  })

  it('have text and a real background for every image', () => {
    for (const id of SOCIAL_IMAGE_ROUTE_IDS) {
      for (const locale of LOCALES) {
        const s = socialImageSpec(id, locale)
        expect(s.eyebrow.trim() && s.heading.trim(), `${id} ${locale}`).toBeTruthy()
        if (s.surface) continue
        expect(s.background && existsSync(join(PUBLIC, s.background)), `${id} ${locale}: ${s.background}`).toBe(true)
      }
    }
  })

  // The home card (also used by the legal pages) matches the home hero: the blue surface and the globe.
  it('put the home card on the hero surface, with no photograph', () => {
    for (const locale of LOCALES) {
      const s = socialImageSpec('home', locale)
      expect(s.surface).toBe(true)
      expect(s.background).toBeUndefined()
    }
    expect(socialImageSpec('about', 'en').surface).toBeUndefined()
  })

  it('label AI backgrounds as the site does, and not the home poster', () => {
    expect(socialImageSpec('home', 'en').aiLabel).toBeUndefined()
    expect(socialImageSpec('about', 'en').aiLabel).toBe('AI-generated image')
    expect(socialImageSpec('about', 'it').aiLabel).toBe('Immagine generata con AI')
  })
})
