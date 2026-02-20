import { motion } from 'framer-motion'
import { Section } from '../components/Section'
import { Container } from '../components/Container'
import { ChromaGrid, type ChromaItem } from '../components/ChromaGrid'
import { TextReveal } from '../components/TextReveal'
import { GradientText } from '../components/GradientText'
import { dramaticFadeUp } from '../lib/motion'

const programmes: ChromaItem[] = [
  {
    title: 'Dome Architecture Programme',
    subtitle: 'AI architecture blueprint and governance design.',
    label: 'ARCHITECTURE',
    borderColor: '#5B9CB5',
    gradient: 'linear-gradient(145deg, #1a2a35, #0C0C0E)',
  },
  {
    title: 'Dome Deployment Programme',
    subtitle: 'Governed integration into enterprise workflows.',
    label: 'DEPLOYMENT',
    borderColor: '#7BB8CF',
    gradient: 'linear-gradient(210deg, #1a2535, #0C0C0E)',
  },
  {
    title: 'Dome Operational Stewardship',
    subtitle: 'Continuous oversight, optimisation, and alignment.',
    label: 'OPERATIONS',
    borderColor: '#9a00ff',
    gradient: 'linear-gradient(165deg, #1a1a2e, #0C0C0E)',
  },
]

export function Engagement() {
  return (
    <Section id="engagement" background="surface">
      <Container>
        <motion.div variants={dramaticFadeUp} className="mb-12 lg:mb-16">
          <p className="font-mono text-caption font-medium tracking-[0.12em] uppercase text-dome-signal-blue mb-4">
            Engagement Model
          </p>
          <GradientText colors={['#9a00ff', '#006bdf', '#7BB8CF', '#E8E6E1']}>
            <TextReveal
              as="h2"
              splitBy="word"
              stagger={0.06}
              className="text-h1 sm:text-display font-display font-semibold"
            >
              Structured Engagement
            </TextReveal>
          </GradientText>
          <TextReveal
            as="p"
            splitBy="word"
            stagger={0.03}
            className="mt-4 text-body text-dome-nickel max-w-xl"
          >
            Dome operates through defined programmes.
          </TextReveal>
        </motion.div>

        <ChromaGrid items={programmes} radius={250} />

        <TextReveal
          as="p"
          splitBy="word"
          stagger={0.03}
          className="mt-10 text-body text-dome-nickel max-w-xl"
        >
          Engagements begin with architecture and extend through operational maturity.
        </TextReveal>
      </Container>
    </Section>
  )
}
