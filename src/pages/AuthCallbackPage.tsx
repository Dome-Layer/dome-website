"use client";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setToken } from "@/lib/auth";

export default function AuthCallbackPage() {
  const navigate = useNavigate();
  const [status, setStatus] = useState<"processing" | "error">("processing");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const queryError =
      queryParams.get("error_description") ?? queryParams.get("error");

    if (queryError) {
      setStatus("error");
      setErrorMsg(decodeURIComponent(queryError));
      return;
    }

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

    if (accessToken && tokenType === "bearer") {
      const expiresAtRaw = params.get("expires_at");
      const expiresAt = expiresAtRaw
        ? new Date(parseInt(expiresAtRaw, 10) * 1000).toISOString()
        : undefined;

      // Set the shared .domelayer.com cookie
      setToken(accessToken, expiresAt);

      // Redirect to intended destination (set by login page) or default
      const redirect = sessionStorage.getItem("dome_auth_redirect") ?? "/";
      sessionStorage.removeItem("dome_auth_redirect");

      // If redirect is an external subdomain URL, use window.location
      if (redirect.startsWith("http")) {
        window.location.href = redirect;
      } else {
        navigate(redirect, { replace: true });
      }
      return;
    }

    setStatus("error");
    setErrorMsg(
      "No access token found in the link. Please request a new sign-in link."
    );
  }, [navigate]);

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
          maxWidth: "360px",
          width: "100%",
          background: "var(--color-bg-base)",
          border: "1px solid var(--color-border-default)",
          borderRadius: "12px",
          padding: "40px 32px",
          textAlign: "center",
        }}
      >
        {status === "processing" ? (
          <>
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
          </>
        ) : (
          <>
            <p
              style={{
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--color-error)",
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
          </>
        )}
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
