import { describe, it, expect, beforeAll, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import AgentFlowPage from "./AgentFlowPage";

// The site shell (navigation, footer, cookie notice) needs the theme provider and the router of
// the whole app; this test is about the page body, so the shell is a pass-through.
vi.mock("../layouts/PublicPage", () => ({
  PublicPage: ({ children }: { children: React.ReactNode }) => <>{children}</>,
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

// Agent Flow is a private demo (DOME_DECISIONS 2026-09-28), so the page asks for demo access
// instead of launching the app.
describe.skipIf(AGENT_FLOW_LIVE)("AgentFlowPage: private demo", () => {
  it("sends 'Ask for demo access' to the contact page, with demo access picked", () => {
    renderPage();
    const [cta] = screen.getAllByRole("link", { name: "Ask for demo access" });
    // Was "/#contact", an anchor that no longer exists after the 2026-09 restructure,
    // so the button silently landed on the top of the home page.
    expect(cta).toHaveAttribute("href", "/contact?topic=demo");
  });

  it("never links to an agent-flow host", () => {
    renderPage();
    const hrefs = screen.getAllByRole("link").map((a) => a.getAttribute("href") ?? "");
    expect(hrefs.some((h) => h.includes("agent-flow."))).toBe(false);
  });
});
