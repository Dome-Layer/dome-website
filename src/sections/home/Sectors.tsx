import type { ReactNode } from 'react'
import { Eyebrow } from '../../components/ui/Eyebrow'

const icon = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

function Tile({ children, label }: { children: ReactNode; label: string }) {
  return (
    <div className="flex flex-col gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-subtle)] px-5 py-[18px]">
      <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-accent-subtle)] text-[var(--color-text-accent)]">
        <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" {...icon}>
          {children}
        </svg>
      </div>
      <p className="text-[15px] font-medium leading-[1.4] text-[var(--color-text-primary)]">{label}</p>
    </div>
  )
}

/** The five sectors, as icon tiles. A compact grid on mobile rather than a scroller. */
export function Sectors() {
  return (
    <section className="bg-[var(--color-bg-base)]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-4 px-6 pb-10 pt-6 md:px-12">
        <Eyebrow tone="muted">Sectors we work in</Eyebrow>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          <Tile label="Retail procurement">
            <path d="M6 7h12l-1 13H7L6 7z" />
            <path d="M9 7a3 3 0 0 1 6 0" />
          </Tile>
          <Tile label="Commodity and trade finance">
            <ellipse cx="12" cy="6" rx="7" ry="3" />
            <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
          </Tile>
          <Tile label="Food and agricultural supply chains">
            <path d="M12 21V11" />
            <path d="M12 11c0-4 3-7 8-7 0 5-3 8-8 8z" />
            <path d="M12 14c0-3-2.5-5.5-7-5.5 0 4 2.5 6.5 7 6.5z" />
          </Tile>
          <Tile label="Compliance and regulatory">
            <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3z" />
            <path d="M9 12l2 2 4-4" />
          </Tile>
          <Tile label="Digital assets">
            <rect x="3" y="3" width="8" height="8" rx="1.5" />
            <rect x="13" y="13" width="8" height="8" rx="1.5" />
            <path d="M11 7h3a3 3 0 0 1 3 3v3" />
          </Tile>
        </div>
      </div>
    </section>
  )
}
