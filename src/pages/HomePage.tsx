import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { CookieNotice } from '../components/CookieNotice'
import { SmoothScroll } from '../components/SmoothScroll'
import { ScrollProgress } from '../components/ScrollProgress'
import { SectionDivider } from '../components/SectionTransition'
import { Hero } from '../sections/Hero'
import { Initiative } from '../sections/Initiative'
import { Deliver } from '../sections/Deliver'
import { Method } from '../sections/Method'
import { Infrastructure } from '../sections/Infrastructure'
import { Tools } from '../sections/Tools'
import { Engagement } from '../sections/Engagement'
import { Partners } from '../sections/Partners'
import { routeMeta } from '../lib/seo'

export const meta = routeMeta('home')

export default function HomePage() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[var(--color-bg-base)]">
        <ScrollProgress />
        <Navigation />
        <main>
          <Hero />
          <SectionDivider />
          <Initiative />
          <SectionDivider />
          <Deliver />
          <SectionDivider />
          <Method />
          <SectionDivider />
          <Infrastructure />
          <SectionDivider />
          <Tools />
          <SectionDivider />
          <Engagement />
          <SectionDivider />
          <Partners />
        </main>
        <Footer />
        <CookieNotice />
      </div>
    </SmoothScroll>
  )
}
