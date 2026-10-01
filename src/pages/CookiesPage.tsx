import { LegalDocument } from "../components/legal/LegalDocument"
import { useMessages } from "../i18n/useLocale"
import { routeMeta } from "../lib/seo"

export const meta = routeMeta("cookies")

export default function CookiesPage() {
  return <LegalDocument doc={useMessages().pages.cookies} routeId="cookies" siblingId="privacy" />
}
