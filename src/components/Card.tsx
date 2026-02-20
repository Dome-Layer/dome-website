import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '../lib/motion'

interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <motion.div
      variants={fadeUp}
      className={`p-8 bg-dome-onyx border border-dome-carbon-edge rounded-sm ${className}`}
    >
      {children}
    </motion.div>
  )
}
