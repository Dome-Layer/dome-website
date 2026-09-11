/**
 * Shared facts about the DOME tools that more than one page needs.
 */

/**
 * Whether the Agent Flow app is actually reachable.
 *
 * The marketing page, the home tools section and the /app hub all surface Agent Flow,
 * but agent-flow.domelayer.com has no DNS record yet: the P5 frontend has not been
 * deployed (roadmap Sprint A). While this is false, every Agent Flow launch link
 * renders as a "coming soon" state instead of a link that fails to open.
 *
 * Flip to true in the same change that makes agent-flow.domelayer.com resolve.
 */
export const AGENT_FLOW_LIVE = false as boolean;
