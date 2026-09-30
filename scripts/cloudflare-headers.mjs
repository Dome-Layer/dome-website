// Writes build/client/_headers and build/client/.assetsignore for Cloudflare (Sprint H phase 1).
//
// The Worker applies vercel.json's header rules to pages and the API. /assets/* and /media/* are
// served without the Worker, so they need the same rules as a static _headers file. Only the
// rules that apply to those paths without a host condition are translated; noindex for staging
// is added when DOME_NOINDEX=true at build time.
import { readFileSync, writeFileSync } from 'node:fs'

const config = JSON.parse(readFileSync(new URL('../vercel.json', import.meta.url), 'utf8'))
const noindex = process.env.DOME_NOINDEX === 'true'

// Vercel sources that reach /assets or /media, translated to _headers path syntax.
const toCloudflarePath = (source) => {
  if (source === '/(.*)') return '/*'
  if (source.startsWith('/media/') || source.startsWith('/assets/')) return source.replace('(.*)', '*')
  return null
}

const blocks = []
for (const rule of config.headers) {
  if (rule.has) continue
  const path = toCloudflarePath(rule.source)
  if (!path) continue
  blocks.push([path, ...rule.headers.map(({ key, value }) => `  ${key}: ${value}`)].join('\n'))
}
if (noindex) blocks.push('/*\n  X-Robots-Tag: noindex')

writeFileSync(new URL('../build/client/_headers', import.meta.url), blocks.join('\n\n') + '\n')
// Never upload macOS folder metadata as a public asset.
writeFileSync(new URL('../build/client/.assetsignore', import.meta.url), '.DS_Store\n')
console.log(`cloudflare-headers: ${blocks.length} rule blocks${noindex ? ' (noindex)' : ''}`)
