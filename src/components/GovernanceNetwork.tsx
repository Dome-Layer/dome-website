import { useRef, useEffect } from 'react'
import { gsap } from '../lib/gsap'
import { useReducedMotion } from '../lib/useReducedMotion'

interface GovernanceNetworkProps {
  className?: string
}

// Hub — shifted slightly off-center for organic feel
const HUB = { x: 195, y: 195, r: 14 }

// DOME nodes — asymmetric positions, varied radii
const DOME_NODES = [
  { id: 'discover',    x: 160, y: 85,  r: 9,  label: 'D' },
  { id: 'orchestrate', x: 310, y: 155, r: 10, label: 'O' },
  { id: 'model',       x: 240, y: 310, r: 9,  label: 'M' },
  { id: 'execute',     x: 90,  y: 230, r: 8,  label: 'E' },
]

// Outer nodes — 12 peripheral nodes at varied positions and sizes
const OUTER_NODES = [
  { id: 'data',        x: 295, y: 70,  r: 5 },
  { id: 'policy',      x: 350, y: 250, r: 4 },
  { id: 'compliance',  x: 310, y: 340, r: 4.5 },
  { id: 'workflows',   x: 110, y: 340, r: 5 },
  { id: 'monitoring',  x: 60,  y: 135, r: 4 },
  { id: 'audit',       x: 170, y: 360, r: 3.5 },
  { id: 'models',      x: 355, y: 155, r: 3.5 },
  { id: 'risk',        x: 75,  y: 310, r: 4 },
  // Additional outer nodes for denser network
  { id: 'security',    x: 130, y: 55,  r: 3.5 },
  { id: 'analytics',   x: 365, y: 305, r: 3 },
  { id: 'pipeline',    x: 45,  y: 275, r: 3 },
  { id: 'governance',  x: 260, y: 45,  r: 3.5 },
]

// Connections: hub→DOME, DOME ring, DOME→outer + cross-connections
const HUB_CONNECTIONS = DOME_NODES.map((n) => ({ x1: HUB.x, y1: HUB.y, x2: n.x, y2: n.y }))

const RING_CONNECTIONS = DOME_NODES.map((n, i) => {
  const next = DOME_NODES[(i + 1) % DOME_NODES.length]
  return { x1: n.x, y1: n.y, x2: next.x, y2: next.y }
})

const OUTER_CONNECTIONS = [
  // data → D, O
  { x1: DOME_NODES[0].x, y1: DOME_NODES[0].y, x2: 295, y2: 70 },
  { x1: DOME_NODES[1].x, y1: DOME_NODES[1].y, x2: 295, y2: 70 },
  // policy → O
  { x1: DOME_NODES[1].x, y1: DOME_NODES[1].y, x2: 350, y2: 250 },
  // compliance → O, M
  { x1: DOME_NODES[1].x, y1: DOME_NODES[1].y, x2: 310, y2: 340 },
  { x1: DOME_NODES[2].x, y1: DOME_NODES[2].y, x2: 310, y2: 340 },
  // workflows → M, E
  { x1: DOME_NODES[2].x, y1: DOME_NODES[2].y, x2: 110, y2: 340 },
  { x1: DOME_NODES[3].x, y1: DOME_NODES[3].y, x2: 110, y2: 340 },
  // monitoring → E, D
  { x1: DOME_NODES[3].x, y1: DOME_NODES[3].y, x2: 60, y2: 135 },
  { x1: DOME_NODES[0].x, y1: DOME_NODES[0].y, x2: 60, y2: 135 },
  // audit → M
  { x1: DOME_NODES[2].x, y1: DOME_NODES[2].y, x2: 170, y2: 360 },
  // models → O
  { x1: DOME_NODES[1].x, y1: DOME_NODES[1].y, x2: 355, y2: 155 },
  // risk → E
  { x1: DOME_NODES[3].x, y1: DOME_NODES[3].y, x2: 75, y2: 310 },
  // security → D
  { x1: DOME_NODES[0].x, y1: DOME_NODES[0].y, x2: 130, y2: 55 },
  // analytics → M, compliance
  { x1: DOME_NODES[2].x, y1: DOME_NODES[2].y, x2: 365, y2: 305 },
  { x1: 310, y1: 340, x2: 365, y2: 305 },
  // pipeline → E
  { x1: DOME_NODES[3].x, y1: DOME_NODES[3].y, x2: 45, y2: 275 },
  // governance → D, data
  { x1: DOME_NODES[0].x, y1: DOME_NODES[0].y, x2: 260, y2: 45 },
  { x1: 295, y1: 70, x2: 260, y2: 45 },
  // Cross-connections between outer nodes
  { x1: 350, y1: 250, x2: 310, y2: 340 },   // policy ↔ compliance
  { x1: 110, y1: 340, x2: 75,  y2: 310 },   // workflows ↔ risk
  { x1: 60,  y1: 135, x2: 295, y2: 70 },    // monitoring ↔ data
  { x1: 130, y1: 55,  x2: 260, y2: 45 },    // security ↔ governance
  { x1: 75,  y1: 310, x2: 45,  y2: 275 },   // risk ↔ pipeline
  { x1: 170, y1: 360, x2: 110, y2: 340 },   // audit ↔ workflows
  { x1: 355, y1: 155, x2: 350, y2: 250 },   // models ↔ policy
]

// Particle paths — diverse routes across the network
const PARTICLE_PATHS = [
  // Hub to DOME nodes
  { id: 'p-hub-d',     startX: HUB.x, startY: HUB.y, endX: 160, endY: 85 },
  { id: 'p-hub-m',     startX: HUB.x, startY: HUB.y, endX: 240, endY: 310 },
  { id: 'p-hub-e',     startX: HUB.x, startY: HUB.y, endX: 90,  endY: 230 },
  { id: 'p-hub-o',     startX: HUB.x, startY: HUB.y, endX: 310, endY: 155 },
  // DOME-to-DOME (along ring)
  { id: 'p-d-o',       startX: 160,   startY: 85,    endX: 310, endY: 155 },
  { id: 'p-e-d',       startX: 90,    startY: 230,   endX: 160, endY: 85 },
  { id: 'p-o-m',       startX: 310,   startY: 155,   endX: 240, endY: 310 },
  // DOME-to-outer
  { id: 'p-o-data',    startX: 310,   startY: 155,   endX: 295, endY: 70 },
  { id: 'p-m-wf',      startX: 240,   startY: 310,   endX: 110, endY: 340 },
  { id: 'p-d-sec',     startX: 160,   startY: 85,    endX: 130, endY: 55 },
  { id: 'p-e-pipe',    startX: 90,    startY: 230,   endX: 45,  endY: 275 },
  // Outer-to-outer (cross-links)
  { id: 'p-pol-comp',  startX: 350,   startY: 250,   endX: 310, endY: 340 },
  { id: 'p-sec-gov',   startX: 130,   startY: 55,    endX: 260, endY: 45 },
  { id: 'p-risk-pipe', startX: 75,    startY: 310,   endX: 45,  endY: 275 },
]

// Per-node label offsets for precise placement with larger font
const LABEL_OFFSETS: Record<string, { dy: number; dx: number }> = {
  discover:    { dy: -26, dx: 0 },
  orchestrate: { dy: 6,   dx: 28 },
  model:       { dy: 34,  dx: 0 },
  execute:     { dy: 6,   dx: -26 },
}

// Indices of outer nodes that should pulse
const PULSE_INDICES = new Set([0, 3, 5, 8, 11])

export function GovernanceNetwork({ className }: GovernanceNetworkProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    if (prefersReduced || !svgRef.current) return

    const svg = svgRef.current
    const hub = svg.querySelector('.gn-hub')
    const hubRing = svg.querySelector('.gn-hub-ring')
    const domeNodes = svg.querySelectorAll('.gn-dome-node')
    const outerNodes = svg.querySelectorAll('.gn-outer-node')
    const hubLines = svg.querySelectorAll('.gn-hub-line')
    const ringLines = svg.querySelectorAll('.gn-ring-line')
    const outerLines = svg.querySelectorAll('.gn-outer-line')
    const particles = svg.querySelectorAll('.gn-particle')
    const domeLabels = svg.querySelectorAll('.gn-dome-label')
    const pulseNodes = svg.querySelectorAll('.gn-pulse-node')

    // Set initial states
    gsap.set(hub, { scale: 0, transformOrigin: 'center center' })
    gsap.set(hubRing, { scale: 0, transformOrigin: 'center center' })
    gsap.set(domeNodes, { scale: 0, transformOrigin: 'center center' })
    gsap.set(outerNodes, { scale: 0, transformOrigin: 'center center' })
    gsap.set(domeLabels, { opacity: 0 })
    gsap.set(particles, { opacity: 0 })

    // Stroke-dasharray setup for lines
    const allLines = [...hubLines, ...ringLines, ...outerLines]
    allLines.forEach((line) => {
      const el = line as SVGLineElement
      const length = Math.sqrt(
        Math.pow(Number(el.getAttribute('x2')) - Number(el.getAttribute('x1')), 2) +
        Math.pow(Number(el.getAttribute('y2')) - Number(el.getAttribute('y1')), 2)
      )
      el.style.strokeDasharray = `${length}`
      el.style.strokeDashoffset = `${length}`
    })

    // Build timeline
    const tl = gsap.timeline()

    // 0.3s — Hub scales in
    tl.to(hub, { scale: 1, duration: 0.5, ease: 'back.out(1.4)' }, 0.3)
    tl.to(hubRing, { scale: 1, duration: 0.6, ease: 'power2.out' }, 0.35)

    // 0.6s — Hub connection lines draw outward
    hubLines.forEach((line, i) => {
      tl.to(line, { strokeDashoffset: 0, duration: 0.5, ease: 'power2.inOut' }, 0.6 + i * 0.06)
    })

    // 1.0s — DOME satellite nodes pop in
    domeNodes.forEach((node, i) => {
      tl.to(node, { scale: 1, duration: 0.4, ease: 'back.out(1.6)' }, 1.0 + i * 0.1)
    })

    // 1.15s — DOME labels fade in
    domeLabels.forEach((label, i) => {
      tl.to(label, { opacity: 1, duration: 0.3 }, 1.15 + i * 0.1)
    })

    // 1.2s — Ring connections between DOME nodes
    ringLines.forEach((line, i) => {
      tl.to(line, { strokeDashoffset: 0, duration: 0.4, ease: 'power2.inOut' }, 1.2 + i * 0.08)
    })

    // 1.5s — Outer lines + nodes (tighter stagger for many lines)
    outerLines.forEach((line, i) => {
      tl.to(line, { strokeDashoffset: 0, duration: 0.3, ease: 'power2.inOut' }, 1.5 + i * 0.02)
    })
    outerNodes.forEach((node, i) => {
      tl.to(node, { scale: 1, duration: 0.25, ease: 'back.out(1.4)' }, 1.6 + i * 0.04)
    })

    // 2.0s — Data flow particles begin (with distance-based durations)
    particles.forEach((particle, i) => {
      const path = PARTICLE_PATHS[i]
      if (!path) return

      const dx = path.endX - path.startX
      const dy = path.endY - path.startY
      const distance = Math.sqrt(dx * dx + dy * dy)
      const baseDuration = 1.0 + (distance / 200) * 1.2

      tl.set(particle, { opacity: 0.6 }, 2.0 + i * 0.12)
      tl.to(particle, {
        attr: { cx: path.endX, cy: path.endY },
        duration: baseDuration,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
        delay: i * 0.2,
      }, 2.0 + i * 0.12)
    })

    // 2.5s — Subtle pulse on select outer nodes
    pulseNodes.forEach((node, i) => {
      const originalR = Number(node.getAttribute('r')) || 4
      tl.to(node, {
        attr: { r: originalR * 1.3 },
        opacity: 0.7,
        duration: 1.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: i * 0.7,
      }, 2.5)
    })

    return () => { tl.kill() }
  }, [prefersReduced])

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 400 400"
      className={className}
      aria-hidden="true"
    >
      {/* Hub connection lines */}
      {HUB_CONNECTIONS.map((conn, i) => (
        <line
          key={`hub-line-${i}`}
          className="gn-hub-line"
          x1={conn.x1} y1={conn.y1}
          x2={conn.x2} y2={conn.y2}
          stroke="var(--color-dome-signal-blue)"
          strokeWidth="1.5"
          opacity="0.5"
        />
      ))}

      {/* Ring connections between DOME nodes */}
      {RING_CONNECTIONS.map((conn, i) => (
        <line
          key={`ring-line-${i}`}
          className="gn-ring-line"
          x1={conn.x1} y1={conn.y1}
          x2={conn.x2} y2={conn.y2}
          stroke="var(--color-dome-signal-blue)"
          strokeWidth="1.2"
          opacity="0.4"
        />
      ))}

      {/* Outer connections */}
      {OUTER_CONNECTIONS.map((conn, i) => (
        <line
          key={`outer-line-${i}`}
          className="gn-outer-line"
          x1={conn.x1} y1={conn.y1}
          x2={conn.x2} y2={conn.y2}
          stroke="var(--color-dome-signal-blue)"
          strokeWidth="0.8"
          opacity="0.3"
        />
      ))}

      {/* Hub node */}
      <circle
        className="gn-hub"
        cx={HUB.x}
        cy={HUB.y}
        r={HUB.r}
        fill="#5B9CB5"
        opacity="0.9"
      />
      <circle
        className="gn-hub-ring"
        cx={HUB.x}
        cy={HUB.y}
        r={22}
        fill="none"
        stroke="#5B9CB5"
        strokeWidth="1"
        opacity="0.3"
      />

      {/* DOME satellite nodes */}
      {DOME_NODES.map((node) => (
        <circle
          key={node.id}
          className="gn-dome-node"
          cx={node.x}
          cy={node.y}
          r={node.r}
          fill="#5B9CB5"
          opacity="0.85"
        />
      ))}

      {/* DOME labels — large font with per-node positioning */}
      {DOME_NODES.map((node) => {
        const offset = LABEL_OFFSETS[node.id] || { dy: 0, dx: 0 }
        return (
          <text
            key={`label-${node.id}`}
            className="gn-dome-label"
            x={node.x + offset.dx}
            y={node.y + offset.dy}
            textAnchor="middle"
            fill="#0A0A0A"
            fontSize="24"
            fontWeight="600"
            fontFamily="'Inter', sans-serif"
            letterSpacing="0.05em"
            opacity={prefersReduced ? 1 : 0}
          >
            {node.label}
          </text>
        )
      })}

      {/* Outer peripheral nodes */}
      {OUTER_NODES.map((node, i) => (
        <circle
          key={node.id}
          className={`gn-outer-node${PULSE_INDICES.has(i) ? ' gn-pulse-node' : ''}`}
          cx={node.x}
          cy={node.y}
          r={node.r}
          fill="#5B9CB5"
          opacity="0.55"
        />
      ))}

      {/* Data flow particles — varied sizes by route type */}
      {PARTICLE_PATHS.map((path, i) => (
        <circle
          key={path.id}
          className="gn-particle"
          cx={path.startX}
          cy={path.startY}
          r={i < 4 ? 2.5 : i < 7 ? 2.0 : 1.5}
          fill="#7BB8CF"
          opacity={prefersReduced ? 0 : 0}
        />
      ))}
    </svg>
  )
}
