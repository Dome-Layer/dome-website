export const TERMS_VERSION = "2026-04"

const LS_KEY = "dome_pending_consent"

export interface PendingConsent {
  terms_accepted_at: string
  terms_version: string
  marketing_consent: boolean
  marketing_consent_at?: string
  marketing_consent_version?: string
}

export function storePendingConsent(marketingConsent: boolean): void {
  const now = new Date().toISOString()
  const consent: PendingConsent = {
    terms_accepted_at: now,
    terms_version: TERMS_VERSION,
    marketing_consent: marketingConsent,
    ...(marketingConsent
      ? { marketing_consent_at: now, marketing_consent_version: TERMS_VERSION }
      : {}),
  }
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(consent))
  } catch {
    // localStorage may be unavailable in some contexts
  }
}

export function readPendingConsent(): PendingConsent | null {
  try {
    const raw = localStorage.getItem(LS_KEY)
    return raw ? (JSON.parse(raw) as PendingConsent) : null
  } catch {
    return null
  }
}

export function clearPendingConsent(): void {
  try {
    localStorage.removeItem(LS_KEY)
  } catch {
    // ignore
  }
}

const getSupabaseConfig = () => ({
  url: import.meta.env.VITE_SUPABASE_URL as string | undefined,
  key: import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined,
})

export function isSupabaseConfigured(): boolean {
  const { url, key } = getSupabaseConfig()
  return !!(url && key)
}

export async function getUserConsentStatus(
  accessToken: string
): Promise<{ hasConsented: boolean }> {
  const { url, key } = getSupabaseConfig()
  if (!url || !key) return { hasConsented: false }
  try {
    const res = await fetch(`${url}/auth/v1/user`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        apikey: key,
      },
    })
    if (!res.ok) return { hasConsented: false }
    const user = await res.json()
    return { hasConsented: !!user.user_metadata?.terms_accepted_at }
  } catch {
    return { hasConsented: false }
  }
}

export async function writeConsentToSupabase(
  accessToken: string,
  consent: PendingConsent
): Promise<boolean> {
  const { url, key } = getSupabaseConfig()
  if (!url || !key) return false
  try {
    const res = await fetch(`${url}/auth/v1/user`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
        apikey: key,
      },
      body: JSON.stringify({ data: consent }),
    })
    return res.ok
  } catch {
    return false
  }
}
