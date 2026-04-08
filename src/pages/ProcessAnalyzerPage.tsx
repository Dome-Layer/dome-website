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
    title: 'Describe the process',
    body: 'Write a plain-language description of any business process — a procurement workflow, an approval chain, an onboarding sequence. No templates or structured input required.',
  },
  {
    number: '02',
    title: 'Receive a structured map',
    body: 'The tool generates a visual flowchart (Mermaid.js), identifies the systems involved, estimates time at each stage, and surfaces governance exposure points.',
  },
  {
    number: '03',
    title: 'Understand automation opportunities',
    body: 'Each step is assessed for AI automation potential, with a confidence score and a plain explanation of what governance measures would be required before deployment.',
  },
]

export function ProcessAnalyzerPage() {
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
                Discover
              </span>
            </div>

            <h1 className="text-h1 sm:text-display font-display font-semibold text-[#0A0A0A] mb-5">
              Process Analyzer
            </h1>
            <p className="text-body text-[#525252] max-w-lg mb-8">
              Convert a plain-language description of any business process into a structured process map with governance analysis and automation assessment.
            </p>
            <a
              href="https://analyzer.domelayer.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-[13px] font-semibold bg-[#0080FF] text-white rounded-lg hover:bg-[#40A8FF] active:bg-[#0066CC] transition-colors duration-150"
            >
              Open Process Analyzer
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
              Process Analyzer takes unstructured business process descriptions and returns structured, visual outputs that operations managers and process owners can act on immediately. It identifies which systems touch each step, estimates processing time, and flags where governance controls are absent or insufficient. The tool also assesses which parts of the process are candidates for AI automation — with a clear indication of what oversight would be needed before any automation is deployed.
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
              Three steps from description to map.
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
              DOME method — Discover
            </p>
            <TextReveal
              as="p"
              splitBy="word"
              stagger={0.025}
              className="text-body text-[#525252] leading-relaxed"
            >
              The Discover phase maps what actually exists before any AI architecture is designed. Process Analyzer is the practical implementation of this phase: it builds the process inventory, exposes regulatory and governance gaps, and produces the structured foundation that all subsequent DOME phases require. A deployment cannot be designed until the process landscape is understood.
            </TextReveal>
          </motion.div>
        </Container>
      </Section>
    </ToolPageLayout>
  )
}
