export interface Step {
  title: string
  body: string
}

/** The 01 to 04 delivery sequence. A grid across, a stack on narrow screens. */
export function NumberedSteps({ steps, columns = 4 }: { steps: readonly Step[]; columns?: 2 | 4 }) {
  const grid = columns === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-2'
  return (
    <ol className={`grid gap-8 ${grid}`}>
      {steps.map((step, index) => (
        <li key={step.title} className="flex flex-col gap-3">
          <p className="text-[13px] font-semibold text-[var(--color-text-tertiary)]">
            {String(index + 1).padStart(2, '0')}
          </p>
          <h3 className="text-xl font-semibold leading-[1.3] tracking-[-0.01em]">{step.title}</h3>
          <p className="text-[15px] leading-[1.65] text-[var(--color-text-secondary)]">{step.body}</p>
        </li>
      ))}
    </ol>
  )
}
