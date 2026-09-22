import type { ReactNode } from 'react'
import { ForwardLink } from '../../components/ui/Button'
import { Eyebrow } from '../../components/ui/Eyebrow'
import { SITE } from '../../lib/siteRoutes'

const icon = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

function Row({ title, body, children }: { title: string; body: string; children: ReactNode }) {
  return (
    <div className="flex gap-5 border-t border-[var(--color-border-default)] py-6">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-[var(--color-accent-subtle)] text-[var(--color-text-accent)]">
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" {...icon}>
          {children}
        </svg>
      </div>
      <div className="flex flex-col gap-1.5">
        <h3 className="text-lg font-semibold leading-[1.3]">{title}</h3>
        <p className="text-[15px] leading-[1.65] text-[var(--color-text-secondary)]">{body}</p>
      </div>
    </div>
  )
}

/**
 * How the practice is staffed. This replaced a large portrait, which made the company read as a
 * one-person project (design feedback, 16 September).
 */
export function OperatingModel() {
  return (
    <section className="bg-[var(--color-bg-base)] py-20 md:py-24">
      <div className="mx-auto grid max-w-[1280px] items-start gap-12 px-6 md:px-12 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col gap-5 lg:sticky lg:top-24">
          <Eyebrow>About DOME</Eyebrow>
          <h2 className="text-[32px] font-bold leading-[1.15] tracking-[-0.025em] md:text-[40px]">
            One accountable lead. The right specialists for the work.
          </h2>
          <p className="text-[17px] leading-[1.7] text-[var(--color-text-secondary)]">
            We staff each engagement around the problem rather than a fixed headcount. You get
            senior people throughout, and a team that grows or shrinks with the scope.
          </p>
          <ForwardLink to={SITE.about}>How we are set up</ForwardLink>
        </div>
        <div className="flex flex-col border-b border-[var(--color-border-default)]">
          <Row
            title="Engagement lead"
            body="One senior lead owns the engagement from the first call to handover, and stays accountable for the outcome."
          >
            <circle cx="9" cy="8" r="4" />
            <path d="M2 21v-1a7 7 0 0 1 11.5-5.4" />
            <path d="M16 19l2 2 4-4" />
          </Row>
          <Row
            title="Specialist network"
            body="UX researchers, designers, engineers, data and compliance specialists join when the work needs them."
          >
            <circle cx="12" cy="5" r="2.5" />
            <circle cx="5" cy="18" r="2.5" />
            <circle cx="19" cy="18" r="2.5" />
            <path d="M10.8 7.2 6.2 15.8M13.2 7.2l4.6 8.6M7.5 18h9" />
          </Row>
          <Row
            title="Delivery partner"
            body="Larger programmes run with an established partner firm, so the team can grow with the scope."
          >
            <path d="M3 21h18" />
            <path d="M5 21V7l7-4 7 4v14" />
            <path d="M9 21v-6h6v6" />
            <path d="M9 10h.01M15 10h.01" />
          </Row>
        </div>
      </div>
    </section>
  )
}
