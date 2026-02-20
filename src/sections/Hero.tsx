import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { useRef, useEffect, useState, useMemo } from 'react'
import { Container } from '../components/Container'
import { MagneticButton } from '../components/MagneticButton'
import { GovernanceNetwork } from '../components/GovernanceNetwork'
import { LightPillar } from '../components/LightPillar'
import { gsap } from '../lib/gsap'
import { useReducedMotion } from '../lib/useReducedMotion'

function AnimatedGrid({ gridY }: { gridY: MotionValue<number> }) {
  const svgRef = useRef<SVGSVGElement>(null)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    if (prefersReduced || !svgRef.current) return
    const lines = svgRef.current.querySelectorAll('line')
    lines.forEach((line) => {
      const length = line.getTotalLength()
      line.style.strokeDasharray = `${length}`
      line.style.strokeDashoffset = `${length}`
    })

    const tl = gsap.timeline()
    tl.to(svgRef.current.querySelectorAll('.grid-h'), {
      strokeDashoffset: 0,
      duration: 1.2,
      stagger: 0.04,
      ease: 'power2.inOut',
    }, 0)
    tl.to(svgRef.current.querySelectorAll('.grid-v'), {
      strokeDashoffset: 0,
      duration: 1.0,
      stagger: 0.03,
      ease: 'power2.inOut',
    }, 0.2)

    return () => { tl.kill() }
  }, [prefersReduced])

  const horizontalLines = useMemo(() => {
    const lines = []
    for (let i = 0; i <= 15; i++) {
      lines.push(
        <line
          key={`h-${i}`}
          className="grid-h"
          x1="0"
          y1={i * 80}
          x2="2000"
          y2={i * 80}
          stroke="var(--color-dome-carbon-edge)"
          strokeWidth="1"
          opacity="0.5"
        />
      )
    }
    return lines
  }, [])

  const verticalLines = useMemo(() => {
    const lines = []
    for (let i = 0; i <= 25; i++) {
      lines.push(
        <line
          key={`v-${i}`}
          className="grid-v"
          x1={i * 80}
          y1="0"
          x2={i * 80}
          y2="1200"
          stroke="var(--color-dome-carbon-edge)"
          strokeWidth="1"
          opacity="0.5"
        />
      )
    }
    return lines
  }, [])

  return (
    <motion.div
      style={{ y: gridY }}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <svg
        ref={svgRef}
        className="w-full h-full"
        viewBox="0 0 2000 1200"
        preserveAspectRatio="xMidYMid slice"
      >
        {horizontalLines}
        {verticalLines}
      </svg>
    </motion.div>
  )
}

function SplitHeadline({ text, delay }: { text: string; delay: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    if (prefersReduced || !ref.current) return
    const chars = ref.current.querySelectorAll('.char')
    gsap.set(chars, { opacity: 0, y: 40, rotateX: -90 })
    gsap.to(chars, {
      opacity: 1,
      y: 0,
      rotateX: 0,
      duration: 0.6,
      stagger: 0.02,
      ease: 'power4.out',
      delay,
    })
  }, [prefersReduced, delay])

  // Split into words so the browser only breaks between words, not mid-word
  const words = text.split(' ')
  let charIndex = 0

  return (
    <span ref={ref} className="inline" style={{ perspective: '800px' }}>
      {words.map((word, wi) => {
        const chars = word.split('')
        const startIndex = charIndex
        charIndex += word.length + 1 // +1 for the space

        return (
          <span key={wi} className="inline-block whitespace-nowrap">
            {chars.map((char, ci) => (
              <span
                key={startIndex + ci}
                className="char inline-block"
                style={{
                  transformStyle: 'preserve-3d',
                  opacity: prefersReduced ? 1 : 0,
                }}
              >
                {char}
              </span>
            ))}
            {wi < words.length - 1 && (
              <span
                className="char inline-block"
                style={{
                  transformStyle: 'preserve-3d',
                  whiteSpace: 'pre',
                  opacity: prefersReduced ? 1 : 0,
                }}
              >
                {'\u00A0'}
              </span>
            )}
          </span>
        )
      })}
    </span>
  )
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const prefersReduced = useReducedMotion()
  const [showContent, setShowContent] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 639px)')
    setIsMobile(mql.matches)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const gridY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -150])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0])

  useEffect(() => {
    if (prefersReduced) {
      setShowContent(true)
      return
    }
    const timer = setTimeout(() => setShowContent(true), 800)
    return () => clearTimeout(timer)
  }, [prefersReduced])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-dome-void"
    >
      {/* Self-drawing SVG grid background */}
      <AnimatedGrid gridY={gridY} />

      {/* Light pillar atmospheric background */}
      {!prefersReduced && (
        <div className="absolute pointer-events-none inset-0" aria-hidden="true">
          <LightPillar
            topColor="#b44aff"
            bottomColor="#3388ef"
            intensity={0.85}
            rotationSpeed={0.45}
            glowAmount={isMobile ? 0.004 : 0.008}
            pillarWidth={isMobile ? 1 : 2.5}
            pillarHeight={0.35}
            noiseIntensity={0.15}
            pillarRotation={isMobile ? 0 : undefined}
            mixBlendMode="screen"
          />
        </div>
      )}

      {/* Scan-line texture overlay */}
      <div className="absolute inset-0 dome-scanlines pointer-events-none" aria-hidden="true" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 w-full"
      >
        <Container className="pt-28 pb-20 lg:pt-36 lg:pb-28">
          {/* Mobile: network as subtle background overlay above text */}
          <motion.div
            initial={prefersReduced ? undefined : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="flex justify-start mb-6 lg:hidden pointer-events-none"
            aria-hidden="true"
          >
            <GovernanceNetwork className="w-[280px] h-[280px]" />
          </motion.div>

          <div className="flex items-center gap-8 lg:gap-16">
            {/* Left column: text content */}
            <div className="max-w-3xl lg:max-w-xl flex-1">
              {/* Tagline — mono overline label */}
              {showContent && (
                <motion.p
                  initial={prefersReduced ? undefined : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="font-mono text-caption font-medium tracking-[0.12em] uppercase text-dome-signal-blue mb-6"
                >
                  {'Governance-Driven Operational AI'.split(' ').map((word, i) => (
                    <motion.span
                      key={i}
                      initial={prefersReduced ? undefined : { opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.05 * i,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                      className="inline-block mr-[0.35em]"
                    >
                      {word}
                    </motion.span>
                  ))}
                  <span className="dome-cursor">|</span>
                </motion.p>
              )}

              {/* Main headline */}
              {showContent && (
                <h1 className="text-h1 sm:text-display font-display font-bold text-dome-off-white leading-[1.05] tracking-[-0.03em] text-balance">
                  <SplitHeadline text="Architected for Production" delay={0.2} />
                  <br />
                  <span className="text-dome-nickel">
                    <SplitHeadline text="from Day One." delay={0.8} />
                  </span>
                </h1>
              )}

              {/* Subtitle */}
              {showContent && (
                <motion.p
                  initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
                  className="mt-8 text-body-lg text-dome-nickel max-w-xl leading-relaxed tracking-[0.01em]"
                >
                  We treat AI as operational infrastructure — engineered for governance before deployment.
                </motion.p>
              )}

              {/* CTA buttons */}
              {showContent && (
                <motion.div
                  initial={prefersReduced ? undefined : { opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                  className="mt-10 flex flex-wrap gap-4"
                >
                  <MagneticButton
                    href="#contact"
                    className="inline-flex items-center px-8 py-3.5 font-mono text-sm font-medium uppercase tracking-[0.1em] bg-dome-warm-white text-dome-void rounded-sm hover:bg-dome-off-white hover:shadow-[0_0_0_1px_rgba(91,156,181,0.3)] transition-all duration-200"
                  >
                    Discuss an Engagement
                  </MagneticButton>
                  <MagneticButton
                    href="#method"
                    className="inline-flex items-center px-8 py-3.5 font-mono text-sm font-medium uppercase tracking-[0.1em] border-[1.5px] border-dome-warm-white text-dome-warm-white rounded-sm hover:border-dome-signal-blue hover:text-dome-signal-blue transition-all duration-200"
                  >
                    Our Method
                  </MagneticButton>
                </motion.div>
              )}
            </div>

            {/* Right column: animated network visual (desktop only) */}
            <motion.div
              initial={prefersReduced ? undefined : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="hidden lg:flex flex-shrink-0 items-center justify-center"
            >
              <GovernanceNetwork className="w-[400px] h-[400px] xl:w-[460px] xl:h-[460px]" />
            </motion.div>
          </div>
        </Container>
      </motion.div>
    </section>
  )
}
