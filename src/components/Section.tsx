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
  default: 'bg-[var(--color-bg-base)]',
  surface: 'bg-[var(--color-bg-subtle)]',
  elevated: 'bg-[var(--color-bg-muted)]',
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
