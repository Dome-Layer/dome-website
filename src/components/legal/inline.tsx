import type { CSSProperties, ReactNode } from "react"
import { ROUTE_IDS, localizedHref, type RouteId } from "../../i18n/routes"
import type { Locale } from "../../i18n/locales"

const s = {
  strong: { color: "var(--color-text-primary)", fontWeight: 600 } as CSSProperties,
  code: {
    fontFamily: "var(--font-mono)",
    fontSize: "0.875em",
    background: "var(--color-bg-muted)",
    padding: "1px 5px",
    borderRadius: "3px",
    color: "var(--color-text-primary)",
  } as CSSProperties,
  link: { color: "var(--color-text-accent)", textDecoration: "none" } as CSSProperties,
}

const INLINE = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)\s]+\))/g

function linkTarget(target: string, locale: Locale): string {
  if (target.startsWith("mailto:")) return target
  if ((ROUTE_IDS as string[]).includes(target)) return localizedHref(target as RouteId, locale)
  throw new Error(`Unknown link target in legal copy: ${target}`)
}

/**
 * The catalogue's inline markup: **bold**, `code`, [label](route id or mailto:), and a
 * newline for a line break. Nothing else is interpreted, so copy stays plain text otherwise.
 */
export function renderInline(text: string, locale: Locale): ReactNode[] {
  const out: ReactNode[] = []
  text.split("\n").forEach((line, li) => {
    if (li > 0) out.push(<br key={`br${li}`} />)
    line.split(INLINE).forEach((part, pi) => {
      if (!part) return
      const key = `${li}.${pi}`
      if (part.startsWith("**") && part.endsWith("**")) {
        out.push(
          <strong key={key} style={s.strong}>
            {part.slice(2, -2)}
          </strong>,
        )
      } else if (part.startsWith("`") && part.endsWith("`")) {
        out.push(
          <code key={key} style={s.code}>
            {part.slice(1, -1)}
          </code>,
        )
      } else if (part.startsWith("[")) {
        const m = /^\[([^\]]+)\]\(([^)\s]+)\)$/.exec(part)
        if (m) {
          out.push(
            <a key={key} href={linkTarget(m[2], locale)} style={s.link}>
              {m[1]}
            </a>,
          )
          return
        }
        out.push(part)
      } else {
        out.push(part)
      }
    })
  })
  return out
}
