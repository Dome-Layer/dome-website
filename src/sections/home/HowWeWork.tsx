import { FullBleedSection } from '../../components/media/FullBleedSection'
import { Eyebrow } from '../../components/ui/Eyebrow'

/**
 * The DOME method. The four phase letters spell DOME, which is why they stay in English in the
 * Italian copy too (design feedback round 1).
 */
const PHASES = [
  { letter: 'D', name: 'Discover', body: 'Map the workflow, the systems it touches and where regulation applies.' },
  { letter: 'O', name: 'Orchestrate', body: 'Design the architecture, the data flows and the controls around them.' },
  { letter: 'M', name: 'Model', body: 'Configure AI components inside agreed limits on accuracy and risk.' },
  { letter: 'E', name: 'Execute', body: 'Deploy, integrate and monitor, with every automated decision on record.' },
]

export function HowWeWork() {
  return (
    <FullBleedSection media="textureNetwork">
      <div className="flex flex-col gap-14 py-20 md:py-32">
        <div className="flex max-w-[720px] flex-col gap-4">
          <Eyebrow>How we work</Eyebrow>
          <h2 className="text-[32px] font-bold leading-[1.15] tracking-[-0.025em] md:text-[40px]">
            One method from first workshop to production
          </h2>
          <p className="text-[17px] leading-[1.7] text-[var(--color-text-secondary)] md:text-[18px]">
            Governance is part of every phase, so nothing has to be retrofitted before go-live.
          </p>
        </div>

        <div className="relative">
          <div aria-hidden="true" className="absolute inset-x-0 -top-px hidden h-[3px] bg-[var(--color-accent)] md:block" />
          <ol className="grid gap-8 md:grid-cols-4 md:gap-0">
            {PHASES.map((phase, index) => (
              <li key={phase.letter} className="relative pr-0 pt-0 md:pr-8 md:pt-10">
                <div
                  aria-hidden="true"
                  className="absolute -top-[5px] left-0 hidden h-[11px] w-[11px] rounded-full bg-[var(--color-accent)] md:block"
                />
                <div className="flex flex-col gap-2.5">
                  <Eyebrow>Phase {String(index + 1).padStart(2, '0')}</Eyebrow>
                  <p
                    aria-hidden="true"
                    className="text-[64px] font-bold leading-none tracking-[-0.03em] text-[var(--color-border-strong)]"
                  >
                    {phase.letter}
                  </p>
                  <h3 className="text-2xl font-semibold leading-[1.25] tracking-[-0.015em]">{phase.name}</h3>
                  <p className="text-[15px] leading-[1.65] text-[var(--color-text-secondary)]">{phase.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="flex items-center gap-3 rounded-[var(--radius-md)] border border-[var(--color-border-accent)] bg-[var(--color-accent-subtle)] px-6 py-4">
          <div aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent)]" />
          <Eyebrow>Governance built into every phase</Eyebrow>
        </div>
      </div>
    </FullBleedSection>
  )
}
