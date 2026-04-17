import { DomeLogo } from "../components/DomeLogo"

const s = {
  h2: {
    fontSize: "var(--text-h3)",
    fontWeight: 600,
    color: "var(--color-text-primary)",
    letterSpacing: "-0.02em",
    marginTop: "48px",
    marginBottom: "16px",
  } as React.CSSProperties,
  h3: {
    fontSize: "var(--text-h4)",
    fontWeight: 600,
    color: "var(--color-text-primary)",
    letterSpacing: "-0.01em",
    marginTop: "32px",
    marginBottom: "12px",
  } as React.CSSProperties,
  p: {
    fontSize: "var(--text-body)",
    color: "var(--color-text-secondary)",
    lineHeight: 1.7,
    marginBottom: "16px",
  } as React.CSSProperties,
  li: {
    fontSize: "var(--text-body)",
    color: "var(--color-text-secondary)",
    lineHeight: 1.7,
    marginBottom: "6px",
  } as React.CSSProperties,
  legalBasis: {
    fontSize: "var(--text-body-sm)",
    color: "var(--color-text-tertiary)",
    lineHeight: 1.6,
    marginTop: "8px",
    marginBottom: "16px",
    fontStyle: "italic",
  } as React.CSSProperties,
  code: {
    fontFamily: "var(--font-mono)",
    fontSize: "0.875em",
    background: "var(--color-bg-muted)",
    padding: "1px 5px",
    borderRadius: "3px",
    color: "var(--color-text-primary)",
  } as React.CSSProperties,
  table: {
    width: "100%",
    borderCollapse: "collapse" as const,
    marginTop: "16px",
    marginBottom: "24px",
    fontSize: "var(--text-body-sm)",
    lineHeight: 1.5,
  },
  th: {
    textAlign: "left" as const,
    padding: "10px 12px",
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: "var(--color-text-tertiary)",
    borderBottom: "2px solid var(--color-border-default)",
  },
  td: {
    padding: "10px 12px",
    color: "var(--color-text-secondary)",
    borderBottom: "1px solid var(--color-border-subtle)",
    verticalAlign: "top" as const,
  },
  link: {
    color: "var(--color-text-accent)",
    textDecoration: "none",
  } as React.CSSProperties,
}

export default function PrivacyPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--color-bg-base)",
        fontFamily: "var(--font-sans)",
      }}
    >
      {/* Header */}
      <header
        style={{
          borderBottom: "1px solid var(--color-border-subtle)",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a href="/" style={{ display: "inline-flex", textDecoration: "none" }}>
          <DomeLogo size="sm" />
        </a>
        <a href="/" style={{ ...s.link, fontSize: "13px", color: "var(--color-text-tertiary)" }}>
          ← Back to domelayer.com
        </a>
      </header>

      {/* Content */}
      <main
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          padding: "64px 24px 96px",
        }}
      >
        <p
          style={{
            fontSize: "var(--text-caption)",
            color: "var(--color-text-tertiary)",
            marginBottom: "8px",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            fontWeight: 500,
          }}
        >
          Last updated: April 2026
        </p>
        <h1
          style={{
            fontSize: "var(--text-h1)",
            fontWeight: 700,
            color: "var(--color-text-primary)",
            letterSpacing: "-0.03em",
            marginBottom: "8px",
            lineHeight: 1.15,
          }}
        >
          Privacy policy
        </h1>
        <p style={{ ...s.p, marginBottom: "0" }}>
          Applies to: domelayer.com and all subdomains (analyzer.domelayer.com,
          llm-council.domelayer.com, data-intelligence.domelayer.com)
        </p>

        {/* ── Who we are ── */}
        <h2 style={s.h2}>Who we are</h2>
        <p style={s.p}>
          Dome is operated by Francesco Prodomo, a sole trader registered in Italy (P.IVA
          07242670482), trading as Dome. References to "Dome", "we", or "us" in this policy refer to
          Francesco Prodomo trading as Dome.
        </p>
        <p style={s.p}>
          Location: Florence, Italy
          <br />
          Contact for privacy matters:{" "}
          <a href="mailto:privacy@domelayer.com" style={s.link}>
            privacy@domelayer.com
          </a>
        </p>
        <p style={s.p}>
          Francesco Prodomo is the data controller for all personal data collected through
          domelayer.com and its associated tools.
        </p>

        {/* ── What this policy covers ── */}
        <h2 style={s.h2}>What this policy covers</h2>
        <p style={s.p}>
          This policy explains what personal data we collect when you visit domelayer.com or register
          to use the Dome AI tools, why we collect it, how long we keep it, and what rights you have
          over it.
        </p>
        <p style={s.p}>
          This policy applies exclusively to domelayer.com and the Dome portfolio tools. It does not
          apply to AI systems or software that Dome designs and deploys for third-party clients —
          those engagements are governed by separate contracts and data processing agreements
          negotiated per project.
        </p>
        <p style={s.p}>We do not sell personal data. We do not use personal data for advertising.</p>

        {/* ── What data we collect ── */}
        <h2 style={s.h2}>What data we collect and why</h2>

        <h3 style={s.h3}>Website visitors (no account required)</h3>
        <p style={s.p}>
          When you visit domelayer.com, we do not place analytics cookies or third-party tracking
          scripts. A single functional cookie —{" "}
          <code style={s.code}>dome-theme</code> — may be set to remember your light or dark theme
          preference. This cookie contains no personal data and is not used for tracking.
        </p>
        <p style={s.legalBasis}>
          Legal basis: Legitimate interest (Art. 6(1)(f) GDPR) — storing a visual preference to
          improve your browsing experience.
        </p>
        <p style={s.p}>
          We may in future deploy privacy-preserving, cookieless analytics tools to understand
          aggregate usage patterns. Such tools do not set cookies and do not collect personal data.
          This policy will be updated if we introduce them. We will never introduce cookie-based
          analytics or advertising trackers without updating this policy and, where required by law,
          obtaining your consent first.
        </p>

        <h3 style={s.h3}>Registered tool users</h3>
        <p style={s.p}>
          When you register to use the Dome AI tools, we collect and process the following data:
        </p>

        <p style={{ ...s.p, fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "8px" }}>
          Email address
        </p>
        <p style={s.p}>
          Collected when you request access. Used to send you a magic link to authenticate your
          account. Also used, with your explicit consent, to send you product updates or commercial
          communications from Dome.
        </p>
        <p style={s.legalBasis}>
          Legal basis: Contract performance (Art. 6(1)(b)) for authentication. Consent (Art.
          6(1)(a)) for marketing communications.
        </p>

        <p style={{ ...s.p, fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "8px" }}>
          Sign-in timestamps and session metadata
        </p>
        <p style={s.p}>
          Each time you authenticate, we record the time and method of sign-in as standard security
          practice.
        </p>
        <p style={s.legalBasis}>
          Legal basis: Legitimate interest (Art. 6(1)(f)) — security, fraud prevention, and service
          integrity.
        </p>

        <p style={{ ...s.p, fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "8px" }}>
          Data you submit to the tools
        </p>
        <p style={s.p}>
          When you use a Dome tool, you may upload files, enter text, or interact with AI features.
          We collect and may store data derived from these interactions to provide the service —
          including session state, analysis outputs, saved results, governance log metadata, and other
          structured data necessary to deliver the tool's functionality.
        </p>
        <p style={s.p}>
          We process this data to operate the service. We do not use it to train AI models, share it
          with third parties for commercial purposes, or access it except to provide technical support
          when you request it.
        </p>
        <p style={s.p}>
          The specific data retained depends on the tool used and the features you engage with. All
          stored data is associated with your account, protected by row-level security controls, and
          accessible only to your authenticated session. You may delete your saved data at any time
          from within the tool.
        </p>
        <p style={s.legalBasis}>
          Legal basis: Contract performance (Art. 6(1)(b)) — delivering the functionality you have
          requested.
        </p>

        <p style={{ ...s.p, fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "8px" }}>
          Governance log metadata
        </p>
        <p style={s.p}>
          Each action taken within a Dome tool generates a governance event record containing: a hash
          of your input (not the input itself), the action type, a timestamp, and which governance
          rules were applied. This metadata record is the audit trail that underpins Dome's governance
          architecture.
        </p>
        <p style={s.legalBasis}>
          Legal basis: Legitimate interest (Art. 6(1)(f)) — service integrity and quality assurance.
        </p>

        <p style={{ ...s.p, fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "8px" }}>
          Marketing consent record
        </p>
        <p style={s.p}>
          If you opt in to marketing communications at registration, we store a record of that
          consent: the date, your choice, and the version of the consent text shown to you.
        </p>
        <p style={s.legalBasis}>
          Legal basis: Legal obligation (Art. 6(1)(c)) — documenting consent as required under GDPR.
        </p>

        {/* ── What we do not do ── */}
        <h2 style={s.h2}>What we do not do</h2>
        <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
          {[
            "We do not collect passwords. Authentication is exclusively by magic link.",
            "We do not collect payment information. All Dome tools are free to use.",
            "We do not use your data to train AI models.",
            "We do not share your data with third parties for commercial or advertising purposes.",
            "We do not knowingly collect data from minors under 18.",
          ].map((item) => (
            <li key={item} style={s.li}>
              {item}
            </li>
          ))}
        </ul>

        {/* ── Who we share data with ── */}
        <h2 style={s.h2}>Who we share your data with</h2>
        <p style={s.p}>
          We use the following third-party service providers to operate Dome. Each acts as a data
          processor under a data processing agreement:
        </p>
        {[
          {
            name: "Supabase Inc.",
            desc: "Database and authentication. Data is stored in the European Union (Frankfurt, Germany — eu-central-1, and Paris, France — eu-west-3). supabase.com/privacy",
          },
          {
            name: "Vercel Inc.",
            desc: "Website and application hosting. vercel.com/legal/privacy-policy",
          },
          {
            name: "Resend Inc.",
            desc: "Transactional email. Used to send magic links and, with your consent, product communications. resend.com/legal/privacy-policy",
          },
          {
            name: "Anthropic PBC",
            desc: "AI processing. When you use a Dome tool, your input is transmitted to the Anthropic API to generate a response. Anthropic processes this under its API data processing terms. anthropic.com/privacy",
          },
        ].map(({ name, desc }) => (
          <p key={name} style={s.p}>
            <strong style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>{name}</strong>{" "}
            — {desc}
          </p>
        ))}
        <p style={s.p}>
          We do not use advertising networks, social media trackers, or data brokers.
        </p>

        {/* ── International transfers ── */}
        <h2 style={s.h2}>International transfers</h2>
        <p style={s.p}>
          All personal data is stored within the European Union on Supabase infrastructure located in
          Frankfurt and Paris.
        </p>
        <p style={s.p}>
          Vercel, Resend, and Anthropic are US-based. Transfers to these processors are governed by
          Standard Contractual Clauses (SCCs) under GDPR Article 46.
        </p>
        <p style={s.p}>
          <strong style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>UK users:</strong>{" "}
          Transfers between the UK and EU are covered by the UK–EU adequacy decision currently in
          effect. UK users may direct complaints to the Information Commissioner's Office (ico.org.uk).
        </p>

        {/* ── Retention ── */}
        <h2 style={s.h2}>How long we keep your data</h2>
        <table style={s.table}>
          <thead>
            <tr>
              <th style={s.th}>Data</th>
              <th style={s.th}>Retention</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Email address and account record", "Until you request account deletion"],
              ["Sign-in timestamps", "12 months rolling"],
              ["Tool session data and saved outputs", "Until you delete them, or until account deletion"],
              ["Governance log metadata", "90 days rolling"],
              ["Marketing consent record", "Duration of account, plus 3 years after deletion"],
            ].map(([data, retention]) => (
              <tr key={data}>
                <td style={s.td}>{data}</td>
                <td style={s.td}>{retention}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={s.p}>
          On account deletion, we erase your personal data within 30 days, except where retention is
          required by law.
        </p>

        {/* ── Your rights ── */}
        <h2 style={s.h2}>Your rights</h2>
        <p style={s.p}>
          To exercise any right, email{" "}
          <a href="mailto:privacy@domelayer.com" style={s.link}>
            privacy@domelayer.com
          </a>{" "}
          from the address associated with your account. We respond within 30 days.
        </p>
        <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
          {[
            ["Access", "request a copy of all personal data we hold about you."],
            ["Rectification", "ask us to correct inaccurate data."],
            ["Erasure", "ask us to delete your data within 30 days."],
            ["Restriction", "ask us to pause processing while a dispute is resolved."],
            ["Portability", "request your data in a structured, machine-readable format."],
            ["Object", "object to processing based on legitimate interest."],
            [
              "Withdraw consent",
              "withdraw marketing consent at any time via the unsubscribe link in any email or by contacting privacy@domelayer.com.",
            ],
          ].map(([right, desc]) => (
            <li key={right} style={s.li}>
              <strong style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>{right}</strong>{" "}
              — {desc}
            </li>
          ))}
        </ul>
        <p style={s.p}>
          <strong style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>Complain</strong> —
          lodge a complaint with a supervisory authority:
        </p>
        <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
          <li style={s.li}>Italy: Garante per la Protezione dei Dati Personali (garante.privacy.it)</li>
          <li style={s.li}>UK: Information Commissioner's Office (ico.org.uk)</li>
          <li style={s.li}>You may also contact the authority in your country of residence.</li>
        </ul>

        {/* ── Cookies ── */}
        <h2 style={s.h2}>Cookies</h2>
        <table style={s.table}>
          <thead>
            <tr>
              <th style={s.th}>Cookie</th>
              <th style={s.th}>Purpose</th>
              <th style={s.th}>Duration</th>
              <th style={s.th}>Consent required</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={s.td}>
                <code style={s.code}>dome-theme</code>
              </td>
              <td style={s.td}>Stores light/dark theme preference</td>
              <td style={s.td}>1 year</td>
              <td style={s.td}>No — functional, no tracking</td>
            </tr>
            <tr>
              <td style={s.td}>Authentication session</td>
              <td style={s.td}>Keeps you signed in across Dome tools</td>
              <td style={s.td}>Session</td>
              <td style={s.td}>No — strictly necessary</td>
            </tr>
          </tbody>
        </table>
        <p style={s.p}>No third-party cookies are set.</p>

        {/* ── Security ── */}
        <h2 style={s.h2}>Security</h2>
        <p style={s.p}>
          We implement appropriate technical and organisational measures to protect your data,
          including row-level security on all database tables, HTTPS encryption in transit, and magic
          link authentication with no stored passwords.
        </p>
        <p style={s.p}>
          No system is completely secure. If you believe your account has been compromised, contact{" "}
          <a href="mailto:privacy@domelayer.com" style={s.link}>
            privacy@domelayer.com
          </a>{" "}
          immediately.
        </p>

        {/* ── Changes ── */}
        <h2 style={s.h2}>Changes to this policy</h2>
        <p style={s.p}>
          We may update this policy to reflect changes in our practices or legal requirements. If we
          make material changes, we will notify registered users by email at least 30 days before the
          changes take effect. The "last updated" date at the top of this page reflects the current
          version.
        </p>

        {/* ── Contact ── */}
        <h2 style={s.h2}>Contact</h2>
        <p style={s.p}>
          <a href="mailto:privacy@domelayer.com" style={s.link}>
            privacy@domelayer.com
          </a>
          <br />
          Francesco Prodomo trading as Dome — Florence, Italy — P.IVA 07242670482
        </p>

        {/* Bottom rule */}
        <div
          style={{
            marginTop: "64px",
            paddingTop: "24px",
            borderTop: "1px solid var(--color-border-subtle)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "var(--text-caption)",
            color: "var(--color-text-tertiary)",
          }}
        >
          <span>domelayer.com/privacy</span>
          <a href="/terms" style={{ ...s.link, color: "var(--color-text-tertiary)" }}>
            Terms of service →
          </a>
        </div>
      </main>
    </div>
  )
}
