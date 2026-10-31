import { useCallback, useEffect, useId, useState } from "react";
import { DomeLogo } from "../DomeLogo";
import { ThemeToggle } from "../ThemeToggle";
import { useOptionalTheme } from "../../lib/ThemeContext";
import { clearToken } from "../../lib/auth";
import { HUB_PATH } from "../../lib/routes";

/**
 * The signed-in hub's top bar (DESIGN_SYSTEM v2.7, "Signed-in hub `/app`"). The same bar as the
 * public pages (white content on `--color-bar`), but with the signed-in links: Start, the
 * Governance dashboard, the theme switch and Sign out. Transparent over the hub's blue band, as at
 * the top of the home page, and solid once the page scrolls or the phone menu is open. Below 768px
 * the links move into a page-colour menu.
 */
export function HubBar({ governanceHref }: { governanceHref: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const hasTheme = useOptionalTheme() !== null;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const signOut = useCallback(() => {
    clearToken();
    window.location.href = "/";
  }, []);

  const surface = !scrolled && !menuOpen ? "top" : "bar";

  return (
    <header className="hub-bar on-hero-surface" data-surface={surface} data-scrolled={scrolled || undefined}>
      <div className="hub-bar-inner">
        <div className="hub-bar-left">
          <a href="/" aria-label="DOME home" className="hub-bar-logo">
            <DomeLogo size="md" color="currentColor" className="text-[var(--color-logo)]" />
          </a>
          <nav aria-label="Signed in" className="hub-bar-nav">
            <a href={HUB_PATH} aria-current="page" className="hub-bar-link">
              Start
            </a>
            <a href={governanceHref} className="hub-bar-link">
              Governance dashboard
            </a>
          </nav>
        </div>
        <div className="hub-bar-right">
          {hasTheme && <ThemeToggle className="hub-bar-theme" />}
          <button type="button" onClick={signOut} className="hub-bar-signout">
            Sign out
          </button>
          <button
            type="button"
            className="hub-bar-menu"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id={menuId} className="hub-bar-panel on-page-surface">
          <nav aria-label="Signed in">
            <a href={HUB_PATH} aria-current="page" onClick={() => setMenuOpen(false)}>
              Start
            </a>
            <a href={governanceHref}>Governance dashboard</a>
            <button type="button" onClick={signOut}>
              Sign out
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
