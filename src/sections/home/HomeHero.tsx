import { HeroMedia } from '../../components/media/HeroMedia'
import { ButtonLink } from '../../components/ui/Button'
import { Eyebrow } from '../../components/ui/Eyebrow'
import { localizedHref } from '../../i18n/routes'
import { useLocale, useMessages } from '../../i18n/useLocale'

export function HomeHero() {
  const locale = useLocale()
  const t = useMessages().pages.home.hero

  return (
    <section className="relative h-[560px] overflow-hidden md:h-[780px]">
      <HeroMedia />
      <div className="relative mx-auto flex h-full max-w-[1280px] flex-col justify-center px-6 md:px-12">
        <div className="flex max-w-[20rem] flex-col gap-6 pt-10 sm:max-w-[30rem] md:max-w-[640px]">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h1 className="text-balance text-[32px] font-bold leading-[1.15] tracking-[-0.02em] text-[var(--color-text-primary)] md:text-[56px] md:leading-[1.08] md:tracking-[-0.03em]">
            {t.heading}
          </h1>
          <p className="max-w-[560px] text-[15px] leading-[1.6] text-[var(--color-text-primary)] sm:text-[16px] md:text-[18px] md:leading-[1.7] md:text-[var(--color-text-secondary)]">
            {t.lead}
          </p>
          <div className="mt-2 flex flex-wrap gap-3">
            <ButtonLink to={localizedHref('contact', locale)}>{t.primary}</ButtonLink>
            <ButtonLink to={localizedHref('caseStudies', locale)} variant="secondary">
              {t.secondary}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
