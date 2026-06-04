import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import LoginPage from "./LoginPage";

// ---------------------------------------------------------------------------
// Mocks — mirror the relative specifiers LoginPage imports
// ---------------------------------------------------------------------------

vi.mock("../lib/supabase", () => ({
  signInWithProvider: vi.fn(async () => ({ error: null })),
}));

vi.mock("../lib/compliance", () => ({
  storePendingConsent: vi.fn(),
  hasLocalConsent: vi.fn(() => false),
}));

import { signInWithProvider } from "../lib/supabase";
import { storePendingConsent, hasLocalConsent } from "../lib/compliance";

function renderLogin() {
  return render(
    <MemoryRouter initialEntries={["/login"]}>
      <LoginPage />
    </MemoryRouter>
  );
}

beforeEach(() => {
  vi.clearAllMocks();
  vi.mocked(hasLocalConsent).mockReturnValue(false);
  localStorage.clear();
  sessionStorage.clear();
});

// ---------------------------------------------------------------------------
// First-time user — consent gates every sign-in action (compliance control)
// ---------------------------------------------------------------------------

describe("LoginPage — provider buttons (first-time user)", () => {
  it("renders GitHub and Google buttons", () => {
    renderLogin();
    expect(
      screen.getByRole("button", { name: /continue with github/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /continue with google/i })
    ).toBeInTheDocument();
  });

  it("provider buttons are disabled until Terms is accepted", async () => {
    const user = userEvent.setup();
    renderLogin();

    const github = screen.getByRole("button", { name: /continue with github/i });
    const google = screen.getByRole("button", { name: /continue with google/i });
    expect(github).toBeDisabled();
    expect(google).toBeDisabled();

    // First checkbox is the required Terms checkbox
    const checkboxes = screen.getAllByRole("checkbox");
    await user.click(checkboxes[0]);

    expect(github).not.toBeDisabled();
    expect(google).not.toBeDisabled();
  });

  it("clicking a provider stores consent then initiates OAuth", async () => {
    const user = userEvent.setup();
    renderLogin();

    await user.click(screen.getAllByRole("checkbox")[0]); // accept Terms
    await user.click(screen.getByRole("button", { name: /continue with github/i }));

    expect(storePendingConsent).toHaveBeenCalledWith(false);
    expect(signInWithProvider).toHaveBeenCalledWith("github");
  });

  it("passes marketing consent through when the marketing box is checked", async () => {
    const user = userEvent.setup();
    renderLogin();

    const checkboxes = screen.getAllByRole("checkbox");
    await user.click(checkboxes[0]); // terms
    await user.click(checkboxes[1]); // marketing
    await user.click(screen.getByRole("button", { name: /continue with google/i }));

    expect(storePendingConsent).toHaveBeenCalledWith(true);
    expect(signInWithProvider).toHaveBeenCalledWith("google");
  });
});

// ---------------------------------------------------------------------------
// Returning user — frictionless (no checkboxes, providers enabled)
// ---------------------------------------------------------------------------

describe("LoginPage — returning user", () => {
  beforeEach(() => {
    vi.mocked(hasLocalConsent).mockReturnValue(true);
  });

  it("enables provider buttons immediately with no consent checkboxes", () => {
    renderLogin();
    expect(
      screen.getByRole("button", { name: /continue with github/i })
    ).not.toBeDisabled();
    expect(screen.queryAllByRole("checkbox")).toHaveLength(0);
  });
});

// ---------------------------------------------------------------------------
// Magic link — unchanged gating, still posts to the auth backend
// ---------------------------------------------------------------------------

describe("LoginPage — magic link", () => {
  it("send button gates on email + Terms, then POSTs the magic-link request", async () => {
    const user = userEvent.setup();
    const fetchMock = vi
      .fn()
      .mockResolvedValue({ ok: true, json: async () => ({}) });
    vi.stubGlobal("fetch", fetchMock);

    renderLogin();

    const sendBtn = screen.getByRole("button", { name: /send sign-in link/i });
    expect(sendBtn).toBeDisabled();

    await user.type(
      screen.getByPlaceholderText("you@company.com"),
      "user@example.com"
    );
    expect(sendBtn).toBeDisabled(); // still needs Terms

    await user.click(screen.getAllByRole("checkbox")[0]);
    expect(sendBtn).not.toBeDisabled();

    await user.click(sendBtn);

    await waitFor(() => {
      expect(storePendingConsent).toHaveBeenCalled();
      expect(fetchMock).toHaveBeenCalledWith(
        expect.stringContaining("/api/v1/auth/magic-link"),
        expect.objectContaining({ method: "POST" })
      );
    });

    vi.unstubAllGlobals();
  });
});

// ---------------------------------------------------------------------------
// Stored redirect — preserve genuine tool returns, clear stale ones
// (the "landed on Process Analyzer after a direct sign-in" bug)
// ---------------------------------------------------------------------------

describe("LoginPage — stored redirect handling", () => {
  function renderAt(entry: string) {
    return render(
      <MemoryRouter initialEntries={[entry]}>
        <LoginPage />
      </MemoryRouter>
    );
  }

  it("stores a genuine tool redirect from ?redirect for the callback to honor", () => {
    renderAt("/login?redirect=/tools/process-analyzer");
    expect(sessionStorage.getItem("dome_auth_redirect")).toBe(
      "/tools/process-analyzer"
    );
  });

  it("clears a stale redirect on a direct sign-in (no ?redirect)", () => {
    // Left behind by a prior, abandoned tool-initiated login in the same tab.
    sessionStorage.setItem(
      "dome_auth_redirect",
      "https://analyzer.domelayer.com/r/42"
    );
    renderAt("/login");
    expect(sessionStorage.getItem("dome_auth_redirect")).toBeNull();
  });

  it("clears a stale redirect when ?redirect is just '/'", () => {
    sessionStorage.setItem(
      "dome_auth_redirect",
      "https://analyzer.domelayer.com/r/42"
    );
    renderAt("/login?redirect=%2F");
    expect(sessionStorage.getItem("dome_auth_redirect")).toBeNull();
  });
});
