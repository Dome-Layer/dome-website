import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { useLenis } from 'lenis/react'
import { DomeLogo } from './DomeLogo'
import { ThemeToggle } from './ThemeToggle'
import { isAuthenticated, clearToken } from '../lib/auth'
import { HUB_PATH } from '../lib/routes'

const navItems = [
  { label: 'Method', href: '#method' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Tools', href: '#tools' },
  { label: 'Engagement', href: '#engagement' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const sectionIds = ['method', 'architecture', 'tools', 'engagement', 'about', 'contact']

// Stroke icons for the top-bar auth control (render white on the accent button).
const UserIcon = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)
const SignOutIcon = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
)

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<number>(-1)
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const lenis = useLenis()

  // Auth state for the top-bar Sign in / Sign out control. Read once at mount from
  // the cross-subdomain cookie (CSR-only app, so document is available). The page
  // reloads on sign-in (via /login) and on sign-out, so this stays fresh.
  const [authed] = useState(() => isAuthenticated())

  const loginHref = `/login?redirect=${encodeURIComponent(
    location.pathname + location.search
  )}`

  const handleSignOut = useCallback(() => {
    clearToken()
    window.location.href = '/'
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Track active section (homepage only)
  useEffect(() => {
    if (!isHomePage) return

    const getActiveSection = () => {
      const offset = window.innerHeight * 0.35
      const atBottom = (window.innerHeight + window.scrollY) >= document.body.scrollHeight - 2

      if (atBottom) {
        setActiveSection(sectionIds.length - 1)
        return
      }

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i])
        if (el && el.getBoundingClientRect().top <= offset) {
          setActiveSection(i)
          return
        }
      }

      setActiveSection(-1)
    }

    getActiveSection()
    window.addEventListener('scroll', getActiveSection, { passive: true })
    return () => window.removeEventListener('scroll', getActiveSection)
  }, [isHomePage])

  // Scroll to hash on initial load (e.g. navigating back from a tool page via /#tools)
  useEffect(() => {
    if (!isHomePage || !lenis) return
    const hash = window.location.hash
    if (!hash) return
    const id = setTimeout(() => {
      lenis.scrollTo(hash, { offset: -64 })
    }, 300)
    return () => clearTimeout(id)
  }, [isHomePage, lenis])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavClick = useCallback((_index: number, href: string) => {
    if (isHomePage) {
      lenis?.scrollTo(href, { offset: -64 })
    } else {
      window.location.href = '/' + href
    }
  }, [isHomePage, lenis])

  const handleMobileNavClick = useCallback((href: string) => {
    setMobileOpen(false)
    if (isHomePage) {
      setTimeout(() => {
        lenis?.scrollTo(href, { offset: -64 })
      }, 100)
    } else {
      window.location.href = '/' + href
    }
  }, [isHomePage, lenis])

  return (
    <>
      <header
        className={`fixed top-[var(--dome-banner-h,0px)] left-0 right-0 z-50 h-16 bg-[var(--color-bg-base)] transition-[border-color,box-shadow,background-color] duration-300 ${
          scrolled
            ? 'border-b border-[var(--color-border-subtle)] shadow-[0_1px_3px_rgba(0,0,0,0.04)]'
            : 'border-b border-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12 h-16">
          <a href="/" className="relative z-10 flex-shrink-0" aria-label="DOME — Home">
            <DomeLogo size="md" />
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-4">
            <ul className="flex items-center gap-1" role="list">
              {navItems.map((item, i) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(i, item.href)
                    }}
                    className={`relative px-3 py-2 rounded-lg text-[13px] font-medium transition-colors duration-150 ${
                      activeSection === i
                        ? 'text-[#0080FF]'
                        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-muted)]'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            {authed ? (
              <>
                <a
                  href={HUB_PATH}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-semibold bg-[#0080FF] text-white rounded-lg hover:bg-[#40A8FF] active:bg-[#0066CC] transition-colors duration-150"
                >
                  {UserIcon}
                  Your tools
                </a>
                <button
                  onClick={handleSignOut}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-[13px] font-semibold text-[var(--color-text-secondary)] border border-[var(--color-border-default)] rounded-lg hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-strong)] hover:bg-[var(--color-bg-muted)] transition-colors duration-150"
                >
                  {SignOutIcon}
                  Sign out
                </button>
              </>
            ) : (
              <a
                href={loginHref}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-semibold bg-[#0080FF] text-white rounded-lg hover:bg-[#40A8FF] active:bg-[#0066CC] transition-colors duration-150"
              >
                {UserIcon}
                Sign in
              </a>
            )}
            <ThemeToggle />
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="lg:hidden flex items-center gap-1">
            <ThemeToggle />
            <button
              className="relative z-10 flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <span
                className={`block h-[1.5px] w-5 bg-[var(--color-text-primary)] transition-all duration-300 ${
                  mobileOpen ? 'translate-y-[3px] rotate-45' : ''
                }`}
              />
              <span
                className={`block h-[1.5px] w-5 bg-[var(--color-text-primary)] transition-all duration-300 ${
                  mobileOpen ? '-translate-y-[3px] -rotate-45' : ''
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[var(--color-bg-base)] flex flex-col justify-center items-center lg:hidden"
          >
            <nav>
              <ul className="flex flex-col items-center gap-4" role="list">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: i * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <a
                      href={item.href}
                      onClick={() => handleMobileNavClick(item.href)}
                      className="text-2xl font-semibold text-[var(--color-text-primary)] hover:text-[#0080FF] transition-colors tracking-tight"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  className="mt-6"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: navItems.length * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {authed ? (
                    <div className="flex flex-col items-center gap-3">
                      <a
                        href={HUB_PATH}
                        onClick={() => setMobileOpen(false)}
                        className="inline-flex items-center gap-2 px-8 py-3.5 text-[13px] font-semibold bg-[#0080FF] text-white rounded-lg"
                      >
                        {UserIcon}
                        Your tools
                      </a>
                      <button
                        onClick={() => {
                          setMobileOpen(false)
                          handleSignOut()
                        }}
                        className="inline-flex items-center gap-2 px-8 py-3 text-[13px] font-semibold text-[var(--color-text-secondary)] border border-[var(--color-border-default)] rounded-lg hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-strong)] transition-colors duration-150"
                      >
                        {SignOutIcon}
                        Sign out
                      </button>
                    </div>
                  ) : (
                    <a
                      href={loginHref}
                      onClick={() => setMobileOpen(false)}
                      className="inline-flex items-center gap-2 px-8 py-3.5 text-[13px] font-semibold bg-[#0080FF] text-white rounded-lg"
                    >
                      {UserIcon}
                      Sign in
                    </a>
                  )}
                </motion.li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
