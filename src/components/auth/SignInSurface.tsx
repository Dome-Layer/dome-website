import { DomeLogo } from '../DomeLogo'
import { domePaths } from '../hero/heroGeometry'
import { recordStill } from '../hero/heroStill'

/**
 * The blue side of the sign-in page (Sprint LX, DESIGN_SYSTEM v2.6): the home hero's surface and
 * its still frames, so signing in looks like the same brand as the home page. There is no top bar
 * on this page; the wordmark here is the link home.
 *
 * - From 1024px: the left side of a full-bleed split, the full height of the window, with the
 *   brand line on the deeper blue at the top and the dome on the bottom edge.
 * - 768 to 1023px: a band across the top with the dome, fading into the page.
 * - Phones: a shorter band with the record rows, fading into the page.
 *
 * Every size and position is in the page's stylesheet (`LoginPage.tsx`), so the markup is the same
 * at every width and the server renders it without measuring anything.
 */

// Drawn once at radius 300 and scaled with CSS; dot spacing is set for the desktop size.
const DOME = domePaths(300)
const RECORD = recordStill(150)

const dots = { fill: 'none', stroke: 'var(--color-hero-on-particle)', strokeLinecap: 'round' as const }

export function SignInSurface() {
  return (
    <div className="login-surface">
      <a href="/" className="login-home" aria-label="DOME home">
        <DomeLogo size="md" color="currentColor" />
      </a>

      <div className="login-brand" aria-hidden="true">
        <h2 className="login-brand-title">Governance-driven AI for regulated enterprises.</h2>
        <p className="login-brand-text">
          Auditable analysis, documents and decisioning, with one secure sign-in across every Dome tool.
        </p>
      </div>

      <svg className="login-dome" viewBox={DOME.viewBox} aria-hidden="true">
        <path d={DOME.back} {...dots} strokeWidth={2} strokeDasharray="0 14" opacity={0.3} />
        <path d={DOME.front} {...dots} strokeWidth={2.2} strokeDasharray="0 14" opacity={0.8} />
      </svg>

      <svg className="login-record" viewBox="0 -10 390 200" aria-hidden="true">
        <defs>
          <linearGradient id="login-band-ink" x1="0" y1="-10" x2="0" y2="190" gradientUnits="userSpaceOnUse">
            <stop offset="0" style={{ stopColor: 'var(--color-hero-on-particle)' }} />
            <stop offset="0.35" style={{ stopColor: 'var(--color-hero-on-particle)' }} />
            <stop offset="0.85" style={{ stopColor: 'var(--color-hero-particle)' }} />
          </linearGradient>
          <linearGradient id="login-band-raw" x1="0" y1="-10" x2="0" y2="190" gradientUnits="userSpaceOnUse">
            <stop offset="0" style={{ stopColor: 'var(--color-hero-on-raw)' }} />
            <stop offset="0.35" style={{ stopColor: 'var(--color-hero-on-raw)' }} />
            <stop offset="0.85" style={{ stopColor: 'var(--color-hero-raw)' }} />
          </linearGradient>
        </defs>
        <path d={RECORD.links} fill="none" stroke="url(#login-band-ink)" strokeWidth={1} opacity={0.5} />
        {RECORD.raw.map((p, i) => (
          <circle key={`r${i}`} cx={p.x} cy={p.y} r={1.5} fill="url(#login-band-raw)" opacity={0.8} />
        ))}
        {RECORD.ordered.map((p, i) => (
          <circle key={`o${i}`} cx={p.x} cy={p.y} r={1.8} fill="url(#login-band-ink)" />
        ))}
      </svg>
    </div>
  )
}
