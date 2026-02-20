import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Section } from '../components/Section'
import { Container } from '../components/Container'
import { AnimatedCard } from '../components/AnimatedCard'
import { TextReveal } from '../components/TextReveal'
import { GradientText } from '../components/GradientText'
import { dramaticFadeUp } from '../lib/motion'

const deliverables = [
  {
    title: 'Architecture Authority',
    description:
      'Structured AI architecture aligned with governance frameworks and operational workflows.',
    index: '01',
  },
  {
    title: 'Controlled Deployment',
    description:
      'Integration of models, agents, and automation into production environments with embedded oversight.',
    index: '02',
  },
  {
    title: 'Operational Stewardship',
    description:
      'Ongoing monitoring, evaluation, and governance alignment beyond go-live.',
    index: '03',
  },
]

function AnimatedCounter({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [display, setDisplay] = useState('00')

  useEffect(() => {
    if (!isInView) return
    const target = value
    let frame = 0
    const totalFrames = 20
    const interval = setInterval(() => {
      frame++
      if (frame >= totalFrames) {
        setDisplay(target)
        clearInterval(interval)
      } else {
        const d1 = frame > totalFrames * 0.6 ? target[0] : String(Math.floor(Math.random() * 10))
        const d2 = String(Math.floor(Math.random() * 10))
        setDisplay(d1 + d2)
      }
    }, 40)
    return () => clearInterval(interval)
  }, [isInView, value])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}

export function Deliver() {
  return (
    <Section background="surface">
      <Container>
        <motion.div variants={dramaticFadeUp} className="mb-12 lg:mb-16">
          <p className="font-mono text-caption font-medium tracking-[0.12em] uppercase text-dome-signal-blue mb-4">
            What We Deliver
          </p>
          <GradientText>
            <TextReveal
              as="h2"
              splitBy="word"
              stagger={0.06}
              className="text-h1 sm:text-display font-display font-semibold"
            >
              What We Deliver
            </TextReveal>
          </GradientText>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {deliverables.map((item) => (
            <AnimatedCard key={item.index}>
              <AnimatedCounter
                value={item.index}
                className="block font-mono text-caption text-dome-signal-blue mb-4 tracking-[0.12em]"
              />
              <h3 className="text-h3 font-display font-semibold text-dome-warm-white mb-3">{item.title}</h3>
              <p className="text-body-sm text-dome-nickel leading-relaxed">{item.description}</p>
            </AnimatedCard>
          ))}
        </div>
      </Container>
    </Section>
  )
}
