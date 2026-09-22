import { Picture } from '../../components/media/Picture'
import { ButtonLink } from '../../components/ui/Button'
import { SITE } from '../../lib/siteRoutes'

export function ClosingCta() {
  return (
    <section className="bg-[var(--color-bg-base)] pb-20 md:pb-24">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-default)] bg-[var(--color-bg-muted)] px-8 py-14 md:px-16 md:py-20">
          <div aria-hidden="true" className="absolute inset-0 opacity-[0.18]">
            <Picture id="textureNetwork" className="h-full w-full object-cover" />
          </div>
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center lg:gap-12">
            <div className="flex max-w-[640px] flex-col gap-3">
              <h2 className="text-[28px] font-bold leading-[1.2] tracking-[-0.025em] md:text-[36px]">
                Tell us about the process that slows your team down.
              </h2>
              <p className="text-[17px] leading-[1.7] text-[var(--color-text-secondary)]">
                A 30-minute call is enough to tell whether we can help.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <ButtonLink to={SITE.contact} arrow={false}>
                Book an introductory call
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
