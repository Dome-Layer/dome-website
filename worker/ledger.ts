/**
 * The open data ledger: one object out of the private R2 bucket, served read-only.
 *
 * The collector (`dome-open-data`) assembles `public/ledger.json` at the end of every run. This
 * handler hands that single object to the page at /dome/open-data. It exists because a Worker
 * cannot read the catalogue's Parquet inside a 10 ms CPU budget, and because committing the JSON
 * into the site would be stale between builds (decided 2026-11-17).
 *
 * The bucket stays private: this is the only path out of it, it is GET-only, and it can reach
 * exactly one key. Nothing under `raw/`, `clean/` or `catalog/` is addressable here, so no
 * observation value can be requested even if a licence changed tomorrow.
 */

export { LEDGER_PATH } from '../src/lib/ledger'

/** The only key this handler will ever read. */
const LEDGER_KEY = 'public/ledger.json'

/**
 * Five minutes. The ledger changes at most once per collection run (daily at the fastest), so a
 * short shared cache costs nothing in freshness and keeps the Worker off the free plan's request
 * budget when the page is being looked at.
 */
const CACHE_CONTROL = 'public, max-age=300, stale-while-revalidate=3600'

export interface LedgerEnv {
  /** Read-only binding to the open data bucket. Absent in local dev, which answers 503. */
  OPEN_DATA?: R2Bucket
}

function problem(status: number, detail: string): Response {
  return new Response(JSON.stringify({ error: detail }, null, 1), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
  })
}

function hasBody(object: R2Object | R2ObjectBody): object is R2ObjectBody {
  return 'body' in object && object.body !== null
}

export async function handleLedger(request: Request, env: LedgerEnv): Promise<Response> {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return problem(405, 'This endpoint is read-only.')
  }
  if (!env.OPEN_DATA) {
    return problem(503, 'The open data store is not bound in this environment.')
  }

  const etag = request.headers.get('if-none-match')
  const object = etag
    ? await env.OPEN_DATA.get(LEDGER_KEY, { onlyIf: { etagDoesNotMatch: etag } })
    : await env.OPEN_DATA.get(LEDGER_KEY)

  if (!object) {
    return problem(503, 'The ledger has not been written yet.')
  }
  // A conditional hit returns the metadata without a body: the visitor already has this version.
  if (!hasBody(object)) {
    return new Response(null, {
      status: 304,
      headers: { ETag: object.httpEtag, 'Cache-Control': CACHE_CONTROL },
    })
  }

  return new Response(object.body, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': CACHE_CONTROL,
      ETag: object.httpEtag,
      'Last-Modified': object.uploaded.toUTCString(),
    },
  })
}
