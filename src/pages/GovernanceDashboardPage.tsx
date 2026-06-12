import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ToolPageLayout } from '../layouts/ToolPageLayout'
import { Section } from '../components/Section'
import { Container } from '../components/Container'
import { TextReveal } from '../components/TextReveal'
import { fadeUp, dramaticFadeUp, viewportConfig } from '../lib/motion'

const ACCENT = '#6366F1'
const ACCENT_HOVER = '#818CF8'

const steps = [
  {
    number: '01',
    title: 'Use the AI tools normally',
    body: 'Run any of the four DOME tools — Process Analyzer, LLM Council, Data Intelligence, or Document Intelligence. Every request automatically emits a governance event capturing the action, confidence score, rules applied, and human-in-loop recommendation.',
  },
  {
    number: '02',
    title: 'Review the audit trail',
    body: 'The Event Log shows every governance event in reverse-chronological order. Filter by tool, date range, action type, confidence threshold, or human-review status. Click any event to inspect the full decision record.',
  },
  {
    number: '03',
    title: 'Export for compliance',
    body: 'Generate a PDF audit report for any date range and tool subset in one click. Reports include a summary, confidence distribution, and a full event table with review decisions — ready for internal audit or regulatory submission.',
  },
]

export function GovernanceDashboardPage() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <ToolPageLayout>
      <title>Governance Dashboard — DOME</title>
      <meta name="description" content="Real-time audit trail, compliance reporting, and PDF export spanning all four DOME AI tools. Every governance event, confidence score, and human-in-loop decision in one place." />
      <link rel="canonical" href="https://domelayer.com/tools/governance-dashboard" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="DOME" />
      <meta property="og:url" content="https://domelayer.com/tools/governance-dashboard" />
      <meta property="og:title" content="Governance Dashboard — DOME" />
      <meta property="og:description" content="Audit trail, compliance reporting, and PDF export across all four DOME AI tools. See every governance event, confidence score, and human-in-loop decision in one place." />
      <meta property="og:image" content="https://domelayer.com/og-image.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="DOME Governance Dashboard — Cross-tool audit trail and compliance reporting" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@domelayer" />
      <meta name="twitter:title" content="Governance Dashboard — DOME" />
      <meta name="twitter:description" content="Real-time audit trail and compliance reporting across all four DOME AI tools." />
      <meta name="twitter:image" content="https://domelayer.com/og-image.png" />
      <meta name="twitter:image:alt" content="DOME Governance Dashboard" />

      {/* Hero */}
      <Section id="hero" background="default">
        <Container narrow>
          <div className="relative overflow-hidden rounded-xl">
            <img
              src="/network.jpg"
              alt=""
              aria-hidden="true"
              loading="eager"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
              style={{ opacity: 0.05, mixBlendMode: 'luminosity' }}
            />
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="relative z-10 pt-8 pb-4"
            >
              <div className="flex items-center gap-3 mb-6">
                <button
                  onClick={() => navigate('/#tools')}
                  className="text-[13px] text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)] transition-colors duration-150"
                >
                  ← Tools
                </button>
                <span className="text-[var(--color-border-default)]">/</span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>
                  Govern
                </span>
              </div>

              <h1 className="text-h1 sm:text-display font-display font-semibold text-[var(--color-text-primary)] mb-5">
                Governance Dashboard
              </h1>
              <p className="text-body text-[var(--color-text-secondary)] max-w-lg mb-8">
                The observation and compliance layer that spans every DOME AI tool. One signed-in view
                of every governance event, confidence score, and human-in-loop decision — with PDF
                export for audit and regulatory submissions.
              </p>
              <a
                href="https://governance.domelayer.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-[13px] font-semibold text-white rounded-lg transition-colors duration-150"
                style={{ backgroundColor: ACCENT }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = ACCENT_HOVER)}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = ACCENT)}
              >
                Open Governance Dashboard
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* What it does */}
      <Section background="surface">
        <Container narrow>
          <motion.div
            variants={dramaticFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] mb-4" style={{ color: ACCENT }}>
              What it does
            </p>
            <TextReveal
              as="p"
              splitBy="word"
              stagger={0.025}
              className="text-body text-[var(--color-text-secondary)] leading-relaxed"
            >
              The Governance Dashboard is the cross-cutting observation layer for the entire DOME platform. It aggregates governance events emitted by all four AI tools into a single, searchable audit trail. Operations managers, compliance officers, and auditors can inspect every AI decision, review confidence distributions, identify rules triggered, and flag human-in-loop actions — all without touching the individual tools. PDF reports are generated on demand for any time window and tool subset.
            </TextReveal>
          </motion.div>
        </Container>
      </Section>

      {/* How it works */}
      <Section background="default">
        <Container narrow>
          <motion.div
            variants={dramaticFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="mb-10"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] mb-4" style={{ color: ACCENT }}>
              How it works
            </p>
            <TextReveal
              as="h2"
              splitBy="word"
              stagger={0.06}
              className="text-h2 font-display font-semibold text-[var(--color-text-primary)]"
            >
              From tool usage to compliance report.
            </TextReveal>
          </motion.div>

          <div className="flex flex-col gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                custom={i}
                className="flex gap-6 p-6 rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-base)]"
              >
                <span className="text-[13px] font-semibold tabular-nums text-[var(--color-border-strong)] flex-shrink-0 mt-0.5">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-[15px] font-semibold text-[var(--color-text-primary)] mb-2">{step.title}</h3>
                  <p className="text-body-sm text-[var(--color-text-secondary)] leading-relaxed">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* DOME phase */}
      <Section background="surface">
        <Container narrow>
          <motion.div
            variants={dramaticFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] mb-4" style={{ color: ACCENT }}>
              DOME method — Govern
            </p>
            <TextReveal
              as="p"
              splitBy="word"
              stagger={0.025}
              className="text-body text-[var(--color-text-secondary)] leading-relaxed"
            >
              The Govern layer is the thread that runs through every other DOME phase. Where Discover maps processes, Orchestrate coordinates decisions, and Model extracts or analyses data, Govern records what actually happened and ensures it can be explained, audited, and challenged. The Governance Dashboard makes the Govern layer tangible: a live, inspectable record that turns AI activity into accountable evidence — the foundation for any regulated deployment.
            </TextReveal>
          </motion.div>
        </Container>
      </Section>
    </ToolPageLayout>
  )
}
