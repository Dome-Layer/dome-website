import { useMemo, useRef, type ElementType } from 'react'
import { motion, useInView } from 'framer-motion'

interface TextRevealProps {
  children: string
  as?: ElementType
  splitBy?: 'word' | 'char'
  stagger?: number
  duration?: number
  y?: number
  className?: string
}

export function TextReveal({
  children,
  as: Tag = 'p',
  splitBy = 'word',
  stagger = 0.04,
  duration = 0.5,
  y = 14,
  className = '',
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })
  // Split during render, not in an effect: the words must be in the prerendered HTML, or crawlers,
  // AI assistants and anyone without JavaScript get an empty element (the Agent Flow page had no
  // heading at all, found in the 2026-10-12 SEO audit).
  const units = useMemo(
    () => (splitBy === 'char' ? children.split('') : children.split(/(\s+)/)),
    [children, splitBy],
  )

  return (
    <Tag ref={containerRef} className={className}>
      {units.map((unit, i) => {
        if (unit.match(/^\s+$/)) {
          return <span key={i}>{unit}</span>
        }
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0, y, filter: 'blur(2px)' }}
            animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : undefined}
            transition={{
              duration,
              delay: i * stagger,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="inline-block"
          >
            {unit}
          </motion.span>
        )
      })}
    </Tag>
  )
}
