"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { Navigate } from "react-router-dom";
import { HubBar } from "../components/hub/HubBar";
import { isAuthenticated } from "../lib/auth";
import {
  ACTION_LABELS,
  formatWhen,
  loadHubData,
  summaryLine,
  type HubData,
  type LatestRecord,
} from "../lib/hub";
import { HUB_PATH } from "../lib/routes";
import { AGENT_FLOW_LIVE, toolHref } from "../lib/tools";

/**
 * The signed-in hub `/app`, option 3 "start a task" (picked 2026-10-28; DESIGN_SYSTEM v2.7,
 * "Signed-in hub `/app`"; canvas in `docs/hub/Start.dc.html`). The default destination after
 * sign-in for anyone who did not arrive from a specific tool. Auth-gated: signed-out visitors go
 * to /login?redirect=/app.
 *
 * The blue band asks "What would you like to do?" over one inverse action tile per tool and the
 * Agent Flow demo link. Below it, on the page colour: the latest record per tool to pick up from
 * and the governance numbers (migration 010, `src/lib/hub.ts`), or for a new account a short
 * explanation of the record. The band never waits for the numbers: the tiles work if they fail.
 * No scene and no motion on this band.
 */

interface Tool {
  name: string;
  prodHost: string;
  /** The tool's dot, and its text colour per theme (4.5:1, design system v2.2). */
  dot: string;
  text: { light: string; dark: string };
}

/** Keyed by the `agent_id` the tools write to `governance_events`. */
const TOOLS: Record<string, Tool> = {
  "process-analyzer": {
    name: "Process Analyzer",
    prodHost: "analyzer.domelayer.com",
    dot: "#06B6D4",
    text: { light: "#0E7490", dark: "#06B6D4" },
  },
  "llm-council": {
    name: "LLM Council",
    prodHost: "llm-council.domelayer.com",
    dot: "#7B5EA7",
    text: { light: "#7B5EA7", dark: "#9B7EC7" },
  },
  "data-intelligence": {
    name: "Data Intelligence",
    prodHost: "data-intelligence.domelayer.com",
    dot: "#10B981",
    text: { light: "#047857", dark: "#10B981" },
  },
  "document-intelligence": {
    name: "Document Intelligence",
    prodHost: "document-intelligence.domelayer.com",
    dot: "#F59E0B",
    text: { light: "#92400E", dark: "#F59E0B" },
  },
  "agent-flow": {
    name: "Agent Flow",
    prodHost: "agent-flow.domelayer.com",
    dot: "#EC4899",
    text: { light: "#BE185D", dark: "#EC4899" },
  },
};

const GOVERNANCE_HOST = "governance.domelayer.com";

/** One tile per self-serve tool, in the canvas order. Each opens the tool's input screen. */
const TILES = [
  {
    label: "Upload a document",
    agentId: "document-intelligence",
    icon: "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h6",
  },
  {
    label: "Map a process",
    agentId: "process-analyzer",
    icon: "M5 4h5v5H5zM14 15h5v5h-5zM7.5 9v4.5a2 2 0 0 0 2 2H14M14 4h5v5h-5z",
  },
  {
    label: "Ask the council",
    agentId: "llm-council",
    icon: "M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12zM8.5 12h.01M12 12h.01M15.5 12h.01",
  },
  {
    label: "Analyse a spreadsheet",
    agentId: "data-intelligence",
    icon: "M4 4h16v16H4zM4 10h16M4 15h16M10 4v16",
  },
] as const;

/** The canvas shows three records: the most recent tools, newest first. */
const MAX_RECENT = 3;

/** What one record holds, shown to a new account (an example, not their data). */
const EXAMPLE_FIELDS = [
  { label: "Tool", value: "Document Intelligence" },
  { label: "Action", value: "Extraction" },
  { label: "Rules applied", value: "16, of which 1 triggered" },
  { label: "Confidence", value: "92%" },
  { label: "Human review", value: "Advised" },
  { label: "Input fingerprint", value: "sha256 9f2c41e0…" },
];

type HubState = { status: "loading" } | HubData;

export default function ToolsHubPage() {
  // The cross-subdomain cookie is readable synchronously (the hub is client-rendered), so the
  // gate decides at render.
  if (!isAuthenticated()) {
    return <Navigate to={`/login?redirect=${HUB_PATH}`} replace />;
  }

  return <ToolsHub />;
}

function ToolsHub() {
  const [state, setState] = useState<HubState>({ status: "loading" });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let cancelled = false;
    loadHubData().then((data) => {
      if (!cancelled) setState(data);
    });
    return () => {
      cancelled = true;
    };
  }, [attempt]);

  const retry = () => {
    setState({ status: "loading" });
    setAttempt((n) => n + 1);
  };

  const governanceHref = toolHref(GOVERNANCE_HOST);
  const isNew = state.status === "ready" && state.latest.length === 0;
  const agentFlowHref = AGENT_FLOW_LIVE ? toolHref(TOOLS["agent-flow"].prodHost) : "/dome/agent-flow";

  return (
    <div className="hub-page">
      <HubBar governanceHref={governanceHref} />

      <div className="hub-band on-hero-surface">
        <section aria-labelledby="hub-start-h" className="hub-wrap hub-band-inner">
          <div className="hub-heading">
            {/* Hidden, not removed, while loading, so a new account does not see "Welcome back" flash. */}
            <p className="hub-eyebrow" style={state.status === "loading" ? { visibility: "hidden" } : undefined}>
              {isNew ? "Welcome to Dome" : "Welcome back"}
            </p>
            <h1 id="hub-start-h" className="hub-title">
              What would you like to do?
            </h1>
          </div>

          <ul className="hub-tiles" role="list">
            {TILES.map((tile) => {
              const tool = TOOLS[tile.agentId];
              return (
                <li key={tile.agentId}>
                  <a className="hub-tile" href={toolHref(tool.prodHost)}>
                    <span className="hub-tile-top" aria-hidden="true">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <path d={tile.icon} />
                      </svg>
                      <span className="hub-tile-arrow">→</span>
                    </span>
                    <span className="hub-tile-label">{tile.label}</span>
                    <span className="hub-tile-tool">{tool.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* One span, so a wrapped line keeps the arrow at the end of the text. */}
          <a className="hub-demo-link" href={agentFlowHref}>
            <span>
              {AGENT_FLOW_LIVE
                ? "Agent Flow runs the whole invoice workflow: open Agent Flow"
                : "Agent Flow runs the whole invoice workflow: book a private demo"}{" "}
              <span aria-hidden="true">→</span>
            </span>
          </a>
        </section>
      </div>

      <main className="hub-wrap hub-main">
        <HubRecords state={state} governanceHref={governanceHref} onRetry={retry} />
      </main>

      <style>{HUB_CSS}</style>
    </div>
  );
}

function HubRecords({
  state,
  governanceHref,
  onRetry,
}: {
  state: HubState;
  governanceHref: string;
  onRetry: () => void;
}) {
  if (state.status === "loading") {
    return (
      <div aria-busy="true">
        <p role="status" className="sr-only">
          Loading your records
        </p>
        <div className="hub-card hub-placeholder" aria-hidden="true" />
      </div>
    );
  }

  if (state.status === "error" || state.status === "unconfigured") {
    const failed = state.status === "error";
    return (
      <section aria-labelledby="hub-rec-h" className="hub-card hub-strip">
        <RecordMark />
        <div className="hub-strip-text">
          <h2 id="hub-rec-h" className="hub-strip-title">
            {failed ? "Your records did not load" : "Everything you ran is on the record"}
          </h2>
          <p className="hub-strip-body">
            {failed
              ? "The tools above still work, and every record is in the governance dashboard."
              : "Every record is in the governance dashboard."}
          </p>
        </div>
        <div className="hub-strip-actions">
          {failed && (
            <button type="button" className="hub-btn-secondary" onClick={onRetry}>
              Try again
            </button>
          )}
          <a href={governanceHref} className="hub-btn-primary">
            Open the governance dashboard <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    );
  }

  if (state.latest.length === 0) return <FirstRun />;

  const recent = state.latest.filter((r) => TOOLS[r.agentId]).slice(0, MAX_RECENT);

  return (
    <>
      {recent.length > 0 && (
        <section aria-labelledby="hub-cont-h" className="hub-continue">
          <h2 id="hub-cont-h" className="hub-section-title">
            Pick up where you left off
          </h2>
          <ul className="hub-recent" role="list">
            {recent.map((record) => (
              <li key={record.id}>
                <RecordCard record={record} governanceHref={governanceHref} />
              </li>
            ))}
          </ul>
        </section>
      )}

      <section aria-labelledby="hub-rec-h" className="hub-card hub-strip">
        <RecordMark />
        <div className="hub-strip-text">
          <h2 id="hub-rec-h" className="hub-strip-title">
            Everything you ran is on the record
          </h2>
          <p className="hub-strip-body">{summaryLine(state.summary)}</p>
        </div>
        <a href={governanceHref} className="hub-btn-primary hub-strip-cta">
          Open the governance dashboard <span aria-hidden="true">→</span>
        </a>
      </section>
    </>
  );
}

function RecordCard({ record, governanceHref }: { record: LatestRecord; governanceHref: string }) {
  const tool = TOOLS[record.agentId];
  const summary = record.outputSummary || ACTION_LABELS[record.actionType] || "A governed run";
  const style = {
    "--tool-dot": tool.dot,
    "--tool-text-light": tool.text.light,
    "--tool-text-dark": tool.text.dark,
  } as CSSProperties;

  return (
    <a className="hub-card hub-record" href={`${governanceHref}events/${encodeURIComponent(record.id)}`} style={style}>
      <span className="hub-record-head">
        <span className="hub-record-tool">
          <span className="hub-record-dot" aria-hidden="true" />
          {tool.name}
        </span>
        <time className="hub-record-time" dateTime={record.timestamp}>
          {formatWhen(record.timestamp)}
        </time>
      </span>
      <span className="hub-record-summary">{summary}</span>
      <span className="hub-record-cta">
        Open the record <span aria-hidden="true">→</span>
      </span>
    </a>
  );
}

const FIRST_RUN_RINGS = [
  [18, 6], [32, 6], [46, 6], [60, 6], [32, 20], [46, 20],
  [4, 34], [18, 34], [32, 34], [46, 34], [60, 34],
];

function FirstRun() {
  return (
    <section aria-labelledby="hub-first-h" className="hub-card hub-first">
      <div className="hub-first-text">
        {/* A record with its first three dots filled: the trail has started. */}
        <svg width="64" height="40" viewBox="0 0 64 40" aria-hidden="true" className="hub-first-mark">
          <g className="hub-mark-dot">
            <circle cx="4" cy="6" r="3" />
            <circle cx="4" cy="20" r="3" />
            <circle cx="18" cy="20" r="3" />
          </g>
          <g className="hub-mark-ring" fill="none" strokeWidth="1.5">
            {FIRST_RUN_RINGS.map(([cx, cy]) => (
              <circle key={`${cx},${cy}`} cx={cx} cy={cy} r="2.5" />
            ))}
          </g>
        </svg>
        <h2 id="hub-first-h" className="hub-first-title">
          Your audit trail starts with your first run
        </h2>
        <p className="hub-first-body">
          Each time you use a Dome tool it writes one record: which tool ran, what it did, the rules it
          applied, how sure it was, and whether a person had to review it. Your input is kept as a
          fingerprint, not a copy.
        </p>
        <p className="hub-first-body">
          Pick an action above to make the first one. Your latest records will wait for you here, and
          every one of them is in the governance dashboard.
        </p>
      </div>
      <div className="hub-first-example">
        <p className="hub-example-label">What one record holds (an example)</p>
        <dl className="hub-example">
          {EXAMPLE_FIELDS.map((field) => (
            <div key={field.label}>
              <dt>{field.label}</dt>
              <dd>{field.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

const RECORD_ROWS: [number, number[]][] = [
  [6, [4, 18, 32, 46, 60]],
  [20, [4, 18, 32, 46]],
  [34, [4, 18, 32, 46, 60]],
];

/** Three rows of linked dots: the record, drawn as in the canvas. */
function RecordMark() {
  return (
    <svg width="64" height="40" viewBox="0 0 64 40" aria-hidden="true" className="hub-strip-mark">
      <path className="hub-mark-line" strokeWidth="1.5" d="M4 6H60M4 20H46M4 34H60" />
      <g className="hub-mark-dot">
        {RECORD_ROWS.flatMap(([cy, xs]) => xs.map((cx) => <circle key={`${cx},${cy}`} cx={cx} cy={cy} r="3" />))}
      </g>
    </svg>
  );
}

const HUB_CSS = `
  /* The page colour, captured outside the band (inside it .on-hero-surface re-points the tokens). */
  .hub-page {
    --hub-page: var(--color-bg-muted);
    --hub-card: var(--color-bg-base);
    --hub-card-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    min-height: 100vh;
    font-family: var(--font-sans);
    background-color: var(--hub-page);
    color: var(--color-text-primary);
  }
  [data-theme="dark"] .hub-page {
    --hub-page: var(--color-bg-base);
    --hub-card: var(--color-bg-subtle);
    --hub-card-shadow: 0 0 0 1px rgba(0, 128, 255, 0.05), 0 8px 30px rgba(0, 0, 0, 0.45);
  }

  .hub-wrap {
    width: 100%;
    max-width: 1216px;
    margin: 0 auto;
    padding-left: 16px;
    padding-right: 16px;
    box-sizing: border-box;
  }
  @media (min-width: 768px) {
    .hub-wrap { padding-left: 32px; padding-right: 32px; }
  }

  /* Top bar */
  .hub-bar {
    position: fixed;
    top: var(--dome-banner-h, 0px);
    left: 0;
    right: 0;
    z-index: 50;
    transition: background-color 300ms ease, box-shadow 300ms ease;
  }
  .hub-bar[data-surface="bar"] { background-color: var(--color-bar); }
  .hub-bar[data-surface="bar"][data-scrolled] { box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12); }
  .hub-bar-inner {
    max-width: 1216px;
    margin: 0 auto;
    height: 56px;
    padding: 0 8px 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
  }
  @media (min-width: 768px) {
    .hub-bar-inner { height: 64px; padding: 0 32px; }
  }
  .hub-bar-left { display: flex; align-items: center; gap: 40px; }
  .hub-bar-right { display: flex; align-items: center; gap: 8px; }
  .hub-bar-logo { display: inline-flex; line-height: 0; border-radius: 6px; }
  .hub-bar-nav { display: none; gap: 20px; }
  .hub-bar-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    min-height: 44px;
    padding: 0 4px;
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    border-radius: 4px;
  }
  .hub-bar-link:hover { text-decoration: underline; text-underline-offset: 8px; }
  .hub-bar-link[aria-current="page"] {
    font-weight: 600;
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 8px;
  }
  .hub-bar .hub-bar-theme { width: 44px; height: 44px; }
  .hub-bar-signout {
    display: none;
    height: 36px;
    padding: 0 14px;
    border-radius: var(--radius-md);
    border: 1px solid var(--color-border-strong);
    background: transparent;
    color: #FFFFFF;
    font: 600 13px var(--font-sans);
    cursor: pointer;
    transition: background-color 150ms ease;
  }
  .hub-bar-signout:hover { background-color: var(--color-bg-muted); }
  .hub-bar-menu {
    width: 44px;
    height: 44px;
    border: none;
    border-radius: 8px;
    background: transparent;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .hub-bar-menu:hover { background-color: var(--color-bg-muted); }
  @media (min-width: 768px) {
    .hub-bar-nav { display: flex; }
    .hub-bar-signout { display: inline-flex; align-items: center; }
    .hub-bar-menu { display: none; }
  }
  .hub-bar a:focus-visible,
  .hub-bar button:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px var(--color-focus-ring);
  }
  .hub-bar-panel {
    background-color: var(--color-bg-base);
    border-bottom: 1px solid var(--color-border-default);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
  .hub-bar-panel nav { display: flex; flex-direction: column; padding: 8px 16px 16px; }
  .hub-bar-panel a,
  .hub-bar-panel button {
    display: flex;
    align-items: center;
    min-height: 48px;
    padding: 0 8px;
    border: none;
    border-radius: 8px;
    background: transparent;
    color: var(--color-text-primary);
    font: 500 16px var(--font-sans);
    text-align: left;
    text-decoration: none;
    cursor: pointer;
  }
  .hub-bar-panel a[aria-current="page"] {
    font-weight: 600;
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 6px;
  }
  .hub-bar-panel a:hover,
  .hub-bar-panel button:hover { background-color: var(--color-bg-muted); }
  .hub-bar-panel button { border-top: 1px solid var(--color-border-default); border-radius: 0; margin-top: 8px; }

  /* The band (v2.7): on phones the surface holds behind the copy and tiles, then fades into the
     page over the last 110px, below the link; from 768px the home hero's desktop glow. */
  .hub-band {
    padding-top: calc(56px + var(--dome-banner-h, 0px));
    padding-bottom: 120px;
    background: linear-gradient(180deg, var(--color-hero-surface) 0, var(--color-hero-surface) calc(100% - 110px), var(--hub-page) 100%);
  }
  @media (min-width: 768px) {
    .hub-band {
      padding-top: calc(64px + var(--dome-banner-h, 0px));
      padding-bottom: 56px;
      background: radial-gradient(ellipse 60% 70% at 72% 92%, var(--color-hero-surface-glow) 0%, var(--color-hero-surface) 40%, var(--color-hero-surface-deep) 100%);
    }
  }
  .hub-band-inner {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding-top: 24px;
  }
  @media (min-width: 768px) {
    .hub-band-inner { gap: 32px; padding-top: 48px; }
  }
  .hub-heading { display: flex; flex-direction: column; gap: 12px; }
  .hub-eyebrow {
    margin: 0;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #FFFFFF;
  }
  .hub-title {
    margin: 0;
    font-size: 32px;
    line-height: 1.1;
    font-weight: 700;
    letter-spacing: -0.03em;
    color: #FFFFFF;
  }
  @media (min-width: 768px) {
    .hub-title { font-size: 48px; }
  }

  /* Tiles: inverse, like the primary button on the surface, white in both themes. */
  .hub-tiles {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }
  @media (min-width: 768px) {
    .hub-tiles { grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 20px; }
  }
  .hub-tile {
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 100%;
    min-height: 128px;
    padding: 16px;
    box-sizing: border-box;
    border-radius: 12px;
    background: #FFFFFF;
    box-shadow: 0 8px 24px rgba(0, 30, 70, 0.18);
    text-decoration: none;
    transition: background-color 150ms ease;
  }
  @media (min-width: 768px) {
    .hub-tile { min-height: 148px; padding: 20px 22px; }
  }
  .hub-tile:hover { background: var(--color-accent-hover); }
  .hub-tile:focus-visible { outline: none; box-shadow: 0 0 0 3px var(--color-focus-ring); }
  .hub-tile-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--color-hero-ink);
  }
  .hub-tile-arrow { font-size: 16px; font-weight: 600; }
  /* Fixed ink on the white tile in both themes (the text tokens follow the theme). */
  .hub-tile-label {
    margin-top: auto;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: -0.01em;
    color: #0A0A0A;
  }
  @media (min-width: 768px) {
    .hub-tile-label { font-size: 18px; }
  }
  .hub-tile-tool { font-size: 12px; font-weight: 500; color: #525252; }

  .hub-demo-link {
    align-self: flex-start;
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    color: #FFFFFF;
    font-size: 14px;
    line-height: 1.5;
    font-weight: 500;
    text-decoration: underline;
    text-underline-offset: 4px;
    border-radius: 4px;
  }
  .hub-demo-link:focus-visible { outline: none; box-shadow: 0 0 0 3px var(--color-focus-ring); }

  /* Below the band, on the page colour */
  .hub-main {
    display: flex;
    flex-direction: column;
    gap: 28px;
    padding-top: 8px;
    padding-bottom: 40px;
  }
  @media (min-width: 768px) {
    .hub-main { gap: 32px; padding-top: 48px; padding-bottom: 64px; }
  }
  .hub-card {
    border-radius: 12px;
    background: var(--hub-card);
    border: 1px solid var(--color-border-default);
    box-shadow: var(--hub-card-shadow);
    box-sizing: border-box;
  }
  .hub-placeholder { height: 140px; }
  .hub-section-title {
    margin: 0;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -0.01em;
    color: var(--color-text-primary);
  }
  .hub-continue { display: flex; flex-direction: column; gap: 16px; }
  .hub-recent {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 12px;
  }
  @media (min-width: 768px) {
    .hub-recent { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; }
  }
  .hub-record {
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 100%;
    padding: 18px 20px;
    text-decoration: none;
    transition: border-color 150ms ease;
  }
  @media (min-width: 768px) {
    .hub-record { padding: 22px 24px; }
  }
  .hub-record:hover { border-color: var(--color-accent); }
  .hub-record:focus-visible {
    outline: none;
    border-color: var(--color-accent);
    box-shadow: 0 0 0 3px var(--color-focus-ring);
  }
  .hub-record-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
  .hub-record-tool {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    font-weight: 600;
    color: var(--tool-text-light);
  }
  [data-theme="dark"] .hub-record-tool { color: var(--tool-text-dark); }
  .hub-record-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--tool-dot); flex: none; }
  .hub-record-time { font-size: 12px; color: var(--color-text-tertiary); white-space: nowrap; }
  .hub-record-summary {
    font-size: 14px;
    line-height: 1.55;
    color: var(--color-text-primary);
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    overflow-wrap: anywhere;
  }
  .hub-record-cta { margin-top: auto; font-size: 13px; font-weight: 600; color: var(--color-text-accent); }

  .hub-strip {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px 32px;
    padding: 20px;
  }
  @media (min-width: 768px) {
    .hub-strip { padding: 24px 28px; }
  }
  .hub-strip-mark { flex: none; }
  .hub-strip-text { flex: 1 1 360px; min-width: 0; display: flex; flex-direction: column; gap: 4px; }
  .hub-strip-title { margin: 0; font-size: 16px; font-weight: 700; color: var(--color-text-primary); }
  .hub-strip-body { margin: 0; font-size: 14px; line-height: 1.6; color: var(--color-text-secondary); }
  .hub-strip-actions { display: flex; flex-wrap: wrap; gap: 12px; }
  .hub-btn-primary,
  .hub-btn-secondary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    min-height: 44px;
    padding: 0 18px;
    border-radius: var(--radius-md);
    font: 600 14px var(--font-sans);
    text-decoration: none;
    cursor: pointer;
    transition: background-color 150ms ease, border-color 150ms ease;
  }
  .hub-btn-primary {
    border: none;
    background: var(--color-accent);
    color: var(--color-text-on-accent);
  }
  .hub-btn-primary:hover { background: var(--color-accent-hover); }
  .hub-btn-secondary {
    border: 1px solid var(--color-border-strong);
    background: transparent;
    color: var(--color-text-primary);
  }
  .hub-btn-secondary:hover { background: var(--color-bg-muted); }
  .hub-btn-primary:focus-visible,
  .hub-btn-secondary:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px var(--color-focus-ring);
  }
  @media (max-width: 767px) {
    .hub-strip-cta,
    .hub-strip-actions,
    .hub-strip-actions > * { width: 100%; }
  }

  .hub-mark-dot { fill: var(--color-text-accent); }
  .hub-mark-line,
  .hub-mark-ring { stroke: var(--color-text-accent); stroke-opacity: 0.45; }

  .hub-first {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    padding: 24px 20px;
  }
  @media (min-width: 768px) {
    .hub-first { gap: 48px; padding: 36px 40px; }
  }
  .hub-first-text { flex: 1 1 380px; min-width: 0; display: flex; flex-direction: column; gap: 12px; }
  .hub-first-mark { margin-bottom: 4px; }
  .hub-first-title {
    margin: 0;
    font-size: 22px;
    line-height: 1.25;
    font-weight: 700;
    letter-spacing: -0.015em;
    color: var(--color-text-primary);
  }
  @media (min-width: 768px) {
    .hub-first-title { font-size: 26px; }
  }
  .hub-first-body { margin: 0; font-size: 15px; line-height: 1.65; color: var(--color-text-secondary); }
  .hub-first-example { flex: 1 1 420px; min-width: 0; display: flex; flex-direction: column; gap: 10px; }
  .hub-example-label { margin: 0; font-size: 12px; font-weight: 500; color: var(--color-text-tertiary); }
  .hub-example {
    margin: 0;
    border: 1px dashed var(--color-border-strong);
    border-radius: 10px;
    padding: 18px 20px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px 20px;
    background: var(--color-bg-subtle);
  }
  [data-theme="dark"] .hub-example { background: var(--color-bg-muted); }
  .hub-example div { display: flex; flex-direction: column; gap: 3px; min-width: 0; }
  .hub-example dt { font-size: 12px; color: var(--color-text-tertiary); }
  .hub-example dd { margin: 0; font-size: 14px; font-weight: 500; color: var(--color-text-primary); overflow-wrap: anywhere; }
`;
