import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Container } from '../components/Container'
import { MagneticButton } from '../components/MagneticButton'
import { Particles } from '../components/Particles'
import { gsap } from '../lib/gsap'
import { useReducedMotion } from '../lib/useReducedMotion'

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

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

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
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
    >
      {/* Particles background — settings from reactbits.dev demo */}
      {!prefersReduced && (
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <Particles
            particleCount={200}
            particleColors={['#0080FF']}
            speed={0.2}
            alphaParticles={true}
            particleBaseSize={400}
            particleSpread={10}
            sizeRandomness={1}
            cameraDistance={20}
            moveParticlesOnHover={true}
            particleHoverFactor={1}
          />
        </div>
      )}

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 w-full"
      >
        <Container className="pt-28 pb-20 lg:pt-36 lg:pb-28">
          <div className="flex items-center">
            {/* Left column: text content */}
            <div className="max-w-3xl lg:max-w-xl flex-1">
              {/* Tagline — mono overline label */}
              {showContent && (
                <motion.p
                  initial={prefersReduced ? undefined : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-[11px] font-semibold tracking-[0.18em] uppercase text-dome-signal-blue mb-6"
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
                <h1 className="text-[2.25rem] sm:text-h1 md:text-display font-display font-bold text-[#0A0A0A] leading-[1.05] tracking-[-0.03em] text-balance">
                  <SplitHeadline text="Architected for Production" delay={0.2} />
                  <br />
                  <span className="text-[#525252]">
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
                  className="mt-6 text-body sm:text-body-lg text-[#525252] max-w-xl leading-relaxed tracking-[0.01em]"
                >
                  We treat AI as operational infrastructure, engineered for governance before deployment.
                </motion.p>
              )}

              {/* CTA buttons */}
              {showContent && (
                <motion.div
                  initial={prefersReduced ? undefined : { opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                  className="mt-8 sm:mt-10 flex flex-wrap gap-4"
                >
                  <MagneticButton
                    href="#contact"
                    className="inline-flex items-center px-7 py-3.5 text-[13px] font-semibold bg-[#0080FF] text-white rounded-lg hover:bg-[#40A8FF] active:bg-[#0066CC] transition-colors duration-150"
                  >
                    Discuss an engagement
                  </MagneticButton>
                  <MagneticButton
                    href="#method"
                    className="inline-flex items-center px-7 py-3.5 text-[13px] font-semibold border border-[#E8E8E8] text-[#525252] rounded-lg hover:border-[#0080FF] hover:text-[#0080FF] transition-all duration-150"
                  >
                    Our method
                  </MagneticButton>
                </motion.div>
              )}
            </div>

            {/* Right column: hero image — tablet/desktop only */}
            {showContent && (
              <motion.div
                initial={prefersReduced ? undefined : { opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="hidden md:flex flex-1 justify-center items-center pl-12"
              >
                <img
                  src="/DOME iPad Mockup.png"
                  alt="DOME platform on iPad"
                  className="w-full max-w-[520px] h-auto object-contain"
                  draggable={false}
                />
              </motion.div>
            )}

          </div>
        </Container>
      </motion.div>
    </section>
  )
}
