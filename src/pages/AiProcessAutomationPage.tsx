import { PublicPage } from '../layouts/PublicPage'
import { PageHero } from '../components/page/PageHero'
import { FeatureBand } from '../components/page/FeatureBand'
import { NumberedSteps } from '../components/page/NumberedSteps'
import { RelatedWork } from '../components/page/RelatedWork'
import { ClosingCta } from '../components/page/ClosingCta'
import { MediaSplit } from '../components/media/MediaSplit'
import { AiLabel, Picture } from '../components/media/Picture'
import { SectionHeading } from '../components/ui/SectionHeading'
import { caseStudiesFor } from '../content/caseStudies'
import { localizedHref } from '../i18n/routes'
import { useLocale } from '../i18n/useLocale'
import { routeMeta } from '../lib/seo'

export const meta = routeMeta('aiProcessAutomation')

const READY = [
  {
    title: 'High volume, clear rules',
    body: 'Invoice intake, supplier onboarding checks, document classification: work that follows a policy but still takes specialist time.',
  },
  {
    title: 'Decisions that need a record',
    body: 'Approvals and exceptions that auditors and regulators will ask about, sometimes months after the fact.',
  },
  {
    title: 'Data locked in documents',
    body: 'Contracts, certificates and reports that someone currently re-keys into another system by hand.',
  },
]

const STEPS = [
  {
    title: 'Map the process',
    body: 'We walk the workflow with the people who run it and mark which steps follow rules, which need judgement and where the risk sits.',
  },
  {
    title: 'Design the controls',
    body: 'Rules, confidence thresholds and approval points are agreed with you before any step is automated.',
  },
  {
    title: 'Build and integrate',
    body: 'We connect to the systems you already use and keep the rules outside the model, so your team can read and change them.',
  },
  {
    title: 'Run and measure',
    body: 'Every decision is logged. We review accuracy with you and adjust thresholds as volumes change.',
  },
]

export default function AiProcessAutomationPage() {
  const locale = useLocale()
  return (
    <PublicPage>
      <PageHero
        media="aiProcessAutomationHero"
        breadcrumbs={[{ label: 'Services' }, { label: 'AI process automation' }]}
        eyebrow="AI process automation"
        heading="Automate the routine. Keep people on the decisions."
        lead="We automate well-defined steps in finance, procurement and compliance workflows, with rules you can read and a record of every decision."
        primary={{ label: 'Book an automation review', to: localizedHref('contact', locale) }}
        secondary={{ label: 'See how it works', to: localizedHref('dome', locale) }}
      />

      <section className="bg-[var(--color-bg-base)] py-20 md:py-24">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-6 md:px-12">
          <SectionHeading eyebrow="Where it helps" heading="Processes that are ready for automation" />
          <div className="grid gap-6 md:grid-cols-3">
            {READY.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-subtle)] p-8"
              >
                <h3 className="text-xl font-semibold leading-[1.3] tracking-[-0.01em]">{item.title}</h3>
                <p className="text-[15px] leading-[1.65] text-[var(--color-text-secondary)]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MediaSplit
        className="bg-[var(--color-bg-subtle)] border-y border-[var(--color-border-subtle)]"
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
          <SectionHeading eyebrow="How we deliver it" heading="Four steps, agreed with you before anything runs" />
          <NumberedSteps steps={STEPS} columns={2} />
        </div>
      </MediaSplit>

      <FeatureBand
        media="textureArchitecture"
        eyebrow="Built-in governance"
        heading="Every automated decision can be explained."
        lead="When someone asks why an invoice was approved or a document was flagged, the answer is already on record."
        points={[
          'A confidence score on every extracted field',
          'Policy rules kept outside the model, readable by your team',
          'A named person signs off where the policy requires it',
          'An audit trail you can export for each run',
          'Runs against a local open-weight model where data cannot leave your network',
        ]}
      />

      <RelatedWork heading="Automation in practice" studies={caseStudiesFor('automation', 3)} />

      <ClosingCta
        heading="Start with one process."
        body="In an automation review we map one workflow with your team and tell you what is worth automating, and what is not."
        primaryLabel="Book an automation review"
      />
    </PublicPage>
  )
}
