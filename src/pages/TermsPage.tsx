import { LegalDocument } from "../components/legal/LegalDocument"
import { useMessages } from "../i18n/useLocale"
import { routeMeta } from "../lib/seo"

export const meta = routeMeta("terms")

export default function TermsPage() {
  return <LegalDocument doc={useMessages().pages.terms} routeId="terms" siblingId="privacy" />
}
