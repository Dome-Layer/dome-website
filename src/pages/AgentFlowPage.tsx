import { Link } from 'react-router'
import { PublicPage } from '../layouts/PublicPage'
import { ProjectClosing } from '../components/project/ProjectClosing'
import { ButtonLink } from '../components/ui/Button'
import { ArrowRight } from '../components/ui/icons'
import {
  ExternalButton,
  MethodStrip,
  PhaseLabel,
  StepsTimeline,
  TOOL_CONTAINER,
  ToolHero,
  ToolPhoto,
  ToolScreen,
  ToolSectionHeading,
} from '../components/tools/ToolParts'
import { TOOL_PAGES } from '../content/toolPages'
import { AGENT_FLOW_LIVE, useToolHref } from '../lib/tools'
import { DEMO_TOPIC_QUERY, RUN_ANCHOR } from '../lib/project'
import { localizedHref } from '../i18n/routes'
import { useLocale, useMessages } from '../i18n/useLocale'
import { routeMeta } from '../lib/seo'

export const meta = routeMeta('agentFlow')

/** The record of one run, in the order it was written. Times and tools are data; the words are not. */
const EVENTS = [
  { time: '08:41', tool: 'Agent Flow', tone: 'text-[var(--color-text-tertiary)]' },
  { time: '08:41', tool: 'Document Intelligence', tone: 'text-[#15803D] dark:text-[#4ADE80]' },
  { time: '08:41', tool: 'Rules engine', tone: 'text-[#B45309] dark:text-[#F59E0B]' },
  { time: '08:42', tool: 'LLM Council', tone: 'text-[var(--color-text-accent)]' },
  { time: '09:10', tool: 'Approver', tone: 'text-[#BE185D] dark:text-[#EC4899]' },
] as const

/**
 * Agent Flow: the flagship, with the governed invoice case merged in (site split 2026-11-01; tool
 * pages redesign, canvas signed off 2026-11-03). It is a private demo (DOME_DECISIONS 2026-09-28),
 * so the way in is asking for demo access rather than a launch link while AGENT_FLOW_LIVE is false.
 */
export default function AgentFlowPage() {
  const locale = useLocale()
  const messages = useMessages()
  const t = messages.pages.tools
  const text = t.agentFlow
  const config = TOOL_PAGES.agentFlow
  const name = messages.meta.agentFlow.name
  const launchHref = useToolHref('agent-flow.domelayer.com')
  const demoHref = `${localizedHref('contact', locale)}?${DEMO_TOPIC_QUERY}`

  return (
    <PublicPage>
      <ToolHero
        name={name}
        labelledBy="tool-heading"
        phaseLabel={<PhaseLabel phase={config.phase} name={text.phase} accent={config.accent} />}
        badge={
          !AGENT_FLOW_LIVE && (
            <span className="rounded-full border border-[var(--color-border-accent)] px-2.5 py-[3px] text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-text-accent)]">
              {messages.common.run.badge}
            </span>
          )
        }
        tagline={text.tagline}
        lead={text.lead}
        actions={
          <>
            {AGENT_FLOW_LIVE ? (
              <ExternalButton href={launchHref}>{text.openQueue}</ExternalButton>
            ) : (
              <ButtonLink to={demoHref} arrow={false}>
                {text.askDemo}
              </ButtonLink>
            )}
            <a
              href={`#${RUN_ANCHOR}`}
              className="inline-flex items-center rounded-[var(--radius-md)] border border-[var(--color-border-strong)] px-7 py-3.5 text-sm font-semibold hover:bg-[var(--color-bg-muted)]"
            >
              {messages.common.watchRun}
            </a>
          </>
        }
        note={text.demoNote}
        screen={<ToolScreen screen={config.screen} alt={text.shot.alt} caption={text.shot.caption} label={name} />}
      />

      <section aria-labelledby="why-heading" className="border-t border-[var(--color-border-subtle)] py-20 md:py-24">
        <div className={`flex flex-col gap-12 ${TOOL_CONTAINER}`}>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <ToolSectionHeading id="why-heading" eyebrow={text.why.eyebrow} heading={text.why.heading} />
            <div className="flex flex-col gap-4">
              {text.why.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-[17px] leading-[1.75] text-[var(--color-text-secondary)]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <ul className="grid gap-5 md:grid-cols-3">
            {text.why.outcomes.map((outcome) => (
              <li
                key={outcome.title}
                className="flex flex-col gap-2 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-subtle)] p-6"
              >
                <span
                  aria-hidden="true"
                  className="flex h-7 w-7 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-accent-subtle)] text-[var(--color-text-accent)]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                </span>
                <h3 className="text-[17px] font-semibold leading-[1.35]">{outcome.title}</h3>
                <p className="text-[15px] leading-[1.6] text-[var(--color-text-secondary)]">{outcome.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id={RUN_ANCHOR}
        aria-labelledby="run-heading"
        className="scroll-mt-20 border-y border-[var(--color-border-subtle)] bg-[var(--color-bg-subtle)] py-20 md:py-24"
      >
        <div className={`flex flex-col gap-12 ${TOOL_CONTAINER}`}>
          <ToolSectionHeading id="run-heading" eyebrow={text.run.eyebrow} heading={text.run.heading} lead={text.run.lead} />
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
            <StepsTimeline
              steps={text.run.stages}
              accent={config.accent}
              kicker={(index) => `${String(index + 1).padStart(2, '0')} · ${text.run.stages[index].tool}`}
            />
            <ToolPhoto id={config.photo} />
          </div>
        </div>
      </section>

      <section aria-labelledby="record-heading" className="py-20 md:py-24">
        <div className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${TOOL_CONTAINER}`}>
          <div className="flex flex-col gap-4">
            <ToolSectionHeading id="record-heading" eyebrow={t.whatItRecords} heading={text.record.heading} lead={text.record.lead} />
            <Link
              to={localizedHref('governanceDashboard', locale)}
              className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[var(--color-text-accent)] hover:underline"
            >
              {text.record.cta}
              <ArrowRight />
            </Link>
          </div>
          <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-strong)] bg-[var(--color-bg-base)]">
            <div className="flex flex-wrap justify-between gap-3 border-b border-[var(--color-border-default)] px-5 py-3.5 text-[13px]">
              <span className="font-mono font-semibold">run-7f3a1c</span>
              <span className="text-[var(--color-text-tertiary)]">Nordlicht Packaging GmbH · €49,123.20</span>
            </div>
            <ol>
              {EVENTS.map((event, index) => (
                <li
                  key={event.tool}
                  className="grid grid-cols-[44px_minmax(0,1fr)_auto] items-center gap-3 border-b border-[var(--color-border-default)] px-5 py-3 text-[13px] last:border-b-0 md:grid-cols-[56px_minmax(0,1fr)_auto]"
                >
                  <span className="tabular-nums text-[var(--color-text-tertiary)]">{event.time}</span>
                  <span>
                    <span className="font-semibold">{event.tool}</span>
                    <span className="text-[var(--color-text-secondary)]"> · {text.record.events[index].what}</span>
                  </span>
                  <span
                    className={`justify-self-end rounded-full border border-current px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.08em] ${event.tone}`}
                  >
                    {text.record.events[index].review}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <MethodStrip current="agentFlow" heading={text.method.heading} body={text.method.body} />

      <ProjectClosing
        text={text.closing}
        primary={{ label: text.askDemo, to: demoHref }}
        secondary={{ label: t.allTools, to: localizedHref('dome', locale) }}
      />
    </PublicPage>
  )
}
