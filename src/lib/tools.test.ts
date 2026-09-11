import { describe, it, expect, afterEach } from "vitest";
import { toolHref } from "./tools";

const realLocation = window.location;

function setHostname(hostname: string) {
  Object.defineProperty(window, "location", {
    value: { ...realLocation, hostname },
    writable: true,
    configurable: true,
  });
}

afterEach(() => {
  Object.defineProperty(window, "location", {
    value: realLocation,
    writable: true,
    configurable: true,
  });
});

describe("toolHref", () => {
  it("points at production on the production host", () => {
    setHostname("domelayer.com");
    expect(toolHref("analyzer.domelayer.com")).toBe("https://analyzer.domelayer.com/");
  });

  it("inserts .staging on the staging apex", () => {
    setHostname("staging.domelayer.com");
    expect(toolHref("analyzer.domelayer.com")).toBe("https://analyzer.staging.domelayer.com/");
  });

  it("inserts .staging on a staging tool subdomain too", () => {
    setHostname("llm-council.staging.domelayer.com");
    expect(toolHref("governance.domelayer.com")).toBe("https://governance.staging.domelayer.com/");
  });

  it("falls back to production on localhost and Vercel previews", () => {
    for (const host of ["localhost", "dome-website-git-some-branch.vercel.app"]) {
      setHostname(host);
      expect(toolHref("data-intelligence.domelayer.com")).toBe(
        "https://data-intelligence.domelayer.com/"
      );
    }
  });

  it("does not treat a look-alike host as staging", () => {
    setHostname("evil-staging.domelayer.com");
    expect(toolHref("analyzer.domelayer.com")).toBe("https://analyzer.domelayer.com/");
  });
});
