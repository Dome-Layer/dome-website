import { useEffect, useState } from 'react'
import { PublicPage } from '../layouts/PublicPage'
import { PageHero } from '../components/page/PageHero'
import { SectionHeading } from '../components/ui/SectionHeading'
import { useLocale, useMessages } from '../i18n/useLocale'
import { routeMeta } from '../lib/seo'
import { LEDGER_PATH, type Ledger, type LedgerRun, type LedgerSource } from '../lib/ledger'

export const meta = routeMeta('openData')

const REPO_URL = 'https://github.com/Dome-Layer/dome-open-data'

type Cadence = 'daily' | 'weekly' | 'monthly' | 'yearly'
type RunStatus = 'collected' | 'unchanged' | 'failed'

/** Everything here is formatted in the visitor's own language; the figures come from the store. */
function useFormatters() {
  const locale = useLocale()
  return {
    number: (value: number) => new Intl.NumberFormat(locale).format(value),
    day: (iso: string) =>
      new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(iso)),
    dayShort: (iso: string) => new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'short' }).format(new Date(iso)),
    moment: (iso: string) => new Intl.DateTimeFormat(locale, { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(iso)),
    gib: (bytes: number) => new Intl.NumberFormat(locale, { maximumFractionDigits: 2 }).format(bytes / 1024 ** 3),
    // "yesterday", "34 days ago", with the plural of each language handled for us. Spelling this
    // out as "{days} days old" in four catalogues got "1 days old" on the first render.
    age: (days: number) => new Intl.RelativeTimeFormat(locale, { numeric: 'auto' }).format(-days, 'day'),
  }
}

function Badge({ tone, children }: { tone: 'ok' | 'warn' | 'bad'; children: string }) {
  const tones = {
    ok: 'border-[var(--color-border-default)] text-[var(--color-text-secondary)]',
    warn: 'border-[var(--color-border-strong)] text-[var(--color-text-primary)] font-semibold',
    bad: 'border-[var(--color-border-strong)] text-[var(--color-text-primary)] font-semibold',
  }
  return (
    <span className={`inline-block whitespace-nowrap rounded-full border px-2 py-[2px] text-[12px] leading-[1.4] ${tones[tone]}`}>
      {children}
    </span>
  )
}

function Freshness({ source }: { source: LedgerSource }) {
  const t = useMessages().pages.openData
  if (source.never_collected) return <Badge tone="bad">{t.status.never}</Badge>
  if (source.stale) return <Badge tone="warn">{t.status.stale}</Badge>
  return <Badge tone="ok">{t.status.fresh}</Badge>
}

function Runs({ runs }: { runs: readonly LedgerRun[] }) {
  const t = useMessages().pages.openData
  const { dayShort } = useFormatters()
  if (runs.length === 0) return null
  return (
    <ul className="flex flex-col gap-1">
      {runs.map((run) => (
        <li key={`${run.started_at}-${run.status}`} className="text-[13px] leading-[1.5]">
          <span className="text-[var(--color-text-secondary)]">{run.started_at ? dayShort(run.started_at) : ''}</span>{' '}
          <span className={run.status === 'failed' ? 'font-semibold' : ''}>{t.status[run.status as RunStatus]}</span>
          {run.error && <span className="mt-1 block break-words text-[12px] text-[var(--color-text-secondary)]">{run.error}</span>}
        </li>
      ))}
    </ul>
  )
}

/** The registry's three values in the visitor's language; anything else is shown as it came. */
function commercialUse(words: { yes: string; ask: string; no: string }, value: string): string {
  if (value === 'yes') return words.yes
  if (value === 'ask') return words.ask
  if (value === 'no') return words.no
  return value
}

function SourceRow({ source }: { source: LedgerSource }) {
  const t = useMessages().pages.openData
  const { number, day, age } = useFormatters()
  const cell = 'border-t border-[var(--color-border-subtle)] px-3 py-4 align-top text-[14px] leading-[1.5]'
  return (
    <tr>
      <th scope="row" className={`${cell} text-left font-semibold`}>
        {source.name}
        <span className="mt-1 block font-normal text-[13px] text-[var(--color-text-secondary)]">{source.id}</span>
        <span className="mt-2 block font-normal">
          <Freshness source={source} />
        </span>
      </th>
      <td className={cell}>{t.cadence[source.cadence as Cadence] ?? source.cadence}</td>
      <td className={cell}>
        {source.newest_vintage ? day(source.newest_vintage) : ''}
        {source.age_days !== null && (
          <span className="mt-1 block text-[13px] text-[var(--color-text-secondary)]">{age(source.age_days)}</span>
        )}
      </td>
      <td className={`${cell} tabular-nums`}>{number(source.vintages_held)}</td>
      <td className={`${cell} tabular-nums`}>{source.series === null ? '' : number(source.series)}</td>
      <td className={`${cell} tabular-nums`}>{source.rows === null ? '' : number(source.rows)}</td>
      <td className={cell}>
        {source.licence.name}
        <span className="mt-1 block text-[13px] text-[var(--color-text-secondary)]">
          {t.licence.commercial}: {commercialUse(t.licence, source.licence.commercial_ok)}
          {source.licence.share_alike && ` · ${t.licence.shareAlike}`}
        </span>
        <span className="mt-1 block text-[13px] text-[var(--color-text-secondary)]">{source.licence.attribution}</span>
      </td>
      <td className={cell}>
        <Runs runs={source.recent_runs} />
      </td>
    </tr>
  )
}

function Totals({ ledger }: { ledger: Ledger }) {
  const t = useMessages().pages.openData
  const { number, gib, moment } = useFormatters()
  const figures: { label: string; value: string }[] = [
    { label: t.totals.sources, value: number(ledger.totals.sources) },
    { label: t.totals.vintages, value: number(ledger.totals.vintages) },
    { label: t.totals.series, value: number(ledger.totals.series) },
    { label: t.totals.rows, value: number(ledger.totals.rows_newest_vintage) },
    { label: t.totals.objects, value: `${number(ledger.store.objects)} (${gib(ledger.store.bytes)} GiB)` },
  ]
  return (
    <div className="flex flex-col gap-6">
      <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {figures.map((figure) => (
          <div key={figure.label} className="flex flex-col gap-1 border-t border-[var(--color-border-strong)] pt-4">
            <dt className="text-[13px] leading-[1.5] text-[var(--color-text-secondary)]">{figure.label}</dt>
            <dd className="text-[28px] font-bold leading-[1.1] tracking-[-0.02em] tabular-nums">{figure.value}</dd>
          </div>
        ))}
      </dl>
      <p className="text-[13px] leading-[1.6] text-[var(--color-text-secondary)]">
        {t.totals.asOf.replace('{time}', moment(ledger.as_of))}
      </p>
    </div>
  )
}

export default function OpenDataPage() {
  const t = useMessages().pages.openData
  const { day } = useFormatters()
  // The ledger is live data, so it is fetched rather than built into the page. Everything else on
  // this page, the copy included, is in the prerendered HTML.
  const [ledger, setLedger] = useState<Ledger | null>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    let current = true
    fetch(LEDGER_PATH, { headers: { accept: 'application/json' } })
      .then((response) => (response.ok ? response.json() : Promise.reject(new Error(String(response.status)))))
      .then((data: Ledger) => current && setLedger(data))
      .catch(() => current && setFailed(true))
    return () => {
      current = false
    }
  }, [])

  return (
    <PublicPage>
      <PageHero
        media="capabilitiesHero"
        eyebrow={t.hero.eyebrow}
        heading={t.hero.heading}
        lead={t.hero.lead}
        note={t.note}
      />

      <section className="bg-[var(--color-bg-base)] py-20 md:py-24">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-6 md:px-12">
          <SectionHeading eyebrow={t.table.eyebrow} heading={t.table.heading} />
          <p className="max-w-[640px] text-[17px] leading-[1.7] text-[var(--color-text-secondary)]">{t.table.lead}</p>

          {ledger && <Totals ledger={ledger} />}

          {/*
            A scrolling region has to be reachable by keyboard (axe rule scrollable-region-focusable,
            WCAG 2.1.1), which this table becomes on a narrow screen.
          */}
          <div
            role="region"
            aria-label={t.table.heading}
            tabIndex={0}
            className="overflow-x-auto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-border-strong)]"
          >
            {ledger ? (
              <table className="w-full min-w-[960px] border-collapse text-left">
                <caption className="sr-only">{t.table.heading}</caption>
                <thead>
                  <tr className="text-[13px] uppercase tracking-[0.04em] text-[var(--color-text-secondary)]">
                    <th scope="col" className="px-3 pb-3">{t.table.columns.source}</th>
                    <th scope="col" className="px-3 pb-3">{t.table.columns.cadence}</th>
                    <th scope="col" className="px-3 pb-3">{t.table.columns.newest}</th>
                    <th scope="col" className="px-3 pb-3">{t.table.columns.vintages}</th>
                    <th scope="col" className="px-3 pb-3">{t.table.columns.series}</th>
                    <th scope="col" className="px-3 pb-3">{t.table.columns.rows}</th>
                    <th scope="col" className="px-3 pb-3">{t.table.columns.licence}</th>
                    <th scope="col" className="px-3 pb-3">{t.table.columns.runs}</th>
                  </tr>
                </thead>
                <tbody>
                  {ledger.sources.map((source) => (
                    <SourceRow key={source.id} source={source} />
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-[15px] leading-[1.6] text-[var(--color-text-secondary)]">
                {failed ? t.error : t.loading}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-4 border-t border-[var(--color-border-subtle)] pt-8">
            {ledger && (
              <p className="max-w-[720px] text-[14px] leading-[1.7] text-[var(--color-text-secondary)]">
                {t.caveat.replace('{date}', day(ledger.run_history_complete_from))}
              </p>
            )}
            <p className="flex flex-wrap gap-5 text-sm font-semibold">
              <a href={LEDGER_PATH} className="text-[var(--color-text-accent)] hover:underline">
                {t.raw}
              </a>
              <a href={REPO_URL} className="text-[var(--color-text-accent)] hover:underline">
                {t.code}
              </a>
            </p>
          </div>
        </div>
      </section>
    </PublicPage>
  )
}
