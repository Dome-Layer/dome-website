"use client";

import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { DomeLogo } from "../components/DomeLogo";
import { sanitizeRedirect } from "../lib/auth";
import { storePendingConsent, hasLocalConsent } from "../lib/compliance";
import { signInWithProvider, type OAuthProvider } from "../lib/supabase";

const AUTH_BACKEND =
  import.meta.env.VITE_AUTH_BACKEND ?? "https://auth.domelayer.com";

type Status = "idle" | "loading" | "sent" | "error";

const GitHubIcon = (
  <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 012-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

const GoogleIcon = (
  <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
    <path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 01-1.8 2.72v2.26h2.92c1.7-1.57 2.68-3.88 2.68-6.62z" />
    <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.8.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.7H.96v2.34A9 9 0 009 18z" />
    <path fill="#FBBC05" d="M3.97 10.72A5.4 5.4 0 013.68 9c0-.6.1-1.18.29-1.72V4.94H.96A9 9 0 000 9c0 1.45.35 2.83.96 4.06l3.01-2.34z" />
    <path fill="#EA4335" d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 00.96 4.94l3.01 2.34C4.68 5.16 6.66 3.58 9 3.58z" />
  </svg>
);

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [returningUser] = useState(() => hasLocalConsent());
  const [termsAccepted, setTermsAccepted] = useState(() => hasLocalConsent());
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [oauthLoading, setOauthLoading] = useState<OAuthProvider | null>(null);
  const [searchParams] = useSearchParams();
  const redirect = sanitizeRedirect(searchParams.get("redirect"));

  if (redirect !== "/") {
    sessionStorage.setItem("dome_auth_redirect", redirect);
  }

  // True while any sign-in action is in flight; gates every button so a user
  // can't fire magic-link and OAuth at once.
  const busy = status === "loading" || oauthLoading !== null;
  // Consent gate (compliance: required Terms checkbox). `termsAccepted` is
  // pre-true for returning users (hasLocalConsent), so they stay frictionless.
  const consentBlocked = !termsAccepted;

  const handleSubmit = async () => {
    if (!email.trim() || consentBlocked || busy) return;
    storePendingConsent(marketingConsent);
    setStatus("loading");
    setErrorMsg(null);

    try {
      const res = await fetch(`${AUTH_BACKEND}/api/v1/auth/magic-link`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.detail ?? "Failed to send magic link.");
      }

      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  const handleOAuth = async (provider: OAuthProvider) => {
    if (consentBlocked || busy) return;
    // Record consent on this device before redirecting so the callback can persist
    // it without showing the interstitial (terms + optional marketing).
    storePendingConsent(marketingConsent);
    setOauthLoading(provider);
    setErrorMsg(null);

    const { error } = await signInWithProvider(provider);
    // On success the browser navigates away to the provider; we only reach here
    // if initiation failed.
    if (error) {
      setOauthLoading(null);
      setErrorMsg(error);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSubmit();
  };

  const spinnerDark: React.CSSProperties = {
    width: "14px",
    height: "14px",
    border: "1.5px solid var(--color-border-strong)",
    borderTopColor: "var(--color-text-primary)",
    borderRadius: "50%",
    display: "inline-block",
    animation: "spin 600ms linear infinite",
    flexShrink: 0,
  };

  const providerButton = (
    provider: OAuthProvider,
    label: string,
    icon: React.ReactNode
  ) => (
    <button
      type="button"
      onClick={() => handleOAuth(provider)}
      disabled={busy || consentBlocked}
      aria-label={`Continue with ${label}`}
      className="login-provider-btn"
    >
      {oauthLoading === provider ? (
        <>
          <span style={spinnerDark} />
          Connecting…
        </>
      ) : (
        <>
          {icon}
          Continue with {label}
        </>
      )}
    </button>
  );

  return (
    <div className="login-split">
      {/* ── Left: sign-in form ── */}
      <div className="login-form-pane login-bg">
        <div className="login-form-stack">
          <div style={{ marginBottom: "32px" }}>
            <DomeLogo size="md" />
          </div>

          <div
            className="login-card"
            style={{
              width: "100%",
              borderRadius: "12px",
              padding: "40px 32px",
            }}
          >
            {status === "sent" ? (
              <div style={{ textAlign: "center" }}>
                <div style={{ marginBottom: "20px" }}>
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    fill="none"
                    style={{ margin: "0 auto", display: "block" }}
                  >
                    <rect
                      x="2"
                      y="4"
                      width="20"
                      height="16"
                      rx="3"
                      stroke="#0080FF"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M2 8l10 6 10-6"
                      stroke="#0080FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--color-accent)",
                    marginBottom: "10px",
                  }}
                >
                  Check your inbox
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.65,
                  }}
                >
                  We sent a sign-in link to{" "}
                  <strong style={{ color: "var(--color-text-primary)", fontWeight: 500 }}>
                    {email}
                  </strong>
                  . Click it to continue — it expires in 60 minutes.
                </p>
              </div>
            ) : (
              <>
                <h1
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    color: "var(--color-text-primary)",
                    marginBottom: "8px",
                  }}
                >
                  Sign in
                </h1>
                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--color-text-secondary)",
                    marginBottom: "32px",
                    lineHeight: 1.6,
                  }}
                >
                  Continue with your email or a provider to access the Dome AI tools.
                </p>

                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "var(--color-text-secondary)",
                    marginBottom: "8px",
                  }}
                >
                  Email address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="you@company.com"
                  autoFocus
                  className="login-input"
                  style={{
                    display: "block",
                    width: "100%",
                    fontSize: "14px",
                    color: "var(--color-text-primary)",
                    borderRadius: "8px",
                    padding: "10px 14px",
                    marginBottom: errorMsg ? "8px" : "24px",
                    outline: "none",
                    boxSizing: "border-box",
                    transition: "border-color 150ms ease, box-shadow 150ms ease",
                  }}
                />

                {errorMsg && (
                  <p
                    style={{
                      fontSize: "12px",
                      color: "var(--color-dome-status-error)",
                      marginBottom: "16px",
                    }}
                  >
                    {errorMsg}
                  </p>
                )}

                {/* Consent */}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
                  {returningUser ? (
                    <p style={{ fontSize: "12px", color: "var(--color-text-tertiary)", lineHeight: 1.55 }}>
                      By signing in, you agree to our{" "}
                      <a
                        href="/terms"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "var(--color-accent)", textDecoration: "none" }}
                      >
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a
                        href="/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "var(--color-accent)", textDecoration: "none" }}
                      >
                        Privacy Policy
                      </a>
                      .
                    </p>
                  ) : (
                    <>
                      <label
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "10px",
                          cursor: "pointer",
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={termsAccepted}
                          onChange={(e) => setTermsAccepted(e.target.checked)}
                          style={{
                            marginTop: "2px",
                            width: "15px",
                            height: "15px",
                            accentColor: "var(--color-accent)",
                            flexShrink: 0,
                            cursor: "pointer",
                          }}
                        />
                        <span style={{ fontSize: "12px", color: "var(--color-text-secondary)", lineHeight: 1.55 }}>
                          I have read and agree to the{" "}
                          <a
                            href="/terms"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "var(--color-accent)", textDecoration: "none" }}
                          >
                            Terms of Service
                          </a>{" "}
                          and{" "}
                          <a
                            href="/privacy"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "var(--color-accent)", textDecoration: "none" }}
                          >
                            Privacy Policy
                          </a>
                          .
                        </span>
                      </label>

                      <label
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "10px",
                          cursor: "pointer",
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={marketingConsent}
                          onChange={(e) => setMarketingConsent(e.target.checked)}
                          style={{
                            marginTop: "2px",
                            width: "15px",
                            height: "15px",
                            accentColor: "var(--color-accent)",
                            flexShrink: 0,
                            cursor: "pointer",
                          }}
                        />
                        <span style={{ fontSize: "12px", color: "var(--color-text-secondary)", lineHeight: 1.55 }}>
                          Keep me updated on Dome products and AI governance insights. Unsubscribe any time.
                        </span>
                      </label>
                    </>
                  )}
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={busy || !email.trim() || consentBlocked}
                  style={{
                    width: "100%",
                    background: "var(--color-accent)",
                    color: "#FFFFFF",
                    border: "none",
                    borderRadius: "8px",
                    padding: "11px 24px",
                    fontSize: "13px",
                    fontWeight: 600,
                    letterSpacing: "0.01em",
                    cursor: busy || !email.trim() || consentBlocked ? "not-allowed" : "pointer",
                    opacity: busy || !email.trim() || consentBlocked ? 0.45 : 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    transition: "opacity 150ms ease",
                  }}
                >
                  {status === "loading" ? (
                    <>
                      <span
                        style={{
                          width: "14px",
                          height: "14px",
                          border: "1.5px solid rgba(255,255,255,0.35)",
                          borderTopColor: "#FFFFFF",
                          borderRadius: "50%",
                          display: "inline-block",
                          animation: "spin 600ms linear infinite",
                          flexShrink: 0,
                        }}
                      />
                      Sending…
                    </>
                  ) : (
                    "Send sign-in link"
                  )}
                </button>

                {/* Divider */}
                <div className="login-divider">
                  <span>or continue with</span>
                </div>

                {/* Provider sign-in */}
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {providerButton("github", "GitHub", GitHubIcon)}
                  {providerButton("google", "Google", GoogleIcon)}
                </div>
              </>
            )}
          </div>

          {/* CTA below card */}
          <div
            style={{
              marginTop: "32px",
              textAlign: "center",
              width: "100%",
            }}
          >
            <p
              style={{
                fontSize: "13px",
                color: "var(--color-text-tertiary)",
                marginBottom: "12px",
                lineHeight: 1.6,
              }}
            >
              Discover how Dome architects governance-driven AI for regulated enterprises.
            </p>
            <a
              href="https://domelayer.com"
              target="_blank"
              rel="noopener noreferrer"
              className="login-cta-link"
            >
              Explore Dome →
            </a>
          </div>
        </div>
      </div>

      {/* ── Right: branded panel (hidden on mobile) ── */}
      <div className="login-brand-pane" aria-hidden="true">
        <div className="login-brand-content">
          <p className="login-brand-eyebrow">Dome</p>
          <h2 className="login-brand-title">
            Governance-driven AI for regulated enterprises.
          </h2>
          <p className="login-brand-text">
            Auditable analysis, documents, and decisioning — one secure sign-in across
            every Dome tool.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }

        /* ── Split layout ── */
        .login-split {
          min-height: 100vh;
          display: flex;
          font-family: var(--font-sans);
        }
        .login-form-pane {
          flex: 1 1 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }
        .login-form-stack {
          width: 100%;
          max-width: 400px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* ── Branded panel (right). Maintainer: drop the final image by adding a
           url(...) layer to background-image below, e.g.
           background-image: linear-gradient(135deg, rgba(0,128,255,0.22), rgba(10,10,10,0.92)), url("/login-panel.jpg"); ── */
        .login-brand-pane {
          flex: 1 1 50%;
          position: relative;
          display: flex;
          align-items: flex-end;
          padding: 48px;
          overflow: hidden;
          background-color: var(--color-bg-base);
          background-image: linear-gradient(135deg, rgba(0, 128, 255, 0.22), rgba(10, 10, 10, 0.92));
          background-size: cover;
          background-position: center;
        }
        .login-brand-content { position: relative; z-index: 1; max-width: 440px; color: #FFFFFF; }
        .login-brand-eyebrow {
          font-size: 11px; font-weight: 600; letter-spacing: 0.18em;
          text-transform: uppercase; color: rgba(255, 255, 255, 0.7); margin-bottom: 16px;
        }
        .login-brand-title {
          font-size: 30px; font-weight: 700; letter-spacing: -0.02em;
          line-height: 1.2; margin-bottom: 16px;
        }
        .login-brand-text { font-size: 15px; line-height: 1.6; color: rgba(255, 255, 255, 0.85); }

        @media (max-width: 768px) {
          .login-brand-pane { display: none; }
        }

        /* ── Light theme (default) ── */
        .login-bg {
          background-color: var(--color-bg-muted); /* #F5F5F5 */
        }
        .login-card {
          background-color: var(--color-bg-base); /* #FFFFFF */
          border: 1px solid var(--color-border-default);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
        }
        .login-input {
          background-color: var(--color-bg-subtle); /* #FAFAFA */
          border: 1px solid var(--color-border-default);
        }

        /* ── Dark theme overrides ── */
        [data-theme="dark"] .login-bg {
          background-color: var(--color-bg-base); /* #0A0A0A */
          background-image: radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 24px 24px;
        }
        [data-theme="dark"] .login-card {
          background-color: var(--color-bg-subtle); /* #111111 */
          border-color: var(--color-border-default); /* #262626 */
          box-shadow: 0 0 0 1px rgba(0, 128, 255, 0.07), 0 8px 40px rgba(0, 0, 0, 0.5);
        }
        [data-theme="dark"] .login-input {
          background-color: var(--color-bg-base); /* #0A0A0A */
          border-color: var(--color-border-strong); /* #404040 */
        }

        /* ── Divider ── */
        .login-divider {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 20px 0;
        }
        .login-divider::before,
        .login-divider::after {
          content: "";
          flex: 1;
          height: 1px;
          background: var(--color-border-default);
        }
        .login-divider span {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-text-tertiary);
        }

        /* ── Provider buttons ── */
        .login-provider-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background-color: var(--color-bg-base);
          color: var(--color-text-primary);
          border: 1px solid var(--color-border-default);
          border-radius: 8px;
          padding: 10px 16px;
          font-size: 13px;
          font-weight: 600;
          font-family: var(--font-sans);
          cursor: pointer;
          transition: background-color 150ms ease, border-color 150ms ease, opacity 150ms ease;
        }
        .login-provider-btn:hover:not(:disabled) {
          background-color: var(--color-bg-subtle);
          border-color: var(--color-border-strong);
        }
        .login-provider-btn:disabled {
          opacity: 0.45;
          cursor: not-allowed;
        }
        .login-provider-btn:focus-visible {
          outline: none;
          border-color: var(--color-accent);
          box-shadow: 0 0 0 3px var(--color-focus-ring);
        }
        [data-theme="dark"] .login-provider-btn {
          background-color: var(--color-bg-base);
          border-color: var(--color-border-strong);
        }

        /* ── Shared ── */
        .login-cta-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 13px;
          font-weight: 600;
          color: var(--color-accent);
          text-decoration: none;
          letter-spacing: 0.01em;
          transition: opacity 150ms ease;
        }
        .login-cta-link:hover { opacity: 0.75; }

        .login-input::placeholder { color: var(--color-text-tertiary); }
        .login-input:focus {
          border-color: var(--color-accent) !important;
          box-shadow: 0 0 0 3px var(--color-focus-ring) !important;
        }
      `}</style>
    </div>
  );
}
