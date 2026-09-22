import { useMessages } from '../../i18n/useLocale'
import {
  MEDIA,
  type DescribedMediaId,
  type ImageAsset,
  type MediaId,
  largest,
  srcSet,
} from '../../content/media'

interface PictureProps {
  /** Id in the media manifest. Everything about the file comes from there. */
  id: MediaId
  /**
   * `sizes` for the srcset. Default assumes the image spans the viewport, which is right for
   * full-bleed use and wrong for anything in a column, so pass it there.
   */
  sizes?: string
  className?: string
  /** The hero poster is the LCP image, so it loads eagerly with high priority. */
  priority?: boolean
}

/**
 * An image from the manifest: AVIF with a JPEG fallback, explicit intrinsic size so nothing shifts
 * as it loads, and alt text pulled from the current locale's catalogue by the same id.
 *
 * Decorative assets render `aria-hidden` with an empty alt, so the surrounding copy carries the
 * meaning. The visible AI label is NOT drawn here: it has to sit over the image rather than inside
 * it, so the section that positions the image draws it with `<AiLabel />`.
 */
export function Picture({ id, sizes = '100vw', className, priority = false }: PictureProps) {
  const messages = useMessages()
  const asset = MEDIA[id]

  if (asset.kind !== 'image') {
    throw new Error(`Picture: media "${id}" is a ${asset.kind}, not an image`)
  }

  const image: ImageAsset = asset
  const fallback = largest(image.jpeg)
  const alt = image.decorative ? '' : messages.media[id as DescribedMediaId]

  return (
    <picture>
      <source type="image/avif" srcSet={srcSet(image.avif)} sizes={sizes} />
      <img
        src={fallback.src}
        srcSet={srcSet(image.jpeg)}
        sizes={sizes}
        width={fallback.width}
        height={fallback.height}
        alt={alt}
        aria-hidden={image.decorative || undefined}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        decoding={priority ? 'sync' : 'async'}
        className={className}
      />
    </picture>
  )
}

/**
 * The visible "AI-generated image" label. The legal notice commits us to showing it on every
 * AI-generated photograph, so it is driven by the manifest's `aiLabel` flag and renders nothing
 * for anything else. Decorative textures are exempt: they are disclosed in the image credits
 * instead, which is what the legal notice says for them.
 */
export function AiLabel({ id, className = '' }: { id: MediaId; className?: string }) {
  const messages = useMessages()
  const asset = MEDIA[id]
  if (!asset.aiLabel || asset.decorative) return null

  return (
    <span
      className={`pointer-events-none absolute left-2.5 bottom-2.5 rounded-[var(--radius-sm)] bg-[var(--color-scrim-strong)] px-2 py-[3px] text-[11px] font-medium text-[var(--color-text-secondary)] ${className}`}
    >
      {messages.aiGeneratedLabel}
    </span>
  )
}
