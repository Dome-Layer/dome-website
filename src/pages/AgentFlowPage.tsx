import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ToolPageLayout } from '../layouts/ToolPageLayout'
import { Section } from '../components/Section'
import { Container } from '../components/Container'
import { TextReveal } from '../components/TextReveal'
import { fadeUp, dramaticFadeUp, viewportConfig } from '../lib/motion'

const ACCENT = '#EC4899'
const ACCENT_HOVER = '#F472B6'

const steps = [
  {
    number: '01',
    title: 'An invoice arrives',
    body: 'A vendor emails an invoice to the AP inbox, or it is uploaded through the workflow form. A self-hosted n8n workflow picks it up and opens a governed run with a single workflow id that follows it end to end.',
  },
  {
    number: '02',
    title: 'Extract, then evaluate against policy',
    body: 'Document Intelligence extracts the fields and confidence; a data-driven rules engine then decides the approval path from amount tier, purchase category, country and VAT, vendor allowlist, PO match, currency, and duplicate detection.',
  },
  {
    number: '03',
    title: 'Council brief, then a human gate',
    body: 'Ambiguous or high-value invoices get a multi-model LLM Council decision brief. A named approver signs off on a branded review page — or low-risk invoices auto-approve under policy. Every step is written to the Governance Dashboard as one reconstructable timeline.',
  },
]

export function AgentFlowPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <ToolPageLayout>
      <title>Agent Flow — DOME</title>
      <meta name="description" content="A governed invoice-to-approval workflow: Document Intelligence extraction, a policy rules engine, a multi-model LLM Council, and a human approval gate — every step audited." />
      <link rel="canonical" href="https://domelayer.com/tools/agent-flow" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="DOME" />
      <meta property="og:url" content="https://domelayer.com/tools/agent-flow" />
      <meta property="og:title" content="Agent Flow — DOME" />
      <meta property="og:description" content="A governed invoice-to-approval workflow across the DOME tools, with a human-in-the-loop gate and a full audit trail." />
      <meta property="og:image" content="https://domelayer.com/og-image.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="DOME Agent Flow — Governed invoice-to-approval workflow" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@domelayer" />
      <meta name="twitter:title" content="Agent Flow — DOME" />
      <meta name="twitter:description" content="Governed invoice-to-approval workflow with a human-in-the-loop gate and full audit trail." />
      <meta name="twitter:image" content="https://domelayer.com/og-image.png" />
      <meta name="twitter:image:alt" content="DOME Agent Flow" />

      {/* Hero */}
      <Section id="hero" background="default">
        <Container narrow>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="pt-8 pb-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] mb-4" style={{ color: ACCENT }}>
              EXECUTE
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
              A self-hosted n8n workflow that runs a real invoice-to-approval process across the DOME
              tools — extraction, a policy rules engine, a multi-model council, and a human approval
              gate — emitting a full audit trail the Governance Dashboard reconstructs.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://agent-flow.domelayer.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 text-[13px] font-semibold text-white rounded-lg transition-colors duration-150"
                style={{ backgroundColor: ACCENT }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT_HOVER)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT)}
              >
                Open the approval queue
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
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
            {steps.map((s) => (
              <div
                key={s.number}
                className="rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-base)] p-6"
              >
                <span className="block text-[13px] font-semibold mb-3" style={{ color: ACCENT }}>
                  {s.number}
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
