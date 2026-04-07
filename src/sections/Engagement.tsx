import { motion } from 'framer-motion'
import { Section } from '../components/Section'
import { Container } from '../components/Container'
import { ChromaGrid, type ChromaItem } from '../components/ChromaGrid'
import { TextReveal } from '../components/TextReveal'
import { dramaticFadeUp } from '../lib/motion'

const programmes: ChromaItem[] = [
  {
    title: 'Dome Architecture Programme',
    subtitle: 'AI architecture blueprint and governance design.',
    label: 'ARCHITECTURE',
    borderColor: '#0080FF',
  },
  {
    title: 'Dome Deployment Programme',
    subtitle: 'Governed integration into enterprise workflows.',
    label: 'DEPLOYMENT',
    borderColor: '#40A8FF',
  },
  {
    title: 'Dome Operational Stewardship',
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
            Dome operates through defined programmes.
          </TextReveal>
        </motion.div>

        <ChromaGrid items={programmes} />

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
