import { localizedHref } from '../i18n/routes'
import { useLocale } from '../i18n/useLocale'
import { PublicPage } from '../layouts/PublicPage'
import { PageHero } from '../components/page/PageHero'
import { FeatureBand } from '../components/page/FeatureBand'
import { NumberedSteps } from '../components/page/NumberedSteps'
import { RelatedWork } from '../components/page/RelatedWork'
import { ClosingCta } from '../components/page/ClosingCta'
import { SectionHeading } from '../components/ui/SectionHeading'
import { caseStudiesFor } from '../content/caseStudies'
import { routeMeta } from '../lib/seo'

export const meta = routeMeta('enterpriseUx')

const SIGNS = [
  {
    title: 'Adoption is low',
    body: 'People work around the system with spreadsheets and email, because the tool gets in the way of the job.',
  },
  {
    title: 'Training never ends',
    body: 'Every new starter needs weeks of support, and the same questions reach the help desk again and again.',
  },
  {
    title: 'Every change is expensive',
    body: 'Each new requirement becomes another custom screen, and the interface gets harder to maintain with every release.',
  },
]

const DELIVERABLES = [
  {
    title: 'User research and service design',
    body: 'Interviews, workflow shadowing and journey maps that show where time and trust are lost.',
  },
  {
    title: 'Interface and interaction design',
    body: 'Screens designed for the real volume and density of enterprise work, tested with the people who use them.',
  },
  {
    title: 'Design systems',
    body: 'A component library and guidelines your developers can build from, so consistency survives the next release.',
  },
  {
    title: 'Rollout and adoption',
    body: 'We stay through build and rollout, with training material and measures that show whether people use the new tool.',
  },
]

const STEPS = [
  { title: 'Observe', body: 'We shadow the people who use the system and map where time and trust are lost.' },
  { title: 'Design', body: 'We design the flows and screens with your team, one workflow at a time.' },
  { title: 'Validate', body: 'We test prototypes with real users before anything goes into development.' },
  { title: 'Roll out', body: 'We support the build, write the training material and measure adoption after launch.' },
]

export default function EnterpriseUxPage() {
  const locale = useLocale()
  return (
    <PublicPage>
      <PageHero
        media="enterpriseUxHero"
        breadcrumbs={[{ label: 'Services' }, { label: 'Enterprise UX and product' }]}
        eyebrow="Enterprise UX and product"
        heading="Internal tools your teams actually want to use."
        lead="We redesign complex enterprise platforms, from procurement workflows to trading screens, around the people who use them every day."
        primary={{ label: 'Book a UX review', to: localizedHref('contact', locale) }}
        secondary={{ label: 'See how we work', to: localizedHref('about', locale) }}
      />

      <section className="bg-[var(--color-bg-base)] py-20 md:py-24">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-6 md:px-12">
          <SectionHeading eyebrow="When it helps" heading="Signs a system is working against its users" />
          <div className="grid gap-6 md:grid-cols-3">
            {SIGNS.map((sign) => (
              <div
                key={sign.title}
                className="flex flex-col gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-subtle)] p-8"
              >
                <h3 className="text-xl font-semibold leading-[1.3] tracking-[-0.01em]">{sign.title}</h3>
                <p className="text-[15px] leading-[1.65] text-[var(--color-text-secondary)]">{sign.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-bg-base)] pb-20 md:pb-24">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-6 md:px-12">
          <SectionHeading
            eyebrow="What we deliver"
            heading="From research to a design system your developers can build from"
          />
          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {DELIVERABLES.map((item) => (
              <div key={item.title} className="flex flex-col gap-2 border-t border-[var(--color-border-default)] pt-6">
                <h3 className="text-lg font-semibold leading-[1.3]">{item.title}</h3>
                <p className="text-[15px] leading-[1.65] text-[var(--color-text-secondary)]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeatureBand
        media="textureArchitecture"
        eyebrow="Built for regulated work"
        heading="Designed for decisions people are accountable for."
        lead="Tools in finance, procurement and compliance carry more than tasks. They carry approvals, evidence and responsibility, and the interface has to make those clear."
        points={[
          'Accessible by default, to WCAG 2.1 AA',
          'Approvals and their history visible where decisions are made',
          'Role-based views for requesters, approvers and auditors',
          'One design system, so every screen behaves the same way',
        ]}
      />

      <section className="bg-[var(--color-bg-base)] py-20 md:py-24">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-6 md:px-12">
          <SectionHeading eyebrow="How we deliver it" heading="From first interview to rollout" />
          <NumberedSteps steps={STEPS} />
        </div>
      </section>

      <RelatedWork heading="UX and product work in practice" studies={caseStudiesFor('ux', 3)} />

      <ClosingCta
        heading="Start with one workflow."
        body="In a UX review we observe one workflow with your team and show you where it loses time, and what to fix first."
        primaryLabel="Book a UX review"
      />
    </PublicPage>
  )
}
