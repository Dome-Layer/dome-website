import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { DomeLogo } from './DomeLogo'
import { Container } from './Container'
import { GradientText } from './GradientText'
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
    <footer id="contact" className="bg-dome-void border-t border-dome-carbon-edge py-16 lg:py-24">
      <Container>
        {/* ── Contact Form Section ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-16 lg:mb-20"
        >
          <p className="font-mono text-caption uppercase tracking-[0.2em] text-dome-signal-blue mb-3">
            Get in touch
          </p>
          <GradientText colors={['#006bdf', '#9a00ff', '#7BB8CF', '#E8E6E1']}>
            <h2 className="text-h2 lg:text-display font-display text-dome-off-white mb-4">
              Start a conversation
            </h2>
          </GradientText>
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
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="border border-dome-status-success/30 bg-dome-status-success/5 rounded-sm px-6 py-8 max-w-2xl"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 h-5 w-5 rounded-full border-2 border-dome-status-success flex items-center justify-center shrink-0">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-dome-status-success" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-dome-off-white font-display font-semibold text-body-lg">
                      Message received
                    </p>
                    <p className="text-dome-nickel text-body-sm mt-1">
                      Thank you for reaching out. We'll be in touch shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 font-mono text-caption uppercase tracking-[0.15em] text-dome-signal-blue hover:text-dome-ice-blue transition-colors"
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
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                onSubmit={handleSubmit}
                className="max-w-2xl space-y-5"
              >
                {/* Email */}
                <div className="group">
                  <label
                    htmlFor="contact-email"
                    className="block font-mono text-caption uppercase tracking-[0.15em] text-dome-nickel mb-2"
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
                    className="w-full bg-dome-onyx border border-dome-carbon-edge rounded-sm px-4 py-3 text-body-sm text-dome-warm-white placeholder:text-dome-nickel/40 font-body outline-none transition-colors duration-200 focus:border-dome-signal-blue focus:ring-1 focus:ring-dome-signal-blue/20"
                  />
                </div>

                {/* Message */}
                <div className="group">
                  <label
                    htmlFor="contact-message"
                    className="block font-mono text-caption uppercase tracking-[0.15em] text-dome-nickel mb-2"
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
                    className="w-full bg-dome-onyx border border-dome-carbon-edge rounded-sm px-4 py-3 text-body-sm text-dome-warm-white placeholder:text-dome-nickel/40 font-body outline-none transition-colors duration-200 resize-none focus:border-dome-signal-blue focus:ring-1 focus:ring-dome-signal-blue/20"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-dome-signal-blue text-dome-void font-mono text-sm font-semibold uppercase tracking-[0.1em] rounded-sm transition-all duration-200 hover:bg-dome-ice-blue disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sending ? (
                    <>
                      <span className="h-3.5 w-3.5 border-2 border-dome-void/30 border-t-dome-void rounded-full animate-spin" />
                      Sending
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="ml-0.5">
                        <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </>
                  )}
                </button>

                {error && (
                  <p className="text-dome-status-error text-body-sm mt-3">
                    {error}
                  </p>
                )}
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        {/* ── Footer Info ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 pt-16 border-t border-dome-carbon-edge">
          <div className="lg:col-span-2">
            <DomeLogo size="md" />
            <p className="mt-4 text-dome-nickel text-body-sm font-mono tracking-wide uppercase max-w-md">
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

        <div className="mt-16 pt-8 border-t border-dome-carbon-edge flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 font-mono text-caption text-dome-nickel/60">
          <span>domelayer.com</span>
          <span>&copy; {new Date().getFullYear()} Dome. All rights reserved.</span>
        </div>
      </Container>
    </footer>
  )
}
