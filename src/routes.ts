import { type RouteConfig, index, route } from '@react-router/dev/routes'

// Paths are relative to `appDirectory` (src). Auth routes are excluded from prerendering in
// react-router.config.ts.
export default [
  index('pages/HomePage.tsx'),
  route('tools/process-analyzer', 'pages/ProcessAnalyzerPage.tsx'),
  route('tools/data-intelligence', 'pages/DataIntelligencePage.tsx'),
  route('tools/llm-council', 'pages/LlmCouncilPage.tsx'),
  route('tools/document-intelligence', 'pages/DocumentIntelligencePage.tsx'),
  route('tools/governance-dashboard', 'pages/GovernanceDashboardPage.tsx'),
  route('tools/agent-flow', 'pages/AgentFlowPage.tsx'),
  route('login', 'pages/LoginPage.tsx'),
  route('auth/callback', 'pages/AuthCallbackPage.tsx'),
  // Keep in sync with HUB_PATH in src/lib/routes.ts.
  route('app', 'pages/ToolsHubPage.tsx'),
  route('privacy', 'pages/PrivacyPage.tsx'),
  route('terms', 'pages/TermsPage.tsx'),
] satisfies RouteConfig
