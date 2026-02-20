/**
 * ChromaGrid — grayscale-to-color reveal grid following cursor.
 * Adapted from React Bits (MIT license).
 * https://www.reactbits.dev/components/chroma-grid
 */

import { type ReactNode, useRef, useEffect, type MouseEventHandler } from 'react'
import { gsap } from '../lib/gsap'

export interface ChromaItem {
  title: string
  subtitle: string
  label?: string
  borderColor?: string
  gradient?: string
  icon?: ReactNode
}

export interface ChromaGridProps {
  items: ChromaItem[]
  className?: string
  radius?: number
  damping?: number
  fadeOut?: number
  ease?: string
}

type SetterFn = (v: number | string) => void

export function ChromaGrid({
  items,
  className = '',
  radius = 300,
  damping = 0.45,
  fadeOut = 0.6,
  ease = 'power3.out',
}: ChromaGridProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const fadeRef = useRef<HTMLDivElement>(null)
  const setX = useRef<SetterFn | null>(null)
  const setY = useRef<SetterFn | null>(null)
  const pos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    setX.current = gsap.quickSetter(el, '--x', 'px') as SetterFn
    setY.current = gsap.quickSetter(el, '--y', 'px') as SetterFn
    const { width, height } = el.getBoundingClientRect()
    pos.current = { x: width / 2, y: height / 2 }
    setX.current(pos.current.x)
    setY.current(pos.current.y)
  }, [])

  const moveTo = (x: number, y: number) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x)
        setY.current?.(pos.current.y)
      },
      overwrite: true,
    })
  }

  const handleMove = (e: React.PointerEvent) => {
    const r = rootRef.current!.getBoundingClientRect()
    moveTo(e.clientX - r.left, e.clientY - r.top)
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true })
  }

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true,
    })
  }

  const handleCardMove: MouseEventHandler<HTMLElement> = (e) => {
    const c = e.currentTarget as HTMLElement
    const rect = c.getBoundingClientRect()
    c.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
    c.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
  }

  return (
    <div
      ref={rootRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`relative w-full flex flex-wrap justify-center items-start gap-3 ${className}`}
      style={
        {
          '--r': `${radius}px`,
          '--x': '50%',
          '--y': '50%',
        } as React.CSSProperties
      }
    >
      {items.map((c, i) => (
        <article
          key={i}
          onMouseMove={handleCardMove}
          className="group relative flex flex-col w-full md:w-[calc(33.333%-0.5rem)] rounded-[12px] overflow-hidden border border-dome-carbon-edge transition-colors duration-300"
          style={
            {
              '--card-border': c.borderColor || 'transparent',
              background: c.gradient || 'linear-gradient(145deg, var(--color-dome-onyx), var(--color-dome-void))',
              '--spotlight-color': 'rgba(91, 156, 181, 0.2)',
            } as React.CSSProperties
          }
        >
          {/* Spotlight overlay on hover */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
            style={{
              background:
                'radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)',
            }}
          />

          {/* Card content */}
          <div className="relative z-10 p-6 sm:p-8 flex-1">
            {c.label && (
              <span className="block font-mono text-caption text-dome-signal-blue tracking-[0.12em] uppercase mb-4">
                {c.label}
              </span>
            )}
            <h3 className="text-h3 font-display font-semibold text-dome-warm-white mb-3">{c.title}</h3>
            <p className="text-body-sm text-dome-nickel leading-relaxed">{c.subtitle}</p>
          </div>

          {/* Gradient accent bar at bottom */}
          <div
            className="h-[2px] w-full opacity-60"
            style={{
              background: `linear-gradient(90deg, transparent, ${c.borderColor || '#5B9CB5'}, transparent)`,
            }}
          />
        </article>
      ))}

      {/* Grayscale mask layer */}
      <div
        className="absolute inset-0 pointer-events-none z-30"
        style={{
          backdropFilter: 'grayscale(1) brightness(0.78)',
          WebkitBackdropFilter: 'grayscale(1) brightness(0.78)',
          background: 'rgba(0,0,0,0.001)',
          maskImage:
            'radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22) 45%,rgba(0,0,0,0.35) 60%,rgba(0,0,0,0.50) 75%,rgba(0,0,0,0.68) 88%,white 100%)',
          WebkitMaskImage:
            'radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22) 45%,rgba(0,0,0,0.35) 60%,rgba(0,0,0,0.50) 75%,rgba(0,0,0,0.68) 88%,white 100%)',
        }}
      />

      {/* Fade-back layer */}
      <div
        ref={fadeRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-[250ms] z-40"
        style={{
          backdropFilter: 'grayscale(1) brightness(0.78)',
          WebkitBackdropFilter: 'grayscale(1) brightness(0.78)',
          background: 'rgba(0,0,0,0.001)',
          maskImage:
            'radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90) 30%,rgba(255,255,255,0.78) 45%,rgba(255,255,255,0.65) 60%,rgba(255,255,255,0.50) 75%,rgba(255,255,255,0.32) 88%,transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90) 30%,rgba(255,255,255,0.78) 45%,rgba(255,255,255,0.65) 60%,rgba(255,255,255,0.50) 75%,rgba(255,255,255,0.32) 88%,transparent 100%)',
          opacity: 1,
        }}
      />
    </div>
  )
}
