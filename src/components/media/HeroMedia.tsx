import { useEffect, useRef, useSyncExternalStore } from 'react'
import { MEDIA } from '../../content/media'
import { useReducedMotion } from '../../lib/useReducedMotion'
import { Picture } from './Picture'

/**
 * Save-Data is a client hint, so it does not exist during prerender. `useSyncExternalStore` gives
 * the server snapshot (false) for the static HTML and the real value on the client, which is how
 * React reads a client-only value without a hydration mismatch. It never changes within a page
 * view, so nothing needs to subscribe.
 */
const noSubscribe = () => () => {}
const readSaveData = () =>
  Boolean((navigator as { connection?: { saveData?: boolean } }).connection?.saveData)

/**
 * The home hero's background video, with its poster frame as the still fallback.
 *
 * The video is decorative (`aria-hidden`), so the headline carries the meaning. The poster is the
 * LCP image and always renders underneath, which means the hero is complete before a single frame
 * of video arrives, and stays complete if the video never plays at all.
 *
 * The video is skipped entirely, not merely paused, when the visitor prefers reduced motion or has
 * Save-Data on, so neither pays for 1.1 MB they did not ask for. It is also paused while scrolled
 * out of view, so it stops costing anything once the visitor moves down the page.
 */
export function HeroMedia() {
  const prefersReduced = useReducedMotion()
  const saveData = useSyncExternalStore(noSubscribe, readSaveData, () => false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const showVideo = !prefersReduced && !saveData

  // Pause off-screen. IntersectionObserver is guarded because jsdom does not implement it.
  useEffect(() => {
    const video = videoRef.current
    if (!video || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void video.play().catch(() => {})
        else video.pause()
      },
      { threshold: 0.1 },
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [showVideo])

  const poster = MEDIA.homeHeroPoster

  return (
    <>
      {/*
        The source footage is near-black, which is right for the dark theme and wrong for the light
        one: a white scrim over black reads as muddy grey. Inverting it gives a genuinely light
        frame with cool silver streaks that keep the original's structure and contrast, and it costs
        nothing, where a second brightened encode would mean another 3.2 MB and a src swap on every
        theme change. `invert` applies by default and is removed in the dark theme.
      */}
      <Picture
        id="homeHeroPoster"
        priority
        className="absolute inset-0 h-full w-full object-cover [object-position:center_35%] invert dark:invert-0"
      />
      {showVideo && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={poster.jpeg[poster.jpeg.length - 1].src}
          aria-hidden="true"
          tabIndex={-1}
          className="absolute inset-0 h-full w-full object-cover [object-position:center_35%] invert dark:invert-0"
        >
          {MEDIA.homeHeroVideo.sources.map((source) => (
            <source key={source.src} src={source.src} type={source.type} />
          ))}
        </video>
      )}

      {/*
        Scrims, all theme-keyed. On phones the copy spans the full width, so the desktop gradient's
        transparent right-hand third left the end of every line sitting on bare media: the mobile
        overlay therefore covers the whole width and only softens towards the edge. From `md` up the
        copy is confined to the left, so the media can still show through on the right.
      */}
      <div
        aria-hidden="true"
        className="absolute inset-0 md:hidden bg-[linear-gradient(90deg,var(--color-scrim-strong)_0%,var(--color-scrim-strong)_72%,var(--color-scrim)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden md:block bg-[linear-gradient(90deg,var(--color-scrim-strong)_0%,var(--color-scrim)_48%,transparent_80%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,transparent_72%,var(--color-media-fade)_100%)]"
      />
    </>
  )
}
