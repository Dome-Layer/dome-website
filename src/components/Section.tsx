import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, viewportConfig } from '../lib/motion'

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
  background?: 'default' | 'surface' | 'elevated'
}

const bgMap = {
  default: 'bg-dome-void',
  surface: 'bg-dome-onyx',
  elevated: 'bg-dome-graphite',
}

export function Section({ id, children, className = '', background = 'default' }: SectionProps) {
  return (
    <motion.section
      id={id}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className={`relative py-section-sm lg:py-section ${bgMap[background]} ${className}`}
    >
      {children}
    </motion.section>
  )
}
