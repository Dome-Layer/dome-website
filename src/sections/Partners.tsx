import { motion } from 'framer-motion'
import { Section } from '../components/Section'
import { Container } from '../components/Container'
import { TextReveal } from '../components/TextReveal'
import { GradientText } from '../components/GradientText'
import { dramaticFadeUp, viewportConfig } from '../lib/motion'

const partners = [
  'Regulated enterprises',
  'Procurement-driven organisations',
  'Finance and operations teams',
  'Internal AI and automation initiatives',
]

export function Partners() {
  return (
    <Section id="about" background="surface">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="font-mono text-caption font-medium tracking-[0.12em] uppercase text-dome-signal-blue mb-4">
              Our Partners
            </p>
            <GradientText colors={['#7BB8CF', '#006bdf', '#9a00ff', '#E8E6E1']}>
              <TextReveal
                as="h2"
                splitBy="word"
                stagger={0.06}
                className="text-h1 sm:text-display font-display font-semibold"
              >
                Who We Work With
              </TextReveal>
            </GradientText>

            <motion.p variants={dramaticFadeUp} className="mt-6 text-body text-dome-nickel">
              Dome partners with:
            </motion.p>

            <motion.ul variants={dramaticFadeUp} className="mt-5 space-y-3">
              {partners.map((p, i) => (
                <motion.li
                  key={p}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportConfig}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="flex items-start gap-3 text-body text-dome-warm-white"
                >
                  <span className="mt-2 block w-2 h-2 rounded-full bg-dome-signal-blue flex-shrink-0" />
                  <span className="font-mono text-body-sm tracking-wide">{p}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <motion.div variants={dramaticFadeUp} className="flex items-end">
            <TextReveal
              as="p"
              splitBy="word"
              stagger={0.08}
              duration={0.6}
              y={10}
              className="text-h3 font-display font-semibold text-dome-off-white leading-snug text-balance"
            >
              Where governance and production reliability are non-negotiable.
            </TextReveal>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
