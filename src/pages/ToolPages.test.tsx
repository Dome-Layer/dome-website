import { describe, it, expect, beforeAll, beforeEach, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import ProcessAnalyzerPage from "./ProcessAnalyzerPage";
import LlmCouncilPage from "./LlmCouncilPage";
import DocumentIntelligencePage from "./DocumentIntelligencePage";
import DataIntelligencePage from "./DataIntelligencePage";
import GovernanceDashboardPage from "./GovernanceDashboardPage";
import { en } from "../i18n/messages/en";
import { it as itMessages } from "../i18n/messages/it";

const navigate = vi.fn();
vi.mock("react-router", async () => ({
  ...(await vi.importActual<typeof import("react-router")>("react-router")),
  useNavigate: () => navigate,
}));
// The site layout imports react-router-dom, a separate copy under vitest; the page body is
// what is under test.
vi.mock("../layouts/ToolPageLayout", () => ({
  ToolPageLayout: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

beforeAll(() => {
  vi.stubGlobal(
    "IntersectionObserver",
    class {
      observe() {}
      unobserve() {}
      disconnect() {}
      takeRecords() {
        return [];
      }
    },
  );
  window.scrollTo = vi.fn() as never;
});
beforeEach(() => navigate.mockClear());

const PAGES = [
  ["process-analyzer", ProcessAnalyzerPage, "processAnalyzer"],
  ["llm-council", LlmCouncilPage, "llmCouncil"],
  ["document-intelligence", DocumentIntelligencePage, "documentIntelligence"],
  ["data-intelligence", DataIntelligencePage, "dataIntelligence"],
  ["governance-dashboard", GovernanceDashboardPage, "governanceDashboard"],
] as const;

describe.each(PAGES)("/dome/%s", (slug, Page, key) => {
  it("renders English copy and the back link goes to /dome", () => {
    render(
      <MemoryRouter initialEntries={[`/dome/${slug}`]}>
        <Page />
      </MemoryRouter>,
    );
    expect(screen.getByText(en.pages.tools[key].lead)).toBeInTheDocument();
    expect(screen.getByText(en.pages.tools[key].howItWorks.steps[0].title)).toBeInTheDocument();
    // Was navigate('/#tools'), an anchor that no longer exists since the Sprint W restructure.
    fireEvent.click(screen.getByRole("button", { name: `← ${en.pages.tools.back}` }));
    expect(navigate).toHaveBeenCalledWith("/dome");
  });

  it("renders Italian copy under /it and the back link stays in Italian", () => {
    render(
      <MemoryRouter initialEntries={[`/it/dome/${slug}`]}>
        <Page />
      </MemoryRouter>,
    );
    expect(screen.getByText(itMessages.pages.tools[key].lead)).toBeInTheDocument();
    expect(screen.queryByText(en.pages.tools[key].lead)).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: `← ${itMessages.pages.tools.back}` }));
    expect(navigate).toHaveBeenCalledWith("/it/dome");
  });
});
