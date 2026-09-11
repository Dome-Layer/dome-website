import { describe, it, expect, vi, beforeAll } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AGENT_FLOW_LIVE } from "../lib/tools";
import { Tools } from "./Tools";

vi.mock("../lib/ThemeContext", () => ({ useTheme: () => ({ theme: "light" }) }));

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
