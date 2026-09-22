import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { CookieNotice } from '../components/CookieNotice'
import { HomeHero } from '../sections/home/HomeHero'
import { Sectors } from '../sections/home/Sectors'
import { Services } from '../sections/home/Services'
import { HowWeWork } from '../sections/home/HowWeWork'
import { SelectedWork } from '../sections/home/SelectedWork'
import { Capabilities } from '../sections/home/Capabilities'
import { OperatingModel } from '../sections/home/OperatingModel'
import { ClosingCta } from '../sections/home/ClosingCta'
import { routeMeta } from '../lib/seo'

export const meta = routeMeta('home')

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-base)]">
      <Navigation />
      <main>
        <HomeHero />
        <Sectors />
        <Services />
        <HowWeWork />
        <SelectedWork />
        <Capabilities />
        <OperatingModel />
        <ClosingCta />
      </main>
      <Footer />
      <CookieNotice />
    </div>
  )
}
