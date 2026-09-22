import { HeroMedia } from '../../components/media/HeroMedia'
import { ButtonLink } from '../../components/ui/Button'
import { Eyebrow } from '../../components/ui/Eyebrow'
import { localizedHref } from '../../i18n/routes'
import { useLocale } from '../../i18n/useLocale'

export function HomeHero() {
  const locale = useLocale()
  return (
    <section className="relative h-[620px] overflow-hidden md:h-[780px]">
      <HeroMedia />
      <div className="relative mx-auto flex h-full max-w-[1280px] flex-col justify-center px-6 md:px-12">
        <div className="flex max-w-[640px] flex-col gap-6 pt-10">
          <Eyebrow>AI and product consulting for regulated enterprises</Eyebrow>
          <h1 className="text-balance text-[40px] font-bold leading-[1.08] tracking-[-0.03em] text-[var(--color-text-primary)] md:text-[56px]">
            Enterprise software people use, and AI you can audit.
          </h1>
          <p className="max-w-[560px] text-[17px] leading-[1.7] text-[var(--color-text-secondary)] md:text-[18px]">
            We help regulated enterprises redesign complex workflows and automate them with AI that
            stays governed, measurable and explainable.
          </p>
          <div className="mt-2 flex flex-wrap gap-3">
            <ButtonLink to={localizedHref('contact', locale)}>Book an introductory call</ButtonLink>
            <ButtonLink to={localizedHref('caseStudies', locale)} variant="secondary">
              See our work
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
