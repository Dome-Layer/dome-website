import { motion, useScroll } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-[var(--dome-banner-h,0px)] left-0 right-0 h-[2px] bg-dome-signal-blue origin-left z-50"
    />
  )
}
