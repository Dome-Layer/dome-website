import { useRef } from 'react'
import { HeroScene } from '../../components/hero/HeroScene'
import { ButtonLink } from '../../components/ui/Button'
import { Eyebrow } from '../../components/ui/Eyebrow'
import { localizedHref } from '../../i18n/routes'
import { useLocale, useMessages } from '../../i18n/useLocale'

export function HomeHero() {
  const locale = useLocale()
  const t = useMessages().pages.home.hero
  // The scene dims its particles behind this block, so the copy keeps its contrast.
  const copyRef = useRef<HTMLDivElement>(null)

  return (
    // On phones the hero is a minimum height, not a fixed one, so the copy can never be centred up
    // under the fixed 64px nav: the top padding keeps a 48px gap below it (plus the staging banner,
    // when there is one) and the hero grows instead. The 200px bottom padding is the band the scene
    // lives in under the buttons. From `md` up the fixed height has room to spare.
    //
    // The hero sits on the primary colour (v2.4, `.hero-surface`), and the copy re-points the
    // colour tokens for its subtree (`.on-hero-surface`) so the eyebrow, heading, lead and both
    // buttons turn white and inverse. `data-nav-surface` lets the top bar blend in while the surface
    // is under it; on phones the surface ends where its fade into the page begins, 200px earlier.
    <section
      data-nav-surface=""
      className="hero-surface relative flex min-h-[560px] flex-col overflow-hidden [--nav-surface-inset:200px] md:h-[780px] md:[--nav-surface-inset:0px]"
    >
      <HeroScene copyRef={copyRef} />
      <div className="on-hero-surface relative mx-auto flex w-full max-w-[1280px] flex-1 flex-col justify-center px-6 pb-[200px] pt-[calc(7rem+var(--dome-banner-h,0px))] md:px-12 md:py-0">
        <div ref={copyRef} className="flex max-w-[20rem] flex-col gap-6 sm:max-w-[30rem] md:max-w-[640px] md:pt-10">
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
