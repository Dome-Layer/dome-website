import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Section } from '../components/Section'
import { Container } from '../components/Container'
import { TextReveal } from '../components/TextReveal'
import { dramaticFadeUp, viewportConfig } from '../lib/motion'
import { useTheme } from '../lib/ThemeContext'

interface ToolItem {
  label: string
  title: string
  subtitle: string
  href: string
  detailPath: string
  borderColor: string
  accentColor: string
  accentHover: string
}

const tools: ToolItem[] = [
  {
    label: 'DISCOVER',
    title: 'Process Analyzer',
    subtitle:
      'Describe a business process in plain language. Receive a structured process map, system dependencies, governance gaps, and automation opportunities.',
    href: 'https://analyzer.domelayer.com/',
    detailPath: '/tools/process-analyzer',
    borderColor: '#06B6D4',
    accentColor: '#06B6D4',
    accentHover: '#22D3EE',
  },
  {
    label: 'ORCHESTRATE',
    title: 'LLM Council',
    subtitle:
      'Pose a strategic question to a panel of three AI advisors. They deliberate independently, cross-examine each other, and produce a governed verdict with full audit trail.',
    href: 'https://llm-council.domelayer.com',
    detailPath: '/tools/llm-council',
    borderColor: '#7B5EA7',
    accentColor: '#7B5EA7',
    accentHover: '#9B7EC7',
  },
  {
    label: 'MODEL',
    title: 'Data Intelligence',
    subtitle:
      'Upload a spreadsheet. The system classifies columns, selects chart types via a governance rules engine, and generates a governed analytics dashboard.',
    href: 'https://data-intelligence.domelayer.com/',
    detailPath: '/tools/data-intelligence',
    borderColor: '#10B981',
    accentColor: '#10B981',
    accentHover: '#34D399',
  },
  {
    label: 'MODEL',
    title: 'Document Intelligence',
    subtitle:
      'Upload any document — invoice, lab report, utility bill, contract. The system extracts structured fields, applies 16 governance rules, and returns a validated, exportable dataset.',
    href: 'https://document-intelligence.domelayer.com/',
    detailPath: '/tools/document-intelligence',
    borderColor: '#F59E0B',
    accentColor: '#F59E0B',
    accentHover: '#FBBF24',
  },
]

const governanceTool: ToolItem = {
  label: "GOVERN",
  title: "Governance Dashboard",
  subtitle:
    "Real-time audit trail, compliance reporting, and PDF export spanning all four DOME AI tools. Every governance event, confidence score, and human-in-loop decision in one place.",
  href: "https://governance.domelayer.com/",
  detailPath: "/tools/governance-dashboard",
  borderColor: "#6366F1",
  accentColor: "#6366F1",
  accentHover: "#818CF8",
};

function ToolCard({ tool, index }: { tool: ToolItem; index: number }) {
  const navigate = useNavigate()

  return (
    <motion.article
      variants={dramaticFadeUp}
      custom={index}
      className="group relative flex flex-col w-full md:w-[calc(50%-0.75rem)] rounded-xl overflow-hidden border border-[var(--color-border-default)] bg-[var(--color-bg-base)] transition-colors duration-300 hover:border-[var(--color-border-accent)]"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
        e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
      }}
      style={{ '--spotlight-color': 'rgba(0, 128, 255, 0.05)' } as React.CSSProperties}
    >
      {/* Spotlight overlay */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)',
        }}
      />

      <div className="relative z-10 p-6 sm:p-8 flex-1">
        <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] mb-4" style={{ color: tool.accentColor }}>
          {tool.label}
        </span>
        <h3 className="text-h3 font-display font-semibold text-[var(--color-text-primary)] mb-3">{tool.title}</h3>
        <p className="text-body-sm text-[var(--color-text-secondary)] leading-relaxed mb-8">{tool.subtitle}</p>

        <div className="flex items-center gap-4">
          <a
            href={tool.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-[13px] font-semibold text-white rounded-lg transition-colors duration-150"
            style={{ backgroundColor: tool.accentColor }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = tool.accentHover)}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = tool.accentColor)}
          >
            Open the tool
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <button
            onClick={() => navigate(tool.detailPath)}
            className="text-[13px] font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-150"
          >
            Details
          </button>
        </div>
      </div>

      <div className="h-[2px] w-full" style={{ background: tool.borderColor }} />
    </motion.article>
  )
}

export function Tools() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <Section id="tools" background="default">
      {/* it-eye glow — blooms in dark mode, fades out in light so there is never a black box */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <img
          src="/it-eye.jpg"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute top-1/2 right-0 -translate-y-1/2 w-[85%] max-w-[860px] select-none transition-opacity duration-700"
          style={{
            opacity: isDark ? 0.4 : 0,
            mixBlendMode: 'screen',
            maskImage:
              'radial-gradient(ellipse 62% 62% at 62% 50%, #000 28%, transparent 72%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 62% 62% at 62% 50%, #000 28%, transparent 72%)',
          }}
        />
      </div>
      <Container className="relative z-10">
        <motion.div variants={dramaticFadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="mb-12 lg:mb-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0080FF] mb-4">
            AI tools
          </p>
          <TextReveal
            as="h2"
            splitBy="word"
            stagger={0.06}
            className="text-h1 sm:text-display font-display font-semibold text-[var(--color-text-primary)]"
          >
            Built and deployed.
          </TextReveal>
          <TextReveal
            as="p"
            splitBy="word"
            stagger={0.03}
            className="mt-4 text-body text-[var(--color-text-secondary)] max-w-xl"
          >
            Four AI tools plus a governance layer, live in production. Each one demonstrates a phase of the DOME method.
          </TextReveal>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-wrap gap-6"
        >
          {tools.map((tool, i) => (
            <ToolCard key={tool.title} tool={tool} index={i} />
          ))}
        </motion.div>

        {/* Governance layer */}
        <div className="w-full mt-10 relative rounded-xl overflow-hidden">
          <img
            src="/network.jpg"
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
            style={{ opacity: isDark ? 0.07 : 0.04, mixBlendMode: "luminosity" }}
          />
          <div className="relative z-10 pt-8 pb-2 px-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1" style={{ background: "var(--color-border-default)" }} />
              <span
                className="text-[11px] font-semibold uppercase tracking-[0.18em]"
                style={{ color: "var(--color-text-tertiary)" }}
              >
                Governance &amp; compliance layer
              </span>
              <div className="h-px flex-1" style={{ background: "var(--color-border-default)" }} />
            </div>
            <motion.div
              variants={dramaticFadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="flex flex-wrap gap-6"
            >
              <ToolCard tool={governanceTool} index={0} />
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
