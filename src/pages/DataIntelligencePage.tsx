import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <ToolPageLayout>
      <title>Data Intelligence — DOME</title>
      <meta name="description" content="Upload a spreadsheet and receive a governed analytics dashboard with automatic chart selection and a natural language Q&A panel." />
      <link rel="canonical" href="https://domelayer.com/tools/data-intelligence" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="DOME" />
      <meta property="og:url" content="https://domelayer.com/tools/data-intelligence" />
      <meta property="og:title" content="Data Intelligence — DOME" />
      <meta property="og:description" content="Upload a spreadsheet. Receive a governed analytics dashboard with deterministic chart selection and a natural language Q&A panel — no manual configuration required." />
      <meta property="og:image" content="https://domelayer.com/og-image.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="DOME Data Intelligence — Governed Analytics Dashboard" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@domelayer" />
      <meta name="twitter:title" content="Data Intelligence — DOME" />
      <meta name="twitter:description" content="Upload a spreadsheet. Get a governed analytics dashboard with automatic chart selection and natural language Q&A — no configuration needed." />
      <meta name="twitter:image" content="https://domelayer.com/og-image.png" />
      <meta name="twitter:image:alt" content="DOME Data Intelligence" />
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
                onClick={() => navigate('/#tools')}
                className="text-[13px] text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)] transition-colors duration-150"
              >
                ← Tools
              </button>
              <span className="text-[var(--color-border-default)]">/</span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0080FF]">
                Orchestrate & Model
              </span>
            </div>

            <h1 className="text-h1 sm:text-display font-display font-semibold text-[var(--color-text-primary)] mb-5">
              Data Intelligence
            </h1>
            <p className="text-body text-[var(--color-text-secondary)] max-w-lg mb-8">
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
              className="text-body text-[var(--color-text-secondary)] leading-relaxed"
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
              className="text-h2 font-display font-semibold text-[var(--color-text-primary)]"
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
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0080FF] mb-4">
              DOME method — Orchestrate & Model
            </p>
            <TextReveal
              as="p"
              splitBy="word"
              stagger={0.025}
              className="text-body text-[var(--color-text-secondary)] leading-relaxed"
            >
              The Orchestrate and Model phases define how AI components are coordinated and configured within a governance framework. Data Intelligence is a practical demonstration of this: the language model is confined to column classification — a bounded, low-risk task — while a deterministic rules engine makes the consequential decisions about data presentation. This separation of responsibilities is the architectural pattern DOME applies across all governed AI deployments.
            </TextReveal>
          </motion.div>
        </Container>
      </Section>
    </ToolPageLayout>
  )
}
