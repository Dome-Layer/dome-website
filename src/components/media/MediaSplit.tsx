import type { ReactNode } from 'react'

interface MediaSplitProps {
  /** The image element, positioned by the caller so it can bleed off the edge. */
  media: ReactNode
  children: ReactNode
  className?: string
}

/**
 * Text beside media that bleeds off the right edge and fades in from the left with a mask, rather
 * than sitting inside a bordered box. The media is hidden below `lg`, where there is no room for
 * it to bleed and it would only crowd the copy.
 */
export function MediaSplit({ media, children, className = '' }: MediaSplitProps) {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[52%] items-center justify-end lg:flex">
        {media}
      </div>
      <div className="relative mx-auto flex max-w-[1280px] px-6 py-20 md:px-12 md:py-28">
        {children}
      </div>
    </section>
  )
}
