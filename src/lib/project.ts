import { useEffect, useState } from 'react'
import { isAuthenticated } from './auth'
import { HUB_PATH } from './routes'

/**
 * Links the project pages share (DOME is a project, not a business: DOME_DECISIONS 2026-10-31,
 * site split 2026-11-01).
 */

/** Francesco's own site, where the consulting work and booking a call live. */
export const FRANCESCO_SITE_URL = 'https://francescoprodomo.com'

/** The GitHub organisation that holds every DOME repository. */
export const GITHUB_URL = 'https://github.com/Dome-Layer'

/**
 * Id of the "Watch the run" section: the home page's Agent Flow section and the tools page's. Until
 * the recording exists (roadmap row 7) "Watch the run" opens this section (DOME_DECISIONS 2026-11-02).
 */
export const RUN_ANCHOR = 'run'

/** Query that preselects "Demo access" on the contact form. */
export const DEMO_TOPIC_QUERY = 'topic=demo'

/**
 * Where "Try a tool" goes: sign in, then the /app hub (the sign-in page's default destination).
 * Someone already signed in goes straight to the hub. Pages are prerendered signed out, so the
 * cookie is read after mount, as the top bar does.
 */
export function useTryHref(): string {
  const [authed, setAuthed] = useState(false)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setAuthed(isAuthenticated())
  }, [])
  return authed ? HUB_PATH : '/login'
}
