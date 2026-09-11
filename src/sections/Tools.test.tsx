import { describe, it, expect, vi, beforeAll, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AGENT_FLOW_LIVE } from "../lib/tools";
import { Tools } from "./Tools";

vi.mock("../lib/ThemeContext", () => ({ useTheme: () => ({ theme: "light" }) }));

const realLocation = window.location;

function setHostname(hostname: string) {
  Object.defineProperty(window, "location", {
    value: { ...realLocation, hostname },
    writable: true,
    configurable: true,
  });
}

beforeAll(() => {
  // framer-motion's whileInView relies on IntersectionObserver, which jsdom lacks.
  class NoopIntersectionObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return [];
    }
  }
  (globalThis as unknown as { IntersectionObserver?: unknown }).IntersectionObserver ??=
    NoopIntersectionObserver;
});

afterEach(() => {
  Object.defineProperty(window, "location", {
    value: realLocation,
    writable: true,
    configurable: true,
  });
});

function renderTools() {
  return render(
    <MemoryRouter>
      <Tools />
    </MemoryRouter>
  );
}

function hrefs(): string[] {
  return screen.getAllByRole("link").map((a) => a.getAttribute("href") ?? "");
}

/** External tool launch links (the section's only https:// anchors). */
function toolLinks(): string[] {
  return hrefs().filter((h) => h.startsWith("https://"));
}

describe.skipIf(AGENT_FLOW_LIVE)("Tools section: Agent Flow while not live", () => {
  it("shows a coming-soon state instead of a launch link", () => {
    renderTools();
    expect(screen.getByText("Coming soon")).toBeInTheDocument();
  });

  it("renders no link to the unreachable agent-flow host", () => {
    renderTools();
    expect(hrefs().some((h) => h.includes("agent-flow."))).toBe(false);
  });
});

describe("Tools section: host-aware tool links", () => {
  it("links to production tools on the production host", () => {
    setHostname("domelayer.com");
    renderTools();
    const links = toolLinks();
    expect(links).toContain("https://analyzer.domelayer.com/");
    expect(links).toContain("https://governance.domelayer.com/");
    expect(links.some((h) => h.includes("staging"))).toBe(false);
  });

  it("links to staging tools on the staging host, never to production", () => {
    setHostname("staging.domelayer.com");
    renderTools();
    const links = toolLinks();
    expect(links).toContain("https://analyzer.staging.domelayer.com/");
    expect(links).toContain("https://llm-council.staging.domelayer.com/");
    expect(links).toContain("https://governance.staging.domelayer.com/");
    expect(links.every((h) => h.endsWith(".staging.domelayer.com/"))).toBe(true);
  });
});
