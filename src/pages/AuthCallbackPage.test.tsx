import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import AuthCallbackPage from "./AuthCallbackPage";

// ---------------------------------------------------------------------------
// Mocks
// ---------------------------------------------------------------------------

const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual<typeof import("react-router-dom")>(
    "react-router-dom"
  );
  return { ...actual, useNavigate: () => mockNavigate };
});

vi.mock("@/lib/auth", async () => {
  const actual = await vi.importActual<typeof import("@/lib/auth")>(
    "@/lib/auth"
  );
  return {
    ...actual,
    setToken: vi.fn(),
  };
});

vi.mock("@/lib/compliance", () => ({
  isSupabaseConfigured: vi.fn(() => false),
  getUserConsentStatus: vi.fn(async () => ({ hasConsented: false })),
  writeConsentToSupabase: vi.fn(async () => true),
  readPendingConsent: vi.fn(() => null),
  storePendingConsent: vi.fn(),
  clearPendingConsent: vi.fn(),
}));

vi.mock("@/lib/supabase", () => ({
  exchangeOAuthCode: vi.fn(),
}));

import { setToken } from "@/lib/auth";
import {
  isSupabaseConfigured,
  getUserConsentStatus,
  writeConsentToSupabase,
  readPendingConsent,
  storePendingConsent,
  clearPendingConsent,
} from "@/lib/compliance";
import { exchangeOAuthCode } from "@/lib/supabase";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function setLocation({
  hash = "",
  search = "",
}: { hash?: string; search?: string } = {}) {
  Object.defineProperty(window, "location", {
    value: {
      ...window.location,
      hash,
      search,
      hostname: "localhost",
      href: `http://localhost/auth/callback${search}${hash}`,
    },
    writable: true,
    configurable: true,
  });
}

function renderCallback() {
  return render(
    <MemoryRouter initialEntries={["/auth/callback"]}>
      <AuthCallbackPage />
    </MemoryRouter>
  );
}

// ---------------------------------------------------------------------------
// Setup
// ---------------------------------------------------------------------------

beforeEach(() => {
  vi.clearAllMocks();
  // Default: hash with valid token, search empty
  setLocation({
    hash: "#access_token=test-token-123&token_type=bearer&expires_at=9999999999",
  });
  sessionStorage.clear();
});

// ---------------------------------------------------------------------------
// Error states
// ---------------------------------------------------------------------------

describe("AuthCallbackPage — error states", () => {
  it("shows error when query params contain error", async () => {
    setLocation({ search: "?error=access_denied" });
    renderCallback();
    await waitFor(() => {
      expect(screen.getByText("Sign-in failed")).toBeInTheDocument();
    });
    expect(screen.getByText("access_denied")).toBeInTheDocument();
  });

  it("shows error when query params contain error_description", async () => {
    setLocation({ search: "?error_description=Link+expired" });
    renderCallback();
    await waitFor(() => {
      expect(screen.getByText("Sign-in failed")).toBeInTheDocument();
    });
    expect(screen.getByText("Link expired")).toBeInTheDocument();
  });

  it("shows error when hash contains error", async () => {
    setLocation({ hash: "#error=server_error&error_description=Something+broke" });
    renderCallback();
    await waitFor(() => {
      expect(screen.getByText("Sign-in failed")).toBeInTheDocument();
    });
    expect(screen.getByText("Something broke")).toBeInTheDocument();
  });

  it("shows error when access_token is missing", async () => {
    setLocation({ hash: "#token_type=bearer" });
    renderCallback();
    await waitFor(() => {
      expect(screen.getByText("Sign-in failed")).toBeInTheDocument();
    });
    expect(
      screen.getByText(/no access token found/i)
    ).toBeInTheDocument();
  });

  it("shows error when token_type is not bearer", async () => {
    setLocation({ hash: "#access_token=tok&token_type=mac" });
    renderCallback();
    await waitFor(() => {
      expect(screen.getByText("Sign-in failed")).toBeInTheDocument();
    });
  });
});

// ---------------------------------------------------------------------------
// Happy path — Supabase not configured (local dev)
// ---------------------------------------------------------------------------

describe("AuthCallbackPage — Supabase not configured", () => {
  it("completes auth immediately when Supabase is not configured", async () => {
    vi.mocked(isSupabaseConfigured).mockReturnValue(false);
    renderCallback();
    await waitFor(() => {
      expect(setToken).toHaveBeenCalledWith("test-token-123", expect.any(String));
    });
    expect(mockNavigate).toHaveBeenCalledWith("/app", { replace: true });
  });
});

// ---------------------------------------------------------------------------
// Happy path — returning user (already consented)
// ---------------------------------------------------------------------------

describe("AuthCallbackPage — returning user", () => {
  it("completes auth without consent screen for returning user", async () => {
    vi.mocked(isSupabaseConfigured).mockReturnValue(true);
    vi.mocked(getUserConsentStatus).mockResolvedValue({ hasConsented: true });
    renderCallback();
    await waitFor(() => {
      expect(setToken).toHaveBeenCalledWith("test-token-123", expect.any(String));
    });
    expect(clearPendingConsent).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith("/app", { replace: true });
  });
});

// ---------------------------------------------------------------------------
// Happy path — pending consent in localStorage
// ---------------------------------------------------------------------------

describe("AuthCallbackPage — pending consent in localStorage", () => {
  it("writes pending consent to Supabase and completes auth", async () => {
    vi.mocked(isSupabaseConfigured).mockReturnValue(true);
    vi.mocked(getUserConsentStatus).mockResolvedValue({ hasConsented: false });
    vi.mocked(readPendingConsent).mockReturnValue({
      terms_accepted_at: new Date().toISOString(),
      terms_version: "2026-04",
      marketing_consent: false,
    });
    renderCallback();
    await waitFor(() => {
      expect(writeConsentToSupabase).toHaveBeenCalledWith(
        "test-token-123",
        expect.objectContaining({ terms_version: "2026-04" })
      );
    });
    expect(clearPendingConsent).toHaveBeenCalled();
    expect(setToken).toHaveBeenCalled();
  });
});

// ---------------------------------------------------------------------------
// Consent interstitial — cross-device first-time user
// ---------------------------------------------------------------------------

describe("AuthCallbackPage — consent interstitial", () => {
  beforeEach(() => {
    vi.mocked(isSupabaseConfigured).mockReturnValue(true);
    vi.mocked(getUserConsentStatus).mockResolvedValue({ hasConsented: false });
    vi.mocked(readPendingConsent).mockReturnValue(null);
  });

  it("shows consent screen for cross-device first-time user", async () => {
    renderCallback();
    await waitFor(() => {
      expect(screen.getByText("Before you continue")).toBeInTheDocument();
    });
    expect(screen.getByText("Continue to Dome")).toBeInTheDocument();
  });

  it("button is disabled when terms are not accepted", async () => {
    renderCallback();
    await waitFor(() => {
      expect(screen.getByText("Continue to Dome")).toBeInTheDocument();
    });
    const button = screen.getByText("Continue to Dome").closest("button")!;
    expect(button).toBeDisabled();
  });

  it("accepts consent and completes auth", async () => {
    const user = userEvent.setup();

    // Make storePendingConsent populate readPendingConsent for the handler
    vi.mocked(storePendingConsent).mockImplementation(() => {
      vi.mocked(readPendingConsent).mockReturnValue({
        terms_accepted_at: new Date().toISOString(),
        terms_version: "2026-04",
        marketing_consent: false,
      });
    });

    renderCallback();
    await waitFor(() => {
      expect(screen.getByText("Before you continue")).toBeInTheDocument();
    });

    // Check the terms checkbox (first checkbox)
    const checkboxes = screen.getAllByRole("checkbox");
    await user.click(checkboxes[0]); // terms checkbox

    // Button should now be enabled
    const button = screen.getByText("Continue to Dome").closest("button")!;
    expect(button).not.toBeDisabled();

    // Click submit
    await user.click(button);

    await waitFor(() => {
      expect(storePendingConsent).toHaveBeenCalledWith(false);
      expect(writeConsentToSupabase).toHaveBeenCalled();
      expect(setToken).toHaveBeenCalled();
    });
  });

  it("shows error when consent write fails", async () => {
    const user = userEvent.setup();
    vi.mocked(writeConsentToSupabase).mockResolvedValue(false);

    vi.mocked(storePendingConsent).mockImplementation(() => {
      vi.mocked(readPendingConsent).mockReturnValue({
        terms_accepted_at: new Date().toISOString(),
        terms_version: "2026-04",
        marketing_consent: false,
      });
    });

    renderCallback();
    await waitFor(() => {
      expect(screen.getByText("Before you continue")).toBeInTheDocument();
    });

    const checkboxes = screen.getAllByRole("checkbox");
    await user.click(checkboxes[0]);
    await user.click(screen.getByText("Continue to Dome").closest("button")!);

    await waitFor(() => {
      expect(
        screen.getByText(/unable to save your consent record/i)
      ).toBeInTheDocument();
    });
    // Should NOT have completed auth
    expect(setToken).not.toHaveBeenCalled();
  });

  it("sends marketing consent when marketing checkbox is checked", async () => {
    const user = userEvent.setup();

    vi.mocked(storePendingConsent).mockImplementation(() => {
      vi.mocked(readPendingConsent).mockReturnValue({
        terms_accepted_at: new Date().toISOString(),
        terms_version: "2026-04",
        marketing_consent: true,
        marketing_consent_at: new Date().toISOString(),
        marketing_consent_version: "2026-04",
      });
    });

    renderCallback();
    await waitFor(() => {
      expect(screen.getByText("Before you continue")).toBeInTheDocument();
    });

    const checkboxes = screen.getAllByRole("checkbox");
    await user.click(checkboxes[0]); // terms
    await user.click(checkboxes[1]); // marketing
    await user.click(screen.getByText("Continue to Dome").closest("button")!);

    await waitFor(() => {
      expect(storePendingConsent).toHaveBeenCalledWith(true);
    });
  });
});

// ---------------------------------------------------------------------------
// Redirect handling
// ---------------------------------------------------------------------------

describe("AuthCallbackPage — redirect after auth", () => {
  it("returns the user to a genuine stored tool redirect (preserved)", async () => {
    vi.mocked(isSupabaseConfigured).mockReturnValue(false);
    sessionStorage.setItem("dome_auth_redirect", "/tools?tab=analyzer");
    renderCallback();
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith("/tools?tab=analyzer", {
        replace: true,
      });
    });
  });

  it("falls back to the tools hub (/app) when no redirect is stored", async () => {
    vi.mocked(isSupabaseConfigured).mockReturnValue(false);
    renderCallback();
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith("/app", { replace: true });
    });
    // The key is always cleared so it can't leak into a later sign-in.
    expect(sessionStorage.getItem("dome_auth_redirect")).toBeNull();
  });

  it("lands on the hub when the stored redirect is not a valid same-band target", async () => {
    vi.mocked(isSupabaseConfigured).mockReturnValue(false);
    // sanitizeRedirect collapses an off-band/external value to "/", which now maps to /app.
    sessionStorage.setItem("dome_auth_redirect", "https://evil.example.com/phish");
    renderCallback();
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith("/app", { replace: true });
    });
  });

  it("shows Try again link on error", async () => {
    setLocation({ search: "?error=access_denied" });
    renderCallback();
    await waitFor(() => {
      expect(screen.getByText("Try again")).toBeInTheDocument();
    });
    expect(screen.getByText("Try again").closest("a")).toHaveAttribute(
      "href",
      "/login"
    );
  });
});

// ---------------------------------------------------------------------------
// OAuth (PKCE / ?code=) path
// ---------------------------------------------------------------------------

describe("AuthCallbackPage — OAuth code path", () => {
  it("exchanges the code and completes auth (Supabase not configured)", async () => {
    setLocation({ search: "?code=oauth-code-123" });
    vi.mocked(isSupabaseConfigured).mockReturnValue(false);
    vi.mocked(exchangeOAuthCode).mockResolvedValue({
      accessToken: "oauth-token-xyz",
      expiresAt: "2099-01-01T00:00:00.000Z",
      error: null,
    });

    renderCallback();

    await waitFor(() => {
      expect(exchangeOAuthCode).toHaveBeenCalled();
      expect(setToken).toHaveBeenCalledWith(
        "oauth-token-xyz",
        "2099-01-01T00:00:00.000Z"
      );
    });
    expect(mockNavigate).toHaveBeenCalledWith("/app", { replace: true });
  });

  it("runs consent gating for OAuth users (returning user passes through)", async () => {
    setLocation({ search: "?code=oauth-code-123" });
    vi.mocked(isSupabaseConfigured).mockReturnValue(true);
    vi.mocked(getUserConsentStatus).mockResolvedValue({ hasConsented: true });
    vi.mocked(exchangeOAuthCode).mockResolvedValue({
      accessToken: "oauth-token-xyz",
      error: null,
    });

    renderCallback();

    await waitFor(() => {
      expect(getUserConsentStatus).toHaveBeenCalledWith("oauth-token-xyz");
      expect(setToken).toHaveBeenCalledWith("oauth-token-xyz", undefined);
    });
  });

  it("writes pending consent for a first-time OAuth user", async () => {
    setLocation({ search: "?code=oauth-code-123" });
    vi.mocked(isSupabaseConfigured).mockReturnValue(true);
    vi.mocked(getUserConsentStatus).mockResolvedValue({ hasConsented: false });
    vi.mocked(readPendingConsent).mockReturnValue({
      terms_accepted_at: new Date().toISOString(),
      terms_version: "2026-04",
      marketing_consent: false,
    });
    vi.mocked(exchangeOAuthCode).mockResolvedValue({
      accessToken: "oauth-token-xyz",
      error: null,
    });

    renderCallback();

    await waitFor(() => {
      expect(writeConsentToSupabase).toHaveBeenCalledWith(
        "oauth-token-xyz",
        expect.objectContaining({ terms_version: "2026-04" })
      );
      expect(setToken).toHaveBeenCalled();
    });
  });

  it("shows an error when the code exchange fails", async () => {
    setLocation({ search: "?code=bad-code" });
    vi.mocked(exchangeOAuthCode).mockResolvedValue({
      accessToken: null,
      error: "Could not complete sign-in.",
    });

    renderCallback();

    await waitFor(() => {
      expect(screen.getByText("Sign-in failed")).toBeInTheDocument();
    });
    expect(screen.getByText("Could not complete sign-in.")).toBeInTheDocument();
    expect(setToken).not.toHaveBeenCalled();
  });

  it("does NOT take the OAuth path for a magic-link hash callback", async () => {
    // beforeEach sets a valid hash token and no ?code=
    vi.mocked(isSupabaseConfigured).mockReturnValue(false);
    renderCallback();

    await waitFor(() => {
      expect(setToken).toHaveBeenCalledWith(
        "test-token-123",
        expect.any(String)
      );
    });
    expect(exchangeOAuthCode).not.toHaveBeenCalled();
  });
});
