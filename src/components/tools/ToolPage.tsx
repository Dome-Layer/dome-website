import { PublicPage } from '../../layouts/PublicPage'
import { ProjectClosing } from '../project/ProjectClosing'
import { TOOL_PAGES, type ToolId } from '../../content/toolPages'
import { useToolHref } from '../../lib/tools'
import { localizedHref } from '../../i18n/routes'
import { useLocale, useMessages } from '../../i18n/useLocale'
import {
  ExternalButton,
  FeatureCards,
  MethodStrip,
  PhaseLabel,
  RecordCard,
  StepsTimeline,
  TOOL_CONTAINER,
  ToolHero,
  ToolPhoto,
  ToolScreen,
  ToolSectionHeading,
} from './ToolParts'

type SelfServeTool = Exclude<ToolId, 'agentFlow'>

/**
 * A self-serve tool's page: what it is with the real tool beside it, what it does, how it works
 * beside a workplace photo, what it records, where it sits in the method, and a way in (tool pages
 * redesign, canvas signed off 2026-11-03). Agent Flow has its own page around the same parts.
 */
export function ToolPage({ id }: { id: SelfServeTool }) {
  const locale = useLocale()
  const messages = useMessages()
  const t = messages.pages.tools
  const text = t[id]
  const config = TOOL_PAGES[id]
  const name = messages.meta[id].name
  const href = useToolHref(config.host as string)

  return (
    <PublicPage>
      <ToolHero
        name={name}
        labelledBy="tool-heading"
        phaseLabel={<PhaseLabel phase={config.phase} name={text.phase} accent={config.accent} />}
        tagline={text.tagline}
        lead={text.lead}
        actions={
          <>
            <ExternalButton href={href}>{text.open}</ExternalButton>
            <a
              href="#how"
              className="inline-flex items-center rounded-[var(--radius-md)] border border-[var(--color-border-strong)] px-7 py-3.5 text-sm font-semibold hover:bg-[var(--color-bg-muted)]"
            >
              {t.howItWorks}
            </a>
          </>
        }
        note={messages.pages.home.hero.note}
        screen={<ToolScreen screen={config.screen} alt={text.shot.alt} caption={text.shot.caption} label={config.host ?? name} />}
      />

      <section aria-labelledby="what-heading" className="border-t border-[var(--color-border-subtle)] py-20 md:py-24">
        <div className={`flex flex-col gap-10 ${TOOL_CONTAINER}`}>
          <ToolSectionHeading id="what-heading" eyebrow={t.whatItDoes} heading={text.features.heading} />
          <FeatureCards items={text.features.items} />
        </div>
      </section>

      <section
        id="how"
        aria-labelledby="how-heading"
        className="scroll-mt-20 border-y border-[var(--color-border-subtle)] bg-[var(--color-bg-subtle)] py-20 md:py-24"
      >
        <div className={`flex flex-col gap-12 ${TOOL_CONTAINER}`}>
          <ToolSectionHeading id="how-heading" eyebrow={t.howItWorks} heading={text.howItWorks.heading} />
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
            <StepsTimeline
              steps={text.howItWorks.steps}
              accent={config.accent}
              kicker={(index) => String(index + 1).padStart(2, '0')}
            />
            <ToolPhoto id={config.photo} />
          </div>
        </div>
      </section>

      <section aria-labelledby="record-heading" className="py-20 md:py-24">
        <div className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${TOOL_CONTAINER}`}>
          <div className="flex flex-col gap-4">
            <ToolSectionHeading id="record-heading" eyebrow={t.whatItRecords} heading={text.record.heading} lead={text.record.lead} />
          </div>
          <RecordCard rows={config.record} />
        </div>
      </section>

      <MethodStrip current={id} heading={text.method.heading} body={text.method.body} />

      <ProjectClosing
        text={text.closing}
        primary={{ label: text.open, to: href }}
        secondary={{ label: t.allTools, to: localizedHref('dome', locale) }}
      />
    </PublicPage>
  )
}
