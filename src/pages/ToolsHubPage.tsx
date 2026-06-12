"use client";

import { useCallback } from "react";
import { Navigate } from "react-router-dom";
import { DomeLogo } from "../components/DomeLogo";
import { clearToken, isAuthenticated, isStagingHost } from "../lib/auth";
import { HUB_PATH } from "../lib/routes";

/**
 * Logged-in landing page ("tools hub") — the default post-login destination for a
 * user who did not arrive from a specific tool. Shortcut cards link out to every
 * Dome tool. Auth-gated: signed-out visitors are bounced to /login?redirect=/app.
 *
 * Standalone (no marketing nav/footer), mirroring LoginPage / AuthCallbackPage —
 * the chrome is just the wordmark + a sign-out control. Light/dark is driven by the
 * shared `[data-theme]` attribute + design tokens, so it tracks the site-wide theme
 * cookie without its own toggle.
 */

interface Tool {
  /** DOME-method phase shown as the card eyebrow. */
  phase: string;
  name: string;
  /** One-line description. */
  description: string;
  /** Production host. Staging is derived by inserting `.staging` (see toolHref). */
  prodHost: string;
  /** Per-tool accent (matches the marketing Tools section). */
  accent: string;
}

const TOOLS: Tool[] = [
  {
    phase: "DISCOVER",
    name: "Process Analyzer",
    description:
      "Turn a plain-language process description into a structured map with system dependencies, governance gaps, and automation opportunities.",
    prodHost: "analyzer.domelayer.com",
    accent: "#06B6D4",
  },
  {
    phase: "ORCHESTRATE",
    name: "LLM Council",
    description:
      "Pose a strategic question to three AI advisors who deliberate, cross-examine each other, and return a governed verdict with a full audit trail.",
    prodHost: "llm-council.domelayer.com",
    accent: "#7B5EA7",
  },
  {
    phase: "MODEL",
    name: "Data Intelligence",
    description:
      "Upload a spreadsheet and get a governed analytics dashboard — columns auto-classified, chart types chosen by a governance rules engine.",
    prodHost: "data-intelligence.domelayer.com",
    accent: "#10B981",
  },
  {
    phase: "MODEL",
    name: "Document Intelligence",
    description:
      "Upload any document — invoice, lab report, contract — and extract validated, structured fields under 16 governance rules, ready to export.",
    prodHost: "document-intelligence.domelayer.com",
    accent: "#F59E0B",
  },
];

const GOV_TOOL = {
  name: "Governance Dashboard",
  description:
    "Audit trail, compliance reporting, and PDF export across all four DOME AI tools — the observation and compliance layer that spans every tool.",
  prodHost: "governance.domelayer.com",
  accent: "#6366F1",
};

/**
 * Host-aware tool URL. On a staging host the tool lives at `<sub>.staging.domelayer.com`
 * (per the staging runbook); on production (and anywhere else, e.g. localhost preview)
 * we point at the production `<sub>.domelayer.com`, the only reachable real target.
 */
function toolHref(prodHost: string): string {
  const host = typeof window !== "undefined" ? window.location.hostname : "";
  const sub = isStagingHost(host)
    ? prodHost.replace(/\.domelayer\.com$/, ".staging.domelayer.com")
    : prodHost;
  return `https://${sub}/`;
}

const ArrowIcon = (
  <svg width="13" height="13" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path
      d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SignOutIcon = (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

export default function ToolsHubPage() {
  // Auth gate. The cross-subdomain cookie is readable synchronously (CSR-only app),
  // so we can decide at render. Signed-out → bounce to login carrying the return path.
  if (!isAuthenticated()) {
    return <Navigate to={`/login?redirect=${HUB_PATH}`} replace />;
  }

  return <ToolsHub />;
}

function ToolsHub() {
  const handleSignOut = useCallback(() => {
    clearToken();
    window.location.href = "/";
  }, []);

  return (
    <div className="hub-page">
      <div className="hub-shell">
        {/* Header: wordmark (→ marketing home) + sign out */}
        <header className="hub-header">
          <a href="/" aria-label="Dome — home" className="hub-logo-link">
            <DomeLogo size="md" />
          </a>
          <button type="button" onClick={handleSignOut} className="hub-signout">
            {SignOutIcon}
            Sign out
          </button>
        </header>

        {/* Intro */}
        <div className="hub-intro">
          <p className="hub-eyebrow">Your tools</p>
          <h1 className="hub-title">Welcome to Dome</h1>
          <p className="hub-subtitle">
            One secure sign-in across every Dome tool. Pick up where you left off —
            choose a tool to get started.
          </p>
        </div>

        {/* Tool cards */}
        <div className="hub-grid">
          {TOOLS.map((tool) => (
            <a
              key={tool.name}
              href={toolHref(tool.prodHost)}
              className="hub-card"
              style={{ ["--card-accent" as string]: tool.accent }}
            >
              <span className="hub-card-eyebrow">{tool.phase}</span>
              <h2 className="hub-card-title">{tool.name}</h2>
              <p className="hub-card-desc">{tool.description}</p>
              <span className="hub-card-cta">
                Open {tool.name}
                {ArrowIcon}
              </span>
              <span className="hub-card-stripe" aria-hidden="true" />
            </a>
          ))}
        </div>

        {/* Governance layer — separate section, visually distinct from P1–P4 */}
        <div className="hub-govern">
          <p className="hub-govern-label">Governance &amp; compliance layer</p>
          <a
            href={toolHref(GOV_TOOL.prodHost)}
            className="hub-card hub-card--govern"
            style={{ ["--card-accent" as string]: GOV_TOOL.accent }}
          >
            <span className="hub-card-eyebrow">OBSERVE</span>
            <h2 className="hub-card-title">{GOV_TOOL.name}</h2>
            <p className="hub-card-desc">{GOV_TOOL.description}</p>
            <span className="hub-card-cta">
              Open {GOV_TOOL.name}
              {ArrowIcon}
            </span>
            <span className="hub-card-stripe" aria-hidden="true" />
          </a>
        </div>
      </div>

      <style>{`
        .hub-page {
          min-height: 100vh;
          padding: calc(32px + min(24px, var(--dome-banner-h, 0px))) 0 56px;
          font-family: var(--font-sans);
          background-color: var(--color-bg-muted); /* light: #F5F5F5 */
        }
        [data-theme="dark"] .hub-page {
          background-color: var(--color-bg-base); /* #0A0A0A */
          background-image: radial-gradient(circle, rgba(255, 255, 255, 0.06) 1px, transparent 1px);
          background-size: 24px 24px;
        }

        .hub-shell {
          width: 100%;
          max-width: 1152px;
          margin: 0 auto;
          padding: 0 24px;
        }
        @media (min-width: 768px) {
          .hub-shell { padding: 0 32px; }
        }

        .hub-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 48px;
        }
        .hub-logo-link {
          display: inline-flex;
          text-decoration: none;
          line-height: 0;
        }
        .hub-signout {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: var(--color-bg-base);
          color: var(--color-text-secondary);
          border: 1px solid var(--color-border-default);
          border-radius: var(--radius-md);
          padding: 8px 14px;
          font-size: 13px;
          font-weight: 600;
          font-family: var(--font-sans);
          cursor: pointer;
          transition: background-color 150ms ease, border-color 150ms ease, color 150ms ease;
        }
        .hub-signout:hover {
          background-color: var(--color-bg-subtle);
          border-color: var(--color-border-strong);
          color: var(--color-text-primary);
        }
        .hub-signout:focus-visible {
          outline: none;
          border-color: var(--color-accent);
          box-shadow: 0 0 0 3px var(--color-focus-ring);
        }
        [data-theme="dark"] .hub-signout {
          background-color: var(--color-bg-subtle);
          border-color: var(--color-border-strong);
        }

        .hub-intro {
          margin-bottom: 36px;
          max-width: 560px;
        }
        .hub-eyebrow {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--color-accent);
          margin-bottom: 12px;
        }
        .hub-title {
          font-size: 30px;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: var(--color-text-primary);
          margin-bottom: 12px;
        }
        .hub-subtitle {
          font-size: 15px;
          line-height: 1.6;
          color: var(--color-text-secondary);
        }

        .hub-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        @media (min-width: 640px) {
          .hub-grid { grid-template-columns: repeat(2, 1fr); }
        }

        .hub-card {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 28px 28px 30px;
          border-radius: var(--radius-lg);
          background-color: var(--color-bg-base);
          border: 1px solid var(--color-border-default);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          text-decoration: none;
          overflow: hidden;
          transition: border-color 150ms ease, box-shadow 150ms ease, transform 150ms ease;
        }
        .hub-card:hover {
          border-color: var(--card-accent, var(--color-border-accent));
          box-shadow: 0 8px 28px rgba(0, 0, 0, 0.10);
          transform: translateY(-2px);
        }
        .hub-card:focus-visible {
          outline: none;
          border-color: var(--card-accent, var(--color-accent));
          box-shadow: 0 0 0 3px var(--color-focus-ring);
        }
        [data-theme="dark"] .hub-card {
          background-color: var(--color-bg-subtle); /* #111111 */
          border-color: var(--color-border-default); /* #262626 */
          box-shadow: 0 0 0 1px rgba(0, 128, 255, 0.05), 0 8px 30px rgba(0, 0, 0, 0.45);
        }

        .hub-card-eyebrow {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--card-accent);
          margin-bottom: 14px;
        }
        .hub-card-title {
          font-size: 18px;
          font-weight: 700;
          letter-spacing: -0.01em;
          color: var(--color-text-primary);
          margin-bottom: 10px;
        }
        .hub-card-desc {
          font-size: 13.5px;
          line-height: 1.6;
          color: var(--color-text-secondary);
          margin-bottom: 22px;
          flex: 1 1 auto;
        }
        .hub-card-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          color: var(--card-accent);
        }
        .hub-card-stripe {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 2px;
          background: var(--card-accent);
          opacity: 0;
          transition: opacity 150ms ease;
        }
        .hub-card:hover .hub-card-stripe,
        .hub-card:focus-visible .hub-card-stripe {
          opacity: 1;
        }

        .hub-govern {
          margin-top: 40px;
          padding-top: 32px;
          border-top: 1px solid var(--color-border-default);
        }
        .hub-govern-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--color-text-tertiary);
          margin-bottom: 16px;
        }
        .hub-card--govern {
          max-width: 480px;
        }
      `}</style>
    </div>
  );
}
