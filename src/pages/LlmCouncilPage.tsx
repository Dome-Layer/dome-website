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
    title: 'Pose a strategic question',
    body: 'Submit any high-stakes question — a market entry decision, a risk assessment, a policy trade-off. No structured format required: plain language is sufficient.',
  },
  {
    number: '02',
    title: 'Three advisors deliberate independently',
    body: 'A panel of three AI advisors each analyses the question from a distinct perspective. They reason independently first, then cross-examine each other\'s positions — surfacing disagreement rather than suppressing it.',
  },
  {
    number: '03',
    title: 'A governed verdict with full audit trail',
    body: 'The Council produces a synthesised verdict that reflects areas of consensus and documents dissenting views. Every reasoning step is logged: the full deliberation trail is available for review and governance sign-off.',
  },
]

export function LlmCouncilPage() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <ToolPageLayout>
      <title>LLM Council — DOME</title>
      <meta name="description" content="Pose a strategic question to a panel of three AI advisors. They deliberate independently, cross-examine each other, and produce a governed verdict with full audit trail." />
      <link rel="canonical" href="https://domelayer.com/tools/llm-council" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="DOME" />
      <meta property="og:url" content="https://domelayer.com/tools/llm-council" />
      <meta property="og:title" content="LLM Council — DOME" />
      <meta property="og:description" content="Pose a strategic question to a panel of three AI advisors. They deliberate independently, cross-examine each other, and produce a governed verdict with full audit trail." />
      <meta property="og:image" content="https://domelayer.com/og-image.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="DOME LLM Council — Governed AI Deliberation" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@domelayer" />
      <meta name="twitter:title" content="LLM Council — DOME" />
      <meta name="twitter:description" content="Pose a strategic question to a panel of three AI advisors. They deliberate independently, cross-examine each other, and produce a governed verdict with full audit trail." />
      <meta name="twitter:image" content="https://domelayer.com/og-image.png" />
      <meta name="twitter:image:alt" content="DOME LLM Council" />
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
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7B5EA7]">
                ORCHESTRATE
              </span>
            </div>

            <h1 className="text-h1 sm:text-display font-display font-semibold text-[var(--color-text-primary)] mb-5">
              LLM Council
            </h1>
            <p className="text-body text-[var(--color-text-secondary)] max-w-lg mb-8">
              Pose a strategic question to a panel of three AI advisors. They deliberate independently, cross-examine each other, and produce a governed verdict with full audit trail.
            </p>
            <a
              href="https://llm-council.domelayer.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-[13px] font-semibold bg-[#7B5EA7] text-white rounded-lg hover:bg-[#9B7EC7] active:bg-[#5A3E87] transition-colors duration-150"
            >
              Open LLM Council
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
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7B5EA7] mb-4">
              What it does
            </p>
            <TextReveal
              as="p"
              splitBy="word"
              stagger={0.025}
              className="text-body text-[var(--color-text-secondary)] leading-relaxed"
            >
              LLM Council structures AI-assisted deliberation around high-stakes decisions. Rather than producing a single model response, it convenes a panel of three advisors that reason independently, challenge each other's positions, and resolve disagreement through structured cross-examination. The output is not just an answer — it is an auditable deliberation: every reasoning step, every challenge raised, and every point of consensus or dissent is logged and available for governance review. Decision-makers receive a verdict they can interrogate, not just accept.
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
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7B5EA7] mb-4">
              How it works
            </p>
            <TextReveal
              as="h2"
              splitBy="word"
              stagger={0.06}
              className="text-h2 font-display font-semibold text-[var(--color-text-primary)]"
            >
              Ask, deliberate, decide.
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
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7B5EA7] mb-4">
              DOME method — Orchestrate
            </p>
            <TextReveal
              as="p"
              splitBy="word"
              stagger={0.025}
              className="text-body text-[var(--color-text-secondary)] leading-relaxed"
            >
              The Deliberate phase ensures that consequential decisions are not delegated to a single model inference. LLM Council is the practical implementation of this principle: it enforces structured disagreement, requires independent reasoning before consensus is sought, and produces an audit trail that satisfies governance requirements. Where other phases of DOME constrain what AI can do, Deliberate constrains how AI reaches conclusions — making the reasoning process itself accountable.
            </TextReveal>
          </motion.div>
        </Container>
      </Section>
    </ToolPageLayout>
  )
}
