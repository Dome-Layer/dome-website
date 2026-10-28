import type { CSSProperties } from 'react'
import { DomeLogo } from '../DomeLogo'
import { Navigation } from '../Navigation'
import { ButtonLink } from '../ui/Button'
import { localizedHref } from '../../i18n/routes'
import { useLocale, useMessages } from '../../i18n/useLocale'
import { errorArt, type ErrorArtKind } from './recordArt'

const ART = { notFound: errorArt('notFound'), error: errorArt('error') }

const signal = { fill: 'none', stroke: 'var(--color-hero-on-particle)', strokeLinecap: 'round' as const }

/**
 * The 404 and "Something went wrong" pages (Sprint LX, DESIGN_SYSTEM v2.6): the home hero's surface
 * with the record art, and the site's existing words and link home.
 *
 * The 404 is a page of the site, so it has the full top bar, transparent over the blue as at the
 * top of the home page, and its number settles out of the loose signal once on load (CSS only,
 * 600ms, none with reduced motion). The error page renders when something has broken, so it keeps
 * to as little as possible: the wordmark home and no menu, and no motion.
 */
export function ErrorPage({ kind }: { kind: ErrorArtKind }) {
  const locale = useLocale()
  const messages = useMessages()
  const t = messages.errors
  const home = localizedHref('home', locale)
  const art = ART[kind]
  const notFound = kind === 'notFound'

  return (
    <>
      {notFound ? (
        <Navigation overSurface />
      ) : (
        <header className="on-hero-surface fixed left-0 right-0 top-[var(--dome-banner-h,0px)] z-50 h-16">
          <div className="mx-auto flex h-16 max-w-7xl items-center px-6 sm:px-8 lg:px-12">
            <a href={home} aria-label={messages.nav.homeLabel}>
              <DomeLogo size="md" color="currentColor" className="text-[var(--color-logo)]" />
            </a>
          </div>
        </header>
      )}

      <main className="error-surface on-hero-surface flex min-h-screen flex-col items-center justify-center px-6 pb-16 pt-[calc(6rem+var(--dome-banner-h,0px))] text-center">
        <svg
          className="mb-8 w-full max-w-[714px] md:mb-10"
          viewBox={`0 0 ${art.width} ${art.height}`}
          aria-hidden="true"
        >
          <path d={art.raw} {...signal} strokeWidth={4.2} opacity={0.4} />
          <path d={art.mid} {...signal} strokeWidth={5.7} opacity={0.7} />
          <path d={art.links} className="error-links" fill="none" stroke="var(--color-hero-on-particle)" strokeWidth={1.6} opacity={0.55} />
          {art.dots.map((dot) => (
            <circle
              key={`${dot.x},${dot.y}`}
              className="error-dot"
              cx={dot.x}
              cy={dot.y}
              r={3.9}
              fill="var(--color-hero-on-particle)"
              style={{ '--dx': `${dot.dx}px`, '--dy': `${dot.dy}px`, animationDelay: `${dot.delay}ms` } as CSSProperties}
            />
          ))}
        </svg>
        <h1 className="mb-4 text-[30px] font-bold leading-[1.12] tracking-[-0.025em] text-[var(--color-text-primary)] md:text-[44px]">
          {notFound ? t.notFoundTitle : t.errorTitle}
        </h1>
        <p className="mb-8 max-w-[460px] text-[16px] leading-[1.6] text-[var(--color-text-primary)] md:text-[18px]">
          {notFound ? t.notFoundBody : t.errorBody}
        </p>
        <ButtonLink to={home}>{t.homeLink}</ButtonLink>
      </main>
    </>
  )
}
