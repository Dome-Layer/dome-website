import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { SmoothScroll } from './components/SmoothScroll'
import { ScrollProgress } from './components/ScrollProgress'
import { SectionDivider } from './components/SectionTransition'
import { Hero } from './sections/Hero'
import { Initiative } from './sections/Initiative'
import { Deliver } from './sections/Deliver'
import { Method } from './sections/Method'
import { Infrastructure } from './sections/Infrastructure'
import { Engagement } from './sections/Engagement'
import { Partners } from './sections/Partners'

export default function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-dome-void dome-dot-grid">
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
          <Engagement />
          <SectionDivider />
          <Partners />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  )
}
