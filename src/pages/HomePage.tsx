import type { MetaFunction } from 'react-router'
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
import { buildMeta, SITE_URL } from '../lib/seo'

export const meta: MetaFunction = () =>
  buildMeta({
    title: 'DOME | Governance-Driven Operational AI',
    description:
      'DOME helps regulated enterprises deploy production-ready AI with embedded governance. Architecture, deployment, and operational stewardship programmes.',
    path: '/',
    ogDescription:
      'Architected for Production from Day One. DOME helps regulated enterprises deploy production-ready AI with embedded governance, oversight, and operational integrity.',
    twitterDescription:
      'Architected for Production from Day One. Production-ready AI with embedded governance for regulated enterprises.',
    imageAlt: 'DOME: governance-driven operational AI',
    // Carried over unchanged from the old index.html. Replaced in the restructure's SEO step,
    // where DOME stops being described as a set of programmes on offer.
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'DOME',
      url: SITE_URL,
      logo: `${SITE_URL}/favicon.svg`,
      description:
        'DOME helps regulated enterprises deploy production-ready AI systems with embedded governance, oversight, and operational integrity.',
      sameAs: [],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Business Enquiries',
        url: `${SITE_URL}/#contact`,
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'DOME Programmes',
        itemListElement: [
          { '@type': 'Offer', name: 'DOME Architecture Programme', description: 'AI architecture blueprint and governance design for regulated enterprises.' },
          { '@type': 'Offer', name: 'DOME Deployment Programme', description: 'Governed integration of AI systems into enterprise workflows.' },
          { '@type': 'Offer', name: 'DOME Operational Stewardship', description: 'Continuous oversight, optimisation, and operational alignment of deployed AI systems.' },
        ],
      },
    },
  })

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
