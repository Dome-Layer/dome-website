import type { MediaId } from './media'

/**
 * The facts each tool page is built from that are not words: where the tool lives, its accent, its
 * place in the method, its workplace photo, its screenshot and the governance event it writes
 * (tool pages redesign, canvas signed off 2026-11-03). The words are in the message catalogues
 * under `pages.tools`.
 */

export type ToolId =
  | 'processAnalyzer'
  | 'llmCouncil'
  | 'documentIntelligence'
  | 'dataIntelligence'
  | 'governanceDashboard'
  | 'agentFlow'

/** A screenshot in `public/screens/`, taken from the real tool on made-up data, in both themes. */
export interface ToolScreen {
  /** File stem: `/screens/<slug>-<theme>-<width>.<avif|jpg>`. */
  slug: string
  /** Intrinsic size of the 1600 wide variant; the 960 one keeps the ratio. */
  width: 1600
  height: number
}

export interface ToolPageConfig {
  /** Production host, for "Open the tool". Agent Flow has none: it is a private demo. */
  host: string | null
  /**
   * The tool's accent, used only on the phase label and the step dots (canvas decision 1). The
   * light value is the deep shade that keeps 4.5:1 on white (design system v2.2).
   */
  accent: string
  /** Index of the DOME phase (Discover, Orchestrate, Model, Execute); null for the governance layer. */
  phase: number | null
  photo: MediaId
  screen: ToolScreen
  /**
   * The governance event this tool writes for one run, as stored: field names and values are code,
   * shown as they are in every language. Made-up values, matching the screenshot.
   */
  record: readonly (readonly [string, string])[]
}

export const SCREEN_WIDTHS = [960, 1600] as const

export const TOOL_PAGES: Record<ToolId, ToolPageConfig> = {
  processAnalyzer: {
    host: 'analyzer.domelayer.com',
    accent: 'text-[#0E7490] dark:text-[#06B6D4]',
    phase: 0,
    photo: 'caseAiProcurementPlatform',
    screen: { slug: 'process-analyzer', width: 1600, height: 956 },
    record: [
      ['agent_id', 'process-analyzer'],
      ['action_type', 'process_analysis'],
      ['confidence', '0.88'],
      ['rules_triggered', '[segregation_of_duties]'],
      ['human_in_loop', 'recommended'],
      ['metadata.steps', '6'],
    ],
  },
  llmCouncil: {
    host: 'llm-council.domelayer.com',
    accent: 'text-[#7B5EA7] dark:text-[#9B7EC7]',
    phase: 1,
    photo: 'caseAiComplianceAssessments',
    screen: { slug: 'llm-council', width: 1600, height: 956 },
    record: [
      ['agent_id', 'llm-council'],
      ['action_type', 'deliberation'],
      ['confidence', '0.81'],
      ['metadata.members', '[claude, gemini, openai]'],
      ['metadata.rounds', '2'],
      ['human_in_loop', 'recommended'],
    ],
  },
  documentIntelligence: {
    host: 'document-intelligence.domelayer.com',
    accent: 'text-[#92400E] dark:text-[#F59E0B]',
    phase: 2,
    photo: 'caseProcurementWorkflowRedesign',
    screen: { slug: 'document-intelligence', width: 1600, height: 956 },
    record: [
      ['agent_id', 'document-intelligence'],
      ['action_type', 'extraction'],
      ['confidence', '0.91'],
      ['rules_triggered', '[low_confidence_field, potential_personal_data]'],
      ['human_in_loop', 'recommended'],
      ['metadata.field_count', '15'],
    ],
  },
  dataIntelligence: {
    host: 'data-intelligence.domelayer.com',
    accent: 'text-[#047857] dark:text-[#10B981]',
    phase: 2,
    photo: 'caseMetalsTradingPlatform',
    screen: { slug: 'data-intelligence', width: 1600, height: 956 },
    record: [
      ['agent_id', 'data-intelligence'],
      ['action_type', 'dashboard_generation'],
      ['confidence', '0.94'],
      ['rules_applied', '[R-01, R-02, R-03, R-05]'],
      ['human_in_loop', 'not_required'],
      ['metadata.charts', '5'],
    ],
  },
  governanceDashboard: {
    host: 'governance.domelayer.com',
    accent: 'text-[#4F46E5] dark:text-[#818CF8]',
    phase: null,
    photo: 'caseStudiesHero',
    screen: { slug: 'governance-dashboard', width: 1600, height: 956 },
    record: [
      ['source', 'governance_events'],
      ['access', 'select, own rows (RLS)'],
      ['agents', '6'],
      ['retention', '365 days (pg_cron)'],
      ['export', 'pdf'],
      ['writes', '0'],
    ],
  },
  agentFlow: {
    host: null,
    accent: 'text-[#BE185D] dark:text-[#EC4899]',
    phase: 3,
    photo: 'aiProcessAutomationHero',
    screen: { slug: 'agent-flow', width: 1600, height: 733 },
    record: [],
  },
}

/** The tools under each phase of the method, for the method strip. */
export const PHASE_TOOLS: readonly (readonly ToolId[])[] = [
  ['processAnalyzer'],
  ['llmCouncil'],
  ['documentIntelligence', 'dataIntelligence'],
  ['agentFlow'],
]

/** The phase names, which spell DOME and stay English in every locale. */
export const PHASES = ['Discover', 'Orchestrate', 'Model', 'Execute'] as const
