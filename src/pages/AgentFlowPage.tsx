import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ToolPageLayout } from '../layouts/ToolPageLayout'
import { Section } from '../components/Section'
import { Container } from '../components/Container'
import { TextReveal } from '../components/TextReveal'
import { fadeUp, dramaticFadeUp, viewportConfig } from '../lib/motion'
import { AGENT_FLOW_LIVE, useToolHref } from '../lib/tools'
import { routeMeta } from '../lib/seo'
import { localizedHref } from '../i18n/routes'
import { useLocale, useMessages } from '../i18n/useLocale'

export const meta = routeMeta('agentFlow')

const ACCENT = '#EC4899'
const ACCENT_HOVER = '#F472B6'


export default function AgentFlowPage() {
  const launchHref = useToolHref('agent-flow.domelayer.com')
  const locale = useLocale()
  const text = useMessages().pages.tools.agentFlow

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <ToolPageLayout>
      {/* Hero */}
      <Section id="hero" background="default">
        <Container narrow>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="pt-8 pb-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] mb-4" style={{ color: ACCENT }}>
              {text.phase}
            </p>
            <TextReveal
              as="h1"
              splitBy="word"
              stagger={0.05}
              className="text-h1 sm:text-display font-display font-semibold text-[var(--color-text-primary)]"
            >
              Governed Agent Flow
            </TextReveal>
            <p className="mt-4 text-body text-[var(--color-text-secondary)] max-w-xl">
              {text.lead}
            </p>
            <div className="mt-8 flex items-center gap-4">
              {AGENT_FLOW_LIVE ? (
                <a
                  href={launchHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 text-[13px] font-semibold text-white rounded-lg transition-colors duration-150"
                  style={{ backgroundColor: ACCENT }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT_HOVER)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT)}
                >
                  {text.openQueue}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              ) : (
                <>
                  <a
                    href={localizedHref('contact', locale)}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 text-[13px] font-semibold text-white rounded-lg transition-colors duration-150"
                    style={{ backgroundColor: ACCENT }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT_HOVER)}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT)}
                  >
                    {text.bookDemo}
                  </a>
                  <span className="text-[13px] text-[var(--color-text-secondary)]">
                    {text.demoNote}
                  </span>
                </>
              )}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* How it works */}
      <Section id="how" background="default">
        <Container narrow>
          <motion.div
            variants={dramaticFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid gap-6 sm:grid-cols-3"
          >
            {text.steps.map((s, i) => (
              <div
                key={s.title}
                className="rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-base)] p-6"
              >
                <span className="block text-[13px] font-semibold mb-3" style={{ color: ACCENT }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-h3 font-display font-semibold text-[var(--color-text-primary)] mb-2">
                  {s.title}
                </h3>
                <p className="text-body-sm text-[var(--color-text-secondary)] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </motion.div>
        </Container>
      </Section>
    </ToolPageLayout>
  )
}
