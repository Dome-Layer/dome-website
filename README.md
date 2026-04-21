# dome-website

The marketing site and cross-subdomain SSO portal for the Dome AI tool portfolio, served at [domelayer.com](https://domelayer.com).

Built with **Vite + React 19 + TypeScript**, deployed on **Vercel**. Authentication uses Supabase magic links; session tokens are shared across `*.domelayer.com` subdomains so the Dome tool portfolio can sign in once.

## Repository status

Source is published for transparency. All rights reserved — see [LICENSE](LICENSE). You are welcome to read the code; you may not copy, reuse, or redistribute it without written permission.

## Running locally

```bash
npm install
cp .env.example .env.local
# fill in the values listed in .env.example, then:
npm run dev
```

Dev server: `http://localhost:5173`.

### Environment variables

| Variable | Purpose |
|---|---|
| `VITE_SUPABASE_URL` | Supabase project URL (public). |
| `VITE_SUPABASE_ANON_KEY` | Supabase anon key (public; RLS-protected). |
| `VITE_AUTH_BACKEND` | Base URL of the magic-link auth service. |
| `RESEND_API_KEY` | Used by `/api/contact` to deliver form submissions. |
| `CONTACT_EMAIL` | Destination mailbox for contact-form submissions. Defaults to `hello@domelayer.com`. |

## Architecture notes

- **Auth cookie** — [src/lib/auth.ts](src/lib/auth.ts): the Supabase JWT is stored as a `.domelayer.com` cookie so every tool subdomain reads the same session. Cookie is intentionally not `HttpOnly` because each tool's frontend builds its own `Authorization` header.
- **Redirect sanitisation** — [`sanitizeRedirect`](src/lib/auth.ts) restricts post-login redirects to relative paths or `*.domelayer.com` hostnames.
- **Rate limiting** on the magic-link endpoint lives in the separate auth-backend service, not in this repo. Supabase-level per-project email limits provide a second line of defence.
- **Consent / GDPR** — [src/lib/compliance.ts](src/lib/compliance.ts): terms acceptance and marketing consent are captured at login and written to `auth.users.raw_user_meta_data` via the user's own access token.

## Security

Please report vulnerabilities privately — see [SECURITY.md](SECURITY.md).
