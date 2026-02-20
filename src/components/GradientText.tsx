/**
 * GradientText — animated gradient sweep across text.
 * Adapted from React Bits (MIT license).
 * https://www.reactbits.dev/text-animations/gradient-text
 */

import { useState, useCallback, useEffect, useRef, type ReactNode } from 'react'
import { motion, useMotionValue, useAnimationFrame, useMotionValueEvent } from 'framer-motion'

interface GradientTextProps {
  children: ReactNode
  className?: string
  colors?: string[]
  animationSpeed?: number
  showBorder?: boolean
  direction?: 'horizontal' | 'vertical' | 'diagonal'
  pauseOnHover?: boolean
  yoyo?: boolean
}

export function GradientText({
  children,
  className = '',
  colors = ['#006bdf', '#9a00ff', '#7BB8CF', '#E8E6E1'],
  animationSpeed = 3,
  showBorder = false,
  direction = 'diagonal',
  pauseOnHover = false,
  yoyo = true,
}: GradientTextProps) {
  const [isPaused, setIsPaused] = useState(false)
  const progress = useMotionValue(0)
  const elapsedRef = useRef(0)
  const lastTimeRef = useRef<number | null>(null)
  const textRef = useRef<HTMLDivElement>(null)

  const animationDuration = animationSpeed * 1000

  const gradientAngle =
    direction === 'horizontal' ? 'to right' : direction === 'vertical' ? 'to bottom' : 'to bottom right'
  const gradientColors = [...colors, colors[0]].join(', ')
  const bgSize = direction === 'horizontal' ? '300% 100%' : direction === 'vertical' ? '100% 300%' : '300% 300%'

  useAnimationFrame((time) => {
    if (isPaused) {
      lastTimeRef.current = null
      return
    }

    if (lastTimeRef.current === null) {
      lastTimeRef.current = time
      return
    }

    const deltaTime = time - lastTimeRef.current
    lastTimeRef.current = time
    elapsedRef.current += deltaTime

    if (yoyo) {
      const fullCycle = animationDuration * 2
      const cycleTime = elapsedRef.current % fullCycle

      if (cycleTime < animationDuration) {
        progress.set((cycleTime / animationDuration) * 100)
      } else {
        progress.set(100 - ((cycleTime - animationDuration) / animationDuration) * 100)
      }
    } else {
      progress.set((elapsedRef.current / animationDuration) * 100)
    }
  })

  useEffect(() => {
    elapsedRef.current = 0
    progress.set(0)
  }, [animationSpeed, yoyo, progress])

  /** Collect leaf elements that directly hold text nodes. */
  const getTextLeaves = useCallback((): HTMLElement[] => {
    if (!textRef.current) return []
    const all = textRef.current.querySelectorAll<HTMLElement>('*')
    const leaves: HTMLElement[] = []
    all.forEach((el) => {
      // A leaf is an element that has text content but no child *elements*
      if (el.children.length === 0 && el.textContent && el.textContent.trim().length > 0) {
        leaves.push(el)
      }
    })
    // Fallback: if no leaf children, use the container itself
    return leaves.length > 0 ? leaves : [textRef.current]
  }, [])

  // Apply gradient styles to leaf text elements
  useEffect(() => {
    if (!textRef.current) return

    // Use a MutationObserver to re-apply when children change (e.g. TextReveal animating in)
    const apply = () => {
      const leaves = getTextLeaves()
      leaves.forEach((el) => {
        el.style.backgroundImage = `linear-gradient(${gradientAngle}, ${gradientColors})`
        el.style.backgroundSize = bgSize
        el.style.backgroundRepeat = 'repeat'
        el.style.backgroundClip = 'text'
        el.style.webkitBackgroundClip = 'text'
        el.style.webkitTextFillColor = 'transparent'
        el.style.color = 'transparent'
      })
    }

    apply()

    const observer = new MutationObserver(apply)
    observer.observe(textRef.current, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [gradientAngle, gradientColors, bgSize, getTextLeaves])

  // Animate background-position on leaf text elements
  useMotionValueEvent(progress, 'change', (p) => {
    const pos = direction === 'vertical' ? `50% ${p}%` : `${p}% 50%`
    const leaves = getTextLeaves()
    leaves.forEach((el) => {
      el.style.backgroundPosition = pos
    })
  })

  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) setIsPaused(true)
  }, [pauseOnHover])

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) setIsPaused(false)
  }, [pauseOnHover])

  const gradientStyle = {
    backgroundImage: `linear-gradient(${gradientAngle}, ${gradientColors})`,
    backgroundSize: bgSize,
    backgroundRepeat: 'repeat' as const,
  }

  return (
    <div
      ref={textRef}
      className={`relative inline-flex flex-row items-center overflow-hidden ${showBorder ? 'py-1 px-2 rounded-[1.25rem]' : ''} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showBorder && (
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none rounded-[1.25rem]"
          style={{ ...gradientStyle, backgroundPosition: progress }}
        >
          <div
            className="absolute bg-black rounded-[1.25rem] z-[-1]"
            style={{
              width: 'calc(100% - 2px)',
              height: 'calc(100% - 2px)',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </motion.div>
      )}
      {children}
    </div>
  )
}
