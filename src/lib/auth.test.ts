import { describe, it, expect, vi } from "vitest";
import {
  isStagingHost,
  isProductionHost,
  isHttpsHost,
  cookieDomain,
  parseCookieExpiry,
  getToken,
  setToken,
  clearToken,
  authHeaders,
  isAuthenticated,
  sanitizeRedirect,
} from "./auth";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Stub `window.location.hostname` for the duration of a callback. */
function withHostname(hostname: string, fn: () => void): void {
  const original = window.location.hostname;
  Object.defineProperty(window, "location", {
    value: { ...window.location, hostname },
    writable: true,
    configurable: true,
  });
  try {
    fn();
  } finally {
    Object.defineProperty(window, "location", {
      value: { ...window.location, hostname: original },
      writable: true,
      configurable: true,
    });
  }
}

// ---------------------------------------------------------------------------
// isStagingHost / isProductionHost
// ---------------------------------------------------------------------------

describe("isStagingHost", () => {
  it("returns true for staging.domelayer.com", () => {
    expect(isStagingHost("staging.domelayer.com")).toBe(true);
  });

  it("returns true for tool subdomain on staging", () => {
    expect(isStagingHost("analyzer.staging.domelayer.com")).toBe(true);
  });

  it("returns false for production root", () => {
    expect(isStagingHost("domelayer.com")).toBe(false);
  });

  it("returns false for production subdomain", () => {
    expect(isStagingHost("analyzer.domelayer.com")).toBe(false);
  });

  it("returns false for localhost", () => {
    expect(isStagingHost("localhost")).toBe(false);
  });

  it("returns false for subdomain-spoof like evil-staging.domelayer.com", () => {
    // This does NOT end with ".staging.domelayer.com"
    expect(isStagingHost("evil-staging.domelayer.com")).toBe(false);
  });
});

describe("isProductionHost", () => {
  it("returns true for domelayer.com", () => {
    expect(isProductionHost("domelayer.com")).toBe(true);
  });

  it("returns true for production subdomain", () => {
    expect(isProductionHost("analyzer.domelayer.com")).toBe(true);
  });

  it("returns false for staging root", () => {
    expect(isProductionHost("staging.domelayer.com")).toBe(false);
  });

  it("returns false for staging subdomain", () => {
    expect(isProductionHost("analyzer.staging.domelayer.com")).toBe(false);
  });

  it("returns false for localhost", () => {
    expect(isProductionHost("localhost")).toBe(false);
  });

  it("returns false for external domain ending in domelayer.com", () => {
    // "evil-domelayer.com" is not a subdomain of domelayer.com
    expect(isProductionHost("evil-domelayer.com")).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// isHttpsHost
// ---------------------------------------------------------------------------

describe("isHttpsHost", () => {
  it("returns true on production host", () => {
    withHostname("domelayer.com", () => {
      expect(isHttpsHost()).toBe(true);
    });
  });

  it("returns true on staging host", () => {
    withHostname("staging.domelayer.com", () => {
      expect(isHttpsHost()).toBe(true);
    });
  });

  it("returns false on localhost", () => {
    withHostname("localhost", () => {
      expect(isHttpsHost()).toBe(false);
    });
  });
});

// ---------------------------------------------------------------------------
// cookieDomain
// ---------------------------------------------------------------------------

describe("cookieDomain", () => {
  it("returns .domelayer.com on production", () => {
    withHostname("analyzer.domelayer.com", () => {
      expect(cookieDomain()).toBe(".domelayer.com");
    });
  });

  it("returns .staging.domelayer.com on staging", () => {
    withHostname("staging.domelayer.com", () => {
      expect(cookieDomain()).toBe(".staging.domelayer.com");
    });
  });

  it("returns empty string on localhost", () => {
    withHostname("localhost", () => {
      expect(cookieDomain()).toBe("");
    });
  });
});

// ---------------------------------------------------------------------------
// parseCookieExpiry
// ---------------------------------------------------------------------------

describe("parseCookieExpiry", () => {
  it("returns positive seconds for a future date", () => {
    const future = new Date(Date.now() + 3600 * 1000).toISOString();
    const result = Number(parseCookieExpiry(future));
    // Allow 2 second tolerance for test execution time
    expect(result).toBeGreaterThanOrEqual(3598);
    expect(result).toBeLessThanOrEqual(3600);
  });

  it('returns "0" for a past date', () => {
    const past = new Date(Date.now() - 60_000).toISOString();
    expect(parseCookieExpiry(past)).toBe("0");
  });

  it("returns large value for far-future date", () => {
    const farFuture = new Date(Date.now() + 30 * 24 * 3600 * 1000).toISOString();
    const result = Number(parseCookieExpiry(farFuture));
    expect(result).toBeGreaterThan(29 * 24 * 3600);
  });
});

// ---------------------------------------------------------------------------
// getToken / setToken / clearToken round-trip
// ---------------------------------------------------------------------------

describe("token management", () => {
  it("getToken returns null when no cookie is set", () => {
    expect(getToken()).toBeNull();
  });

  it("setToken + getToken round-trip", () => {
    withHostname("localhost", () => {
      setToken("test-jwt-123");
      expect(getToken()).toBe("test-jwt-123");
    });
  });

  it("clearToken removes the token", () => {
    withHostname("localhost", () => {
      setToken("test-jwt-123");
      clearToken();
      expect(getToken()).toBeNull();
    });
  });

  it("handles JWT with = characters", () => {
    withHostname("localhost", () => {
      const jwt = "eyJhbGciOiJIUzI1NiJ9.payload.sig==";
      setToken(jwt);
      expect(getToken()).toBe(jwt);
    });
  });
});

// ---------------------------------------------------------------------------
// Cookie attributes via spy
// ---------------------------------------------------------------------------

describe("cookie attributes", () => {
  it("sets correct attributes on localhost (no Domain, no Secure)", () => {
    const spy = vi.spyOn(document, "cookie", "set");
    withHostname("localhost", () => {
      setToken("tok", new Date(Date.now() + 3600_000).toISOString());
    });
    const written = spy.mock.calls[0]?.[0] as string;
    expect(written).toContain("dome_auth_token=tok");
    expect(written).toContain("Path=/");
    expect(written).toContain("SameSite=Lax");
    expect(written).toContain("Max-Age=");
    expect(written).not.toContain("Domain=");
    expect(written).not.toContain("Secure");
    spy.mockRestore();
  });

  it("includes Domain and Secure on production host", () => {
    const spy = vi.spyOn(document, "cookie", "set");
    withHostname("domelayer.com", () => {
      setToken("tok");
    });
    const written = spy.mock.calls[0]?.[0] as string;
    expect(written).toContain("Domain=.domelayer.com");
    expect(written).toContain("Secure");
    spy.mockRestore();
  });

  it("includes staging Domain and Secure on staging host", () => {
    const spy = vi.spyOn(document, "cookie", "set");
    withHostname("staging.domelayer.com", () => {
      setToken("tok");
    });
    const written = spy.mock.calls[0]?.[0] as string;
    expect(written).toContain("Domain=.staging.domelayer.com");
    expect(written).toContain("Secure");
    spy.mockRestore();
  });

  it("clearToken sets Max-Age=0", () => {
    const spy = vi.spyOn(document, "cookie", "set");
    withHostname("localhost", () => {
      clearToken();
    });
    const written = spy.mock.calls[0]?.[0] as string;
    expect(written).toContain("Max-Age=0");
    spy.mockRestore();
  });
});

// ---------------------------------------------------------------------------
// authHeaders / isAuthenticated
// ---------------------------------------------------------------------------

describe("authHeaders", () => {
  it("returns empty object when not authenticated", () => {
    expect(authHeaders()).toEqual({});
  });

  it("returns Bearer header when authenticated", () => {
    withHostname("localhost", () => {
      setToken("my-token");
      expect(authHeaders()).toEqual({ Authorization: "Bearer my-token" });
    });
  });
});

describe("isAuthenticated", () => {
  it("returns false when no token", () => {
    expect(isAuthenticated()).toBe(false);
  });

  it("returns true when token is set", () => {
    withHostname("localhost", () => {
      setToken("my-token");
      expect(isAuthenticated()).toBe(true);
    });
  });
});

// ---------------------------------------------------------------------------
// sanitizeRedirect — open-redirect payload suite
// ---------------------------------------------------------------------------

describe("sanitizeRedirect", () => {
  describe("defaults", () => {
    it('returns "/" for null', () => {
      expect(sanitizeRedirect(null)).toBe("/");
    });

    it('returns "/" for undefined', () => {
      expect(sanitizeRedirect(undefined)).toBe("/");
    });

    it('returns "/" for empty string', () => {
      expect(sanitizeRedirect("")).toBe("/");
    });
  });

  describe("relative paths (allowed)", () => {
    it("allows simple relative path", () => {
      expect(sanitizeRedirect("/dashboard")).toBe("/dashboard");
    });

    it("allows relative path with query", () => {
      expect(sanitizeRedirect("/tools?tab=council")).toBe("/tools?tab=council");
    });

    it("allows root path", () => {
      expect(sanitizeRedirect("/")).toBe("/");
    });

    it("allows deep nested path", () => {
      expect(sanitizeRedirect("/a/b/c/d")).toBe("/a/b/c/d");
    });
  });

  describe("protocol-relative / open-redirect attacks (blocked)", () => {
    it('blocks protocol-relative "//evil.com"', () => {
      expect(sanitizeRedirect("//evil.com")).toBe("/");
    });

    it('blocks "//evil.com/phishing"', () => {
      expect(sanitizeRedirect("//evil.com/phishing")).toBe("/");
    });

    it("blocks javascript: protocol", () => {
      expect(sanitizeRedirect("javascript:alert(1)")).toBe("/");
    });

    it("blocks data: protocol", () => {
      expect(sanitizeRedirect("data:text/html,<script>alert(1)</script>")).toBe("/");
    });

    it("blocks malformed URL", () => {
      expect(sanitizeRedirect("ht tp://broken")).toBe("/");
    });
  });

  describe("same-band absolute URLs (production)", () => {
    it("allows cross-subdomain within production band", () => {
      withHostname("domelayer.com", () => {
        expect(
          sanitizeRedirect("https://analyzer.domelayer.com/result")
        ).toBe("https://analyzer.domelayer.com/result");
      });
    });

    it("allows production root to production subdomain", () => {
      withHostname("analyzer.domelayer.com", () => {
        expect(sanitizeRedirect("https://domelayer.com/login")).toBe(
          "https://domelayer.com/login"
        );
      });
    });
  });

  describe("same-band absolute URLs (staging)", () => {
    it("allows cross-subdomain within staging band", () => {
      withHostname("staging.domelayer.com", () => {
        expect(
          sanitizeRedirect("https://analyzer.staging.domelayer.com/result")
        ).toBe("https://analyzer.staging.domelayer.com/result");
      });
    });
  });

  describe("cross-band attacks (blocked)", () => {
    it("blocks staging to production redirect", () => {
      withHostname("staging.domelayer.com", () => {
        expect(sanitizeRedirect("https://domelayer.com/admin")).toBe("/");
      });
    });

    it("blocks production to staging redirect", () => {
      withHostname("domelayer.com", () => {
        expect(sanitizeRedirect("https://staging.domelayer.com")).toBe("/");
      });
    });
  });

  describe("external domains (blocked)", () => {
    it("blocks external domain", () => {
      withHostname("domelayer.com", () => {
        expect(sanitizeRedirect("https://evil.com")).toBe("/");
      });
    });

    it("blocks subdomain spoof", () => {
      withHostname("domelayer.com", () => {
        expect(sanitizeRedirect("https://evil-domelayer.com")).toBe("/");
      });
    });

    it("blocks external domain with domelayer in path", () => {
      withHostname("domelayer.com", () => {
        expect(sanitizeRedirect("https://evil.com/domelayer.com")).toBe("/");
      });
    });
  });
});
