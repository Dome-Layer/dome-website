// Applies the saved theme before first paint, so prerendered pages do not flash the wrong theme
// before React hydrates. Mirrors the lookup order in src/lib/ThemeContext.tsx.
// Loaded as an external file because the CSP does not allow inline scripts.
//
// DOME is a dark-first brand, so dark is the default and the OS preference is deliberately not
// consulted: only an explicit choice through the theme toggle, remembered in the dome-theme cookie,
// switches the site to light. The cookie is set for *.domelayer.com, so the choice follows the
// visitor into the tools.
;(function () {
  try {
    var match = document.cookie.match(/(?:^|; )dome-theme=(light|dark)(?:;|$)/)
    var theme = match ? match[1] : window.localStorage.getItem('dome-theme')
    if (theme !== 'light') document.documentElement.setAttribute('data-theme', 'dark')
  } catch (e) {
    // Storage unavailable: fall back to the dark default.
    document.documentElement.setAttribute('data-theme', 'dark')
  }
})()
