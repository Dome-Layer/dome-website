import { Picture } from '../media/Picture'
import { ButtonLink } from '../ui/Button'
import type { ProjectClosingText } from '../../i18n/messages/types'
import { HireLine } from './HireLine'

interface Action {
  label: string
  to: string
}

/**
 * The panel the project pages close on: the question, the two ways to answer it (try a tool, then
 * watch the run or ask for demo access), and under it the quiet hire line, when the page has one.
 */
export function ProjectClosing({
  text,
  primary,
  secondary,
  hire,
  className = '',
}: {
  text: ProjectClosingText
  primary: Action
  secondary: Action
  hire?: string
  className?: string
}) {
  return (
    <section className={`bg-[var(--color-bg-base)] pb-20 md:pb-24 ${className}`}>
      <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-6 md:px-12">
        <div className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-default)] bg-[var(--color-bg-muted)] px-8 py-14 md:px-16 md:py-20">
          <div aria-hidden="true" className="absolute inset-0 opacity-[0.18]">
            <Picture id="textureNetwork" className="h-full w-full object-cover" />
          </div>
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center lg:gap-12">
            <div className="flex max-w-[640px] flex-col gap-3">
              <h2 className="text-[28px] font-bold leading-[1.2] tracking-[-0.025em] md:text-[36px]">{text.heading}</h2>
              <p className="text-[17px] leading-[1.7] text-[var(--color-text-secondary)]">{text.body}</p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <ButtonLink to={primary.to} arrow={false}>
                {primary.label}
              </ButtonLink>
              <ButtonLink to={secondary.to} variant="secondary" arrow={false}>
                {secondary.label}
              </ButtonLink>
            </div>
          </div>
        </div>
        {hire && <HireLine text={hire} />}
      </div>
    </section>
  )
}
