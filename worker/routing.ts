/**
 * Applies the redirects, rewrites and header rules in vercel.json the way Vercel does, so the
 * Cloudflare Worker and the Vercel deployment behave the same while both run (Sprint H phase 1).
 * vercel.json stays the single source of truth until Vercel is retired.
 *
 * Only the source syntax vercel.json actually uses is supported: literal paths, `:name` segments
 * and `(.*)` groups, plus `host` conditions with a string or `{ suf }` value.
 */

type HostCondition = { type: 'host'; value: string | { suf: string } }

export interface RedirectRule {
  source: string
  destination: string
  permanent?: boolean
  has?: HostCondition[]
}

export interface RewriteRule {
  source: string
  destination: string
}

export interface HeaderRule {
  source: string
  headers: { key: string; value: string }[]
  has?: HostCondition[]
}

interface CompiledSource {
  regex: RegExp
  params: string[]
}

const compiled = new Map<string, CompiledSource>()

function escapeRegex(text: string): string {
  return text.replace(/[.*+?^${}|[\]\\]/g, '\\$&')
}

function compile(source: string): CompiledSource {
  const cached = compiled.get(source)
  if (cached) return cached
  const params: string[] = []
  const pattern = source
    .split('(.*)')
    .map((part) =>
      part
        .split(/(:[A-Za-z_][A-Za-z0-9_]*)/)
        .map((piece) => {
          if (piece.startsWith(':')) {
            params.push(piece.slice(1))
            return '([^/]+)'
          }
          return escapeRegex(piece)
        })
        .join(''),
    )
    .join('(.*)')
  const result = { regex: new RegExp(`^${pattern}$`), params }
  compiled.set(source, result)
  return result
}

function hostMatches(has: HostCondition[] | undefined, host: string): boolean {
  if (!has) return true
  return has.every((condition) =>
    typeof condition.value === 'string' ? host === condition.value : host.endsWith(condition.value.suf),
  )
}

/** Match a rule's source against a pathname; returns named params and positional groups. */
function match(source: string, pathname: string): { named: Record<string, string>; groups: string[] } | null {
  const { regex, params } = compile(source)
  const found = regex.exec(pathname)
  if (!found) return null
  const groups = found.slice(1)
  const named: Record<string, string> = {}
  // Named segments and (.*) groups share the capture list in source order; vercel.json never mixes
  // them in one source, so mapping names onto the first captures is enough.
  params.forEach((name, i) => {
    named[name] = groups[i]
  })
  return { named, groups }
}

function substitute(destination: string, named: Record<string, string>, groups: string[]): string {
  return destination
    .replace(/:([A-Za-z_][A-Za-z0-9_]*)/g, (whole, name: string) => named[name] ?? whole)
    .replace(/\$(\d+)/g, (whole, index: string) => groups[Number(index) - 1] ?? whole)
}

/** The Location for the first matching redirect, and whether it is permanent (308) or not (307). */
export function findRedirect(rules: RedirectRule[], url: URL): { location: string; status: 307 | 308 } | null {
  for (const rule of rules) {
    if (!hostMatches(rule.has, url.host)) continue
    const found = match(rule.source, url.pathname)
    if (!found) continue
    const location = substitute(rule.destination, found.named, found.groups) + url.search
    return { location, status: rule.permanent ? 308 : 307 }
  }
  return null
}

/** The asset path a matching rewrite serves instead of the requested one. */
export function findRewrite(rules: RewriteRule[], url: URL): string | null {
  for (const rule of rules) {
    const found = match(rule.source, url.pathname)
    if (found) return substitute(rule.destination, found.named, found.groups)
  }
  return null
}

/** Every matching header rule applies, in file order, so a later rule overrides an earlier key. */
export function headersFor(rules: HeaderRule[], url: URL): Record<string, string> {
  const result: Record<string, string> = {}
  for (const rule of rules) {
    if (!hostMatches(rule.has, url.host)) continue
    if (!match(rule.source, url.pathname)) continue
    for (const { key, value } of rule.headers) result[key] = value
  }
  return result
}
