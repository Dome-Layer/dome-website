/**
 * LightPillar — Canvas 2D animated blue lightning beam.
 * Designed for light/white backgrounds. Transparent canvas — no blend tricks.
 *
 * Structure:
 *  - Four gradient layers from wide+faint (haze) to narrow+bright (core)
 *  - Whole-beam sway: the beam shifts left/right slowly
 *  - Width pulse: the beam breathes in and out
 *  - Subtle horizontal drift along the beam's length for a fluid feel
 *  - Layered flicker at multiple frequencies for electric quality
 */

import { useRef, useEffect } from 'react'

interface LightPillarProps {
  /** Clockwise rotation in degrees. */
  rotation?: number
  /** Overall brightness 0–1. */
  intensity?: number
  /** Animation speed multiplier. */
  speed?: number
  /** Base beam width multiplier. */
  beamWidth?: number
  className?: string
}

export function LightPillar({
  rotation  = -9,
  intensity = 1,
  speed     = 1,
  beamWidth = 1,
  className = '',
}: LightPillarProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef    = useRef<number | null>(null)
  const timeRef   = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const setSize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width  = canvas.offsetWidth  * dpr
      canvas.height = canvas.offsetHeight * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    setSize()
    const ro = new ResizeObserver(setSize)
    ro.observe(canvas)

    const draw = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight

      // Fully transparent every frame
      ctx.clearRect(0, 0, w, h)

      const t = timeRef.current * speed

      // ── Flicker ─────────────────────────────────────────────────────────
      // Multiple sine frequencies: slow pulse + mid rhythm + fast electric snap
      const flicker = Math.max(0.4, (
        0.75
        + Math.sin(t * 1.8)  * 0.12   // slow breathe
        + Math.sin(t * 4.3)  * 0.07   // mid rhythm
        + Math.sin(t * 10.1) * 0.04   // fast flicker
        + Math.sin(t * 23.7) * 0.02   // electric snap
      ) * intensity)

      // ── Sway ────────────────────────────────────────────────────────────
      // Slow left/right drift of the entire beam
      const sway = (
        Math.sin(t * 0.42) * w * 0.018 +
        Math.sin(t * 0.97) * w * 0.009
      )

      // ── Width pulse ─────────────────────────────────────────────────────
      // Beam breathes wider and narrower over time
      const widthPulse = beamWidth * (1 + Math.sin(t * 0.65) * 0.18 + Math.sin(t * 1.4) * 0.08)

      ctx.save()
      ctx.translate(w / 2 + sway, h / 2)
      ctx.rotate((rotation * Math.PI) / 180)

      // Span long enough that rotation never clips the beam at the corners
      const span = Math.sqrt(w * w + h * h)
      const half = span / 2

      // ── Subtle path drift ────────────────────────────────────────────────
      // Instead of a perfectly straight beam, a very gentle horizontal drift
      // along the length — drawn as 3 gradient strips offset by a small amount.
      // Keeps the "straight pillar" character while adding organic life.
      const drift = Math.sin(t * 0.55) * w * 0.012

      // Helper: draw one horizontal-gradient strip centred at (offsetX, 0)
      const fillStrip = (
        offsetX: number,
        halfW:   number,
        colorMid: string,
        alpha:    number,
      ) => {
        const grad = ctx.createLinearGradient(offsetX - halfW, 0, offsetX + halfW, 0)
        grad.addColorStop(0,   'rgba(0,0,0,0)')
        grad.addColorStop(0.5, colorMid.replace(')', `,${alpha.toFixed(3)})`).replace('rgb', 'rgba'))
        grad.addColorStop(1,   'rgba(0,0,0,0)')
        ctx.fillStyle = grad
        ctx.fillRect(offsetX - halfW, -half, halfW * 2, span)
      }

      // ── Layer 1 – wide atmospheric haze ──────────────────────────────────
      fillStrip(0,     w * 0.44 * widthPulse, 'rgb(0,110,230)',   0.048 * flicker)

      // ── Layer 2 – mid glow ────────────────────────────────────────────────
      fillStrip(drift * 0.3, w * 0.16 * widthPulse, 'rgb(30,140,255)',  0.19  * flicker)

      // ── Layer 3 – inner bright beam ───────────────────────────────────────
      fillStrip(drift * 0.7, w * 0.055 * widthPulse, 'rgb(110,190,255)', 0.75  * flicker)

      // ── Layer 4 – hot white core ──────────────────────────────────────────
      fillStrip(drift,       w * 0.012 * widthPulse, 'rgb(240,250,255)', flicker)

      ctx.restore()

      timeRef.current += 0.016
      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)

    return () => {
      ro.disconnect()
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [rotation, intensity, speed, beamWidth])

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      style={{ display: 'block' }}
    />
  )
}
