import { motion } from 'framer-motion'
import { Section } from '../components/Section'
import { Container } from '../components/Container'
import { TextReveal } from '../components/TextReveal'
import { dramaticFadeUp, viewportConfig } from '../lib/motion'

const deliverables = [
  {
    title: 'Architecture authority',
    description:
      'Structured AI architecture aligned with governance frameworks and operational workflows.',
    index: '01',
  },
  {
    title: 'Controlled deployment',
    description:
      'Integration of models, agents, and automation into production environments with embedded oversight.',
    index: '02',
  },
  {
    title: 'Operational stewardship',
    description:
      'Ongoing monitoring, evaluation, and governance alignment beyond go-live.',
    index: '03',
  },
]

export function Deliver() {
  return (
    <Section background="surface">
      <Container>
        <motion.div variants={dramaticFadeUp} className="mb-12 lg:mb-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0080FF] mb-4">
            What we deliver
          </p>
          <TextReveal
            as="h2"
            splitBy="word"
            stagger={0.06}
            className="text-h1 sm:text-display font-display font-semibold text-[var(--color-text-primary)]"
          >
            What we deliver
          </TextReveal>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="divide-y divide-[var(--color-border-default)]"
        >
          {deliverables.map((item, i) => (
            <motion.div
              key={item.index}
              variants={dramaticFadeUp}
              custom={i}
              className="flex items-start gap-8 py-8"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0080FF] pt-1 w-8 shrink-0">
                {item.index}
              </span>
              <div>
                <h3 className="text-h3 font-display font-semibold text-[var(--color-text-primary)] mb-2">{item.title}</h3>
                <p className="text-body-sm text-[var(--color-text-secondary)] leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
