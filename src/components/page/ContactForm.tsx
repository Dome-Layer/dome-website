import { useState, type FormEvent } from 'react'
import { Link } from 'react-router'
import { localizedHref } from '../../i18n/routes'
import { useLocale, useMessages } from '../../i18n/useLocale'


const field =
  'w-full rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-bg-base)] px-4 py-3 text-[15px] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] focus:border-[var(--color-border-accent)]'
const label = 'text-[13px] font-medium text-[var(--color-text-secondary)]'

/**
 * The contact form, moved off the footer onto the contact page (plan phase 1c) so it appears where
 * someone went looking for it rather than under every page. Name, company and topic are new and
 * optional to the API, so an older client posting only email and message still works.
 */
export function ContactForm() {
  const locale = useLocale()
  const messages = useMessages()
  const t = messages.contactForm
  const TOPICS = messages.common.topics

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [topic, setTopic] = useState(TOPICS[0])
  const [message, setMessage] = useState('')
  const [honeypot, setHoneypot] = useState('')
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
        body: JSON.stringify({ name, email, company, topic, message, hp: honeypot }),
      })
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string }
        setError(body.error ?? (res.status === 429 ? t.rateLimited : t.genericError))
        return
      }
      setSubmitted(true)
      setName('')
      setEmail('')
      setCompany('')
      setMessage('')
    } catch {
      setError(t.genericError)
    } finally {
      setSending(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border-accent)] bg-[var(--color-accent-subtle)] p-8">
        <h3 className="text-xl font-semibold">{t.successTitle}</h3>
        <p className="text-[15px] leading-[1.65] text-[var(--color-text-secondary)]">{t.successBody}</p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="text-sm font-semibold text-[var(--color-text-accent)] hover:underline"
        >
          {t.sendAnother}
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className={label} htmlFor="contact-name">
            {t.nameLabel}
          </label>
          <input
            id="contact-name"
            className={field}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t.namePlaceholder}
            autoComplete="name"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className={label} htmlFor="contact-email">
            {t.emailLabel}
          </label>
          <input
            id="contact-email"
            type="email"
            className={field}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.emailPlaceholder}
            autoComplete="email"
            required
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className={label} htmlFor="contact-company">
          {t.companyLabel} <span className="text-[var(--color-text-tertiary)]">{t.companyOptional}</span>
        </label>
        <input
          id="contact-company"
          className={field}
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder={t.companyPlaceholder}
          autoComplete="organization"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className={label} htmlFor="contact-topic">
          {t.topicLabel}
        </label>
        <select id="contact-topic" className={field} value={topic} onChange={(e) => setTopic(e.target.value)}>
          {TOPICS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className={label} htmlFor="contact-message">
          {t.messageLabel}
        </label>
        <textarea
          id="contact-message"
          className={`${field} min-h-[160px] resize-y`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t.messagePlaceholder}
          required
        />
      </div>

      {/* Bot trap: hidden from people and from assistive technology, so only a script fills it. */}
      <input
        type="text"
        tabIndex={-1}
        aria-hidden="true"
        autoComplete="off"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        className="hidden"
      />

      <p className="text-[13px] leading-[1.6] text-[var(--color-text-tertiary)]">
        {t.privacyNote}{' '}
        <Link to={localizedHref('privacy', locale)} className="underline hover:text-[var(--color-text-secondary)]">
          {t.privacyLink}
        </Link>
        .
      </p>

      {error && (
        <p role="alert" className="text-[14px] text-[var(--color-dome-status-error)]">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="inline-flex w-fit items-center rounded-[var(--radius-md)] bg-[var(--color-accent)] px-7 py-3.5 text-sm font-semibold text-[var(--color-text-on-accent)] hover:bg-[var(--color-accent-hover)] disabled:opacity-60"
      >
        {sending ? t.sending : t.send}
      </button>
    </form>
  )
}
