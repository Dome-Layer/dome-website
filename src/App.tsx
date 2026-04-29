import { Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { CookieNotice } from './components/CookieNotice'
import { SmoothScroll } from './components/SmoothScroll'
import { ScrollProgress } from './components/ScrollProgress'
import { SectionDivider } from './components/SectionTransition'
import { Hero } from './sections/Hero'
import { Initiative } from './sections/Initiative'
import { Deliver } from './sections/Deliver'
import { Method } from './sections/Method'
import { Infrastructure } from './sections/Infrastructure'
import { Tools } from './sections/Tools'
import { Engagement } from './sections/Engagement'
import { Partners } from './sections/Partners'
import { ProcessAnalyzerPage } from './pages/ProcessAnalyzerPage'
import { DataIntelligencePage } from './pages/DataIntelligencePage'
import { LlmCouncilPage } from './pages/LlmCouncilPage'
import { DocumentIntelligencePage } from './pages/DocumentIntelligencePage'
import LoginPage from '@/pages/LoginPage'
import AuthCallbackPage from '@/pages/AuthCallbackPage'
import PrivacyPage from '@/pages/PrivacyPage'
import TermsPage from '@/pages/TermsPage'

function HomeLayout() {
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

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} />
      <Route path="/tools/process-analyzer" element={<ProcessAnalyzerPage />} />
      <Route path="/tools/data-intelligence" element={<DataIntelligencePage />} />
      <Route path="/tools/llm-council" element={<LlmCouncilPage />} />
      <Route path="/tools/document-intelligence" element={<DocumentIntelligencePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/auth/callback" element={<AuthCallbackPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />
    </Routes>
  )
}
