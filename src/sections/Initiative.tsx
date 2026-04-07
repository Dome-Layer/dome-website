import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Section } from '../components/Section'
import { Container } from '../components/Container'
import { TextReveal } from '../components/TextReveal'
import { lineReveal, dramaticFadeUp } from '../lib/motion'

export function Initiative() {
  const emphasisRef = useRef<HTMLParagraphElement>(null)
  const emphasisInView = useInView(emphasisRef, { once: true, amount: 0.5 })

  return (
    <Section background="elevated">
      <Container narrow>
        <motion.div variants={dramaticFadeUp} className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0080FF] mb-6">
            The Problem
          </p>

          <TextReveal
            as="h2"
            splitBy="word"
            stagger={0.05}
            className="text-h1 sm:text-display font-display font-semibold text-[#0A0A0A] text-balance"
          >
            From AI initiative to operational system
          </TextReveal>

          <motion.div
            variants={lineReveal}
            className="mx-auto mt-8 mb-8 h-px w-16 bg-[#0080FF] origin-left"
          />

          <TextReveal
            as="p"
            splitBy="word"
            stagger={0.03}
            duration={0.4}
            className="text-body text-[#525252] leading-relaxed max-w-2xl mx-auto"
          >
            Enterprise AI initiatives often fail to reach production due to architectural gaps, governance risk, or operational misalignment.
          </TextReveal>

          <TextReveal
            as="p"
            splitBy="word"
            stagger={0.03}
            duration={0.4}
            className="mt-6 text-body text-[#525252] leading-relaxed max-w-2xl mx-auto"
          >
            AI must be designed within defined constraints before deployment.
          </TextReveal>

          {/* Emphasis sweep */}
          <p ref={emphasisRef} className="mt-6 text-body-lg font-semibold">
            {'Dome ensures it is.'.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ color: 'rgba(82, 82, 82, 0.3)' }}
                animate={emphasisInView ? { color: 'rgba(10, 10, 10, 1)' } : undefined}
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
