import { describe, it, expect, vi } from "vitest";
import {
  TERMS_VERSION,
  storePendingConsent,
  readPendingConsent,
  clearPendingConsent,
  isSupabaseConfigured,
} from "./compliance";

// ---------------------------------------------------------------------------
// storePendingConsent / readPendingConsent / clearPendingConsent
// ---------------------------------------------------------------------------

describe("pending consent localStorage round-trip", () => {
  it("readPendingConsent returns null initially", () => {
    expect(readPendingConsent()).toBeNull();
  });

  it("stores and reads consent with marketing=true", () => {
    storePendingConsent(true);
    const consent = readPendingConsent();
    expect(consent).not.toBeNull();
    expect(consent!.terms_version).toBe(TERMS_VERSION);
    expect(consent!.marketing_consent).toBe(true);
    expect(consent!.terms_accepted_at).toBeTruthy();
    expect(consent!.marketing_consent_at).toBeTruthy();
    expect(consent!.marketing_consent_version).toBe(TERMS_VERSION);
    // Verify ISO date format
    expect(new Date(consent!.terms_accepted_at).toISOString()).toBe(
      consent!.terms_accepted_at
    );
  });

  it("stores consent with marketing=false (no marketing fields)", () => {
    storePendingConsent(false);
    const consent = readPendingConsent();
    expect(consent).not.toBeNull();
    expect(consent!.terms_version).toBe(TERMS_VERSION);
    expect(consent!.marketing_consent).toBe(false);
    expect(consent!.marketing_consent_at).toBeUndefined();
    expect(consent!.marketing_consent_version).toBeUndefined();
  });

  it("clearPendingConsent removes the stored consent", () => {
    storePendingConsent(true);
    expect(readPendingConsent()).not.toBeNull();
    clearPendingConsent();
    expect(readPendingConsent()).toBeNull();
  });

  it("handles corrupted localStorage data gracefully", () => {
    localStorage.setItem("dome_pending_consent", "not-valid-json");
    // Should not throw — returns null on parse failure
    expect(readPendingConsent()).toBeNull();
  });
});

// ---------------------------------------------------------------------------
// isSupabaseConfigured
// ---------------------------------------------------------------------------

describe("isSupabaseConfigured", () => {
  it("returns false when neither env var is set", () => {
    vi.stubEnv("VITE_SUPABASE_URL", "");
    vi.stubEnv("VITE_SUPABASE_ANON_KEY", "");
    expect(isSupabaseConfigured()).toBe(false);
    vi.unstubAllEnvs();
  });

  it("returns false when only URL is set", () => {
    vi.stubEnv("VITE_SUPABASE_URL", "https://example.supabase.co");
    vi.stubEnv("VITE_SUPABASE_ANON_KEY", "");
    expect(isSupabaseConfigured()).toBe(false);
    vi.unstubAllEnvs();
  });

  it("returns false when only key is set", () => {
    vi.stubEnv("VITE_SUPABASE_URL", "");
    vi.stubEnv("VITE_SUPABASE_ANON_KEY", "some-key");
    expect(isSupabaseConfigured()).toBe(false);
    vi.unstubAllEnvs();
  });

  it("returns true when both are set", () => {
    vi.stubEnv("VITE_SUPABASE_URL", "https://example.supabase.co");
    vi.stubEnv("VITE_SUPABASE_ANON_KEY", "some-key");
    expect(isSupabaseConfigured()).toBe(true);
    vi.unstubAllEnvs();
  });
});
