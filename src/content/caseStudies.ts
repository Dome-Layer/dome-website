import type { MediaId } from './media'

/**
 * Case studies, as the cards across the site need them.
 *
 * All anonymised: no client is named, and no text is lifted from a source page. Each study is
 * tagged with the service lines it belongs to, so a page can pull its own matched set rather than
 * repeating card copy.
 *
 * PR3d extends this with the detail-page fields (slug per locale, role, problem, approach,
 * outcome, metrics, year) and the `/case-studies/:slug` pages that read them.
 */
export type Segment = 'ux' | 'automation' | 'dome'

export interface CaseStudy {
  id: string
  segments: readonly Segment[]
  /** Sector or capability label above the title. */
  descriptor: string
  title: string
  summary: string
  /** Manifest image, or the tablet mockup for the DOME capability study. */
  media: MediaId | 'tabletMockup'
}

export const CASE_STUDIES = [
  {
    id: 'procurement-workflow-redesign',
    segments: ['ux'],
    descriptor: 'Retail procurement',
    title: 'Procurement workflow redesign for a European food retailer',
    summary:
      'A research-led redesign of non-resale purchasing journeys across five enterprise platforms, rolled out with a standard training programme.',
    media: 'caseProcurementWorkflowRedesign',
  },
  {
    id: 'food-traceability-platform',
    segments: ['ux'],
    descriptor: 'Food supply chain',
    title: 'Traceability platform for a food retailer',
    summary:
      'UX lead and design system for a platform that traces products from supplier to shelf, rolled out across stores.',
    media: 'caseFoodTraceabilityPlatform',
  },
  {
    id: 'trading-app-redesign',
    segments: ['ux'],
    descriptor: 'Digital assets',
    title: 'Trading app redesign for a digital assets platform',
    summary:
      'A responsive redesign of a trading app for mobile and desktop, built on a modular design framework.',
    media: 'caseTradingAppRedesign',
  },
  {
    id: 'ai-compliance-assessments',
    segments: ['automation'],
    descriptor: 'Compliance',
    title: 'AI-assisted compliance assessments',
    summary:
      'A regulatory library and assessment tools that help compliance teams find gaps faster, with an assistant that explains each finding.',
    media: 'caseAiComplianceAssessments',
  },
  {
    id: 'metals-trading-platform',
    segments: ['automation'],
    descriptor: 'Trade finance',
    title: 'A trading platform for a metals consortium',
    summary:
      'Automated settlement, stock monitoring and compliance alerts replaced paper-based steps shared by traders, financiers and insurers.',
    media: 'caseMetalsTradingPlatform',
  },
  {
    id: 'invoice-to-approval',
    segments: ['automation', 'dome'],
    descriptor: 'DOME capability',
    title: 'A governed invoice-to-approval workflow',
    summary:
      'Extraction, policy rules, a multi-model review and a named approver, recorded as one audit trail you can reconstruct step by step.',
    media: 'tabletMockup',
  },
  {
    id: 'ai-procurement-platform',
    segments: ['automation'],
    descriptor: 'Retail procurement',
    title: 'An AI-assisted procurement platform',
    summary:
      'Guided purchasing with policy checks built into the flow, so requesters get an answer without waiting on a specialist.',
    media: 'caseAiProcurementPlatform',
  },
  {
    id: 'ai-training-videos',
    segments: ['automation'],
    descriptor: 'Learning and adoption',
    title: 'AI-produced training videos at rollout scale',
    summary:
      'A production pipeline that turns written procedures into narrated training videos, so a rollout is not gated on a studio.',
    media: 'caseAiTrainingVideos',
  },
] as const satisfies readonly CaseStudy[]

export type CaseStudyId = (typeof CASE_STUDIES)[number]['id']

/** The studies tagged with a segment, in manifest order, optionally capped for a card row. */
export function caseStudiesFor(segment: Segment, limit?: number): CaseStudy[] {
  const matched = CASE_STUDIES.filter((study) => (study.segments as readonly Segment[]).includes(segment))
  return limit ? matched.slice(0, limit) : [...matched]
}
