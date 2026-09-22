import { Link } from 'react-router'
import { PublicPage } from '../layouts/PublicPage'
import { PageHero } from '../components/page/PageHero'
import { FullBleedSection } from '../components/media/FullBleedSection'
import { MediaSplit } from '../components/media/MediaSplit'
import { NumberedSteps } from '../components/page/NumberedSteps'
import { ClosingCta } from '../components/page/ClosingCta'
import { ForwardLink } from '../components/ui/Button'
import { Eyebrow } from '../components/ui/Eyebrow'
import { SectionHeading } from '../components/ui/SectionHeading'
import { AGENT_FLOW_LIVE, useToolHref } from '../lib/tools'
import { localizedHref, type RouteId } from '../i18n/routes'
import { useLocale } from '../i18n/useLocale'
import { routeMeta } from '../lib/seo'

export const meta = routeMeta('dome')

const BLOCKS: { id: RouteId; phase: string; name: string; body: string; host: string }[] = [
  {
    id: 'processAnalyzer',
    phase: 'Discover',
    name: 'Process Analyzer',
    body: 'Describe a business process in plain language and get a structured map, the systems involved, governance gaps and automation opportunities.',
    host: 'analyzer.domelayer.com',
  },
  {
    id: 'llmCouncil',
    phase: 'Orchestrate',
    name: 'LLM Council',
    body: 'Put a strategic question to three AI advisers. They reason independently, challenge each other and return a verdict with the full reasoning on record.',
    host: 'llm-council.domelayer.com',
  },
  {
    id: 'documentIntelligence',
    phase: 'Model',
    name: 'Document Intelligence',
    body: 'Extract structured fields from invoices, contracts and reports, with a confidence score for each field and 16 governance checks.',
    host: 'document-intelligence.domelayer.com',
  },
  {
    id: 'dataIntelligence',
    phase: 'Model',
    name: 'Data Intelligence',
    body: 'Upload a spreadsheet and get a governed dashboard. A model classifies the data; a rules engine, not the model, chooses the charts.',
    host: 'data-intelligence.domelayer.com',
  },
]

const AGENT_FLOW_STEPS = [
  {
    title: 'An invoice arrives',
    body: 'A self-hosted workflow picks it up and opens a governed run that follows it from start to finish.',
  },
  {
    title: 'Extracted and checked against policy',
    body: 'Document Intelligence reads the invoice; a rules engine decides the approval path from amount, category, supplier and purchase order.',
  },
  {
    title: 'A council brief, then a person decides',
    body: 'Ambiguous or high-value invoices get a multi-model brief, and a named approver signs off.',
  },
  {
    title: 'One record you can reconstruct',
    body: 'Every step lands in the Governance Dashboard as a single timeline.',
  },
]

const STANDARDS = [
  { title: 'Hosted in the EU', body: 'The demo tools and their data run on infrastructure in the European Union.' },
  {
    title: 'They can run on your infrastructure',
    body: 'Process analysis, document and data intelligence each run against a local open-weight model through Ollama, as a configuration change rather than a rewrite. Nothing has to leave your network.',
  },
  {
    title: 'Not tied to one AI provider',
    body: 'Claude, Azure OpenAI or a local model, chosen per deployment. Models can change without redesigning the workflow or the controls around it.',
  },
  {
    title: 'Logged by design',
    body: 'Every tool records what it did, how confident it was and who reviewed the result.',
  },
]

function BlockCard({ block }: { block: (typeof BLOCKS)[number] }) {
  const locale = useLocale()
  const href = useToolHref(block.host)
  return (
    <div className="flex flex-col gap-4 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-base)] p-8">
      <Eyebrow>{block.phase}</Eyebrow>
      <h3 className="text-2xl font-semibold leading-[1.25] tracking-[-0.015em]">{block.name}</h3>
      <p className="grow text-[15px] leading-[1.65] text-[var(--color-text-secondary)]">{block.body}</p>
      <div className="flex flex-wrap items-center gap-5">
        <a
          href={href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-text-accent)] hover:underline"
        >
          Open the tool
        </a>
        <Link
          to={localizedHref(block.id, locale)}
          className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
        >
          Details
        </Link>
      </div>
    </div>
  )
}

export default function DomePage() {
  const locale = useLocale()
  const dashboardHref = useToolHref('governance.domelayer.com')

  return (
    <PublicPage>
      <PageHero
        media="capabilitiesHero"
        eyebrow="Capabilities"
        heading="Working AI tools, built and run by us."
        lead="DOME is the set of tools we build to show what governed AI looks like in practice. Five are live and one is rolling out, and you can try them before any engagement."
        primary={{ label: 'Book a guided demo', to: localizedHref('contact', locale) }}
        secondary={{ label: 'Sign in to the tools', to: '/login' }}
      />

      <section className="bg-[var(--color-bg-base)] py-20 md:py-24">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-6 md:px-12">
          <SectionHeading eyebrow="The building blocks" heading="Four tools, each covering a phase of the method" />
          <div className="grid gap-6 md:grid-cols-2">
            {BLOCKS.map((block) => (
              <BlockCard key={block.id} block={block} />
            ))}
          </div>
        </div>
      </section>

      <FullBleedSection media="textureNetwork">
        <div className="grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <Eyebrow>The method in production</Eyebrow>
              {!AGENT_FLOW_LIVE && (
                <span className="rounded-full border border-[var(--color-border-accent)] bg-[var(--color-accent-subtle)] px-3 py-1 text-[11px] font-semibold text-[var(--color-text-accent)]">
                  Rolling out
                </span>
              )}
            </div>
            <h2 className="text-[32px] font-bold leading-[1.15] tracking-[-0.025em] md:text-[40px]">
              Agent Flow: from invoice to approval, every step on record
            </h2>
            <p className="text-[17px] leading-[1.7] text-[var(--color-text-secondary)] md:text-[18px]">
              Agent Flow chains the building blocks into one governed workflow, with a named person
              signing off wherever the policy requires it.
            </p>
            <ForwardLink to={localizedHref('agentFlow', locale)}>How Agent Flow works</ForwardLink>
          </div>
          <NumberedSteps steps={AGENT_FLOW_STEPS} columns={2} />
        </div>
      </FullBleedSection>

      <MediaSplit
        className="border-y border-[var(--color-border-subtle)] bg-[var(--color-bg-subtle)]"
        media={
          <img
            src="/DOME%20iPad%20Mockup.png"
            alt=""
            aria-hidden="true"
            width={760}
            height={570}
            loading="lazy"
            className="-mr-20 w-[640px] max-w-none [mask-image:linear-gradient(90deg,transparent_0%,#000_30%)] [-webkit-mask-image:linear-gradient(90deg,transparent_0%,#000_30%)]"
          />
        }
      >
        <div className="flex max-w-[520px] flex-col gap-5">
          <Eyebrow>The governance layer</Eyebrow>
          <h2 className="text-[32px] font-bold leading-[1.15] tracking-[-0.025em] md:text-[40px]">
            Governance Dashboard
          </h2>
          <p className="text-[17px] leading-[1.7] text-[var(--color-text-secondary)]">
            One audit trail across every tool: each event, confidence score and human decision in one
            place, with PDF reports for internal audit.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <a
              href={dashboardHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-text-accent)] hover:underline"
            >
              Open the dashboard
            </a>
            <Link
              to={localizedHref('governanceDashboard', locale)}
              className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
            >
              Details
            </Link>
          </div>
        </div>
      </MediaSplit>

      <section className="bg-[var(--color-bg-base)] py-20 md:py-24">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-6 md:px-12">
          <SectionHeading eyebrow="How the tools are built" heading="The same standards we bring to client work" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {STANDARDS.map((item) => (
              <div key={item.title} className="flex flex-col gap-3 border-t border-[var(--color-border-default)] pt-6">
                <h3 className="text-lg font-semibold leading-[1.3]">{item.title}</h3>
                <p className="text-[15px] leading-[1.65] text-[var(--color-text-secondary)]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-bg-base)] pb-20 md:pb-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <div className="flex flex-col items-start justify-between gap-6 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-subtle)] p-8 md:flex-row md:items-center">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <img
                src="/media/partner-ionita-logo-light-bg.svg"
                alt="Ionita Consulting"
                width={300}
                height={150}
                loading="lazy"
                className="h-10 w-auto dark:hidden"
              />
              <img
                src="/media/partner-ionita-logo-dark-bg.svg"
                alt="Ionita Consulting"
                width={300}
                height={150}
                loading="lazy"
                className="hidden h-10 w-auto dark:block"
              />
              <p className="text-[15px] leading-[1.65] text-[var(--color-text-secondary)]">
                Larger programmes are delivered together with our partner, Ionita Consulting.
              </p>
            </div>
            <ForwardLink to={localizedHref('about', locale)}>About the partnership</ForwardLink>
          </div>
        </div>
      </section>

      <ClosingCta
        heading="See the tools work on your own process."
        body="In a guided demo we run your example through the tools and talk through what a governed rollout would involve."
        primaryLabel="Book a guided demo"
      />
    </PublicPage>
  )
}
