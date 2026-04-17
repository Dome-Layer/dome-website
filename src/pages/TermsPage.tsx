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
  link: {
    color: "var(--color-text-accent)",
    textDecoration: "none",
  } as React.CSSProperties,
  warning: {
    background: "var(--color-bg-muted)",
    borderLeft: "3px solid var(--color-accent)",
    padding: "16px 20px",
    borderRadius: "0 6px 6px 0",
    marginBottom: "16px",
  } as React.CSSProperties,
}

export default function TermsPage() {
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
          Terms of service
        </h1>
        <p style={{ ...s.p, marginBottom: "0" }}>
          Applies to: analyzer.domelayer.com, llm-council.domelayer.com,
          data-intelligence.domelayer.com
        </p>

        {/* ── Who provides ── */}
        <h2 style={s.h2}>Who provides these tools</h2>
        <p style={s.p}>
          The Dome AI tools are operated by Francesco Prodomo, a sole trader registered in Italy
          (P.IVA 07242670482), trading as Dome.
        </p>
        <p style={s.p}>
          Location: Florence, Italy
          <br />
          Contact:{" "}
          <a href="mailto:hello@domelayer.com" style={s.link}>
            hello@domelayer.com
          </a>
        </p>

        {/* ── What these terms cover ── */}
        <h2 style={s.h2}>What these terms cover</h2>
        <p style={s.p}>
          By registering for and using any Dome AI tool, you agree to these terms. Please read them
          before registering. If you do not agree, do not use the tools.
        </p>
        <p style={s.p}>
          These terms apply to the Dome portfolio tools available at the subdomains listed above.
          They do not govern engagements where Dome designs or deploys AI systems for third-party
          organisations — those are governed by separate project agreements.
        </p>
        <p style={s.p}>
          These terms apply alongside our{" "}
          <a href="/privacy" style={s.link}>
            Privacy Policy
          </a>
          , which is incorporated by reference.
        </p>

        {/* ── The tools ── */}
        <h2 style={s.h2}>The tools</h2>
        <p style={s.p}>
          Dome provides a suite of free AI-assisted tools for exploring governance-driven operational
          AI concepts, including process analysis, document intelligence, data intelligence, and
          related demonstrations.
        </p>
        <p style={s.p}>
          The tools are provided free of charge on an "as is" basis for demonstration and evaluation
          purposes.
        </p>

        {/* ── Your account ── */}
        <h2 style={s.h2}>Your account</h2>
        <p style={s.p}>
          You register using your email address. We send a magic link each time you wish to sign in
          — no password is required or stored. You are responsible for keeping your email account
          secure.
        </p>
        <p style={s.p}>
          You may only register one account per email address. You may not share your account or
          register on behalf of another person without their knowledge and consent.
        </p>
        <p style={s.p}>
          We reserve the right to suspend or terminate accounts that breach these terms, are used in
          a way that is harmful to others, or compromise the integrity of the service.
        </p>

        {/* ── Acceptable use ── */}
        <h2 style={s.h2}>Acceptable use</h2>
        <p style={s.p}>
          You agree to use the Dome tools only for lawful purposes and in accordance with these
          terms.
        </p>
        <p
          style={{
            ...s.p,
            fontWeight: 600,
            color: "var(--color-text-primary)",
            marginBottom: "8px",
          }}
        >
          You must not:
        </p>
        <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
          {[
            "Upload files or enter content that you do not have the legal right to process. If content contains personal data of third parties, you are responsible for ensuring you have a lawful basis under GDPR or applicable law to process that data using a third-party AI service.",
            "Upload content containing special categories of personal data (health data, biometric data, political opinions, religious beliefs, or similar) unless you have a documented lawful basis and, where required, explicit consent from the relevant individuals.",
            "Attempt to reverse-engineer, extract model weights from, or systematically probe the underlying AI systems.",
            "Use the tools to generate content that is unlawful, defamatory, fraudulent, or harmful to others.",
            "Use automated means to access the tools at a scale that disrupts service availability.",
            "Attempt to access another user's data or circumvent authentication controls.",
          ].map((item) => (
            <li key={item.slice(0, 40)} style={s.li}>
              {item}
            </li>
          ))}
        </ul>

        {/* ── Data and AI processing ── */}
        <h2 style={s.h2}>Data and AI processing</h2>
        <p style={s.p}>
          When you use a Dome tool, content you submit is transmitted to an AI model for processing.
          Dome may store data derived from your use of the tools — including session state, saved
          analyses, and governance metadata — to provide the service. Full details of what is
          collected, how it is used, and how long it is retained are set out in the{" "}
          <a href="/privacy" style={s.link}>
            Privacy Policy
          </a>
          .
        </p>
        <p style={s.p}>
          You retain full ownership of all content you submit and all outputs generated from it.
          Dome claims no licence or rights over your inputs or outputs.
        </p>
        <p style={s.p}>
          You are responsible for ensuring that content you submit does not include confidential
          information belonging to third parties that you are not authorised to share with an external
          AI processing service.
        </p>

        {/* ── AI outputs disclaimer ── */}
        <h2 style={s.h2}>AI outputs — important disclaimer</h2>
        <div style={s.warning}>
          <p style={{ ...s.p, marginBottom: 0 }}>
            <strong style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>
              AI outputs are not professional advice.
            </strong>{" "}
            Nothing produced by the Dome tools constitutes legal, financial, procurement, compliance,
            operational, or any other form of professional advice. You should not act on AI-generated
            outputs without independent verification by a qualified professional.
          </p>
        </div>
        <p style={s.p}>
          The Dome tools use large language models to generate analyses, summaries, classifications,
          and recommendations. These outputs are generated automatically and are provided for
          informational and demonstration purposes only.
        </p>
        <p style={s.p}>
          Dome does not guarantee the accuracy, completeness, or fitness for purpose of any
          AI-generated output. AI models can produce errors and outputs that appear plausible but are
          factually incorrect. You are solely responsible for evaluating outputs before relying on
          them.
        </p>
        <p style={s.p}>
          This disclaimer is particularly important in regulated contexts — procurement, finance,
          trade compliance, legal, and similar domains where incorrect outputs could have material
          consequences.
        </p>

        {/* ── Availability ── */}
        <h2 style={s.h2}>Availability and changes</h2>
        <p style={s.p}>
          The Dome tools are provided free of charge and are subject to change, interruption, or
          discontinuation at any time. We will endeavour to give reasonable notice before significant
          changes or shutdowns, but make no commitments regarding uptime, availability, or feature
          continuity.
        </p>
        <p style={s.p}>We may add, modify, or remove features at any time.</p>

        {/* ── Intellectual property ── */}
        <h2 style={s.h2}>Intellectual property</h2>
        <p style={s.p}>
          The Dome name, logo, website, and tool interfaces are the property of Francesco Prodomo.
          You may not reproduce or use them without written permission.
        </p>
        <p style={s.p}>All rights to your submitted content and derived outputs remain with you.</p>

        {/* ── Limitation of liability ── */}
        <h2 style={s.h2}>Limitation of liability</h2>
        <p style={s.p}>
          To the fullest extent permitted by applicable law, Francesco Prodomo and Dome shall not be
          liable for any indirect, incidental, consequential, or punitive damages arising from your
          use of the tools, including losses arising from reliance on AI-generated outputs.
        </p>
        <p style={s.p}>
          Our total liability to you for any claim arising from use of the tools shall not exceed
          zero euros, reflecting that the tools are provided to you free of charge.
        </p>
        <p style={s.p}>
          Nothing in these terms excludes or limits liability for death or personal injury caused by
          negligence, fraud, or any other liability that cannot be excluded under Italian law.
        </p>

        {/* ── Governing law ── */}
        <h2 style={s.h2}>Governing law and jurisdiction</h2>
        <p style={s.p}>
          These terms are governed by Italian law. Any disputes arising from these terms or your use
          of the Dome tools shall be subject to the exclusive jurisdiction of the Tribunale di
          Firenze, Italy.
        </p>
        <p style={s.p}>
          If you are a consumer resident in another EU member state or the UK, you retain the benefit
          of any mandatory protections provided by the laws of your country of residence that cannot
          be excluded by contract.
        </p>

        {/* ── Changes to terms ── */}
        <h2 style={s.h2}>Changes to these terms</h2>
        <p style={s.p}>
          We may update these terms from time to time. If we make material changes, we will notify
          you by email at least 30 days before they take effect. Continued use of the tools after the
          effective date constitutes acceptance of the revised terms.
        </p>
        <p style={s.p}>
          The current version is always available at{" "}
          <a href="/terms" style={s.link}>
            domelayer.com/terms
          </a>
          .
        </p>

        {/* ── Contact ── */}
        <h2 style={s.h2}>Contact</h2>
        <p style={s.p}>
          <a href="mailto:hello@domelayer.com" style={s.link}>
            hello@domelayer.com
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
          <span>domelayer.com/terms</span>
          <a href="/privacy" style={{ ...s.link, color: "var(--color-text-tertiary)" }}>
            ← Privacy policy
          </a>
        </div>
      </main>
    </div>
  )
}
