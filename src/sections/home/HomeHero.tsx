import { HeroMedia } from '../../components/media/HeroMedia'
import { ButtonLink } from '../../components/ui/Button'
import { Eyebrow } from '../../components/ui/Eyebrow'
import { localizedHref } from '../../i18n/routes'
import { useLocale, useMessages } from '../../i18n/useLocale'

export function HomeHero() {
  const locale = useLocale()
  const t = useMessages().pages.home.hero

  return (
    <section className="relative h-[620px] overflow-hidden md:h-[780px]">
      <HeroMedia />
      <div className="relative mx-auto flex h-full max-w-[1280px] flex-col justify-center px-6 md:px-12">
        <div className="flex max-w-[20rem] flex-col gap-6 pt-10 sm:max-w-[30rem] md:max-w-[640px]">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h1 className="text-balance text-[40px] font-bold leading-[1.08] tracking-[-0.03em] text-[var(--color-text-primary)] md:text-[56px]">
            {t.heading}
          </h1>
          <p className="max-w-[560px] text-[16px] leading-[1.65] text-[var(--color-text-secondary)] sm:text-[17px] md:text-[18px]">
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
