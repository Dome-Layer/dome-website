import { useState } from "react"

const LS_KEY = "dome-cookie-notice-dismissed"

export function CookieNotice() {
  const [dismissed, setDismissed] = useState(() => {
    try {
      return localStorage.getItem(LS_KEY) === "true"
    } catch {
      return false
    }
  })

  if (dismissed) return null

  const handleDismiss = () => {
    try {
      localStorage.setItem(LS_KEY, "true")
    } catch {
      // ignore
    }
    setDismissed(true)
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        background: "var(--color-bg-base)",
        borderTop: "1px solid var(--color-border-subtle)",
        padding: "14px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "16px",
        flexWrap: "wrap",
        fontFamily: "var(--font-sans)",
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: "var(--text-body-sm)",
          color: "var(--color-text-secondary)",
          lineHeight: 1.6,
          flex: "1 1 auto",
          minWidth: "200px",
        }}
      >
        <strong style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>
          Dome uses only two cookies.
        </strong>{" "}
        One keeps you signed in. One remembers your theme preference. No analytics, no tracking, no
        advertising.{" "}
        <a
          href="/privacy"
          style={{
            color: "var(--color-text-accent)",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.textDecoration = "underline")}
          onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.textDecoration = "none")}
        >
          Read our privacy policy
        </a>
      </p>
      <button
        onClick={handleDismiss}
        style={{
          flexShrink: 0,
          background: "var(--color-accent)",
          color: "#FFFFFF",
          border: "none",
          borderRadius: "6px",
          padding: "8px 18px",
          fontSize: "13px",
          fontWeight: 600,
          cursor: "pointer",
          letterSpacing: "0.01em",
          transition: "opacity 150ms ease",
        }}
        onMouseEnter={(e) => ((e.target as HTMLButtonElement).style.opacity = "0.85")}
        onMouseLeave={(e) => ((e.target as HTMLButtonElement).style.opacity = "1")}
      >
        Got it
      </button>
    </div>
  )
}
