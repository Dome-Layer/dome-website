import { describe, it, expect, beforeAll, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import AgentFlowPage from "./AgentFlowPage";

// The site layout (navigation, footer) imports react-router-dom, which vitest loads as a
// separate copy from the react-router the page's locale hook uses, so the two would need
// two routers. This test is about the page body, so the layout is a pass-through.
vi.mock("../layouts/ToolPageLayout", () => ({
  ToolPageLayout: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));
import { AGENT_FLOW_LIVE } from "../lib/tools";

// framer-motion's whileInView needs an IntersectionObserver, which jsdom lacks.
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
});

function renderPage(path = "/dome/agent-flow") {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <AgentFlowPage />
    </MemoryRouter>,
  );
}

// Agent Flow is a private demo (DOME_DECISIONS 2026-09-28), so the page books a demo
// instead of launching the app.
describe.skipIf(AGENT_FLOW_LIVE)("AgentFlowPage: private demo", () => {
  it("sends 'Book a private demo' to the contact page", () => {
    renderPage();
    const cta = screen.getByRole("link", { name: "Book a private demo" });
    // Was "/#contact", an anchor that no longer exists after the 2026-09 restructure,
    // so the button silently landed on the top of the home page.
    expect(cta).toHaveAttribute("href", "/contact");
  });

  it("never links to an agent-flow host", () => {
    renderPage();
    const hrefs = screen.getAllByRole("link").map((a) => a.getAttribute("href") ?? "");
    expect(hrefs.some((h) => h.includes("agent-flow."))).toBe(false);
  });
});
