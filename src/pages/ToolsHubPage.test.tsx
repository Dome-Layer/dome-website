import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, within, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import ToolsHubPage from "./ToolsHubPage";
import { AGENT_FLOW_LIVE } from "../lib/tools";
import type { HubData } from "../lib/hub";

// Mock only the auth gate + sign-out; keep the REAL host helpers so the host-aware
// link logic runs against the stubbed window.location.hostname.
vi.mock("../lib/auth", async () => {
  const actual = await vi.importActual<typeof import("../lib/auth")>("../lib/auth");
  return {
    ...actual,
    isAuthenticated: vi.fn(() => true),
    clearToken: vi.fn(),
  };
});

// Mock only the network read; the formatting helpers stay real.
vi.mock("../lib/hub", async () => {
  const actual = await vi.importActual<typeof import("../lib/hub")>("../lib/hub");
  return { ...actual, loadHubData: vi.fn() };
});

import { clearToken, isAuthenticated } from "../lib/auth";
import { loadHubData } from "../lib/hub";

const READY: HubData = {
  status: "ready",
  summary: { records: 48, reviewRequired: 6, reviewRecommended: 2, rulesTriggered: 9 },
  latest: [
    { id: "e1", agentId: "document-intelligence", actionType: "extraction", timestamp: "2026-10-31T10:42:00Z", outputSummary: "Invoice, 14 fields extracted" },
    { id: "e2", agentId: "llm-council", actionType: "deliberation", timestamp: "2026-10-31T09:15:00Z", outputSummary: "Verdict: yes" },
    { id: "e3", agentId: "process-analyzer", actionType: "process_analysis", timestamp: "2026-10-30T16:02:00Z", outputSummary: "" },
    { id: "e4", agentId: "data-intelligence", actionType: "dashboard_generation", timestamp: "2026-10-20T08:00:00Z", outputSummary: "Older" },
  ],
};

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

function tiles() {
  return within(screen.getAllByRole("list")[0]).getAllByRole("link");
}

beforeEach(() => {
  vi.clearAllMocks();
  vi.mocked(isAuthenticated).mockReturnValue(true);
  vi.mocked(loadHubData).mockResolvedValue(READY);
  setHostname("localhost");
});

describe("ToolsHubPage: auth gating", () => {
  it("redirects signed-out visitors to /login (carrying redirect=/app)", () => {
    vi.mocked(isAuthenticated).mockReturnValue(false);
    renderHub();
    expect(screen.getByText("LOGIN STUB")).toBeInTheDocument();
    expect(loadHubData).not.toHaveBeenCalled();
  });

  it("renders the hub for signed-in users", async () => {
    renderHub();
    expect(screen.getByRole("heading", { level: 1, name: "What would you like to do?" })).toBeInTheDocument();
    expect(await screen.findByText("Welcome back")).toBeInTheDocument();
  });
});

describe("ToolsHubPage: the band", () => {
  it("has one action tile per self-serve tool, each opening the tool's root", () => {
    setHostname("domelayer.com");
    renderHub();
    const links = tiles();
    expect(links.map((a) => a.textContent)).toEqual([
      expect.stringContaining("Upload a document"),
      expect.stringContaining("Map a process"),
      expect.stringContaining("Ask the council"),
      expect.stringContaining("Analyse a spreadsheet"),
    ]);
    expect(links.map((a) => a.getAttribute("href"))).toEqual([
      "https://document-intelligence.domelayer.com/",
      "https://analyzer.domelayer.com/",
      "https://llm-council.domelayer.com/",
      "https://data-intelligence.domelayer.com/",
    ]);
  });

  it("shows the tiles before the records load, and when they fail", async () => {
    vi.mocked(loadHubData).mockResolvedValue({ status: "error" });
    renderHub();
    expect(tiles()).toHaveLength(4);
    expect(screen.getByRole("status")).toHaveTextContent("Loading your records");
    expect(await screen.findByText("Your records did not load")).toBeInTheDocument();
    expect(tiles()).toHaveLength(4);
  });

  it("points every tool link at *.staging.domelayer.com on a staging host", async () => {
    setHostname("staging.domelayer.com");
    renderHub();
    await screen.findByText("Pick up where you left off");
    const external = screen
      .getAllByRole("link")
      .map((a) => a.getAttribute("href") ?? "")
      .filter((h) => h.startsWith("https://"));
    expect(external.length).toBeGreaterThan(4);
    expect(external.every((h) => new URL(h).hostname.endsWith(".staging.domelayer.com"))).toBe(true);
  });
});

describe.skipIf(AGENT_FLOW_LIVE)("ToolsHubPage: Agent Flow while not live", () => {
  it("links to the private demo page, never to an agent-flow host", async () => {
    renderHub();
    const link = screen.getByRole("link", { name: /book a private demo/ });
    expect(link).toHaveAttribute("href", "/dome/agent-flow");
    await screen.findByText("Pick up where you left off");
    const all = screen.getAllByRole("link").map((a) => a.getAttribute("href") ?? "");
    expect(all.some((h) => h.includes("agent-flow."))).toBe(false);
  });
});

describe("ToolsHubPage: records", () => {
  it("shows the three most recent tools, each linking to its record in the dashboard", async () => {
    setHostname("domelayer.com");
    renderHub();
    const section = (await screen.findByText("Pick up where you left off")).closest("section")!;
    const cards = within(section).getAllByRole("link");
    expect(cards).toHaveLength(3);
    expect(cards[0]).toHaveTextContent("Document Intelligence");
    expect(cards[0]).toHaveTextContent("Invoice, 14 fields extracted");
    expect(cards[0]).toHaveAttribute("href", "https://governance.domelayer.com/events/e1");
    // A record with no summary falls back to its action.
    expect(cards[2]).toHaveTextContent("Process analysis");
    expect(screen.queryByText("Older")).not.toBeInTheDocument();
  });

  it("shows the governance numbers and the dashboard button", async () => {
    setHostname("domelayer.com");
    renderHub();
    expect(
      await screen.findByText("48 records in the last 30 days. 6 waited for a person, 9 triggered a governance rule.")
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Open the governance dashboard/ })).toHaveAttribute(
      "href",
      "https://governance.domelayer.com/"
    );
  });
});

describe("ToolsHubPage: a new account", () => {
  it("explains the record instead of showing empty rows", async () => {
    vi.mocked(loadHubData).mockResolvedValue({
      status: "ready",
      summary: { records: 0, reviewRequired: 0, reviewRecommended: 0, rulesTriggered: 0 },
      latest: [],
    });
    renderHub();
    expect(await screen.findByText("Your audit trail starts with your first run")).toBeInTheDocument();
    expect(screen.getByText("Welcome to Dome")).toBeInTheDocument();
    expect(screen.queryByText("Welcome back")).not.toBeInTheDocument();
    expect(screen.queryByText("Pick up where you left off")).not.toBeInTheDocument();
    expect(screen.getByText("Input fingerprint")).toBeInTheDocument();
  });
});

describe("ToolsHubPage: failures", () => {
  it("offers a retry and the dashboard when the records fail", async () => {
    vi.mocked(loadHubData).mockResolvedValueOnce({ status: "error" }).mockResolvedValueOnce(READY);
    renderHub();
    fireEvent.click(await screen.findByRole("button", { name: "Try again" }));
    expect(await screen.findByText("Pick up where you left off")).toBeInTheDocument();
    expect(loadHubData).toHaveBeenCalledTimes(2);
  });

  it("points to the dashboard, without a retry, when the build has no Supabase variables", async () => {
    vi.mocked(loadHubData).mockResolvedValue({ status: "unconfigured" });
    renderHub();
    expect(await screen.findByText("Every record is in the governance dashboard.")).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Try again" })).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Open the governance dashboard/ })).toBeInTheDocument();
  });
});

// jsdom applies the page's CSS but matches no min-width query, so it renders the phone layout:
// the desktop links and Sign out are display:none there, and hidden elements have no accessible
// name in jsdom, so those two tests select them by class.
describe("ToolsHubPage: top bar", () => {
  it("marks Start as the current page and links the governance dashboard (desktop)", () => {
    setHostname("domelayer.com");
    const { container } = renderHub();
    const links = [...container.querySelectorAll<HTMLAnchorElement>(".hub-bar-nav a")];
    expect(links.map((a) => [a.textContent, a.getAttribute("href"), a.getAttribute("aria-current")])).toEqual([
      ["Start", "/app", "page"],
      ["Governance dashboard", "https://governance.domelayer.com/", null],
    ]);
  });

  it("signs out from the desktop bar", () => {
    const { container } = renderHub();
    fireEvent.click(container.querySelector(".hub-bar-signout")!);
    expect(clearToken).toHaveBeenCalled();
  });

  it("opens the phone menu with the same links and Sign out, and closes it on Escape", () => {
    setHostname("domelayer.com");
    renderHub();
    const toggle = screen.getByRole("button", { name: "Open menu" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    const menu = screen.getByRole("navigation", { name: "Signed in" });
    expect(within(menu).getByRole("link", { name: "Start" })).toHaveAttribute("aria-current", "page");
    expect(within(menu).getByRole("link", { name: "Governance dashboard" })).toHaveAttribute(
      "href",
      "https://governance.domelayer.com/"
    );
    fireEvent.keyDown(window, { key: "Escape" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("navigation", { name: "Signed in" })).not.toBeInTheDocument();
  });

  it("signs out from the phone menu", () => {
    renderHub();
    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));
    fireEvent.click(within(screen.getByRole("navigation", { name: "Signed in" })).getByRole("button", { name: "Sign out" }));
    expect(clearToken).toHaveBeenCalled();
  });
});
