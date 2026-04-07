/**
 * ChromaGrid — card grid with per-card spotlight on hover.
 * Adapted from React Bits (MIT license).
 * https://www.reactbits.dev/components/chroma-grid
 */

import { type ReactNode, type MouseEventHandler } from 'react'

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
}

export function ChromaGrid({ items, className = '' }: ChromaGridProps) {
  const handleCardMove: MouseEventHandler<HTMLElement> = (e) => {
    const c = e.currentTarget as HTMLElement
    const rect = c.getBoundingClientRect()
    c.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
    c.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
  }

  return (
    <div className={`relative w-full flex flex-wrap justify-center items-start gap-5 ${className}`}>
      {items.map((c, i) => (
        <article
          key={i}
          onMouseMove={handleCardMove}
          className="group relative flex flex-col w-full md:w-[calc(33.333%-1.25rem)] rounded-xl overflow-hidden border border-[#E8E8E8] transition-colors duration-300 bg-white hover:border-[#99CCFF]"
          style={{ '--spotlight-color': 'rgba(0, 128, 255, 0.06)' } as React.CSSProperties}
        >
          {/* Spotlight overlay on hover */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
            style={{
              background: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)',
            }}
          />

          {/* Card content */}
          <div className="relative z-10 p-6 sm:p-8 flex-1">
            {c.label && (
              <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0080FF] mb-4">
                {c.label}
              </span>
            )}
            <h3 className="text-h3 font-display font-semibold text-[#0A0A0A] mb-3">{c.title}</h3>
            <p className="text-body-sm text-[#525252] leading-relaxed">{c.subtitle}</p>
          </div>

          {/* Accent bar at bottom */}
          <div className="h-[2px] w-full" style={{ background: c.borderColor || '#0080FF' }} />
        </article>
      ))}
    </div>
  )
}
