"use client";

import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { DomeLogo } from "../components/DomeLogo";
import { sanitizeRedirect } from "../lib/auth";
import { storePendingConsent } from "../lib/compliance";

const AUTH_BACKEND =
  import.meta.env.VITE_AUTH_BACKEND ??
  "https://dome-process-analyzer-production.up.railway.app";

type Status = "idle" | "loading" | "sent" | "error";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [searchParams] = useSearchParams();
  const redirect = sanitizeRedirect(searchParams.get("redirect"));

  if (redirect !== "/") {
    sessionStorage.setItem("dome_auth_redirect", redirect);
  }

  const handleSubmit = async () => {
    if (!email.trim() || !termsAccepted) return;
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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div
      className="login-bg"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        fontFamily: "var(--font-sans)",
      }}
    >
      {/* Logo above card */}
      <div style={{ marginBottom: "32px" }}>
        <DomeLogo size="md" />
      </div>

      {/* Card */}
      <div
        className="login-card"
        style={{
          width: "100%",
          maxWidth: "400px",
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
              Enter your email and we'll send you a sign-in link.
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

            {/* Consent checkboxes */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
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
            </div>

            <button
              onClick={handleSubmit}
              disabled={status === "loading" || !email.trim() || !termsAccepted}
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
                cursor: status === "loading" || !email.trim() || !termsAccepted ? "not-allowed" : "pointer",
                opacity: status === "loading" || !email.trim() || !termsAccepted ? 0.45 : 1,
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
          </>
        )}
      </div>

      {/* CTA below card */}
      <div
        style={{
          marginTop: "32px",
          textAlign: "center",
          maxWidth: "400px",
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

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }

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
