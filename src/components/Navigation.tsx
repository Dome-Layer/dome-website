import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { useLenis } from 'lenis/react'
import { DomeLogo } from './DomeLogo'

const navItems = [
  { label: 'Method', href: '#method' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Tools', href: '#tools' },
  { label: 'Engagement', href: '#engagement' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const sectionIds = ['method', 'architecture', 'tools', 'engagement', 'about', 'contact']

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<number>(-1)
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const lenis = useLenis()

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
        className={`fixed top-0 left-0 right-0 z-50 h-16 bg-white transition-[border-color,box-shadow] duration-300 ${
          scrolled
            ? 'border-b border-[#F0F0F0] shadow-[0_1px_3px_rgba(0,0,0,0.04)]'
            : 'border-b border-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12 h-16">
          <a href="/" className="relative z-10 flex-shrink-0" aria-label="Dome — Home">
            <DomeLogo size="md" />
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
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
                        : 'text-[#525252] hover:text-[#0A0A0A] hover:bg-[#F5F5F5]'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={isHomePage ? '#contact' : '/#contact'}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(-1, '#contact')
              }}
              className="inline-flex items-center px-5 py-2.5 text-[13px] font-semibold bg-[#0080FF] text-white rounded-lg hover:bg-[#40A8FF] active:bg-[#0066CC] transition-colors duration-150"
            >
              Discuss an engagement
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="relative z-10 lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span
              className={`block h-[1.5px] w-5 bg-[#0A0A0A] transition-all duration-300 ${
                mobileOpen ? 'translate-y-[3px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-[#0A0A0A] transition-all duration-300 ${
                mobileOpen ? '-translate-y-[3px] -rotate-45' : ''
              }`}
            />
          </button>
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
            className="fixed inset-0 z-40 bg-white flex flex-col justify-center items-center lg:hidden"
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
                      className="text-2xl font-semibold text-[#0A0A0A] hover:text-[#0080FF] transition-colors tracking-tight"
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
                  <a
                    href={isHomePage ? '#contact' : '/#contact'}
                    onClick={() => handleMobileNavClick('#contact')}
                    className="inline-flex px-8 py-3.5 text-[13px] font-semibold bg-[#0080FF] text-white rounded-lg"
                  >
                    Discuss an engagement
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
