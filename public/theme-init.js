// Applies the saved or system theme before first paint, so prerendered pages do not flash
// light before React hydrates. Mirrors the lookup order in src/lib/ThemeContext.tsx.
// Loaded as an external file because the CSP does not allow inline scripts.
;(function () {
  try {
    var match = document.cookie.match(/(?:^|; )dome-theme=(light|dark)(?:;|$)/)
    var theme = match ? match[1] : window.localStorage.getItem('dome-theme')
    if (theme !== 'light' && theme !== 'dark') {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    if (theme === 'dark') document.documentElement.setAttribute('data-theme', 'dark')
  } catch (e) {
    // Storage or matchMedia unavailable: fall back to the light default.
  }
})()
