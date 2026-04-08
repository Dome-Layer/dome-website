import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ToolPageLayout } from '../layouts/ToolPageLayout'
import { Section } from '../components/Section'
import { Container } from '../components/Container'
import { TextReveal } from '../components/TextReveal'
import { fadeUp, dramaticFadeUp, viewportConfig } from '../lib/motion'

const steps = [
  {
    number: '01',
    title: 'Upload a spreadsheet',
    body: 'Provide a CSV, XLSX, or XLS file. The tool receives column names, data types, sample values, and aggregates — raw row data is discarded immediately and never stored.',
  },
  {
    number: '02',
    title: 'Governed dashboard generation',
    body: 'A language model classifies each column. A deterministic rules engine — not the model — then selects the appropriate chart type for each data relationship. The model informs; governance decides.',
  },
  {
    number: '03',
    title: 'Natural language Q&A',
    body: 'Once the dashboard is generated, ask questions about the data in plain language. The Q&A panel operates on the classified column summary, not on the raw data.',
  },
]

export function DataIntelligencePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <ToolPageLayout>
      {/* Hero */}
      <Section id="hero" background="default">
        <Container narrow>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="pt-8 pb-4"
          >
            <div className="flex items-center gap-3 mb-6">
              <button
                onClick={() => { window.location.href = '/#tools' }}
                className="text-[13px] text-[#A3A3A3] hover:text-[#525252] transition-colors duration-150"
              >
                ← Tools
              </button>
              <span className="text-[#E8E8E8]">/</span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0080FF]">
                Orchestrate & Model
              </span>
            </div>

            <h1 className="text-h1 sm:text-display font-display font-semibold text-[#0A0A0A] mb-5">
              Data Intelligence
            </h1>
            <p className="text-body text-[#525252] max-w-lg mb-8">
              Upload a spreadsheet and receive a governed analytics dashboard with automatic chart selection and a natural language Q&A panel.
            </p>
            <a
              href="https://data-intelligence.domelayer.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-[13px] font-semibold bg-[#0080FF] text-white rounded-lg hover:bg-[#40A8FF] active:bg-[#0066CC] transition-colors duration-150"
            >
              Open Data Intelligence
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>
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
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0080FF] mb-4">
              What it does
            </p>
            <TextReveal
              as="p"
              splitBy="word"
              stagger={0.025}
              className="text-body text-[#525252] leading-relaxed"
            >
              Data Intelligence transforms structured spreadsheet data into a governed analytics dashboard without manual configuration. The system classifies each column by type — date, category, metric — then applies a rules engine to determine which chart types are appropriate. Chart selection is deterministic and auditable: the same data always produces the same chart decisions, and every governance rule applied is recorded. A natural language Q&A panel allows analysts to interrogate the data after the dashboard is generated.
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
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0080FF] mb-4">
              How it works
            </p>
            <TextReveal
              as="h2"
              splitBy="word"
              stagger={0.06}
              className="text-h2 font-display font-semibold text-[#0A0A0A]"
            >
              Upload, classify, analyse.
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
                className="flex gap-6 p-6 rounded-xl border border-[#E8E8E8] bg-white"
              >
                <span className="text-[13px] font-semibold tabular-nums text-[#D4D4D4] flex-shrink-0 mt-0.5">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-[15px] font-semibold text-[#0A0A0A] mb-2">{step.title}</h3>
                  <p className="text-body-sm text-[#525252] leading-relaxed">{step.body}</p>
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
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0080FF] mb-4">
              DOME method — Orchestrate & Model
            </p>
            <TextReveal
              as="p"
              splitBy="word"
              stagger={0.025}
              className="text-body text-[#525252] leading-relaxed"
            >
              The Orchestrate and Model phases define how AI components are coordinated and configured within a governance framework. Data Intelligence is a practical demonstration of this: the language model is confined to column classification — a bounded, low-risk task — while a deterministic rules engine makes the consequential decisions about data presentation. This separation of responsibilities is the architectural pattern DOME applies across all governed AI deployments.
            </TextReveal>
          </motion.div>
        </Container>
      </Section>
    </ToolPageLayout>
  )
}
