import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { DomeLogo } from './DomeLogo'
import { MagneticButton } from './MagneticButton'

const navItems = [
  { label: 'Method', href: '#method' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Engagement', href: '#engagement' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const sectionIds = ['method', 'architecture', 'engagement', 'about', 'contact']

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<number>(-1)

  const { scrollY } = useScroll()
  const blur = useTransform(scrollY, [0, 100], [0, 8])
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.8])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Track active section — use scroll position for reliable detection
  useEffect(() => {
    const getActiveSection = () => {
      const offset = window.innerHeight * 0.35
      const atBottom = (window.innerHeight + window.scrollY) >= document.body.scrollHeight - 2

      // If at bottom of page, activate the last section (Contact)
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

      // No tracked section reached yet (Hero / Problem / Deliver)
      setActiveSection(-1)
    }

    getActiveSection()
    window.addEventListener('scroll', getActiveSection, { passive: true })
    return () => window.removeEventListener('scroll', getActiveSection)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavClick = useCallback((_index: number, href: string) => {
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  const handleMobileNavClick = useCallback((href: string) => {
    setMobileOpen(false)
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }, [])

  return (
    <>
      <motion.header
        style={{
          backdropFilter: useTransform(blur, (v) => `blur(${v}px)`),
          WebkitBackdropFilter: useTransform(blur, (v) => `blur(${v}px)`),
          backgroundColor: useTransform(bgOpacity, (v) => `rgba(22, 22, 25, ${v})`),
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-[border-color] duration-300 h-16 ${
          scrolled ? 'border-b border-dome-carbon-edge' : 'border-b border-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12 h-16">
          <a href="#" className="relative z-10" aria-label="Dome — Home">
            <DomeLogo size="md" />
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6" role="list">
              {navItems.map((item, i) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(i, item.href)
                    }}
                    className={`relative pb-1 font-mono text-sm font-medium uppercase tracking-[0.1em] transition-colors duration-200 ${
                      activeSection === i
                        ? 'text-dome-warm-white'
                        : 'text-dome-off-white/40 hover:text-dome-off-white/70'
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-0 h-[1.5px] bg-dome-signal-blue transition-all duration-200 ${
                        activeSection === i ? 'w-full' : 'w-0'
                      }`}
                    />
                  </a>
                </li>
              ))}
            </ul>
            <MagneticButton
              href="#contact"
              strength={0.15}
              className="inline-flex items-center px-8 py-3.5 font-mono text-sm font-medium uppercase tracking-[0.1em] bg-dome-warm-white text-dome-void rounded-sm hover:bg-dome-off-white hover:shadow-[0_0_0_1px_rgba(91,156,181,0.3)] transition-all duration-200"
            >
              Discuss an Engagement
            </MagneticButton>
          </div>

          {/* Mobile hamburger */}
          <button
            className="relative z-10 lg:hidden flex flex-col justify-center items-center w-10 h-10"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span
              className={`block h-[1.5px] w-5 bg-dome-warm-white transition-all duration-300 ${
                mobileOpen ? 'translate-y-[3px] rotate-45' : '-translate-y-1'
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-dome-warm-white transition-all duration-300 ${
                mobileOpen ? '-translate-y-[0px] -rotate-45' : 'translate-y-1'
              }`}
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-dome-void flex flex-col justify-center items-center lg:hidden"
          >
            <nav>
              <ul className="flex flex-col items-center gap-6" role="list">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.05,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  >
                    <a
                      href={item.href}
                      onClick={() => handleMobileNavClick(item.href)}
                      className="font-display text-2xl tracking-wide text-dome-off-white hover:text-dome-signal-blue transition-colors"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  className="mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: navItems.length * 0.05,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <a
                    href="#contact"
                    onClick={() => handleMobileNavClick('#contact')}
                    className="inline-flex px-8 py-3.5 font-mono text-sm font-medium uppercase tracking-[0.1em] bg-dome-warm-white text-dome-void rounded-sm"
                  >
                    Discuss an Engagement
                  </a>
                </motion.li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
