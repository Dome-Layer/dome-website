import { LegalDocument } from "../components/legal/LegalDocument"
import { useMessages } from "../i18n/useLocale"
import { routeMeta } from "../lib/seo"

export const meta = routeMeta("privacy")

export default function PrivacyPage() {
  return <LegalDocument doc={useMessages().pages.privacy} routeId="privacy" siblingId="terms" />
}
