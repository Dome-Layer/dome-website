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

// The recorded run (roadmap row 2): five stages, five screens, the list switches the screen.
describe("AgentFlowPage: the recorded run", () => {
  it("has one tab per stage and switches the screen on click", async () => {
    const { default: userEvent } = await import("@testing-library/user-event");
    renderPage();
    const tabs = screen.getAllByRole("tab", { hidden: true });
    expect(tabs).toHaveLength(5);
    expect(tabs[0]).toHaveAttribute("aria-selected", "true");
    await userEvent.click(tabs[3]);
    expect(tabs[3]).toHaveAttribute("aria-selected", "true");
    const panel = screen.getByRole("tabpanel", { hidden: true });
    expect(panel).toHaveAttribute("aria-labelledby", "run-tab-3");
    expect(panel.querySelector("img")?.getAttribute("src")).toBe("/screens/run-4-council-light-800.jpg");
  });

  it("moves between stages with the arrow keys", async () => {
    const { default: userEvent } = await import("@testing-library/user-event");
    renderPage();
    const tabs = screen.getAllByRole("tab", { hidden: true });
    tabs[0].focus();
    await userEvent.keyboard("{ArrowUp}");
    expect(tabs[4]).toHaveAttribute("aria-selected", "true");
    expect(tabs[4]).toHaveFocus();
  });

  it("ships every screen it references", async () => {
    const { existsSync } = await import("node:fs");
    renderPage();
    const srcs = [...document.querySelectorAll("img, source")].flatMap((el) =>
      (el.getAttribute("srcset") ?? el.getAttribute("src") ?? "").split(",").map((s) => s.trim().split(" ")[0]),
    );
    const run = [...new Set(srcs.filter((s) => s.startsWith("/screens/run-")))];
    expect(run.length).toBeGreaterThan(0);
    for (const s of run) expect(existsSync(`public${s}`), s).toBe(true);
  });
});
