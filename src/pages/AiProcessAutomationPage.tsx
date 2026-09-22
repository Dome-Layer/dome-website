import { ServicePage } from '../components/page/ServicePage'
import { MediaSplit } from '../components/media/MediaSplit'
import { AiLabel, Picture } from '../components/media/Picture'
import { NumberedSteps } from '../components/page/NumberedSteps'
import { SectionHeading } from '../components/ui/SectionHeading'
import { localizedHref } from '../i18n/routes'
import { useLocale, useMessages } from '../i18n/useLocale'
import { routeMeta } from '../lib/seo'

export const meta = routeMeta('aiProcessAutomation')

export default function AiProcessAutomationPage() {
  const locale = useLocale()
  const text = useMessages().pages.services.aiProcessAutomation

  // This page puts its steps beside a media split rather than in a plain section.
  const split = (
    <MediaSplit
      className="border-y border-[var(--color-border-subtle)] bg-[var(--color-bg-subtle)]"
      media={
        <div className="relative w-[640px] max-w-none">
          <Picture
            id="homeHeroStill"
            sizes="640px"
            className="w-full [mask-image:linear-gradient(90deg,transparent_0%,#000_30%)] [-webkit-mask-image:linear-gradient(90deg,transparent_0%,#000_30%)]"
          />
          <AiLabel id="homeHeroStill" />
        </div>
      }
    >
      <div className="flex max-w-[560px] flex-col gap-10">
        <SectionHeading eyebrow={text.steps.eyebrow} heading={text.steps.heading} />
        <NumberedSteps steps={text.steps.items} columns={2} />
      </div>
    </MediaSplit>
  )

  return (
    <ServicePage
      text={text}
      heroMedia="aiProcessAutomationHero"
      bandMedia="textureArchitecture"
      segment="automation"
      secondaryTo={localizedHref('dome', locale)}
      split={split}
    />
  )
}
