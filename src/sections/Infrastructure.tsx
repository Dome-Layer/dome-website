import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Section } from '../components/Section'
import { Container } from '../components/Container'
import { TextReveal } from '../components/TextReveal'
import { gsap } from '../lib/gsap'
import { useReducedMotion } from '../lib/useReducedMotion'
import { dramaticFadeUp, viewportConfig } from '../lib/motion'

const capabilities = [
  'Model-agnostic system design',
  'Retrieval and orchestration patterns',
  'Embedded guardrails and evaluation',
  'Monitoring and performance alignment',
  'Vendor-neutral integration',
]

function AnimatedDiagram() {
  const diagramRef = useRef<HTMLDivElement>(null)
  const prefersReduced = useReducedMotion()
  const [built, setBuilt] = useState(false)

  useEffect(() => {
    if (prefersReduced || !diagramRef.current) {
      setBuilt(true)
      return
    }

    const enterprise = diagramRef.current.querySelector('.layer-enterprise')
    const middleBlocks = diagramRef.current.querySelectorAll('.layer-middle')
    const governance = diagramRef.current.querySelector('.layer-governance')
    const bottomBlocks = diagramRef.current.querySelectorAll('.layer-bottom')
    const workflows = diagramRef.current.querySelector('.layer-workflows')

    if (enterprise) gsap.set(enterprise, { x: -60, opacity: 0 })
    middleBlocks.forEach((el) => gsap.set(el, { scale: 0.8, opacity: 0 }))
    if (governance) gsap.set(governance, { x: 60, opacity: 0 })
    bottomBlocks.forEach((el) => gsap.set(el, { scale: 0.8, opacity: 0 }))
    if (workflows) gsap.set(workflows, { y: 20, opacity: 0 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: diagramRef.current,
        start: 'top 70%',
        end: 'bottom 30%',
        scrub: 0.5,
      },
    })

    if (enterprise) tl.to(enterprise, { x: 0, opacity: 1, duration: 0.2, ease: 'power3.out' }, 0)
    middleBlocks.forEach((el, i) => {
      tl.to(el, { scale: 1, opacity: 1, duration: 0.15, ease: 'power3.out' }, 0.15 + i * 0.08)
    })
    if (governance) tl.to(governance, { x: 0, opacity: 1, duration: 0.2, ease: 'power3.out' }, 0.45)
    bottomBlocks.forEach((el, i) => {
      tl.to(el, { scale: 1, opacity: 1, duration: 0.15, ease: 'power3.out' }, 0.6 + i * 0.08)
    })
    if (workflows) tl.to(workflows, { y: 0, opacity: 1, duration: 0.2, ease: 'power3.out' }, 0.8)

    tl.call(() => setBuilt(true))

    return () => { tl.kill() }
  }, [prefersReduced])

  return (
    <motion.div variants={dramaticFadeUp} className="relative" aria-hidden="true">
      <div ref={diagramRef} className="relative border border-[#E8E8E8] p-8 bg-white rounded-xl">
        <div className="space-y-3">
          <div className="layer-enterprise h-10 border border-[#E8E8E8] bg-[#E8F3FF] flex items-center px-4 rounded-lg hover:border-[#99CCFF] transition-all duration-200">
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#525252]">Enterprise Systems</span>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {['Data', 'Orchestration', 'Models'].map((label) => (
              <div
                key={label}
                className="layer-middle h-16 border border-[#E8E8E8] bg-[#FAFAFA] flex items-center justify-center rounded-lg hover:border-[#99CCFF] transition-all duration-200"
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#A3A3A3] hover:text-[#525252] transition-colors duration-200">{label}</span>
              </div>
            ))}
          </div>

          <div className="layer-governance h-10 border border-[#99CCFF] bg-[#E8F3FF] flex items-center px-4 rounded-lg">
            <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#0080FF]">Governance &amp; Monitoring Layer</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {['Guardrails', 'Evaluation'].map((label) => (
              <div
                key={label}
                className="layer-bottom h-12 border border-[#E8E8E8] bg-[#FAFAFA] flex items-center justify-center rounded-lg hover:border-[#99CCFF] transition-all duration-200"
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#A3A3A3] hover:text-[#525252] transition-colors duration-200">{label}</span>
              </div>
            ))}
          </div>

          <div className="layer-workflows h-10 border border-[#E8E8E8] bg-[#E8F3FF] flex items-center px-4 rounded-lg hover:border-[#99CCFF] transition-all duration-200">
            <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#525252]">Operational Workflows</span>
          </div>
        </div>

        {/* Data flow dots */}
        {built && (
          <div className="absolute inset-8 pointer-events-none overflow-hidden">
            {[0, 1, 2].map((i) => (
              <div
                key={`flow-top-${i}`}
                className="absolute w-[3px] h-[3px] rounded-full bg-[#0080FF]/40 animate-flow-down"
                style={{
                  left: `${20 + i * 30}%`,
                  top: '12%',
                  animationDuration: `${1.2 + i * 0.2}s`,
                  animationDelay: `${i * 0.3}s`,
                }}
              />
            ))}
            {[0, 1].map((i) => (
              <div
                key={`flow-bottom-${i}`}
                className="absolute w-[3px] h-[3px] rounded-full bg-[#0080FF]/40 animate-flow-down"
                style={{
                  left: `${30 + i * 40}%`,
                  top: '58%',
                  animationDuration: `${1.4 + i * 0.3}s`,
                  animationDelay: `${0.5 + i * 0.4}s`,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export function Infrastructure() {
  return (
    <Section id="architecture" background="elevated">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0080FF] mb-4">
              Architecture
            </p>
            <TextReveal
              as="h2"
              splitBy="word"
              stagger={0.06}
              className="text-h1 sm:text-display font-display font-semibold text-[#0A0A0A]"
            >
              AI as operational infrastructure
            </TextReveal>

            <TextReveal
              as="p"
              splitBy="word"
              stagger={0.03}
              className="mt-6 text-body text-[#525252] leading-relaxed"
            >
              Dome designs AI systems as part of enterprise architecture — not as isolated tools.
            </TextReveal>

            <motion.p variants={dramaticFadeUp} className="mt-4 text-body text-[#525252] leading-relaxed">
              Our approach includes:
            </motion.p>

            <motion.ul variants={dramaticFadeUp} className="mt-5 space-y-3">
              {capabilities.map((cap, i) => (
                <motion.li
                  key={cap}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportConfig}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                  className="flex items-start gap-3 text-body text-[#0A0A0A]"
                >
                  <span className="mt-2 block w-2 h-2 rounded-full bg-[#0080FF] flex-shrink-0" />
                  {cap}
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <AnimatedDiagram />
        </div>

        <motion.div variants={dramaticFadeUp} className="mt-12 lg:mt-16 border-t border-[#E8E8E8] pt-8">
          <TextReveal
            as="p"
            splitBy="word"
            stagger={0.05}
            className="text-body-lg font-display font-semibold text-[#0A0A0A]"
          >
            AI is treated as infrastructure.
          </TextReveal>
          <TextReveal
            as="p"
            splitBy="word"
            stagger={0.05}
            duration={0.4}
            className="text-body text-[#525252] mt-1"
          >
            Infrastructure demands discipline.
          </TextReveal>
        </motion.div>
      </Container>
    </Section>
  )
}
