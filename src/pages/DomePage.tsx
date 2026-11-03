import { Link } from 'react-router'
import { PublicPage } from '../layouts/PublicPage'
import { PageHero } from '../components/page/PageHero'
import { FullBleedSection } from '../components/media/FullBleedSection'
import { MediaSplit } from '../components/media/MediaSplit'
import { RunSection } from '../components/project/RunSection'
import { ProjectClosing } from '../components/project/ProjectClosing'
import { ForwardLink } from '../components/ui/Button'
import { Eyebrow } from '../components/ui/Eyebrow'
import { SectionHeading } from '../components/ui/SectionHeading'
import { useToolHref } from '../lib/tools'
import { DEMO_TOPIC_QUERY, RUN_ANCHOR, useTryHref } from '../lib/project'
import { localizedHref, type RouteId } from '../i18n/routes'
import { useLocale, useMessages } from '../i18n/useLocale'
import { routeMeta } from '../lib/seo'

export const meta = routeMeta('dome')

/** Tool hosts, in the order the catalogue lists the building blocks. */
const BLOCK_ROUTES: { id: RouteId; host: string }[] = [
  { id: 'processAnalyzer', host: 'analyzer.domelayer.com' },
  { id: 'llmCouncil', host: 'llm-council.domelayer.com' },
  { id: 'documentIntelligence', host: 'document-intelligence.domelayer.com' },
  { id: 'dataIntelligence', host: 'data-intelligence.domelayer.com' },
]



function BlockCard({ index }: { index: number }) {
  const locale = useLocale()
  const messages = useMessages()
  const t = messages.pages.dome.blocks
  const block = t.items[index]
  const route = BLOCK_ROUTES[index]
  const href = useToolHref(route.host)
  return (
    <div className="flex flex-col gap-4 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-base)] p-8">
      <Eyebrow>{block.phase}</Eyebrow>
      <h3 className="text-2xl font-semibold leading-[1.25] tracking-[-0.015em]">{block.title}</h3>
      <p className="grow text-[15px] leading-[1.65] text-[var(--color-text-secondary)]">{block.body}</p>
      <div className="flex flex-wrap items-center gap-5">
        <a
          href={href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-text-accent)] hover:underline"
        >
          {t.openTool}
        </a>
        <Link
          to={localizedHref(route.id, locale)}
          className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
        >
          {t.details}
        </Link>
      </div>
    </div>
  )
}

export default function DomePage() {
  const locale = useLocale()
  const messages = useMessages()
  const t = messages.pages.dome
  const dashboardHref = useToolHref('governance.domelayer.com')
  const tryHref = useTryHref()
  const demoHref = `${localizedHref('contact', locale)}?${DEMO_TOPIC_QUERY}`

  return (
    <PublicPage>
      <PageHero
        media="capabilitiesHero"
        eyebrow={t.hero.eyebrow}
        heading={t.hero.heading}
        lead={t.hero.lead}
        primary={{ label: t.hero.primary, to: tryHref }}
        secondary={{ label: t.hero.secondary, to: `#${RUN_ANCHOR}` }}
        note={t.hero.note}
      />

      <section className="bg-[var(--color-bg-base)] py-20 md:py-24">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-6 md:px-12">
          <SectionHeading eyebrow={t.blocks.eyebrow} heading={t.blocks.heading} />
          <div className="grid gap-6 md:grid-cols-2">
            {t.blocks.items.map((block, i) => (
              <BlockCard key={block.title} index={i} />
            ))}
          </div>
        </div>
      </section>

      <RunSection
        className="border-y border-[var(--color-border-subtle)] bg-[var(--color-bg-subtle)]"
        eyebrow={t.agentFlow.eyebrow}
        heading={t.agentFlow.heading}
        lead={t.agentFlow.lead}
        links={
          <>
            <ForwardLink to={localizedHref('agentFlow', locale)}>{t.agentFlow.cta}</ForwardLink>
            <Link
              to={demoHref}
              className="text-sm font-medium text-[var(--color-text-secondary)] underline underline-offset-[3px] hover:text-[var(--color-text-primary)]"
            >
              {messages.common.askDemo}
            </Link>
          </>
        }
      />

      <MediaSplit
        media={
          <img
            src="/DOME%20iPad%20Mockup.png"
            alt={messages.media.tabletMockup}
            width={760}
            height={570}
            loading="lazy"
            className="-mr-20 w-[640px] max-w-none [mask-image:linear-gradient(90deg,transparent_0%,#000_30%)] [-webkit-mask-image:linear-gradient(90deg,transparent_0%,#000_30%)]"
          />
        }
      >
        <div className="flex max-w-[520px] flex-col gap-5">
          <Eyebrow>{t.governance.eyebrow}</Eyebrow>
          <h2 className="text-[32px] font-bold leading-[1.15] tracking-[-0.025em] md:text-[40px]">
            {t.governance.heading}
          </h2>
          <p className="text-[17px] leading-[1.7] text-[var(--color-text-secondary)]">
            {t.governance.lead}
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <a
              href={dashboardHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-text-accent)] hover:underline"
            >
              {t.governance.openDashboard}
            </a>
            <Link
              to={localizedHref('governanceDashboard', locale)}
              className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
            >
              {t.governance.details}
            </Link>
          </div>
        </div>
      </MediaSplit>

      <FullBleedSection media="textureNetwork">
        <div className="flex flex-col gap-12 py-20 md:py-28">
          <SectionHeading eyebrow={t.standards.eyebrow} heading={t.standards.heading} />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {t.standards.items.map((item) => (
              <div key={item.title} className="flex flex-col gap-3 border-t border-[var(--color-border-strong)] pt-6">
                <h3 className="text-lg font-semibold leading-[1.3]">{item.title}</h3>
                <p className="text-[15px] leading-[1.65] text-[var(--color-text-secondary)]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </FullBleedSection>

      <ProjectClosing
        className="pt-20 md:pt-24"
        text={t.closing}
        primary={{ label: t.hero.primary, to: tryHref }}
        secondary={{ label: messages.common.askDemo, to: demoHref }}
        hire={t.hire}
      />
    </PublicPage>
  )
}
