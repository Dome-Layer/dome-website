// Cookie-based cross-subdomain token storage.
// The Supabase JWT is set as a cookie scoped to the current environment band
// (.domelayer.com on production, .staging.domelayer.com on staging) so all
// subdomains in that band share authentication (SSO) without bleeding across
// production/staging.
// The cookie is not HttpOnly by design — JS must read it to build
// the Authorization header sent to each tool's backend.

const COOKIE_NAME = "dome_auth_token";

export function isStagingHost(host: string): boolean {
  return host === "staging.domelayer.com" || host.endsWith(".staging.domelayer.com");
}

export function isProductionHost(host: string): boolean {
  if (isStagingHost(host)) return false;
  return host === "domelayer.com" || host.endsWith(".domelayer.com");
}

export function isHttpsHost(): boolean {
  if (typeof window === "undefined") return false;
  const host = window.location.hostname;
  return isStagingHost(host) || isProductionHost(host);
}

export function cookieDomain(): string {
  if (typeof window === "undefined") return "";
  const host = window.location.hostname;
  if (isStagingHost(host)) return ".staging.domelayer.com";
  if (isProductionHost(host)) return ".domelayer.com";
  return "";
}

export function parseCookieExpiry(expiresAt: string): string {
  const diffSec = Math.max(
    0,
    Math.floor((new Date(expiresAt).getTime() - Date.now()) / 1000)
  );
  return diffSec.toString();
}

export function getToken(): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${COOKIE_NAME}=`));
  if (!match) return null;
  return match.split("=").slice(1).join("=") || null;
}

export function setToken(token: string, expiresAt?: string): void {
  if (typeof document === "undefined") return;
  const domain = cookieDomain();
  const maxAge = expiresAt ? parseCookieExpiry(expiresAt) : "3600";
  const domainPart = domain ? `; Domain=${domain}` : "";
  const securePart = isHttpsHost() ? "; Secure" : "";
  document.cookie = `${COOKIE_NAME}=${token}; Path=/${domainPart}; SameSite=Lax${securePart}; Max-Age=${maxAge}`;
}

export function clearToken(): void {
  if (typeof document === "undefined") return;
  const domain = cookieDomain();
  const domainPart = domain ? `; Domain=${domain}` : "";
  const securePart = isHttpsHost() ? "; Secure" : "";
  document.cookie = `${COOKIE_NAME}=; Path=/${domainPart}; SameSite=Lax${securePart}; Max-Age=0`;
}

export function authHeaders(): Record<string, string> {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export function isAuthenticated(): boolean {
  return !!getToken();
}

// Validates a post-login redirect target to prevent open redirects.
// Allows same-origin relative paths and absolute URLs within the SAME
// environment band as the current host (production-to-production or
// staging-to-staging). Cross-band redirects (staging→prod or prod→staging)
// are rejected to keep session boundaries intact.
export function sanitizeRedirect(raw: string | null | undefined): string {
  if (!raw) return "/";

  // Relative path: must start with a single "/" — reject "//evil.com"
  // which is protocol-relative and resolves off-site.
  if (raw.startsWith("/") && !raw.startsWith("//")) {
    return raw;
  }

  if (typeof window === "undefined") return "/";
  const currentHost = window.location.hostname;

  try {
    const url = new URL(raw);
    if (url.protocol !== "https:" && url.protocol !== "http:") return "/";
    const host = url.hostname;
    if (isStagingHost(currentHost) && isStagingHost(host)) return raw;
    if (isProductionHost(currentHost) && isProductionHost(host)) return raw;
  } catch {
    // malformed URL
  }
  return "/";
}
