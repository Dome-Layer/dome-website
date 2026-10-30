# dome-website

domelayer.com: the DOME company site (services, the DOME tools, case studies, about, contact, legal) and the
central sign-in for every DOME tool (`/login`, `/auth/callback`, the signed-in hub `/app`). DOME is a sole
maintainer's portfolio of governed AI tools for regulated businesses; the tools live in sibling repos under the
`Dome-Layer` organisation, each on its own `*.domelayer.com` host.

## Branches and deploys

- `main` is production (domelayer.com). `staging` is staging.domelayer.com. Both deploy by push through the
  `deploy (Cloudflare)` workflow to a Cloudflare Worker. This repo has no Railway service.
- **Work on a branch cut from `staging` and open the PR against `staging`.** `staging` is protected with strict
  checks (`ci` and the gitleaks scan), so keep the branch up to date with it. Several PRs go in one at a time.
- **Never push to `main` and never open a PR against it.** Promotion is a fast-forward of `main` to `staging`,
  done by the maintainer after a smoke test on staging.

## Commands (Node 20.19 or later)

What `ci` runs, in order; run all of it before asking for review:

```bash
npm ci
npm run lint
npm test
npx tsc -b --noEmit
npx react-router build
node scripts/externalize-inline-scripts.mjs && node scripts/externalize-inline-scripts.mjs --check
npm audit --omit=dev --audit-level=high
```

`npm run dev` serves the site locally. Sign-in needs the auth backend and Supabase, so locally and in a cloud
session the signed-in pages can be built and unit-tested but not used; the maintainer checks them on staging.

## Stack

React 19, React Router 7 in framework mode with a static prerender (`react-router.config.ts`), TypeScript,
Tailwind CSS 4, Framer Motion. `worker/` is the Cloudflare Worker: it serves the prerendered pages, the real 404
(`/404`, `/it/404`), the contact form (Resend, a rate-limit binding) and security headers. `wrangler.jsonc` holds
the Worker config and the per-environment vars.

## House rules

- **No em dashes or en dashes anywhere**: copy, comments, commit messages, PR text. Use a comma, a colon, a full
  stop or parentheses. `src/houseStyle.test.ts` and `src/i18n/routes.test.ts` fail on them. Hyphens are fine.
- British English. Plain, specific copy; no "leverage", "delve", "seamless" and the like.
- **All page text lives in the typed catalogues** `src/i18n/messages/<locale>.ts` (shape in `types.ts`); pages
  never hard-code copy. Other languages are written for their readers, not translated word by word.
- **The CSP has no `'unsafe-inline'` for scripts** (the build externalises inline scripts; the `--check` step
  above fails otherwise). Never load third-party scripts: the sign-in cookie `dome_auth_token` is readable by
  JavaScript on `.domelayer.com`, and the CSP is its backstop. Umami runs from a vendored copy,
  `public/vendor/umami.js`.
- Accessibility is WCAG 2.1 AA: text contrast 4.5:1, links inside running text underlined, keyboard focus
  visible, `prefers-reduced-motion` respected (`TextReveal` words carry `text-reveal-word` for that).
- Tests sit next to the code (`*.test.ts(x)`, Vitest with jsdom). Add tests with every behaviour change.

## Languages

- `src/i18n/locales.ts`: `LOCALES` (today `en`, `it`). English sits at the root and is the x-default; every other
  locale lives under `/<locale>/`, with its own slugs in `src/i18n/routes.ts` (`PUBLIC_ROUTES`).
- `src/routes.ts` registers every public page once per locale. A locale that is not published is registered but
  not prerendered, so it 404s. `DOME_PUBLISH_IT` (in `wrangler.jsonc` and the deploy workflow) publishes Italian;
  Italian has been live in production since 2026-09-28.
- hreflang, the sitemap, the language switcher, `Content-Language`, `og:locale` and the `dome_locale` cookie all
  follow `LOCALES` and the publish flags. `src/i18n/routes.test.ts` checks the catalogues and slugs.
- Auth pages (`/login`, `/auth/callback`, `/app`) are English only today.

## Design

- `docs/DESIGN_SYSTEM.md` is a snapshot of the design system (v2.7). Tokens are CSS custom properties
  (`src/index.css`, and `@dome-layer/dome-ui`'s `tokens.css`); never hard-code a colour a token covers.
- Dark is the default theme; the `dome-theme` cookie stores the choice.
- **The blue surface (v2.7):** the accent is a large surface only as the top bar (every page) and as the opening
  band of an entry page (home, sign-in, 404 and error, `/app`). Everything else stays neutral.
- `docs/hub/` holds the signed-in hub's design: the canvas for option 3 ("start a task"; open `Start.dc.html` in a
  browser; the other files are its variants: desktop and phone, light and dark, a new account) and migration
  010, the two SQL functions the hub reads (`my_activity_summary`, `my_latest_per_tool`; applied to the staging
  database only until the hub ships).

## Auth and data

- Supabase (EU). The browser client is `src/lib/supabase.ts`; the session token is the `dome_auth_token` cookie on
  `.domelayer.com`, shared by every tool. `src/lib/auth.ts` has the cookie and redirect helpers.
- Governance records live in `governance_events`; row-level security returns only the signed-in user's own rows.
- On staging, signing in needs the dome-auth staging service, which is stopped by default; the maintainer starts
  it for a smoke test.

## Done means

A PR against `staging` with `ci` green, a description of what changed and why, and how it was checked. Say what
could not be checked (for example, anything behind sign-in).
