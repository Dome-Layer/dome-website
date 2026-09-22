import type { ReactNode } from 'react'

/**
 * The small uppercase label above a heading. `tone="muted"` is for labels that introduce a list
 * rather than a section, where the accent colour would over-signal.
 */
export function Eyebrow({ children, tone = 'accent' }: { children: ReactNode; tone?: 'accent' | 'muted' }) {
  const color = tone === 'accent' ? 'text-[var(--color-text-accent)]' : 'text-[var(--color-text-tertiary)]'
  return (
    <p className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${color}`}>{children}</p>
  )
}
