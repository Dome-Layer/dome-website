import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { Container } from '../components/Container'
import { TextReveal } from '../components/TextReveal'
import { gsap } from '../lib/gsap'
import { useReducedMotion } from '../lib/useReducedMotion'
import { dramaticFadeUp, viewportConfig } from '../lib/motion'

const phases = [
  {
    letter: 'D',
    name: 'Discover',
    description: 'Map workflows, regulatory exposure, and system dependencies.',
  },
  {
    letter: 'O',
    name: 'Orchestrate',
    description: 'Design AI architecture, data flows, agent coordination, and control mechanisms.',
  },
  {
    letter: 'M',
    name: 'Model',
    description: 'Configure AI components within defined governance and performance parameters.',
  },
  {
    letter: 'E',
    name: 'Execute',
    description: 'Deploy, integrate, monitor, and continuously align AI systems with operational standards.',
  },
]

function MethodDesktop() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<SVGLineElement>(null)
  const prefersReduced = useReducedMotion()
  const phaseRefs = useRef<(HTMLDivElement | null)[]>([])
  const dotRefs = useRef<(HTMLDivElement | null)[]>([])
  const ringRefs = useRef<(HTMLDivElement | null)[]>([])
  const govRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (prefersReduced || !sectionRef.current || !lineRef.current) return

    const mm = gsap.matchMedia()

    mm.add('(min-width: 768px)', () => {
      phaseRefs.current.forEach((el) => {
        if (el) gsap.set(el, { opacity: 0, y: 30 })
      })
      dotRefs.current.forEach((el) => {
        if (el) gsap.set(el, { scale: 0 })
      })
      ringRefs.current.forEach((el) => {
        if (el) gsap.set(el, { scale: 0, opacity: 1 })
      })
      if (govRef.current) {
        gsap.set(govRef.current, { scaleX: 0, opacity: 0 })
      }

      const lineLength = lineRef.current!.getTotalLength()
      lineRef.current!.style.strokeDasharray = `${lineLength}`
      lineRef.current!.style.strokeDashoffset = `${lineLength}`

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 64px',
          end: '+=300%',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      })

      phases.forEach((_, i) => {
        const progress = i / phases.length
        const phaseProgress = (i + 1) / phases.length

        tl.to(
          lineRef.current,
          { strokeDashoffset: lineLength * (1 - phaseProgress), duration: 0.2, ease: 'none' },
          progress
        )

        if (dotRefs.current[i]) {
          tl.to(dotRefs.current[i], { scale: 1.4, duration: 0.05, ease: 'back.out(1.7)' }, progress + 0.02)
            .to(dotRefs.current[i], { scale: 1, duration: 0.05, ease: 'power2.out' }, progress + 0.07)
        }

        if (ringRefs.current[i]) {
          tl.to(ringRefs.current[i], { scale: 2.5, opacity: 0, duration: 0.1, ease: 'power2.out' }, progress + 0.02)
        }

        if (phaseRefs.current[i]) {
          tl.to(phaseRefs.current[i], { opacity: 1, y: 0, duration: 0.1, ease: 'power3.out' }, progress + 0.05)
        }
      })

      if (govRef.current) {
        tl.to(govRef.current, { scaleX: 1, opacity: 1, duration: 0.15, ease: 'power3.out' }, 0.9)
      }

      return () => { tl.kill() }
    })

    return () => mm.revert()
  }, [prefersReduced])

  return (
    <div ref={sectionRef} className="hidden md:block">
      <div className="min-h-screen flex flex-col justify-center py-section-sm lg:py-section bg-white">
        <Container>
          <div className="mb-12 lg:mb-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0080FF] mb-4">
              The Method
            </p>
            <h2 className="text-h1 sm:text-display font-display font-semibold text-[#0A0A0A]">The DOME Method</h2>
            <p className="mt-4 text-body text-[#525252] max-w-xl">
              A structured lifecycle for engineering governed AI systems.
            </p>
          </div>

          {/* Horizontal pipeline diagram */}
          <div className="relative mt-12 lg:mt-16">
            <svg
              className="absolute top-0 left-8 right-8 h-[2px] w-[calc(100%-4rem)]"
              preserveAspectRatio="none"
            >
              <line
                ref={lineRef}
                x1="0" y1="1" x2="100%" y2="1"
                stroke="#0080FF"
                strokeWidth="2"
                strokeOpacity="0.3"
              />
            </svg>

            <div className="grid grid-cols-4 gap-0">
              {phases.map((phase, i) => (
                <div key={phase.letter} className="relative border-t border-[#E8E8E8] p-6 sm:p-8">
                  {/* Node dot */}
                  <div
                    ref={(el) => { dotRefs.current[i] = el }}
                    className="absolute -top-[5px] left-8 w-[9px] h-[9px] rounded-full bg-[#0080FF]"
                  />
                  {/* Ring burst */}
                  <div
                    ref={(el) => { ringRefs.current[i] = el }}
                    className="absolute -top-[9px] left-[28px] w-[17px] h-[17px] rounded-full border-2 border-[#0080FF]/30 pointer-events-none"
                  />

                  <div ref={(el) => { phaseRefs.current[i] = el }}>
                    <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0080FF] mb-2">
                      Phase {String(i + 1).padStart(2, '0')} — {phase.name}
                    </span>
                    <span className="block text-h2 font-bold text-[#E8E8E8] mb-2 tracking-tight">
                      {phase.letter}
                    </span>
                    <h3 className="text-h3 font-display font-semibold text-[#0A0A0A] mb-3">{phase.name}</h3>
                    <p className="text-body-sm text-[#525252] leading-relaxed">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Governance strip */}
          <div
            ref={govRef}
            className="mt-10 lg:mt-12 origin-left bg-[#E8F3FF] border border-[#99CCFF] px-6 py-4 flex items-center gap-3 rounded-lg"
          >
            <div className="w-2 h-2 rounded-full bg-[#0080FF] flex-shrink-0" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0080FF]">
              Governance embedded across all phases
            </p>
          </div>
        </Container>
      </div>
    </div>
  )
}

function MethodMobile() {
  return (
    <motion.section
      id="method"
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="md:hidden relative py-section-sm bg-white"
    >
      <Container>
        <motion.div variants={dramaticFadeUp} className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0080FF] mb-4">
            The Method
          </p>
          <TextReveal as="h2" splitBy="word" stagger={0.05} className="text-h1 font-display font-semibold text-[#0A0A0A]">
            The DOME Method
          </TextReveal>
          <p className="mt-4 text-body text-[#525252] max-w-xl">
            A structured lifecycle for engineering governed AI systems.
          </p>
        </motion.div>

        <div className="mt-12 relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-[#0080FF]/20" />

          <div className="space-y-0">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.letter}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative border-l border-[#E8E8E8] p-6 pl-8"
              >
                <div className="absolute -left-[5px] top-8 w-[9px] h-[9px] rounded-full bg-[#0080FF]" />
                <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0080FF] mb-2">
                  Phase {String(i + 1).padStart(2, '0')} — {phase.name}
                </span>
                <span className="block text-h2 font-bold text-[#E8E8E8] mb-2 tracking-tight">
                  {phase.letter}
                </span>
                <h3 className="text-h3 font-display font-semibold text-[#0A0A0A] mb-3">{phase.name}</h3>
                <p className="text-body-sm text-[#525252] leading-relaxed">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={viewportConfig}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
          className="mt-10 origin-left bg-[#E8F3FF] border border-[#99CCFF] px-6 py-4 flex items-center gap-3 rounded-lg"
        >
          <div className="w-2 h-2 rounded-full bg-[#0080FF] flex-shrink-0" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0080FF]">
            Governance embedded across all phases
          </p>
        </motion.div>
      </Container>
    </motion.section>
  )
}

export function Method() {
  return (
    <div id="method">
      <MethodDesktop />
      <MethodMobile />
    </div>
  )
}
