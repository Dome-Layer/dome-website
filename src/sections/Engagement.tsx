import { motion } from 'framer-motion'
import { Section } from '../components/Section'
import { Container } from '../components/Container'
import { TextReveal } from '../components/TextReveal'
import { dramaticFadeUp, viewportConfig } from '../lib/motion'

const programmes = [
  {
    title: 'DOME Architecture Programme',
    subtitle: 'AI architecture blueprint and governance design.',
    label: 'ARCHITECTURE',
    borderColor: '#0080FF',
  },
  {
    title: 'DOME Deployment Programme',
    subtitle: 'Governed integration into enterprise workflows.',
    label: 'DEPLOYMENT',
    borderColor: '#40A8FF',
  },
  {
    title: 'DOME Operational Stewardship',
    subtitle: 'Continuous oversight, optimisation, and alignment.',
    label: 'OPERATIONS',
    borderColor: '#99CCFF',
  },
]

export function Engagement() {
  return (
    <Section id="engagement" background="surface">
      <Container>
        <motion.div variants={dramaticFadeUp} className="mb-12 lg:mb-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0080FF] mb-4">
            Engagement model
          </p>
          <TextReveal
            as="h2"
            splitBy="word"
            stagger={0.06}
            className="text-h1 sm:text-display font-display font-semibold text-[#0A0A0A]"
          >
            Structured engagement
          </TextReveal>
          <TextReveal
            as="p"
            splitBy="word"
            stagger={0.03}
            className="mt-4 text-body text-[#525252] max-w-xl"
          >
            DOME operates through defined programmes.
          </TextReveal>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="divide-y divide-[#E8E8E8]"
        >
          {programmes.map((prog, i) => (
            <motion.div
              key={prog.title}
              variants={dramaticFadeUp}
              custom={i}
              className="flex items-start gap-8 py-8"
            >
              <span
                className="text-[11px] font-semibold uppercase tracking-[0.18em] pt-1 w-36 shrink-0"
                style={{ color: prog.borderColor }}
              >
                {prog.label}
              </span>
              <div>
                <h3 className="text-h3 font-display font-semibold text-[#0A0A0A] mb-2">{prog.title}</h3>
                <p className="text-body-sm text-[#525252] leading-relaxed">{prog.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <TextReveal
          as="p"
          splitBy="word"
          stagger={0.03}
          className="mt-10 text-body text-[#525252] max-w-xl"
        >
          Engagements begin with architecture and extend through operational maturity.
        </TextReveal>
      </Container>
    </Section>
  )
}
