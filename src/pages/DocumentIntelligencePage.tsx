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
    title: 'Upload or photograph a document',
    body: 'Provide a PDF or image file, or capture a document directly from your camera. The system accepts invoices, lab reports, utility bills, contracts, bank statements, and more — no templates or configuration required.',
  },
  {
    number: '02',
    title: 'Extraction and governance validation',
    body: 'Fields are extracted with confidence scores, document type and industry are identified automatically, and 16 governance rules are applied to flag anomalies, missing data, expired dates, large monetary amounts, and potential compliance concerns.',
  },
  {
    number: '03',
    title: 'Review, save, and export',
    body: 'Inspect every extracted field with its section, type, and confidence score. Review governance flags by severity. Export to CSV for downstream processing, or save to your history for audit and traceability.',
  },
]

export function DocumentIntelligencePage() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <ToolPageLayout>
      <title>Document Intelligence — DOME</title>
      <meta name="description" content="Extract structured data from any document — invoices, lab reports, utility bills, contracts. Governance validation and full audit trail included." />
      <link rel="canonical" href="https://domelayer.com/tools/document-intelligence" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="DOME" />
      <meta property="og:url" content="https://domelayer.com/tools/document-intelligence" />
      <meta property="og:title" content="Document Intelligence — DOME" />
      <meta property="og:description" content="Upload any document and receive structured, governed extraction — field values, confidence scores, and a 16-rule governance report — in seconds." />
      <meta property="og:image" content="https://domelayer.com/og-image.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="DOME Document Intelligence — Governed Document Extraction" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@domelayer" />
      <meta name="twitter:title" content="Document Intelligence — DOME" />
      <meta name="twitter:description" content="Extract structured data from any document. Governance validation, confidence scoring, and full audit trail — no templates required." />
      <meta name="twitter:image" content="https://domelayer.com/og-image.png" />
      <meta name="twitter:image:alt" content="DOME Document Intelligence" />

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
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F59E0B]">
                Execute
              </span>
            </div>

            <h1 className="text-h1 sm:text-display font-display font-semibold text-[var(--color-text-primary)] mb-5">
              Document Intelligence
            </h1>
            <p className="text-body text-[var(--color-text-secondary)] max-w-lg mb-8">
              Extract structured data from any document — invoices, lab reports, utility bills, contracts. Governance validation and full audit trail included.
            </p>
            <a
              href="https://document-intelligence.domelayer.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-[13px] font-semibold bg-[#F59E0B] text-white rounded-lg hover:bg-[#FBBF24] active:bg-[#D97706] transition-colors duration-150"
            >
              Open Document Intelligence
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
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F59E0B] mb-4">
              What it does
            </p>
            <TextReveal
              as="p"
              splitBy="word"
              stagger={0.025}
              className="text-body text-[var(--color-text-secondary)] leading-relaxed"
            >
              Document Intelligence converts unstructured source documents into structured, validated data without manual data entry or custom templates. It identifies document type and industry automatically, extracts every relevant field with a confidence score, and applies a governance rules engine that checks for anomalies, missing required fields, expired dates, large monetary amounts, potential personal data exposure, and more. Every extraction is saved to a searchable audit history. The output is a governed, exportable dataset ready for downstream systems.
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
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F59E0B] mb-4">
              How it works
            </p>
            <TextReveal
              as="h2"
              splitBy="word"
              stagger={0.06}
              className="text-h2 font-display font-semibold text-[var(--color-text-primary)]"
            >
              Upload, extract, validate.
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
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F59E0B] mb-4">
              DOME method — Execute
            </p>
            <TextReveal
              as="p"
              splitBy="word"
              stagger={0.025}
              className="text-body text-[var(--color-text-secondary)] leading-relaxed"
            >
              The Execute phase is where governed AI decisions produce operational outputs. Document Intelligence is the Execute-phase entry point for organisations that need structured data from unstructured documents at scale. Rather than trusting raw model extraction, every output is validated against a deterministic governance rules engine before it reaches downstream systems — ensuring that what enters your workflows is auditable, consistent, and defensible. This is the final step of the DOME cycle: from process discovery to governed execution.
            </TextReveal>
          </motion.div>
        </Container>
      </Section>
    </ToolPageLayout>
  )
}
