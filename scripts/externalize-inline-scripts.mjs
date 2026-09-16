// Moves the inline <script> blocks React Router writes into prerendered HTML into external files.
//
// Our CSP (vercel.json) allows scripts from 'self' only, with no 'unsafe-inline'. React Router's
// <Scripts /> and <ScrollRestoration /> emit inline scripts (router context, stream chunks, the module
// bootstrap), which the browser blocks, so the app never hydrates. Hashes would differ per page and
// nonces need a server, so after the build each inline script becomes /assets/inline/<hash>.js.
// External classic scripts run in document order like the inline ones did; the module script keeps
// its type but loses async (see below). JSON scripts (application/ld+json) are data and stay inline.
//
// Usage: node scripts/externalize-inline-scripts.mjs [--check]
//   --check  exit 1 if any executable inline script remains (used in CI after the build)
import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import { join, relative } from 'node:path'

const ROOT = 'build/client'
const OUT_DIR = join(ROOT, 'assets', 'inline')
const CHECK = process.argv.includes('--check')
const SCRIPT_RE = /<script\b([^>]*)>([\s\S]*?)<\/script>/g
const DATA_TYPES = /type\s*=\s*"(application\/(ld\+)?json|importmap)"/i

function htmlFiles(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name)
    if (statSync(path).isDirectory()) return htmlFiles(path)
    return name.endsWith('.html') ? [path] : []
  })
}

const isExecutableInline = (attrs, body) => !/\bsrc\s*=/.test(attrs) && !DATA_TYPES.test(attrs) && body.trim() !== ''

let moved = 0
const remaining = []
mkdirSync(OUT_DIR, { recursive: true })

for (const file of htmlFiles(ROOT)) {
  const html = readFileSync(file, 'utf8')
  if (CHECK) {
    for (const m of html.matchAll(SCRIPT_RE)) {
      if (isExecutableInline(m[1], m[2])) remaining.push(relative(ROOT, file))
    }
    continue
  }
  const out = html.replace(SCRIPT_RE, (tag, attrs, body) => {
    if (!isExecutableInline(attrs, body)) return tag
    const hash = createHash('sha256').update(body).digest('hex').slice(0, 16)
    writeFileSync(join(OUT_DIR, `${hash}.js`), body)
    moved += 1
    // React 19 hoists <script async src> as a resource and skips it during hydration, which throws
    // the tree out of step (error #418). Module scripts are deferred anyway, so drop async.
    const kept = attrs.replace(/\s+async(="")?/, '')
    return `<script${kept} src="/assets/inline/${hash}.js"></script>`
  })
  if (out !== html) writeFileSync(file, out)
}

if (CHECK) {
  if (remaining.length) {
    console.error(`Inline scripts would be blocked by the CSP in: ${[...new Set(remaining)].join(', ')}`)
    process.exit(1)
  }
  console.log('No executable inline scripts in build/client')
} else {
  console.log(`Externalised ${moved} inline scripts into ${OUT_DIR}`)
}
