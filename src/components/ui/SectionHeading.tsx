import type { ReactNode } from 'react'
import { Eyebrow } from './Eyebrow'

/** Eyebrow, heading and optional standfirst. The shape every section on the site opens with. */
export function SectionHeading({
  eyebrow,
  heading,
  lead,
  children,
}: {
  eyebrow: string
  heading: string
  lead?: string
  children?: ReactNode
}) {
  return (
    <div className="flex max-w-[720px] flex-col gap-4">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-[32px] font-bold leading-[1.15] tracking-[-0.025em] md:text-[40px]">{heading}</h2>
      {lead && (
        <p className="text-[17px] leading-[1.7] text-[var(--color-text-secondary)] md:text-[18px]">{lead}</p>
      )}
      {children}
    </div>
  )
}
