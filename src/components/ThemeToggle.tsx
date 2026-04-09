import { useTheme } from '../lib/ThemeContext'

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-150 text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-muted)] hover:text-[var(--color-text-primary)] ${className}`}
    >
      {isDark ? (
        // Sun icon — shown in dark mode to switch to light
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="8" cy="8" r="3" />
          <line x1="8" y1="1" x2="8" y2="2.5" />
          <line x1="8" y1="13.5" x2="8" y2="15" />
          <line x1="1" y1="8" x2="2.5" y2="8" />
          <line x1="13.5" y1="8" x2="15" y2="8" />
          <line x1="2.93" y1="2.93" x2="3.99" y2="3.99" />
          <line x1="12.01" y1="12.01" x2="13.07" y2="13.07" />
          <line x1="2.93" y1="13.07" x2="3.99" y2="12.01" />
          <line x1="12.01" y1="3.99" x2="13.07" y2="2.93" />
        </svg>
      ) : (
        // Moon icon — shown in light mode to switch to dark
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M13.5 10.5A6 6 0 0 1 5.5 2.5a6 6 0 1 0 8 8z" />
        </svg>
      )}
    </button>
  )
}
