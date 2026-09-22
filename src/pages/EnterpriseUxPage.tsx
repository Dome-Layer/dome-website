import { ServicePage } from '../components/page/ServicePage'
import { localizedHref } from '../i18n/routes'
import { useLocale, useMessages } from '../i18n/useLocale'
import { routeMeta } from '../lib/seo'

export const meta = routeMeta('enterpriseUx')

export default function EnterpriseUxPage() {
  const locale = useLocale()
  return (
    <ServicePage
      text={useMessages().pages.services.enterpriseUx}
      heroMedia="enterpriseUxHero"
      bandMedia="textureArchitecture"
      segment="ux"
      secondaryTo={localizedHref('about', locale)}
    />
  )
}
