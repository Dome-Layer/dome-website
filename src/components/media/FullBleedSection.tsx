import type { ReactNode } from 'react'
import type { MediaId } from '../../content/media'
import { Picture } from './Picture'

interface FullBleedSectionProps {
  /** Decorative background image from the manifest. */
  media: MediaId
  children: ReactNode
  className?: string
}

/**
 * A section whose background runs edge to edge, with a theme-keyed scrim over it and the content
 * on top. The vertical fade takes the media into the page background at both edges, which is the
 * one functional gradient the design system allows (v2.1 section 14).
 */
export function FullBleedSection({ media, children, className = '' }: FullBleedSectionProps) {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      <Picture id={media} className="absolute inset-0 h-full w-full object-cover" />
      <div aria-hidden="true" className="absolute inset-0 bg-[var(--color-scrim-strong)]" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,var(--color-media-fade)_0%,transparent_18%,transparent_82%,var(--color-media-fade)_100%)]"
      />
      <div className="relative mx-auto max-w-[1280px] px-6 md:px-12">{children}</div>
    </section>
  )
}
