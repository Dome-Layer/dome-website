import { useRef, useEffect, useState, type ElementType } from 'react'
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
  const [units, setUnits] = useState<string[]>([])

  useEffect(() => {
    if (splitBy === 'char') {
      setUnits(children.split(''))
    } else {
      setUnits(children.split(/(\s+)/))
    }
  }, [children, splitBy])

  return (
    <Tag ref={containerRef} className={className} aria-label={children}>
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
            aria-hidden="true"
          >
            {unit}
          </motion.span>
        )
      })}
    </Tag>
  )
}
