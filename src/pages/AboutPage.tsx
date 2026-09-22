import { PublicPage } from '../layouts/PublicPage'
import { PageHero } from '../components/page/PageHero'
import { FullBleedSection } from '../components/media/FullBleedSection'
import { ClosingCta } from '../components/page/ClosingCta'
import { Picture } from '../components/media/Picture'
import { ForwardLink } from '../components/ui/Button'
import { Eyebrow } from '../components/ui/Eyebrow'
import { SectionHeading } from '../components/ui/SectionHeading'
import { localizedHref } from '../i18n/routes'
import { useLocale } from '../i18n/useLocale'
import { routeMeta } from '../lib/seo'

export const meta = routeMeta('about')

/** Confirmed with Francesco against canvas Version 10. Update here, not in the copy. */
const FACTS = [
  { figure: '3', label: 'service lines, from UX research to audited automation' },
  { figure: '6', label: 'AI tools we build and operate ourselves' },
  { figure: '2', label: 'working languages, English and Italian' },
  { figure: '8', label: 'years delivering with our partner firm' },
]

const SETUP = [
  {
    title: 'Engagement lead',
    body: 'A senior lead owns each engagement from the first call to handover. You have one point of contact, and one person accountable for the outcome.',
  },
  {
    title: 'Specialist network',
    body: 'We bring in UX researchers, interface designers, engineers, data specialists and compliance advisers from our network of collaborating consultants, when the work needs them.',
  },
  {
    title: 'Delivery partner',
    body: 'Larger programmes are delivered with Ionita Consulting, which gives us the capacity to staff longer or broader engagements without changing how we work.',
  },
]

const EXPECT = [
  { title: 'Small, senior teams', body: 'The people you meet at the start are the people who do the work.' },
  {
    title: 'Governance from the start',
    body: 'Controls and audit needs shape the design from the first workshop, not after go-live.',
  },
  {
    title: 'Proof before commitment',
    body: 'You see working tools and past outcomes before you commit to anything.',
  },
]

export default function AboutPage() {
  const locale = useLocale()

  return (
    <PublicPage>
      <PageHero
        media="aboutHero"
        eyebrow="About DOME"
        heading="An AI and product consultancy for regulated enterprises."
        lead="We help regulated enterprises design software people use, and automate work in a way auditors can follow."
        primary={{ label: 'Talk to us', to: '/contact' }}
        secondary={{ label: 'See our work', to: localizedHref('caseStudies', locale) }}
      />

      <section className="bg-[var(--color-bg-base)] py-20 md:py-24">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 md:px-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            eyebrow="Who we are"
            heading="Complex enterprise work, made simpler to use and safer to automate."
          />
          <div className="flex flex-col gap-4">
            <p className="text-[17px] leading-[1.75] text-[var(--color-text-secondary)]">
              DOME works with procurement, finance, compliance and supply chain teams in regulated
              sectors. We bring enterprise UX and AI process automation together, so the systems
              people use every day are clear to work with and clear to audit.
            </p>
            <p className="text-[17px] leading-[1.75] text-[var(--color-text-secondary)]">
              We also build and run our own governed AI tools. Our advice on automation comes from
              systems we operate, not from slides.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-[1280px] gap-6 px-6 md:px-12 sm:grid-cols-2 lg:grid-cols-4">
          {FACTS.map((fact) => (
            <div
              key={fact.figure}
              className="flex flex-col gap-2 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-subtle)] p-6"
            >
              <p className="text-[40px] font-bold leading-none tracking-[-0.03em] text-[var(--color-text-accent)]">
                {fact.figure}
              </p>
              <p className="text-[14px] leading-[1.5] text-[var(--color-text-secondary)]">{fact.label}</p>
            </div>
          ))}
        </div>
      </section>

      <FullBleedSection media="textureNetwork">
        <div className="flex flex-col gap-12 py-20 md:py-28">
          <SectionHeading
            eyebrow="How we are set up"
            heading="A team shaped around each engagement"
            lead="We do not carry a bench of consultants waiting for work. Each engagement gets the specialists its problem calls for, under one accountable lead."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {SETUP.map((item) => (
              <div key={item.title} className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold leading-[1.3]">{item.title}</h3>
                <p className="text-[15px] leading-[1.65] text-[var(--color-text-secondary)]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </FullBleedSection>

      <section className="bg-[var(--color-bg-base)] py-20 md:py-24">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-6 md:px-12">
          <SectionHeading eyebrow="How we work together" heading="What you can expect from us" />
          <div className="grid gap-6 md:grid-cols-3">
            {EXPECT.map((item) => (
              <div key={item.title} className="flex flex-col gap-3 border-t border-[var(--color-border-default)] pt-6">
                <h3 className="text-lg font-semibold leading-[1.3]">{item.title}</h3>
                <p className="text-[15px] leading-[1.65] text-[var(--color-text-secondary)]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--color-border-subtle)] bg-[var(--color-bg-subtle)] py-16 md:py-20">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-6 md:px-12 lg:grid-cols-[1fr_280px]">
          <div className="flex flex-col gap-4">
            <Eyebrow>Our delivery partner</Eyebrow>
            <h2 className="text-[28px] font-bold leading-[1.2] tracking-[-0.02em] md:text-[32px]">
              Ionita Consulting
            </h2>
            <p className="text-[17px] leading-[1.7] text-[var(--color-text-secondary)]">
              Larger programmes are delivered together with Ionita Consulting, based in Utrecht, with
              whom we have worked for eight years. Together we can staff engagements that need more
              specialists or a longer runway.
            </p>
          </div>
          <div>
            <img
              src="/media/partner-ionita-logo-light-bg.svg"
              alt="Ionita Consulting"
              width={300}
              height={150}
              loading="lazy"
              className="h-14 w-auto dark:hidden"
            />
            <img
              src="/media/partner-ionita-logo-dark-bg.svg"
              alt="Ionita Consulting"
              width={300}
              height={150}
              loading="lazy"
              className="hidden h-14 w-auto dark:block"
            />
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-bg-base)] py-20 md:py-24">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-10 px-6 md:px-12">
          <SectionHeading eyebrow="Leadership" heading="Who leads the work" />
          <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center">
            <div className="w-[160px] shrink-0 overflow-hidden rounded-[var(--radius-lg)]">
              <Picture id="francescoProdomo" sizes="160px" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xl font-semibold">Francesco Prodomo</p>
              <p className="text-[15px] text-[var(--color-text-accent)]">Founder and engagement lead</p>
              <p className="max-w-[560px] text-[15px] leading-[1.65] text-[var(--color-text-secondary)]">
                Ten years in enterprise product design and procurement systems, from user research to
                delivery.
              </p>
              <a
                href="https://www.linkedin.com/in/francesco-prodomo"
                className="mt-1 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[var(--color-text-accent)] hover:underline"
              >
                LinkedIn profile
              </a>
            </div>
          </div>
        </div>
      </section>

      <FullBleedSection media="textureArchitecture">
        <div className="flex flex-col items-start gap-6 py-16 md:py-20">
          <SectionHeading
            eyebrow="Where we work"
            heading="Based in Florence, working across Europe"
            lead="We work with clients in English and Italian, on site or remotely."
          />
          <ForwardLink to={localizedHref('caseStudies', locale)}>See our case studies</ForwardLink>
        </div>
      </FullBleedSection>

      <ClosingCta
        heading="Tell us about the process that slows your team down."
        body="A 30-minute call is enough to tell whether we can help."
        primaryLabel="Book an introductory call"
      />
    </PublicPage>
  )
}
