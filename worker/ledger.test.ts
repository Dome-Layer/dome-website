import { describe, expect, it, vi } from 'vitest'
import { handleLedger, LEDGER_PATH, type LedgerEnv } from './ledger'

const BODY = JSON.stringify({ as_of: '2026-11-24T15:00:00Z', sources: [] })

/** A stand-in for the R2 binding that holds one key, like the real bucket's public/ prefix. */
function makeEnv(keys: Record<string, string> = { 'public/ledger.json': BODY }): LedgerEnv {
  return {
    OPEN_DATA: {
      get: vi.fn(async (key: string, options?: { onlyIf?: { etagDoesNotMatch?: string } }) => {
        if (!(key in keys)) return null
        const etag = '"v1"'
        if (options?.onlyIf?.etagDoesNotMatch === etag) {
          return { httpEtag: etag, uploaded: new Date(0) }
        }
        return { body: keys[key], httpEtag: etag, uploaded: new Date('2026-11-24T15:00:00Z') }
      }),
    },
  } as unknown as LedgerEnv
}

const get = (env: LedgerEnv, headers: Record<string, string> = {}) =>
  handleLedger(new Request(`https://domelayer.com${LEDGER_PATH}`, { headers }), env)

describe('the open data ledger endpoint', () => {
  it('serves the one object as JSON, cacheable and with an ETag', async () => {
    const response = await get(makeEnv())

    expect(response.status).toBe(200)
    expect(response.headers.get('Content-Type')).toBe('application/json; charset=utf-8')
    expect(response.headers.get('Cache-Control')).toContain('max-age=300')
    expect(response.headers.get('ETag')).toBe('"v1"')
    expect(JSON.parse(await response.text()).as_of).toBe('2026-11-24T15:00:00Z')
  })

  it('answers 304 when the visitor already has that version', async () => {
    const response = await get(makeEnv(), { 'if-none-match': '"v1"' })

    expect(response.status).toBe(304)
    expect(await response.text()).toBe('')
  })

  it('reads exactly one key, so nothing else in the bucket is reachable', async () => {
    const env = makeEnv()

    await get(env)

    const r2 = env.OPEN_DATA as unknown as { get: ReturnType<typeof vi.fn> }
    expect(r2.get.mock.calls.map((call) => call[0])).toEqual(['public/ledger.json'])
  })

  it('refuses anything but a read', async () => {
    for (const method of ['POST', 'PUT', 'DELETE']) {
      const response = await handleLedger(
        new Request(`https://domelayer.com${LEDGER_PATH}`, { method }),
        makeEnv(),
      )
      expect(response.status, method).toBe(405)
    }
  })

  it('says so rather than failing when the ledger is not there yet', async () => {
    const response = await get(makeEnv({}))

    expect(response.status).toBe(503)
    expect(response.headers.get('Cache-Control')).toBe('no-store')
    expect(JSON.parse(await response.text()).error).toContain('not been written')
  })

  it('says so rather than crashing when the bucket is not bound, as in local dev', async () => {
    const response = await get({})

    expect(response.status).toBe(503)
    expect(JSON.parse(await response.text()).error).toContain('not bound')
  })
})
