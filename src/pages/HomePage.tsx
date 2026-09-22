import { PublicPage } from '../layouts/PublicPage'
import { HomeHero } from '../sections/home/HomeHero'
import { Sectors } from '../sections/home/Sectors'
import { Services } from '../sections/home/Services'
import { HowWeWork } from '../sections/home/HowWeWork'
import { SelectedWork } from '../sections/home/SelectedWork'
import { Capabilities } from '../sections/home/Capabilities'
import { OperatingModel } from '../sections/home/OperatingModel'
import { ClosingCta } from '../components/page/ClosingCta'
import { routeMeta } from '../lib/seo'

export const meta = routeMeta('home')

export default function HomePage() {
  return (
    <PublicPage>
      <HomeHero />
      <Sectors />
      <Services />
      <HowWeWork />
      <SelectedWork />
      <Capabilities />
      <OperatingModel />
      <ClosingCta
        heading="Tell us about the process that slows your team down."
        body="A 30-minute call is enough to tell whether we can help."
        primaryLabel="Book an introductory call"
      />
    </PublicPage>
  )
}
