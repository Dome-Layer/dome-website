import { type ReactNode, useEffect } from 'react'
import { ReactLenis } from 'lenis/react'
import { useReducedMotion } from '../lib/useReducedMotion'
import { gsap, ScrollTrigger } from '../lib/gsap'

interface SmoothScrollProps {
  children: ReactNode
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    // Sync GSAP ScrollTrigger with Lenis on every tick
    if (!prefersReduced) {
      gsap.ticker.lagSmoothing(0)
    }
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [prefersReduced])

  if (prefersReduced) {
    return <>{children}</>
  }

  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
        syncTouch: false,
      }}
    >
      {children}
    </ReactLenis>
  )
}
