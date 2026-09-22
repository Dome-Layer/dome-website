import { useCallback, useSyncExternalStore } from 'react'

/**
 * Whether a media query currently matches.
 *
 * `useSyncExternalStore` rather than state plus an effect: the server snapshot is false, which is
 * what the prerendered HTML was built with, so hydration cannot mismatch. React then re-renders
 * with the real value immediately after hydrating. Reading `matchMedia` in a `useState`
 * initializer instead produces React error #418, because the first client render disagrees with
 * the static HTML.
 *
 * Callers must therefore treat false as the safe state: for a scroll animation that means fully
 * revealed, never hidden.
 */
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const mql = window.matchMedia(query)
      mql.addEventListener('change', onChange)
      return () => mql.removeEventListener('change', onChange)
    },
    [query],
  )

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  )
}
