import { describe, it, expect, beforeAll, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import ProcessAnalyzerPage from "./ProcessAnalyzerPage";
import LlmCouncilPage from "./LlmCouncilPage";
import DocumentIntelligencePage from "./DocumentIntelligencePage";
import DataIntelligencePage from "./DataIntelligencePage";
import GovernanceDashboardPage from "./GovernanceDashboardPage";
import { TOOL_PAGES } from "../content/toolPages";
import { en } from "../i18n/messages/en";
import { it as itMessages } from "../i18n/messages/it";

// The site shell (navigation, footer, cookie notice) needs the theme provider and the router of
// the whole app; these tests are about the page body, so the shell is a pass-through.
vi.mock("../layouts/PublicPage", () => ({
  PublicPage: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

beforeAll(() => {
  window.scrollTo = vi.fn() as never;
});

const PAGES = [
  ["process-analyzer", ProcessAnalyzerPage, "processAnalyzer"],
  ["llm-council", LlmCouncilPage, "llmCouncil"],
  ["document-intelligence", DocumentIntelligencePage, "documentIntelligence"],
  ["data-intelligence", DataIntelligencePage, "dataIntelligence"],
  ["governance-dashboard", GovernanceDashboardPage, "governanceDashboard"],
] as const;

describe.each(PAGES)("/dome/%s (tool page template)", (slug, Page, key) => {
  const renderAt = (path: string) =>
    render(
      <MemoryRouter initialEntries={[path]}>
        <Page />
      </MemoryRouter>,
    );

  it("tells what the tool is, shows it, and opens it", () => {
    renderAt(`/dome/${slug}`);
    const t = en.pages.tools[key];
    expect(screen.getByRole("heading", { level: 1, name: en.meta[key].name })).toBeInTheDocument();
    expect(screen.getByText(t.lead)).toBeInTheDocument();
    expect(screen.getByText(t.howItWorks.steps[0].title)).toBeInTheDocument();
    // The screenshot ships in both themes; the page's theme shows one of them.
    expect(screen.getAllByAltText(t.shot.alt)).toHaveLength(2);
    const host = TOOL_PAGES[key].host as string;
    const opens = screen.getAllByRole("link", { name: new RegExp(t.open) });
    expect(opens.every((a) => a.getAttribute("href") === `https://${host}/`)).toBe(true);
    // The breadcrumb goes back to the tools page.
    const crumb = screen.getByRole("navigation", { name: "Breadcrumb" });
    expect(within(crumb).getByRole("link", { name: en.pages.tools.back })).toHaveAttribute("href", "/dome");
  });

  it("speaks Italian under /it, with the breadcrumb in Italian", () => {
    renderAt(`/it/dome/${slug}`);
    expect(screen.getByText(itMessages.pages.tools[key].lead)).toBeInTheDocument();
    expect(screen.queryByText(en.pages.tools[key].lead)).not.toBeInTheDocument();
    const crumb = screen.getByRole("navigation", { name: "Breadcrumb" });
    expect(within(crumb).getByRole("link", { name: itMessages.pages.tools.back })).toHaveAttribute("href", "/it/dome");
  });

  it("shows the governance record the tool writes, and links the other tools in the method strip", () => {
    renderAt(`/dome/${slug}`);
    for (const [field] of TOOL_PAGES[key].record) expect(screen.getByText(field)).toBeInTheDocument();
    // The governance layer runs through every phase, so its page lights all four instead.
    if (key !== "governanceDashboard") {
      expect(screen.getByText(new RegExp(`${en.meta[key].name}, ${en.pages.tools.thisPage}`))).toBeInTheDocument();
    }
  });
});
