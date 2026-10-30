-- 010_hub_summary_functions.sql
--
-- Two read-only functions for the signed-in hub at domelayer.com/app (option 3, "Start a task",
-- picked by Francesco 2026-10-28; canvas https://claude.ai/artifact/56Zspa3pySfvgcBrXneL5P):
--   my_activity_summary(p_days)  the counts on the hub's governance card
--   my_latest_per_tool()         the latest record per tool, for "Pick up where you left off"
-- PostgREST cannot express COUNT ... FILTER or DISTINCT ON, so these replace what would otherwise
-- be five or more round trips from the browser.
--
-- Why SECURITY INVOKER (unlike 009): both functions only ever read the caller's own rows, which
-- the row-level policy "Users read own audit events" already allows. Running as the caller keeps
-- that policy in force; the explicit user_id = auth.uid() filter is defence in depth and lets the
-- planner use idx_governance_events_user_id. With no session, auth.uid() is NULL and both return
-- nothing (the summary returns zeros). search_path is pinned to '' and every name is qualified.
--
-- Bounded: p_days is clamped to 1..365 (governance events are kept 12 months, migration 008);
-- my_latest_per_tool returns at most one row per agent_id, five today.
--
-- NOTE: this file deliberately does NOT insert its own tracker row. The runner
-- (apply-migrations.sh) appends that INSERT inside the same transaction. When applying
-- outside the runner (SQL Editor / MCP), insert the 010 row by hand afterwards.
--
-- Idempotent (CREATE OR REPLACE, REVOKE/GRANT). Apply to staging (kzzljogzlpzzrdyjaqtw) first,
-- then prod (kuurkyfenexakxahxczn) when the hub is built.

CREATE OR REPLACE FUNCTION public.my_activity_summary(p_days integer DEFAULT 30)
RETURNS TABLE (
    records            bigint,
    review_required    bigint,
    review_recommended bigint,
    rules_triggered    bigint,
    since              timestamptz
)
LANGUAGE sql
STABLE
SECURITY INVOKER
SET search_path = ''
AS $$
    WITH w AS (
        SELECT now() - make_interval(days => LEAST(GREATEST(COALESCE(p_days, 30), 1), 365)) AS since
    )
    SELECT
        count(ge.id),
        count(ge.id) FILTER (WHERE ge.human_in_loop = 'required'),
        count(ge.id) FILTER (WHERE ge.human_in_loop = 'recommended'),
        count(ge.id) FILTER (WHERE cardinality(ge.rules_triggered) > 0),
        w.since
    FROM w
    LEFT JOIN public.governance_events AS ge
           ON ge.user_id = (SELECT auth.uid())
          AND ge."timestamp" >= w.since
    GROUP BY w.since;
$$;

COMMENT ON FUNCTION public.my_activity_summary(integer) IS
    'Signed-in hub (/app): counts of the caller''s own governance events over the last p_days (1 to 365, default 30). SECURITY INVOKER, RLS applies.';

CREATE OR REPLACE FUNCTION public.my_latest_per_tool()
RETURNS TABLE (
    id              uuid,
    agent_id        text,
    action_type     text,
    "timestamp"     timestamptz,
    output_summary  text,
    confidence      double precision,
    human_in_loop   text,
    workflow_run_id text
)
LANGUAGE sql
STABLE
SECURITY INVOKER
SET search_path = ''
AS $$
    SELECT DISTINCT ON (ge.agent_id)
           ge.id, ge.agent_id, ge.action_type, ge."timestamp", ge.output_summary,
           ge.confidence, ge.human_in_loop, ge.workflow_run_id
    FROM public.governance_events AS ge
    WHERE ge.user_id = (SELECT auth.uid())
    ORDER BY ge.agent_id, ge."timestamp" DESC;
$$;

COMMENT ON FUNCTION public.my_latest_per_tool() IS
    'Signed-in hub (/app): the caller''s latest governance event per tool (agent_id). SECURITY INVOKER, RLS applies.';

-- Signed-in users only. Functions are executable by PUBLIC by default; remove that first.
REVOKE ALL ON FUNCTION public.my_activity_summary(integer) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.my_activity_summary(integer) FROM anon;
GRANT EXECUTE ON FUNCTION public.my_activity_summary(integer) TO authenticated;
REVOKE ALL ON FUNCTION public.my_latest_per_tool() FROM PUBLIC;
REVOKE ALL ON FUNCTION public.my_latest_per_tool() FROM anon;
GRANT EXECUTE ON FUNCTION public.my_latest_per_tool() TO authenticated;
