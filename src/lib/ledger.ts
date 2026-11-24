/**
 * The shape of `public/ledger.json`, the one object the open data collector publishes.
 *
 * Written by `dome-open-data` (`src/dome_open_data/ledger.py`) and served by this site's Worker at
 * LEDGER_PATH. Metadata, counts and provenance only: by design it carries no observation value, so
 * nothing here can be a figure out of the data itself.
 *
 * The path lives here rather than in the Worker so the page and the Worker cannot drift apart.
 */

export const LEDGER_PATH = '/api/open-data/ledger'

export interface LedgerRun {
  /** collected | unchanged | failed */
  status: string
  started_at: string | null
  finished_at: string | null
  vintage: string | null
  rows: number
  /** Already redacted and shortened by the collector before it was written. */
  error: string | null
}

export interface LedgerLicence {
  name: string
  /** yes | ask | no */
  commercial_ok: string
  share_alike: boolean
  attribution: string
}

export interface LedgerSource {
  id: string
  name: string
  publisher: string
  dataset: string
  domain: string
  endpoint: string
  /** daily | weekly | monthly | yearly */
  cadence: string
  newest_vintage: string | null
  vintages_held: number
  first_vintage: string | null
  age_days: number | null
  staleness_limit_days: number
  stale: boolean
  never_collected: boolean
  series: number | null
  rows: number | null
  licence: LedgerLicence
  recent_runs: readonly LedgerRun[]
}

export interface Ledger {
  as_of: string
  store: { objects: number; bytes: number; free_tier_bytes: number; over_alert: boolean }
  totals: { sources: number; stale: number; vintages: number; series: number; rows_newest_vintage: number }
  /**
   * Runs that found nothing new wrote no row before this date, so a gap in the history before it
   * means there was nothing to collect. The page says so rather than letting it be miscounted.
   */
  run_history_complete_from: string
  sources: readonly LedgerSource[]
}
