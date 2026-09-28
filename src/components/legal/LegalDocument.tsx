import type { CSSProperties } from "react"
import { DomeLogo } from "../DomeLogo"
import type { LegalBlock, LegalDocumentText } from "../../i18n/messages/types"
import { localizedHref, type RouteId } from "../../i18n/routes"
import { useLocale } from "../../i18n/useLocale"
import { renderInline } from "./inline"
import type { Locale } from "../../i18n/locales"

/**
 * Renders a legal document (privacy policy, terms) from the catalogues. The text lived as
 * hardcoded English JSX in PrivacyPage and TermsPage until 2026-09-28; it moved here so the
 * Italian pages stop rendering English. Styles are unchanged from those pages.
 */

const s = {
  h2: {
    fontSize: "var(--text-h3)",
    fontWeight: 600,
    color: "var(--color-text-primary)",
    letterSpacing: "-0.02em",
    marginTop: "48px",
    marginBottom: "16px",
  } as CSSProperties,
  h3: {
    fontSize: "var(--text-h4)",
    fontWeight: 600,
    color: "var(--color-text-primary)",
    letterSpacing: "-0.01em",
    marginTop: "32px",
    marginBottom: "12px",
  } as CSSProperties,
  p: {
    fontSize: "var(--text-body)",
    color: "var(--color-text-secondary)",
    lineHeight: 1.7,
    marginBottom: "16px",
  } as CSSProperties,
  li: {
    fontSize: "var(--text-body)",
    color: "var(--color-text-secondary)",
    lineHeight: 1.7,
    marginBottom: "6px",
  } as CSSProperties,
  legalBasis: {
    fontSize: "var(--text-body-sm)",
    color: "var(--color-text-tertiary)",
    lineHeight: 1.6,
    marginTop: "8px",
    marginBottom: "16px",
    fontStyle: "italic",
  } as CSSProperties,
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "16px",
    marginBottom: "24px",
    fontSize: "var(--text-body-sm)",
    lineHeight: 1.5,
  } as CSSProperties,
  th: {
    textAlign: "left",
    padding: "10px 12px",
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "var(--color-text-tertiary)",
    borderBottom: "2px solid var(--color-border-default)",
  } as CSSProperties,
  td: {
    padding: "10px 12px",
    color: "var(--color-text-secondary)",
    borderBottom: "1px solid var(--color-border-subtle)",
    verticalAlign: "top",
  } as CSSProperties,
  link: {
    color: "var(--color-text-accent)",
    textDecoration: "none",
  } as CSSProperties,
  warning: {
    background: "var(--color-bg-muted)",
    borderLeft: "3px solid var(--color-accent)",
    padding: "16px 20px",
    borderRadius: "0 6px 6px 0",
    marginBottom: "16px",
  } as CSSProperties,
}

function Block({ block, locale }: { block: LegalBlock; locale: Locale }) {
  if ("p" in block) return <p style={s.p}>{renderInline(block.p, locale)}</p>
  if ("h3" in block) return <h3 style={s.h3}>{block.h3}</h3>
  if ("label" in block)
    return (
      <p style={{ ...s.p, fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "8px" }}>
        {renderInline(block.label, locale)}
      </p>
    )
  if ("basis" in block) return <p style={s.legalBasis}>{renderInline(block.basis, locale)}</p>
  if ("warning" in block)
    return (
      <div style={s.warning}>
        <p style={{ ...s.p, marginBottom: 0 }}>{renderInline(block.warning, locale)}</p>
      </div>
    )
  if ("list" in block)
    return (
      <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
        {block.list.map((item) => (
          <li key={item} style={s.li}>
            {renderInline(item, locale)}
          </li>
        ))}
      </ul>
    )
  return (
    <table style={s.table}>
      <thead>
        <tr>
          {block.table.head.map((h) => (
            <th key={h} style={s.th}>
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {block.table.rows.map((row) => (
          <tr key={row[0]}>
            {row.map((cell, i) => (
              <td key={i} style={s.td}>
                {renderInline(cell, locale)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export function LegalDocument({
  doc,
  routeId,
  siblingId,
}: {
  doc: LegalDocumentText
  routeId: RouteId
  siblingId: RouteId
}) {
  const locale = useLocale()
  const home = localizedHref("home", locale)
  return (
    <div style={{ minHeight: "100vh", background: "var(--color-bg-base)", fontFamily: "var(--font-sans)" }}>
      <header
        style={{
          borderBottom: "1px solid var(--color-border-subtle)",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a href={home} style={{ display: "inline-flex", textDecoration: "none" }}>
          <DomeLogo size="sm" />
        </a>
        <a href={home} style={{ ...s.link, fontSize: "13px", color: "var(--color-text-tertiary)" }}>
          {doc.back}
        </a>
      </header>

      <main style={{ maxWidth: "720px", margin: "0 auto", padding: "64px 24px 96px" }}>
        <p
          style={{
            fontSize: "var(--text-caption)",
            color: "var(--color-text-tertiary)",
            marginBottom: "8px",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            fontWeight: 500,
          }}
        >
          {doc.updated}
        </p>
        <h1
          style={{
            fontSize: "var(--text-h1)",
            fontWeight: 700,
            color: "var(--color-text-primary)",
            letterSpacing: "-0.03em",
            marginBottom: "8px",
            lineHeight: 1.15,
          }}
        >
          {doc.title}
        </h1>
        <p style={{ ...s.p, marginBottom: "0" }}>{doc.appliesTo}</p>

        {doc.sections.map((section) => (
          <section key={section.heading}>
            <h2 style={s.h2}>{section.heading}</h2>
            {section.blocks.map((block, i) => (
              <Block key={i} block={block} locale={locale} />
            ))}
          </section>
        ))}

        <div
          style={{
            marginTop: "64px",
            paddingTop: "24px",
            borderTop: "1px solid var(--color-border-subtle)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "var(--text-caption)",
            color: "var(--color-text-tertiary)",
          }}
        >
          <span>{`domelayer.com${localizedHref(routeId, locale)}`}</span>
          <a href={localizedHref(siblingId, locale)} style={{ ...s.link, color: "var(--color-text-tertiary)" }}>
            {doc.sibling}
          </a>
        </div>
      </main>
    </div>
  )
}
