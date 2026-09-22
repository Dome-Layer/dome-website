import { Picture } from '../media/Picture'
import { ButtonLink } from '../ui/Button'
import { SITE } from '../../lib/siteRoutes'

/** The call to action every page ends on: a texture panel, a question and two ways to answer it. */
export function ClosingCta({
  heading,
  body,
  primaryLabel,
}: {
  heading: string
  body: string
  primaryLabel: string
}) {
  return (
    <section className="bg-[var(--color-bg-base)] pb-20 md:pb-24">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-default)] bg-[var(--color-bg-muted)] px-8 py-14 md:px-16 md:py-20">
          <div aria-hidden="true" className="absolute inset-0 opacity-[0.18]">
            <Picture id="textureNetwork" className="h-full w-full object-cover" />
          </div>
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center lg:gap-12">
            <div className="flex max-w-[640px] flex-col gap-3">
              <h2 className="text-[28px] font-bold leading-[1.2] tracking-[-0.025em] md:text-[36px]">{heading}</h2>
              <p className="text-[17px] leading-[1.7] text-[var(--color-text-secondary)]">{body}</p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <ButtonLink to={SITE.contact} arrow={false}>
                {primaryLabel}
              </ButtonLink>
              <ButtonLink to={SITE.contact} variant="secondary" arrow={false}>
                Send a message
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
