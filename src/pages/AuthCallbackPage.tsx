"use client";

import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { setToken, sanitizeRedirect } from "@/lib/auth";
import {
  clearPendingConsent,
  getUserConsentStatus,
  isSupabaseConfigured,
  readPendingConsent,
  storePendingConsent,
  writeConsentToSupabase,
} from "@/lib/compliance";

type Status = "processing" | "consent-required" | "error";

export default function AuthCallbackPage() {
  const navigate = useNavigate();
  const [status, setStatus] = useState<Status>("processing");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Held in state so the consent interstitial can complete auth after acceptance
  const [storedToken, setStoredToken] = useState<{ token: string; expiresAt?: string } | null>(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [consentError, setConsentError] = useState<string | null>(null);
  const [consentSubmitting, setConsentSubmitting] = useState(false);

  const completeAuth = useCallback(
    (token: string, expiresAt?: string) => {
      setToken(token, expiresAt);
      const redirect = sanitizeRedirect(sessionStorage.getItem("dome_auth_redirect"));
      sessionStorage.removeItem("dome_auth_redirect");
      if (redirect.startsWith("http")) {
        window.location.href = redirect;
      } else {
        navigate(redirect, { replace: true });
      }
    },
    [navigate]
  );

  useEffect(() => {
    async function handleCallback() {
      // Check for errors in query params
      const queryParams = new URLSearchParams(window.location.search);
      const queryError =
        queryParams.get("error_description") ?? queryParams.get("error");
      if (queryError) {
        setStatus("error");
        setErrorMsg(decodeURIComponent(queryError));
        return;
      }

      // Extract token from hash
      const hash = window.location.hash.substring(1);
      const params = new URLSearchParams(hash);
      const accessToken = params.get("access_token");
      const tokenType = params.get("token_type");
      const errorParam = params.get("error_description") ?? params.get("error");

      if (errorParam) {
        setStatus("error");
        setErrorMsg(decodeURIComponent(errorParam));
        return;
      }

      if (!accessToken || tokenType !== "bearer") {
        setStatus("error");
        setErrorMsg(
          "No access token found in the link. Please request a new sign-in link."
        );
        return;
      }

      const expiresAtRaw = params.get("expires_at");
      const expiresAt = expiresAtRaw
        ? new Date(parseInt(expiresAtRaw, 10) * 1000).toISOString()
        : undefined;

      // If Supabase isn't configured (local dev without env vars), skip consent flow
      if (!isSupabaseConfigured()) {
        completeAuth(accessToken, expiresAt);
        return;
      }

      // Check whether this user has already consented (returning user)
      const { hasConsented } = await getUserConsentStatus(accessToken);

      if (hasConsented) {
        clearPendingConsent();
        completeAuth(accessToken, expiresAt);
        return;
      }

      // First-time user — look for consent recorded on this device
      const pendingConsent = readPendingConsent();
      if (pendingConsent) {
        await writeConsentToSupabase(accessToken, pendingConsent);
        clearPendingConsent();
        completeAuth(accessToken, expiresAt);
        return;
      }

      // Cross-device: user clicked the link on a different device, no localStorage data.
      // Show the consent interstitial before granting access.
      setStoredToken({ token: accessToken, expiresAt });
      setStatus("consent-required");
    }

    handleCallback();
  }, [completeAuth]);

  const handleConsentAccept = async () => {
    if (!storedToken || !termsAccepted) return;
    setConsentSubmitting(true);
    setConsentError(null);

    storePendingConsent(marketingConsent);
    const consent = readPendingConsent()!;
    const ok = await writeConsentToSupabase(storedToken.token, consent);
    clearPendingConsent();

    if (!ok) {
      setConsentError("Unable to save your consent record. Please try again.");
      setConsentSubmitting(false);
      return;
    }

    completeAuth(storedToken.token, storedToken.expiresAt);
  };

  // ── Shared styles ──
  const card: React.CSSProperties = {
    maxWidth: "400px",
    width: "100%",
    borderRadius: "12px",
    padding: "40px 32px",
    textAlign: "center",
  };

  const checkboxLabel: React.CSSProperties = {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    cursor: "pointer",
    textAlign: "left",
  };

  const checkboxInput: React.CSSProperties = {
    marginTop: "2px",
    width: "15px",
    height: "15px",
    accentColor: "var(--color-accent)",
    flexShrink: 0,
    cursor: "pointer",
  };

  const checkboxText: React.CSSProperties = {
    fontSize: "12px",
    color: "var(--color-text-secondary)",
    lineHeight: 1.55,
  };

  const linkStyle: React.CSSProperties = {
    color: "var(--color-accent)",
    textDecoration: "none",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--color-bg-base)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        fontFamily: "var(--font-sans)",
      }}
    >
      {status === "processing" && (
        <div className="login-card" style={card}>
          <div
            style={{
              width: "24px",
              height: "24px",
              border: "2px solid var(--color-border-default)",
              borderTopColor: "var(--color-accent)",
              borderRadius: "50%",
              animation: "spin 600ms linear infinite",
              margin: "0 auto 16px",
            }}
          />
          <p
            style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--color-accent)",
              marginBottom: "8px",
            }}
          >
            Signing in
          </p>
          <p style={{ fontSize: "14px", color: "var(--color-text-secondary)" }}>
            Verifying your sign-in link…
          </p>
        </div>
      )}

      {status === "consent-required" && (
        <div className="login-card" style={card}>
          <p
            style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--color-accent)",
              marginBottom: "12px",
            }}
          >
            Before you continue
          </p>
          <p
            style={{
              fontSize: "14px",
              color: "var(--color-text-secondary)",
              lineHeight: 1.6,
              marginBottom: "28px",
            }}
          >
            Please review and accept the terms to access your account.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              marginBottom: "24px",
            }}
          >
            <label style={checkboxLabel}>
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                style={checkboxInput}
              />
              <span style={checkboxText}>
                I have read and agree to the{" "}
                <a href="/terms" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/privacy" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                  Privacy Policy
                </a>
                .
              </span>
            </label>

            <label style={checkboxLabel}>
              <input
                type="checkbox"
                checked={marketingConsent}
                onChange={(e) => setMarketingConsent(e.target.checked)}
                style={checkboxInput}
              />
              <span style={checkboxText}>
                Keep me updated on Dome products and AI governance insights. Unsubscribe any time.
              </span>
            </label>
          </div>

          {consentError && (
            <p
              style={{
                fontSize: "12px",
                color: "var(--color-error, #DC2626)",
                marginBottom: "16px",
              }}
            >
              {consentError}
            </p>
          )}

          <button
            onClick={handleConsentAccept}
            disabled={!termsAccepted || consentSubmitting}
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
              cursor: !termsAccepted || consentSubmitting ? "not-allowed" : "pointer",
              opacity: !termsAccepted || consentSubmitting ? 0.45 : 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              transition: "opacity 150ms ease",
            }}
          >
            {consentSubmitting ? (
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
                Saving…
              </>
            ) : (
              "Continue to Dome"
            )}
          </button>
        </div>
      )}

      {status === "error" && (
        <div className="login-card" style={card}>
          <p
            style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--color-error, #DC2626)",
              marginBottom: "8px",
            }}
          >
            Sign-in failed
          </p>
          <p
            style={{
              fontSize: "14px",
              color: "var(--color-text-secondary)",
              marginBottom: "24px",
              lineHeight: 1.6,
            }}
          >
            {errorMsg}
          </p>
          <a
            href="/login"
            style={{
              fontSize: "13px",
              fontWeight: 600,
              color: "var(--color-accent)",
              textDecoration: "none",
            }}
          >
            Try again
          </a>
        </div>
      )}

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }

        .login-card {
          background-color: var(--color-bg-base);
          border: 1px solid var(--color-border-default);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
        }
        [data-theme="dark"] .login-card {
          background-color: var(--color-bg-subtle);
          border-color: var(--color-border-default);
          box-shadow: 0 0 0 1px rgba(0, 128, 255, 0.07), 0 8px 40px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </div>
  );
}
