import { PublicPage } from '../layouts/PublicPage'
import { HomeHero } from '../sections/home/HomeHero'
import { Sectors } from '../sections/home/Sectors'
import { Services } from '../sections/home/Services'
import { HowWeWork } from '../sections/home/HowWeWork'
import { SelectedWork } from '../sections/home/SelectedWork'
import { Capabilities } from '../sections/home/Capabilities'
import { OperatingModel } from '../sections/home/OperatingModel'
import { ClosingCta } from '../components/page/ClosingCta'
import { useMessages } from '../i18n/useLocale'
import { routeMeta } from '../lib/seo'

export const meta = routeMeta('home')

export default function HomePage() {
  const t = useMessages().pages
  return (
    <PublicPage>
      <HomeHero />
      <Sectors />
      <Services />
      <HowWeWork />
      <SelectedWork />
      <Capabilities />
      <OperatingModel />
      <ClosingCta text={t.home.closing} />
    </PublicPage>
  )
}
