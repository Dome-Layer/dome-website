import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'
import { publishFlags, publishedLocales } from './locales'

// The Worker's runtime flags (wrangler.jsonc) and the build's (the deploy workflow) must agree, or a
// locale could be redirected to without its pages, or prerendered without its 404.
describe('publish settings as deployed', () => {
  const read = (file: string) => readFileSync(resolve(__dirname, '../..', file), 'utf8')
  const wrangler = JSON.parse(read('wrangler.jsonc').replace(/^\s*\/\/.*$/gm, '')) as {
    vars: Record<string, string>
    env: { staging: { vars: Record<string, string> } }
  }
  const workflow = read('.github/workflows/deploy-cloudflare.yml')

  it('publishes Italian, Dutch and German on staging', () => {
    expect(publishedLocales(publishFlags(wrangler.env.staging.vars))).toEqual(['en', 'it', 'nl', 'de'])
  })

  it('keeps Dutch and German out of production, and Italian in', () => {
    expect(publishedLocales(publishFlags(wrangler.vars))).toEqual(['en', 'it'])
  })

  it('builds with the same flags in the deploy workflow', () => {
    expect(workflow).toContain("DOME_PUBLISH_IT: 'true'")
    for (const flag of ['DOME_PUBLISH_NL', 'DOME_PUBLISH_DE']) {
      expect(workflow).toContain(`${flag}: \${{ github.ref_name == 'main' && 'false' || 'true' }}`)
    }
  })
})
