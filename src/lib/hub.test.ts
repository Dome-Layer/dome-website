import { describe, it, expect, vi } from "vitest";
import type { SupabaseClient } from "@supabase/supabase-js";
import { formatWhen, loadHubData, summaryLine } from "./hub";

type RpcResult = { data: unknown; error: unknown };

function fakeClient(results: Record<string, RpcResult | Error>) {
  const rpc = vi.fn(async (fn: string) => {
    const result = results[fn];
    if (result instanceof Error) throw result;
    return result;
  });
  return { client: { rpc } as unknown as SupabaseClient, rpc };
}

describe("loadHubData", () => {
  it("is unconfigured without a client (a build with no Supabase variables)", async () => {
    expect(await loadHubData(null)).toEqual({ status: "unconfigured" });
  });

  it("calls both migration 010 functions, the summary over 30 days", async () => {
    const { client, rpc } = fakeClient({
      my_activity_summary: { data: [], error: null },
      my_latest_per_tool: { data: [], error: null },
    });
    await loadHubData(client);
    expect(rpc).toHaveBeenCalledWith("my_activity_summary", { p_days: 30 });
    expect(rpc).toHaveBeenCalledWith("my_latest_per_tool");
  });

  it("maps the rows and sorts the latest records newest first", async () => {
    const { client } = fakeClient({
      my_activity_summary: {
        data: [{ records: "48", review_required: 6, review_recommended: 3, rules_triggered: 9, since: "x" }],
        error: null,
      },
      my_latest_per_tool: {
        data: [
          { id: "a", agent_id: "llm-council", action_type: "deliberation", timestamp: "2026-10-30T09:15:00Z", output_summary: " Verdict: yes " },
          { id: "b", agent_id: "document-intelligence", action_type: "extraction", timestamp: "2026-10-31T10:42:00Z", output_summary: null },
        ],
        error: null,
      },
    });
    const data = await loadHubData(client);
    expect(data).toEqual({
      status: "ready",
      summary: { records: 48, reviewRequired: 6, reviewRecommended: 3, rulesTriggered: 9 },
      latest: [
        { id: "b", agentId: "document-intelligence", actionType: "extraction", timestamp: "2026-10-31T10:42:00Z", outputSummary: "" },
        { id: "a", agentId: "llm-council", actionType: "deliberation", timestamp: "2026-10-30T09:15:00Z", outputSummary: "Verdict: yes" },
      ],
    });
  });

  it("is an error when either call returns an error", async () => {
    const { client } = fakeClient({
      my_activity_summary: { data: null, error: { message: "JWT expired" } },
      my_latest_per_tool: { data: [], error: null },
    });
    expect(await loadHubData(client)).toEqual({ status: "error" });
  });

  it("is an error when the request throws (offline)", async () => {
    const { client } = fakeClient({
      my_activity_summary: new Error("Failed to fetch"),
      my_latest_per_tool: { data: [], error: null },
    });
    expect(await loadHubData(client)).toEqual({ status: "error" });
  });
});

describe("summaryLine", () => {
  it("reads like the canvas", () => {
    expect(summaryLine({ records: 48, reviewRequired: 6, reviewRecommended: 2, rulesTriggered: 9 })).toBe(
      "48 records in the last 30 days. 6 waited for a person, 9 triggered a governance rule."
    );
  });

  it("uses the singular for one record", () => {
    expect(summaryLine({ records: 1, reviewRequired: 0, reviewRecommended: 0, rulesTriggered: 1 })).toBe(
      "1 record in the last 30 days. 0 waited for a person, 1 triggered a governance rule."
    );
  });

  it("says so when nothing ran in the period", () => {
    expect(summaryLine({ records: 0, reviewRequired: 0, reviewRecommended: 0, rulesTriggered: 0 })).toBe(
      "No records in the last 30 days."
    );
  });
});

describe("formatWhen", () => {
  const now = new Date(2026, 9, 31, 15, 0);

  it("names today and yesterday with the time", () => {
    expect(formatWhen(new Date(2026, 9, 31, 10, 42).toISOString(), now)).toBe("Today, 10:42");
    expect(formatWhen(new Date(2026, 9, 30, 16, 2).toISOString(), now)).toBe("Yesterday, 16:02");
  });

  it("shows the date for older records, and the year from another year", () => {
    expect(formatWhen(new Date(2026, 9, 28, 9, 15).toISOString(), now)).toBe("28 Oct, 09:15");
    expect(formatWhen(new Date(2025, 11, 2, 9, 15).toISOString(), now)).toBe("2 Dec 2025");
  });

  it("is empty for a bad timestamp", () => {
    expect(formatWhen("not a date", now)).toBe("");
  });
});
