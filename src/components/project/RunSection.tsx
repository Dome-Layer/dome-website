import type { ReactNode } from 'react'
import { NumberedSteps } from '../page/NumberedSteps'
import { Eyebrow } from '../ui/Eyebrow'
import { AGENT_FLOW_LIVE } from '../../lib/tools'
import { RUN_ANCHOR } from '../../lib/project'
import { useMessages } from '../../i18n/useLocale'
import { RunDiagram } from './RunDiagram'

/**
 * Agent Flow's run, where "Watch the run" lands (`#run`, DOME_DECISIONS 2026-11-02): the copy and
 * its links beside the run diagram, then the four steps. The home page and the tools page both
 * carry it, each with its own heading.
 */
export function RunSection({
  eyebrow,
  heading,
  lead,
  links,
  className = '',
}: {
  eyebrow: string
  heading: string
  lead: string
  links: ReactNode
  className?: string
}) {
  const t = useMessages().common.run
  return (
    <section id={RUN_ANCHOR} aria-labelledby="run-heading" className={`scroll-mt-20 py-20 md:py-24 ${className}`}>
      <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-6 md:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <Eyebrow>{eyebrow}</Eyebrow>
              {!AGENT_FLOW_LIVE && (
                <span className="rounded-full border border-[var(--color-border-accent)] bg-[var(--color-accent-subtle)] px-3 py-1 text-[11px] font-semibold text-[var(--color-text-accent)]">
                  {t.badge}
                </span>
              )}
            </div>
            <h2 id="run-heading" className="text-[32px] font-bold leading-[1.15] tracking-[-0.025em] md:text-[40px]">
              {heading}
            </h2>
            <p className="text-[17px] leading-[1.7] text-[var(--color-text-secondary)] md:text-[18px]">{lead}</p>
            <div className="mt-1 flex flex-wrap items-center gap-x-6 gap-y-3">{links}</div>
          </div>
          <RunDiagram />
        </div>
        <NumberedSteps steps={t.steps} />
      </div>
    </section>
  )
}
