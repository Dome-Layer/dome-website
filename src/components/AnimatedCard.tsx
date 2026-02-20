import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { dramaticFadeUp } from '../lib/motion'

interface AnimatedCardProps {
  children: ReactNode
  className?: string
}

export function AnimatedCard({ children, className = '' }: AnimatedCardProps) {
  return (
    <motion.div
      variants={dramaticFadeUp}
      whileHover={{
        scale: 1.01,
        borderColor: 'rgba(91, 156, 181, 0.4)',
        transition: { duration: 0.2 },
      }}
      className={`relative p-8 bg-dome-onyx border border-dome-carbon-edge rounded-sm transition-colors duration-300 ${className}`}
    >
      {children}
    </motion.div>
  )
}
