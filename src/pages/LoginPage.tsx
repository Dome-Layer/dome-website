"use client";

import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const AUTH_BACKEND = "https://dome-process-analyzer-production.up.railway.app";

type Status = "idle" | "loading" | "sent" | "error";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get("redirect") ?? "/";

  // Store redirect destination so auth/callback can use it after cookie is set
  if (redirect !== "/") {
    sessionStorage.setItem("dome_auth_redirect", redirect);
  }

  const handleSubmit = async () => {
    if (!email.trim()) return;
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
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          background: "var(--color-bg-base)",
          border: "1px solid var(--color-border-default)",
          borderRadius: "12px",
          padding: "40px 32px",
        }}
      >
        {/* Logo */}
        <div style={{ marginBottom: "32px", textAlign: "center" }}>
          <span
            style={{
              fontSize: "20px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--color-text-primary)",
            }}
          >
            DOME
          </span>
        </div>

        {status === "sent" ? (
          <div style={{ textAlign: "center" }}>
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
              Check your inbox
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "var(--color-text-secondary)",
                lineHeight: 1.6,
              }}
            >
              We sent a sign-in link to <strong>{email}</strong>. Click it to
              continue — it expires in 60 minutes.
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
                color: "var(--color-text-primary)",
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
              style={{
                display: "block",
                width: "100%",
                fontSize: "14px",
                color: "var(--color-text-primary)",
                background: "var(--color-bg-base)",
                border: "1px solid var(--color-border-default)",
                borderRadius: "8px",
                padding: "10px 14px",
                marginBottom: errorMsg ? "8px" : "24px",
                outline: "none",
                boxSizing: "border-box",
              }}
            />

            {errorMsg && (
              <p
                style={{
                  fontSize: "12px",
                  color: "var(--color-error)",
                  marginBottom: "16px",
                }}
              >
                {errorMsg}
              </p>
            )}

            <button
              onClick={handleSubmit}
              disabled={status === "loading" || !email.trim()}
              style={{
                width: "100%",
                background: "var(--color-accent)",
                color: "#FFFFFF",
                border: "none",
                borderRadius: "8px",
                padding: "12px 24px",
                fontSize: "13px",
                fontWeight: 600,
                cursor: status === "loading" ? "not-allowed" : "pointer",
                opacity: status === "loading" || !email.trim() ? 0.5 : 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              {status === "loading" ? (
                <>
                  <span
                    style={{
                      width: "14px",
                      height: "14px",
                      border: "1.5px solid rgba(255,255,255,0.4)",
                      borderTopColor: "#FFFFFF",
                      borderRadius: "50%",
                      display: "inline-block",
                      animation: "spin 600ms linear infinite",
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

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        input:focus {
          border-color: var(--color-accent) !important;
          box-shadow: 0 0 0 3px var(--color-focus-ring);
        }
      `}</style>
    </div>
  );
}
