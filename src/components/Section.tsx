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
  default: 'bg-white',
  surface: 'bg-[#FAFAFA]',
  elevated: 'bg-[#F5F5F5]',
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
