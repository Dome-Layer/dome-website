import { readFileSync, readdirSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

/**
 * House style: no em or en dashes anywhere in the site's own text, visible copy and code comments
 * alike (the catalogues have their own check in i18n/routes.test.ts). Use a comma, a colon, a full
 * stop or parentheses instead. Hyphens are fine.
 */
const ROOT = resolve(__dirname, '..')
const DIRS = ['src', 'worker', 'scripts']
const TEXT = /\.(ts|tsx|js|mjs|css)$/
const DASH = /[\u2013\u2014]/

function sourceFiles(): string[] {
  return DIRS.flatMap((dir) =>
    readdirSync(join(ROOT, dir), { recursive: true })
      .map(String)
      .filter((name) => TEXT.test(name))
      .map((name) => join(dir, name)),
  )
}

describe('house style', () => {
  it('has no em or en dashes in the source', () => {
    const offenders = sourceFiles().flatMap((file) =>
      readFileSync(join(ROOT, file), 'utf8')
        .split('\n')
        .flatMap((line, i) => (DASH.test(line) ? [`${file}:${i + 1}`] : [])),
    )
    expect(offenders).toEqual([])
  })
})
