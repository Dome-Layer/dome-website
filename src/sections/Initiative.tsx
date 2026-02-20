import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Section } from '../components/Section'
import { Container } from '../components/Container'
import { TextReveal } from '../components/TextReveal'
import { GradientText } from '../components/GradientText'
import { lineReveal, dramaticFadeUp } from '../lib/motion'

export function Initiative() {
  const emphasisRef = useRef<HTMLParagraphElement>(null)
  const emphasisInView = useInView(emphasisRef, { once: true, amount: 0.5 })

  return (
    <Section background="elevated">
      <Container narrow>
        <motion.div variants={dramaticFadeUp} className="text-center">
          <p className="font-mono text-caption font-medium tracking-[0.12em] uppercase text-dome-signal-blue mb-6">
            The Problem
          </p>

          <GradientText colors={['#9a00ff', '#006bdf', '#7BB8CF', '#E8E6E1']}>
            <TextReveal
              as="h2"
              splitBy="word"
              stagger={0.05}
              className="text-h1 sm:text-display font-display font-semibold text-balance"
            >
              From AI Initiative to Operational System
            </TextReveal>
          </GradientText>

          <motion.div
            variants={lineReveal}
            className="mx-auto mt-8 mb-8 h-px w-16 bg-dome-signal-blue origin-left"
          />

          <TextReveal
            as="p"
            splitBy="word"
            stagger={0.03}
            duration={0.4}
            className="text-body text-dome-nickel leading-relaxed max-w-2xl mx-auto"
          >
            Enterprise AI initiatives often fail to reach production due to architectural gaps, governance risk, or operational misalignment.
          </TextReveal>

          <TextReveal
            as="p"
            splitBy="word"
            stagger={0.03}
            duration={0.4}
            className="mt-6 text-body text-dome-nickel leading-relaxed max-w-2xl mx-auto"
          >
            AI must be designed within defined constraints before deployment.
          </TextReveal>

          {/* Emphasis line with color sweep effect */}
          <p ref={emphasisRef} className="mt-6 text-body-lg font-medium">
            {'Dome ensures it is.'.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ color: 'rgba(138, 138, 143, 0.35)' }}
                animate={emphasisInView ? { color: 'rgba(240, 237, 232, 1)' } : undefined}
                transition={{
                  duration: 0.3,
                  delay: i * 0.03,
                  ease: 'easeOut',
                }}
                className="inline-block"
                style={{ whiteSpace: char === ' ' ? 'pre' : undefined }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </p>
        </motion.div>
      </Container>
    </Section>
  )
}
