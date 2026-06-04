import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Client-side Supabase used ONLY to initiate and complete OAuth (GitHub/Google)
 * sign-in. It is deliberately NOT the app's session store: after a successful
 * code exchange we lift the access token into the existing cross-subdomain
 * `.domelayer.com` cookie (`dome-ui` setToken) and purge the Supabase session,
 * so there is exactly one durable session source for both magic-link and OAuth.
 *
 * Env vars are the same ones the consent flow already uses (`src/lib/compliance.ts`):
 * VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY. When unset (e.g. a local build with
 * no env) the helpers no-op so the app still builds and magic-link still works.
 */

export type OAuthProvider = "github" | "google";

let cachedClient: SupabaseClient | null | undefined;

function getClient(): SupabaseClient | null {
  if (cachedClient !== undefined) return cachedClient;

  const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
  const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

  cachedClient = url && key
    ? createClient(url, key, {
        auth: {
          flowType: "pkce",
          // We exchange the code explicitly in AuthCallbackPage.
          detectSessionInUrl: false,
          // persistSession MUST stay true: the PKCE code-verifier is written to
          // storage on signInWithOAuth and has to survive the full-page redirect
          // to the provider and back. With persistSession:false supabase-js falls
          // back to in-memory storage and the verifier is lost across the redirect.
          // We immediately purge the resulting session (see exchangeOAuthCode).
          persistSession: true,
          // We don't keep a live Supabase session, so nothing to refresh.
          autoRefreshToken: false,
        },
      })
    : null;

  return cachedClient;
}

export function isOAuthConfigured(): boolean {
  return getClient() !== null;
}

/**
 * Kick off provider OAuth. Redirects the browser to the provider via Supabase;
 * returns only if initiation failed. `redirectTo` is always the apex `/auth/callback`
 * (login only ever runs on the apex origin), which is on the Supabase allowlist.
 */
export async function signInWithProvider(
  provider: OAuthProvider
): Promise<{ error: string | null }> {
  const client = getClient();
  if (!client) return { error: "Sign-in with a provider is not available right now." };

  const { error } = await client.auth.signInWithOAuth({
    provider,
    options: { redirectTo: `${window.location.origin}/auth/callback` },
  });
  return { error: error ? error.message : null };
}

type ExchangeResult =
  | { accessToken: string; expiresAt?: string; error: null }
  | { accessToken: null; error: string };

/**
 * Complete the OAuth (PKCE) flow on the callback page: exchange the `?code=` for a
 * session, capture the access token + expiry, then purge the Supabase session so the
 * `.domelayer.com` cookie is the single source of truth. A local-scope signOut only
 * clears client storage — it does not revoke the token, which stays valid for the cookie.
 */
export async function exchangeOAuthCode(): Promise<ExchangeResult> {
  const client = getClient();
  if (!client) return { accessToken: null, error: "Sign-in is not available right now." };

  const code = new URLSearchParams(window.location.search).get("code");
  if (!code) return { accessToken: null, error: "No authorization code found in the URL." };

  const { data, error } = await client.auth.exchangeCodeForSession(code);
  if (error || !data.session) {
    return { accessToken: null, error: error?.message ?? "Could not complete sign-in." };
  }

  const { access_token, expires_at } = data.session;
  const expiresAt = expires_at ? new Date(expires_at * 1000).toISOString() : undefined;

  // Drop the transient Supabase session; the cookie carries auth from here.
  await client.auth.signOut({ scope: "local" }).catch(() => {});

  return { accessToken: access_token, expiresAt, error: null };
}
