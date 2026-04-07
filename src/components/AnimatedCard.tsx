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
        borderColor: '#99CCFF',
        transition: { duration: 0.2 },
      }}
      className={`relative p-8 bg-white border border-[#E8E8E8] rounded-xl transition-colors duration-300 ${className}`}
    >
      {children}
    </motion.div>
  )
}
