import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import ToolsHubPage from "./ToolsHubPage";

// Mock only the auth gate + sign-out; keep the REAL host helpers so the host-aware
// link logic runs against the stubbed window.location.hostname.
vi.mock("../lib/auth", async () => {
  const actual = await vi.importActual<typeof import("../lib/auth")>(
    "../lib/auth"
  );
  return {
    ...actual,
    isAuthenticated: vi.fn(() => true),
    clearToken: vi.fn(),
  };
});

import { isAuthenticated } from "../lib/auth";

function setHostname(hostname: string) {
  Object.defineProperty(window, "location", {
    value: { ...window.location, hostname },
    writable: true,
    configurable: true,
  });
}

function renderHub() {
  return render(
    <MemoryRouter initialEntries={["/app"]}>
      <Routes>
        <Route path="/app" element={<ToolsHubPage />} />
        <Route path="/login" element={<div>LOGIN STUB</div>} />
      </Routes>
    </MemoryRouter>
  );
}

/** Hrefs of all tool shortcut cards — P1–P4 + governance (excludes wordmark "/" link). */
function toolHrefs(): string[] {
  return screen
    .getAllByRole("link")
    .map((a) => a.getAttribute("href") ?? "")
    .filter((h) => h.startsWith("https://"));
}

beforeEach(() => {
  vi.clearAllMocks();
  vi.mocked(isAuthenticated).mockReturnValue(true);
  setHostname("localhost");
});

// ---------------------------------------------------------------------------
// Auth gating
// ---------------------------------------------------------------------------

describe("ToolsHubPage — auth gating", () => {
  it("redirects signed-out visitors to /login (carrying redirect=/app)", () => {
    vi.mocked(isAuthenticated).mockReturnValue(false);
    renderHub();
    expect(screen.getByText("LOGIN STUB")).toBeInTheDocument();
    expect(screen.queryByText("Process Analyzer")).not.toBeInTheDocument();
  });

  it("renders the hub for signed-in users", () => {
    vi.mocked(isAuthenticated).mockReturnValue(true);
    renderHub();
    expect(screen.getByText("Welcome to Dome")).toBeInTheDocument();
    expect(screen.queryByText("LOGIN STUB")).not.toBeInTheDocument();
  });
});

// ---------------------------------------------------------------------------
// Tool cards
// ---------------------------------------------------------------------------

describe("ToolsHubPage — tool cards", () => {
  it("renders one card per tool", () => {
    renderHub();
    expect(screen.getByText("Process Analyzer")).toBeInTheDocument();
    expect(screen.getByText("LLM Council")).toBeInTheDocument();
    expect(screen.getByText("Data Intelligence")).toBeInTheDocument();
    expect(screen.getByText("Document Intelligence")).toBeInTheDocument();
    expect(screen.getByText("Governance Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Agent Flow")).toBeInTheDocument();
    expect(toolHrefs()).toHaveLength(6);
  });
});

// ---------------------------------------------------------------------------
// Host-aware links
// ---------------------------------------------------------------------------

describe("ToolsHubPage — host-aware tool links", () => {
  it("points at production *.domelayer.com on a non-staging host", () => {
    setHostname("domelayer.com");
    renderHub();
    const hrefs = toolHrefs();
    expect(hrefs).toContain("https://analyzer.domelayer.com/");
    expect(hrefs).toContain("https://llm-council.domelayer.com/");
    expect(hrefs).toContain("https://data-intelligence.domelayer.com/");
    expect(hrefs).toContain("https://document-intelligence.domelayer.com/");
    expect(hrefs).toContain("https://governance.domelayer.com/");
    expect(hrefs.some((h) => h.includes("staging"))).toBe(false);
  });

  it("falls back to production targets on localhost preview", () => {
    setHostname("localhost");
    renderHub();
    expect(toolHrefs()).toContain("https://analyzer.domelayer.com/");
  });

  it("points at *.staging.domelayer.com on a staging host", () => {
    setHostname("staging.domelayer.com");
    renderHub();
    const hrefs = toolHrefs();
    expect(hrefs).toContain("https://analyzer.staging.domelayer.com/");
    expect(hrefs).toContain("https://document-intelligence.staging.domelayer.com/");
    expect(hrefs).toContain("https://governance.staging.domelayer.com/");
    expect(hrefs.every((h) => h.endsWith(".staging.domelayer.com/"))).toBe(true);
  });
});
