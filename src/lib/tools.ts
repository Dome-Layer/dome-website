import { useEffect, useState } from "react";
import { isStagingHost } from "./auth";

/**
 * Shared facts about the DOME tools that more than one page needs.
 */

/**
 * Whether the Agent Flow app is actually reachable.
 *
 * The marketing page, the home tools section and the /app hub all surface Agent Flow,
 * but agent-flow.domelayer.com has no DNS record yet: the P5 frontend has not been
 * deployed (roadmap Sprint A). While this is false, every Agent Flow launch link
 * renders as a "coming soon" state instead of a link that fails to open.
 *
 * Flip to true in the same change that makes agent-flow.domelayer.com resolve.
 */
export const AGENT_FLOW_LIVE = false as boolean;

/**
 * Host-aware tool URL. On a staging host the tool lives at `<sub>.staging.domelayer.com`
 * (per the staging runbook); on production, and anywhere else such as localhost or a
 * Vercel preview, it points at the production `<sub>.domelayer.com`, the only reachable
 * real target.
 *
 * Every link from the website to a tool must go through this. Hardcoded production URLs
 * send staging visitors to production, which is how the 2026-09-11 staging smoke test
 * ended up opening production tools from the staging home page.
 *
 * Reads window.location, so call it at render time, never at module load. In prerendered
 * pages use useToolHref instead.
 */
export function toolHref(prodHost: string): string {
  const host = typeof window !== "undefined" ? window.location.hostname : "";
  const sub = isStagingHost(host)
    ? prodHost.replace(/\.domelayer\.com$/, ".staging.domelayer.com")
    : prodHost;
  return `https://${sub}/`;
}

/**
 * toolHref for prerendered pages. The build has no hostname, so the static HTML carries the
 * production URL; after mount this resolves the real host. Calling toolHref during render
 * instead would leave production links on staging, because React does not patch attribute
 * mismatches on hydration.
 */
export function useToolHref(prodHost: string): string {
  const [href, setHref] = useState(() => `https://${prodHost}/`);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHref(toolHref(prodHost));
  }, [prodHost]);

  return href;
}
