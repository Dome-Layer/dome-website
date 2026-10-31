import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { getToken } from "./auth";

/**
 * Data for the signed-in hub `/app` (DESIGN_SYSTEM v2.7, option 3 "start a task").
 *
 * Two read-only functions from migration 010 (`docs/hub/010_hub_summary_functions.sql`):
 * `my_activity_summary(p_days)` and `my_latest_per_tool()`. Both run as the caller
 * (SECURITY INVOKER), so row-level security returns only the signed-in user's own records.
 *
 * This client is separate from `src/lib/supabase.ts` on purpose: that one only runs the OAuth
 * exchange and is not a session store. Here the `dome_auth_token` cookie is sent as the bearer
 * token, the way the Governance Dashboard reads, and nothing is persisted or refreshed.
 */

export const SUMMARY_DAYS = 30;

export interface ActivitySummary {
  records: number;
  reviewRequired: number;
  reviewRecommended: number;
  rulesTriggered: number;
}

export interface LatestRecord {
  id: string;
  agentId: string;
  actionType: string;
  timestamp: string;
  outputSummary: string;
}

export type HubData =
  | { status: "ready"; summary: ActivitySummary; latest: LatestRecord[] }
  /** The build has no Supabase variables (a local build). */
  | { status: "unconfigured" }
  | { status: "error" };

export function getSignedInClient(): SupabaseClient | null {
  const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
  const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;
  if (!url || !key) return null;

  const token = getToken();
  return createClient(url, key, {
    global: { headers: token ? { Authorization: `Bearer ${token}` } : {} },
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
  });
}

interface SummaryRow {
  records: number | string | null;
  review_required: number | string | null;
  review_recommended: number | string | null;
  rules_triggered: number | string | null;
}

interface LatestRow {
  id: string;
  agent_id: string;
  action_type: string | null;
  timestamp: string;
  output_summary: string | null;
}

/** Both reads, newest record first. Never throws: a failure is `{ status: "error" }`. */
export async function loadHubData(
  client: SupabaseClient | null = getSignedInClient()
): Promise<HubData> {
  if (!client) return { status: "unconfigured" };

  try {
    const [summaryRes, latestRes] = await Promise.all([
      client.rpc("my_activity_summary", { p_days: SUMMARY_DAYS }),
      client.rpc("my_latest_per_tool"),
    ]);
    if (summaryRes.error || latestRes.error) return { status: "error" };

    // RETURNS TABLE comes back as an array; the summary always has exactly one row.
    const row = ((summaryRes.data ?? []) as SummaryRow[])[0];
    const summary: ActivitySummary = {
      records: Number(row?.records ?? 0),
      reviewRequired: Number(row?.review_required ?? 0),
      reviewRecommended: Number(row?.review_recommended ?? 0),
      rulesTriggered: Number(row?.rules_triggered ?? 0),
    };

    const latest = ((latestRes.data ?? []) as LatestRow[])
      .map((r) => ({
        id: r.id,
        agentId: r.agent_id,
        actionType: r.action_type ?? "",
        timestamp: r.timestamp,
        outputSummary: (r.output_summary ?? "").trim(),
      }))
      .sort((a, b) => Date.parse(b.timestamp) - Date.parse(a.timestamp));

    return { status: "ready", summary, latest };
  } catch {
    return { status: "error" };
  }
}

/** The governance card's line, for example "48 records in the last 30 days. 6 waited for a person, 9 triggered a governance rule." */
export function summaryLine(s: ActivitySummary, days = SUMMARY_DAYS): string {
  const period = `in the last ${days} days`;
  if (s.records === 0) return `No records ${period}.`;
  const head = `${s.records} ${s.records === 1 ? "record" : "records"} ${period}.`;
  return `${head} ${s.reviewRequired} waited for a person, ${s.rulesTriggered} triggered a governance rule.`;
}

const TIME = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit" });
const DAY = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short" });
const DAY_YEAR = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric" });

function startOfDay(d: Date): number {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
}

/** "Today, 10:42", "Yesterday, 16:02", "28 Oct, 09:15", or "28 Oct 2025" from another year. */
export function formatWhen(iso: string, now: Date = new Date()): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  const days = Math.round((startOfDay(now) - startOfDay(d)) / 86_400_000);
  if (days === 0) return `Today, ${TIME.format(d)}`;
  if (days === 1) return `Yesterday, ${TIME.format(d)}`;
  if (d.getFullYear() !== now.getFullYear()) return DAY_YEAR.format(d);
  return `${DAY.format(d)}, ${TIME.format(d)}`;
}

/** Plain names for the action types the tools write, used when a record has no summary. */
export const ACTION_LABELS: Record<string, string> = {
  process_analysis: "Process analysis",
  deliberation: "Council deliberation",
  extraction: "Document extraction",
  eval_judgment: "Evaluation",
  dashboard_generation: "Dashboard generated",
  qa_query: "Question about a dataset",
  invoice_received: "Invoice received",
  rules_evaluated: "Rules evaluated",
  human_approval: "Waiting for approval",
  invoice_approved: "Invoice approved",
  invoice_rejected: "Invoice rejected",
};
