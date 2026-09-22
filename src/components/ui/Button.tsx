import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { ArrowRight } from './icons'

interface ActionProps {
  to: string
  children: ReactNode
  /** `primary` is the filled accent button, `secondary` the outlined one. */
  variant?: 'primary' | 'secondary'
  /** Show the forward arrow. On by default for primary actions. */
  arrow?: boolean
  className?: string
}

const base =
  'inline-flex items-center gap-2 rounded-[var(--radius-md)] px-7 py-3.5 text-sm font-semibold transition-colors'

const variants = {
  primary: 'bg-[var(--color-accent)] text-[var(--color-text-on-accent)] hover:bg-[var(--color-accent-hover)]',
  secondary:
    'border border-[var(--color-border-strong)] bg-[var(--color-scrim)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-muted)]',
} as const

/** A call to action. Always a link: nothing on the public pages submits from a button. */
export function ButtonLink({ to, children, variant = 'primary', arrow, className = '' }: ActionProps) {
  const showArrow = arrow ?? variant === 'primary'
  return (
    <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {showArrow && <ArrowRight />}
    </Link>
  )
}

/** The inline "read more" link that ends most cards and sections. */
export function ForwardLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-text-accent)] hover:underline"
    >
      {children}
      <ArrowRight />
    </Link>
  )
}
