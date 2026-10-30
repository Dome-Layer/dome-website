"use client";

import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SignInSurface } from "../components/auth/SignInSurface";
import { ThemeToggle } from "../components/ThemeToggle";
import { useOptionalTheme } from "../lib/ThemeContext";
import { sanitizeRedirect } from "../lib/auth";
import { storePendingConsent, hasLocalConsent } from "../lib/compliance";
import { signInWithProvider, type OAuthProvider } from "../lib/supabase";
import { track } from "../lib/analytics";

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

// The page's own theme switch. Outside the app shell (the page rendered on its own, as in its
// tests) there is no theme provider and nothing to switch, so it is left out.
function LoginThemeToggle() {
  return useOptionalTheme() ? <ThemeToggle className="login-theme" /> : null;
}

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

  // Persist a genuine tool redirect (dome-ui AuthGuard → /login?redirect=<tool>) so the
  // callback can return the user there. When there's no valid tool redirect this visit,
  // drop any value left from a prior, abandoned tool-initiated login; otherwise that
  // stale entry would silently bounce a fresh, direct sign-in to the old tool.
  if (redirect !== "/") {
    sessionStorage.setItem("dome_auth_redirect", redirect);
  } else {
    sessionStorage.removeItem("dome_auth_redirect");
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
    track("sign_in_started", { method: "magic_link" });
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
    track("sign_in_started", { method: provider });
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

  // Layout and look follow the home hero (Sprint LX, DESIGN_SYSTEM v2.6): the hero surface on one
  // side or across the top, the form on the page colour, no top bar. Only the presentation is
  // here; every handler, state and request above is unchanged.
  return (
    <div className="login-page">
      <SignInSurface />
      <LoginThemeToggle />

      <main className="login-main">
        <div className="login-stack">
          <div className="login-card">
            {status === "sent" ? (
              <div className="login-sent">
                <div className="login-sent-icon" aria-hidden="true">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M2 8l10 6 10-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="login-eyebrow">Check your inbox</p>
                <p className="login-sent-text">
                  We sent a sign-in link to <strong>{email}</strong>. Click it to continue. It expires in 60 minutes.
                </p>
              </div>
            ) : (
              <>
                <h1 className="login-title">Sign in</h1>
                <p className="login-lead">
                  Continue with your email or a provider to access the Dome AI tools.
                </p>

                <label htmlFor="login-email" className="login-label">
                  Email address
                </label>
                <input
                  id="login-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="you@company.com"
                  autoFocus
                  aria-invalid={errorMsg ? true : undefined}
                  aria-describedby={errorMsg ? "login-error" : undefined}
                  className={errorMsg ? "login-input login-input--error" : "login-input"}
                />

                {errorMsg && (
                  <p id="login-error" className="login-error">
                    {errorMsg}
                  </p>
                )}

                {/* Consent */}
                <div className="login-consent">
                  {returningUser ? (
                    <p className="login-terms-note">
                      By signing in, you agree to our{" "}
                      <a href="/terms" target="_blank" rel="noopener noreferrer">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="/privacy" target="_blank" rel="noopener noreferrer">
                        Privacy Policy
                      </a>
                      .
                    </p>
                  ) : (
                    <>
                      <label className="login-check">
                        <input
                          type="checkbox"
                          checked={termsAccepted}
                          onChange={(e) => setTermsAccepted(e.target.checked)}
                        />
                        <span>
                          I have read and agree to the{" "}
                          <a href="/terms" target="_blank" rel="noopener noreferrer">
                            Terms of Service
                          </a>{" "}
                          and{" "}
                          <a href="/privacy" target="_blank" rel="noopener noreferrer">
                            Privacy Policy
                          </a>
                          .
                        </span>
                      </label>

                      <label className="login-check">
                        <input
                          type="checkbox"
                          checked={marketingConsent}
                          onChange={(e) => setMarketingConsent(e.target.checked)}
                        />
                        <span>
                          Keep me updated on Dome products and AI governance insights. Unsubscribe any time.
                        </span>
                      </label>
                    </>
                  )}
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={busy || !email.trim() || consentBlocked}
                  className="login-primary"
                >
                  {status === "loading" ? (
                    <>
                      <span className="login-spinner" />
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
                <div className="login-providers">
                  {providerButton("github", "GitHub", GitHubIcon)}
                  {providerButton("google", "Google", GoogleIcon)}
                </div>
              </>
            )}
          </div>

          {/* CTA below the form */}
          <div className="login-cta">
            <p>Discover how Dome architects governance-driven AI for regulated enterprises.</p>
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
      </main>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }

        /* ════════════════════════════════════════════════════════════════
           The page colour behind the form, and the colour the blue fades into.
           Light tablets sit on the muted grey so the form card stands out.
           ════════════════════════════════════════════════════════════════ */
        .login-page {
          --login-page: var(--color-bg-base);
          position: relative;
          min-height: 100vh;
          background: var(--login-page);
          font-family: var(--font-sans);
          color: var(--color-text-primary);
        }

        /* ── The blue side: phones (< 768px), a band with the record ── */
        .login-surface {
          position: relative;
          height: 220px;
          overflow: hidden;
          background: linear-gradient(180deg, var(--color-hero-surface) 0, var(--color-hero-surface) 96px, var(--login-page) 220px);
        }
        /* --dome-banner-h: the staging banner's height (0 in production), so nothing sits under it. */
        .login-home {
          position: absolute;
          z-index: 2;
          top: calc(16px + var(--dome-banner-h, 0px));
          left: 24px;
          display: flex;
          align-items: center;
          height: 32px;
          color: #FFFFFF;
          border-radius: 6px;
        }
        .login-home:focus-visible { outline: none; box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.7); }
        .login-brand { display: none; }
        .login-dome { display: none; }
        .login-record {
          position: absolute;
          top: calc(46px + var(--dome-banner-h, 0px));
          left: 50%;
          width: 390px;
          height: 200px;
          transform: translateX(-50%);
        }

        /* The theme switch sits on the blue at the top right below 1024px. */
        .login-page .login-theme {
          position: absolute;
          z-index: 2;
          top: calc(12px + var(--dome-banner-h, 0px));
          right: 16px;
          width: 40px;
          height: 40px;
          color: #FFFFFF !important;
        }
        .login-page .login-theme:hover { background: rgba(255, 255, 255, 0.14) !important; }
        .login-page .login-theme:focus-visible { outline: none; box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.7); }

        .login-main { padding: 8px 24px 40px; }
        .login-stack {
          width: 100%;
          max-width: 400px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        /* ── Tablet (768 to 1023px): the dome band, the form in a card under it ── */
        @media (min-width: 768px) and (max-width: 1023px) {
          [data-theme="light"] .login-page { --login-page: var(--color-bg-muted); }
          .login-surface {
            height: 380px;
            background:
              linear-gradient(180deg, transparent 0%, transparent 66%, var(--login-page) 100%),
              radial-gradient(ellipse 58% 64% at 50% 100%, var(--color-hero-surface-glow) 0%, var(--color-hero-surface) 44%, var(--color-hero-surface-deep) 100%);
          }
          .login-home { left: 48px; }
          .login-page .login-theme { right: 40px; }
          .login-record { display: none; }
          .login-dome {
            display: block;
            position: absolute;
            top: 92px;
            left: calc(50% - 190.5px);
            width: 382px;
            height: 284px;
          }
          .login-main { margin-top: -64px; padding: 0 24px 48px; position: relative; }
          .login-stack { max-width: 440px; }
          .login-card {
            padding: 40px 36px;
            border-radius: var(--radius-lg);
            background: var(--color-bg-base);
            border: 1px solid var(--color-border-default);
            box-shadow: 0 12px 48px rgba(0, 0, 0, 0.12);
          }
          [data-theme="dark"] .login-card {
            background: var(--color-bg-subtle);
            box-shadow: 0 0 0 1px rgba(0, 128, 255, 0.08), 0 24px 64px rgba(0, 0, 0, 0.6);
          }
        }

        /* ── From 1024px: the full-bleed split, no top bar ──
           The blue side is 58% of the width, at most 1000px, and the full height of the window.
           The dome is sized to that side (cqw, cqh) and keeps 40px clear of the brand line. */
        @media (min-width: 1024px) {
          .login-page { display: flex; }
          .login-surface {
            flex: 0 0 min(58%, 1000px);
            position: sticky;
            top: 0;
            height: 100vh;
            container-type: size;
            background: radial-gradient(ellipse 62% 62% at 60% 100%, var(--color-hero-surface-glow) 0%, var(--color-hero-surface) 46%, var(--color-hero-surface-deep) 100%);
          }
          .login-home { top: calc(40px + var(--dome-banner-h, 0px)); left: 64px; }
          .login-brand {
            display: block;
            position: relative;
            z-index: 1;
            max-width: 480px;
            padding: 136px 64px 0;
            color: #FFFFFF;
          }
          .login-brand-title {
            margin: 0 0 18px;
            color: #FFFFFF; /* over the global heading colour */
            font-size: 38px;
            line-height: 1.15;
            font-weight: 700;
            letter-spacing: -0.025em;
          }
          .login-brand-text { margin: 0; max-width: 420px; font-size: 17px; line-height: 1.6; color: #FFFFFF; }
          .login-record { display: none; }
          .login-dome {
            --dome-w: max(0px, min(84cqw, calc((100cqh - 430px) * 1.5)));
            display: block;
            position: absolute;
            width: var(--dome-w);
            height: calc(var(--dome-w) * 0.742);
            left: calc(60cqw - var(--dome-w) * 0.4988);
            bottom: calc(24px - var(--dome-w) * 0.0746);
          }

          .login-page .login-theme {
            top: calc(28px + var(--dome-banner-h, 0px));
            right: 32px;
            color: var(--color-text-secondary) !important;
          }
          .login-page .login-theme:hover { background: var(--color-bg-muted) !important; color: var(--color-text-primary) !important; }
          .login-page .login-theme:focus-visible { box-shadow: 0 0 0 3px var(--color-focus-ring); }

          .login-main {
            flex: 1 1 auto;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 72px 48px;
            box-sizing: border-box;
          }
          .login-stack { max-width: 360px; gap: 40px; }
        }
        @media (min-width: 1600px) {
          .login-home { left: 80px; }
          .login-brand { padding: 144px 80px 0; }
          .login-brand-title { font-size: 44px; }
          .login-dome { --dome-w: max(0px, min(84cqw, calc((100cqh - 470px) * 1.5))); }
        }

        /* ════════════════════════════════════════════════════════════════
           The form (every width)
           ════════════════════════════════════════════════════════════════ */
        .login-title {
          margin: 0 0 8px;
          font-size: 24px;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: var(--color-text-primary);
        }
        .login-lead { margin: 0 0 28px; font-size: 14px; line-height: 1.6; color: var(--color-text-secondary); }
        .login-label {
          display: block;
          margin-bottom: 8px;
          font-size: 13px;
          font-weight: 500;
          color: var(--color-text-secondary);
        }
        .login-input {
          display: block;
          width: 100%;
          height: 44px;
          box-sizing: border-box;
          margin-bottom: 24px;
          padding: 0 14px;
          border-radius: 8px;
          font-family: inherit;
          font-size: 15px;
          color: var(--color-text-primary);
          background: var(--color-bg-subtle);
          border: 1px solid var(--color-border-strong);
          outline: none;
          transition: border-color 150ms ease, box-shadow 150ms ease;
        }
        [data-theme="dark"] .login-input { background: var(--color-bg-base); }
        .login-input::placeholder { color: var(--color-text-tertiary); }
        .login-input:focus { border-color: var(--color-accent); box-shadow: 0 0 0 3px var(--color-focus-ring); }
        .login-input--error { margin-bottom: 8px; border-color: var(--login-error); }

        /* #DC2626 is 3.9:1 on the dark page, so dark uses a lighter red (6.9:1). */
        .login-page { --login-error: var(--color-dome-status-error); }
        [data-theme="dark"] .login-page { --login-error: #F87171; }
        .login-error { margin: 0 0 20px; font-size: 13px; line-height: 1.5; color: var(--login-error); }

        .login-consent { display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px; }
        .login-terms-note { margin: 0; font-size: 12px; line-height: 1.55; color: var(--color-text-tertiary); }
        .login-check { display: flex; align-items: flex-start; gap: 10px; cursor: pointer; }
        .login-check input {
          flex-shrink: 0;
          width: 16px;
          height: 16px;
          margin: 2px 0 0;
          accent-color: var(--color-accent);
          cursor: pointer;
        }
        .login-check span { font-size: 12px; line-height: 1.55; color: var(--color-text-secondary); }
        .login-consent a { color: var(--color-text-accent); text-decoration: underline; text-underline-offset: 2px; }

        .login-primary {
          width: 100%;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border: none;
          border-radius: 8px;
          background: var(--color-accent);
          color: #FFFFFF;
          font-family: inherit;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.01em;
          cursor: pointer;
          transition: background-color 150ms ease, opacity 150ms ease;
        }
        .login-primary:hover:not(:disabled) { background: var(--color-accent-hover); }
        .login-primary:disabled { opacity: 0.45; cursor: not-allowed; }
        .login-primary:focus-visible { outline: none; box-shadow: 0 0 0 3px var(--color-focus-ring); }
        .login-spinner {
          width: 14px;
          height: 14px;
          flex-shrink: 0;
          display: inline-block;
          border: 1.5px solid rgba(255, 255, 255, 0.35);
          border-top-color: #FFFFFF;
          border-radius: 50%;
          animation: spin 600ms linear infinite;
        }

        .login-divider { display: flex; align-items: center; gap: 12px; margin: 20px 0; }
        .login-divider::before,
        .login-divider::after { content: ""; flex: 1; height: 1px; background: var(--color-border-default); }
        .login-divider span {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-text-tertiary);
        }

        .login-providers { display: flex; flex-direction: column; gap: 10px; }
        .login-provider-btn {
          width: 100%;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border-radius: 8px;
          border: 1px solid var(--color-border-strong);
          background: var(--color-bg-base);
          color: var(--color-text-primary);
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 150ms ease, border-color 150ms ease, opacity 150ms ease;
        }
        .login-provider-btn:hover:not(:disabled) { background: var(--color-bg-muted); }
        .login-provider-btn:disabled { opacity: 0.45; cursor: not-allowed; }
        .login-provider-btn:focus-visible { outline: none; border-color: var(--color-accent); box-shadow: 0 0 0 3px var(--color-focus-ring); }

        /* ── Link sent ── */
        .login-sent { display: flex; flex-direction: column; align-items: center; text-align: center; }
        .login-sent-icon {
          width: 64px;
          height: 64px;
          margin-bottom: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--color-accent-subtle);
          color: var(--color-accent);
        }
        [data-theme="dark"] .login-sent-icon { color: var(--color-text-accent); }
        .login-eyebrow {
          margin: 0 0 12px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--color-text-accent);
        }
        .login-sent-text { margin: 0; max-width: 320px; font-size: 15px; line-height: 1.65; color: var(--color-text-secondary); }
        .login-sent-text strong { color: var(--color-text-primary); font-weight: 600; }

        /* ── Under the form ── */
        .login-cta { text-align: center; }
        .login-cta p { margin: 0 0 10px; font-size: 13px; line-height: 1.6; color: var(--color-text-tertiary); }
        .login-cta-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 13px;
          font-weight: 600;
          color: var(--color-text-accent);
          text-decoration: none;
          letter-spacing: 0.01em;
          transition: opacity 150ms ease;
        }
        .login-cta-link:hover { opacity: 0.75; }
      `}</style>
    </div>
  );
}
