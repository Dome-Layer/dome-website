import { FRANCESCO_SITE_URL } from '../../lib/project'

/**
 * The quiet way to hire Francesco: one line of text ending on a link to his own site, never a
 * button (site split, DOME_DECISIONS 2026-11-01 and 2026-11-02). Links in running text are
 * underlined (accessibility re-audit, 2026-10-30).
 */
export function HireLine({ text, className = '' }: { text: string; className?: string }) {
  return (
    <p className={`text-[14px] leading-[1.6] text-[var(--color-text-secondary)] ${className}`}>
      {text}{' '}
      <a
        href={FRANCESCO_SITE_URL}
        className="text-[var(--color-text-accent)] underline underline-offset-[3px] hover:text-[var(--color-text-primary)]"
      >
        francescoprodomo.com
      </a>
      .
    </p>
  )
}
