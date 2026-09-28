import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { renderInline } from "./inline";
import PrivacyPage from "../../pages/PrivacyPage";
import TermsPage from "../../pages/TermsPage";

function inline(text: string, locale: "en" | "it" = "en") {
  return render(<p>{renderInline(text, locale)}</p>).container.querySelector("p")!;
}

describe("renderInline", () => {
  it("renders bold, code and a line break", () => {
    const p = inline("**Bold** and `code`\nnext line");
    expect(p.querySelector("strong")).toHaveTextContent("Bold");
    expect(p.querySelector("code")).toHaveTextContent("code");
    expect(p.querySelector("br")).not.toBeNull();
  });

  it("keeps mailto links as they are", () => {
    const a = inline("write to [us](mailto:privacy@domelayer.com)").querySelector("a");
    expect(a).toHaveAttribute("href", "mailto:privacy@domelayer.com");
  });

  it("localises route links", () => {
    expect(inline("[Privacy](privacy)", "en").querySelector("a")).toHaveAttribute("href", "/privacy");
    expect(inline("[Privacy](privacy)", "it").querySelector("a")).toHaveAttribute("href", "/it/privacy");
  });

  it("fails loudly on an unknown link target instead of rendering a dead link", () => {
    expect(() => inline("[x](not-a-route)")).toThrow(/Unknown link target/);
  });
});

function renderAt(path: string, page: React.ReactElement) {
  return render(<MemoryRouter initialEntries={[path]}>{page}</MemoryRouter>);
}

describe("legal pages by locale", () => {
  it("renders the English privacy policy at /privacy", () => {
    renderAt("/privacy", <PrivacyPage />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Privacy policy");
    expect(screen.getByRole("link", { name: /Terms of service/ })).toHaveAttribute("href", "/terms");
  });

  it("renders the Italian privacy policy at /it/privacy, with Italian links", () => {
    renderAt("/it/privacy", <PrivacyPage />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Informativa sulla privacy");
    expect(screen.getByText(/titolare del trattamento/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Termini di servizio/ })).toHaveAttribute("href", "/it/termini");
    for (const a of screen.getAllByRole("link", { name: /Torna a domelayer.com/ })) {
      expect(a).toHaveAttribute("href", "/it");
    }
  });

  it("renders the Italian terms at /it/termini, linking to the Italian privacy policy", () => {
    renderAt("/it/termini", <TermsPage />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Termini di servizio");
    const main = screen.getByRole("main");
    const privacyLinks = within(main).getAllByRole("link", { name: /Informativa sulla privacy/ });
    expect(privacyLinks.length).toBeGreaterThan(0);
    for (const a of privacyLinks) expect(a).toHaveAttribute("href", "/it/privacy");
  });
});
