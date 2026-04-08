import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { DomeLogo } from './DomeLogo'
import { Container } from './Container'
import { fadeUp, viewportConfig } from '../lib/motion'

export function Footer() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSending(true)
    setError(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message }),
      })

      if (!res.ok) throw new Error('Failed to send')

      setSubmitted(true)
      setEmail('')
      setMessage('')
    } catch {
      setError('Something went wrong. Please try again or email us directly.')
    } finally {
      setSending(false)
    }
  }

  return (
    <footer id="contact" className="bg-dome-void border-t border-dome-dark-edge py-16 lg:py-24">
      <Container>
        {/* ── Contact Form ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-16 lg:mb-20"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-dome-signal-blue mb-3">
            Get in touch
          </p>
          <h2 className="text-h2 lg:text-display font-display font-bold text-dome-off-white mb-4 tracking-tight">
            Start a conversation
          </h2>
          <p className="text-dome-nickel text-body-sm max-w-lg mb-10">
            Tell us about your project or challenge. We'll get back to you within 24 hours.
          </p>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="border border-[#166534] bg-[#052E16] rounded-lg px-6 py-8 max-w-2xl"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 h-5 w-5 rounded-full border-2 border-[#22C55E] flex items-center justify-center shrink-0">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-dome-off-white font-semibold text-body-lg">
                      Message received
                    </p>
                    <p className="text-dome-nickel text-body-sm mt-1">
                      Thank you for reaching out. We'll be in touch shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-dome-signal-blue hover:text-dome-ice-blue transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                onSubmit={handleSubmit}
                className="max-w-2xl space-y-5"
              >
                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-dome-nickel mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full bg-dome-onyx border border-dome-dark-edge rounded-lg px-4 py-3 text-body-sm text-dome-warm-white placeholder:text-dome-nickel/40 outline-none transition-colors duration-150 focus:border-dome-signal-blue focus:ring-1 focus:ring-dome-signal-blue/20"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-dome-nickel mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your project…"
                    className="w-full bg-dome-onyx border border-dome-dark-edge rounded-lg px-4 py-3 text-body-sm text-dome-warm-white placeholder:text-dome-nickel/40 outline-none transition-colors duration-150 resize-none focus:border-dome-signal-blue focus:ring-1 focus:ring-dome-signal-blue/20"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-dome-signal-blue text-white text-[13px] font-semibold rounded-lg transition-all duration-150 hover:bg-dome-ice-blue active:bg-[#0066CC] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sending ? (
                    <>
                      <span className="h-3.5 w-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending
                    </>
                  ) : (
                    <>
                      Send message
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="ml-0.5">
                        <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </>
                  )}
                </button>

                {error && (
                  <p className="text-[#EF4444] text-body-sm mt-3">{error}</p>
                )}
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        {/* ── Footer Info ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 pt-16 border-t border-dome-dark-edge">
          <div className="lg:col-span-2">
            <DomeLogo size="md" color="#FFFFFF" />
            <p className="mt-4 text-dome-nickel text-body-sm max-w-md">
              Governance-Driven Operational AI
            </p>
          </div>

          <div className="flex flex-col gap-3 text-body-sm text-dome-nickel">
            <a href="#method" className="hover:text-dome-signal-blue transition-colors">Method</a>
            <a href="#architecture" className="hover:text-dome-signal-blue transition-colors">Architecture</a>
            <a href="#engagement" className="hover:text-dome-signal-blue transition-colors">Engagement</a>
            <a href="#about" className="hover:text-dome-signal-blue transition-colors">About</a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-dome-dark-edge flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-caption text-dome-nickel/60">
          <span>domelayer.com</span>
          <span>&copy; {new Date().getFullYear()} DOME. All rights reserved.</span>
        </div>
      </Container>
    </footer>
  )
}
