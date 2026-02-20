interface DomeLogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

/**
 * Full wordmark logo (No White Space variant, 684×246).
 * Compact horizontal layout — ideal for header & footer.
 */
export function DomeLogo({ className = '', size = 'md' }: DomeLogoProps) {
  const heights = { sm: 32, md: 40, lg: 56, xl: 72 }
  const h = heights[size]
  const w = Math.round(h * (684 / 246))

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 684 246"
      width={w}
      height={h}
      className={className}
      aria-label="Dome"
      role="img"
    >
      <defs>
        <linearGradient id="dome-grad-1" x1="0" y1="76.23" x2="150.99" y2="76.23" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#006bdf"/>
          <stop offset="1" stopColor="#9a00ff"/>
        </linearGradient>
        <linearGradient id="dome-grad-2" y1="206.02" x2="147.1" y2="206.02" xlinkHref="#dome-grad-1"/>
        <linearGradient id="dome-grad-3" y1="173.91" x2="146.59" y2="173.91" xlinkHref="#dome-grad-1"/>
      </defs>
      {/* "Dome" text */}
      <g>
        <path fill="#E8E6E1" d="M216.19,61.36h48.06c33.08,0,59.19,25.68,59.19,62.03s-26.12,62.04-59.19,62.04h-48.06V61.36ZM263.2,159.39c20.9,0,31.69-14.85,31.69-36s-10.79-36-31.69-36h-19.51v72h19.51Z"/>
        <path fill="#E8E6E1" d="M332.04,140c0-30.93,24.39-47.18,48.06-47.18s48.06,16.25,48.06,47.18-24.39,47.18-48.06,47.18-48.06-16.26-48.06-47.18ZM380.1,162.71c11.67,0,21.42-8.74,21.42-22.72s-9.75-22.72-21.42-22.72-21.42,8.74-21.42,22.72,9.75,22.72,21.42,22.72Z"/>
        <path fill="#E8E6E1" d="M497,134.06c0-11.54-6.27-17.13-14.46-17.13s-15.31,5.59-15.31,17.13v51.37h-26.99v-90.87h26.99v11.18c4.86-7.51,13.23-12.93,25.24-12.93,10.62,0,19.85,4.55,25.61,14.33,5.57-8.21,15.31-14.33,29.59-14.33,19.15,0,33.09,12.23,33.09,40.19v52.43h-26.99v-51.37c0-11.54-6.27-17.13-14.45-17.13-8.71,0-15.33,5.59-15.33,17.13v51.37h-26.98v-51.37Z"/>
        <path fill="#E8E6E1" d="M592.84,140.17c0-30.76,22.81-47.35,46.15-47.35s49.98,16.08,44.22,57.66h-64.42c3.66,9.79,12.72,14.68,24.73,14.68,8.01,0,15.16-1.92,21.76-6.99l12.19,12.76c-7.49,9.44-20.37,16.26-36.92,16.26-25.07,0-47.71-17.12-47.71-47.01ZM659.54,131.08c-1.91-10.49-11.14-15.55-20.19-15.55s-18.12,4.72-21.08,15.55h41.27Z"/>
      </g>
      {/* "D" icon with gradient */}
      <g>
        <path fill="url(#dome-grad-1)" d="M150.99,121.96v-13.52C150.99,48.55,102.61,0,42.94,0H0v152.46c90.78-1.35,142.2-18.71,150.99-30.5Z"/>
        <path fill="url(#dome-grad-2)" d="M0,219.86v26.14h42.94c49.84,0,91.68-33.91,104.16-79.96-28.63,31-82.9,51.95-147.1,53.82Z"/>
        <path fill="url(#dome-grad-3)" d="M146.59,142.47c-32,16.48-95.65,23.67-146.59,24.6v38.28c68.78-2.15,126.33-27.9,146.59-62.88Z"/>
      </g>
    </svg>
  )
}

/**
 * Full wordmark logo (Main Logo variant, 930×492).
 * More spacious layout — ideal for hero section display.
 */
export function DomeLogoLarge({ className = '', size = 'lg' }: DomeLogoProps) {
  const heights = { sm: 40, md: 56, lg: 80, xl: 100 }
  const h = heights[size]
  const w = Math.round(h * (930 / 492))

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 930 492"
      width={w}
      height={h}
      className={className}
      aria-label="Dome"
      role="img"
    >
      <defs>
        <linearGradient id="dome-hero-grad-1" x1="123" y1="199.23" x2="273.99" y2="199.23" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#006bdf"/>
          <stop offset="1" stopColor="#9a00ff"/>
        </linearGradient>
        <linearGradient id="dome-hero-grad-2" y1="329.02" x2="270.1" y2="329.02" xlinkHref="#dome-hero-grad-1"/>
        <linearGradient id="dome-hero-grad-3" y1="296.91" x2="269.59" y2="296.91" xlinkHref="#dome-hero-grad-1"/>
      </defs>
      {/* "Dome" text */}
      <g>
        <path fill="#E8E6E1" d="M339.19,184.36h48.06c33.08,0,59.19,25.68,59.19,62.03s-26.12,62.04-59.19,62.04h-48.06v-124.07ZM386.2,282.39c20.9,0,31.69-14.85,31.69-36s-10.79-36-31.69-36h-19.51v72h19.51Z"/>
        <path fill="#E8E6E1" d="M455.04,263c0-30.93,24.39-47.18,48.06-47.18s48.06,16.25,48.06,47.18-24.39,47.18-48.06,47.18-48.06-16.26-48.06-47.18ZM503.1,285.71c11.67,0,21.42-8.74,21.42-22.72s-9.75-22.72-21.42-22.72-21.42,8.74-21.42,22.72,9.75,22.72,21.42,22.72Z"/>
        <path fill="#E8E6E1" d="M620,257.06c0-11.54-6.27-17.13-14.46-17.13s-15.31,5.59-15.31,17.13v51.37h-26.99v-90.87h26.99v11.18c4.86-7.51,13.23-12.93,25.24-12.93,10.62,0,19.85,4.55,25.61,14.33,5.57-8.21,15.31-14.33,29.59-14.33,19.15,0,33.09,12.23,33.09,40.19v52.43h-26.99v-51.37c0-11.54-6.27-17.13-14.45-17.13-8.71,0-15.33,5.59-15.33,17.13v51.37h-26.98v-51.37Z"/>
        <path fill="#E8E6E1" d="M715.84,263.17c0-30.76,22.81-47.35,46.15-47.35s49.98,16.08,44.22,57.66h-64.42c3.66,9.79,12.72,14.68,24.73,14.68,8.01,0,15.16-1.92,21.76-6.99l12.19,12.76c-7.49,9.44-20.37,16.26-36.92,16.26-25.07,0-47.71-17.12-47.71-47.01ZM782.54,254.08c-1.91-10.49-11.14-15.55-20.19-15.55s-18.12,4.72-21.08,15.55h41.27Z"/>
      </g>
      {/* "D" icon with gradient */}
      <g>
        <path fill="url(#dome-hero-grad-1)" d="M273.99,244.96v-13.52c0-59.89-48.38-108.44-108.05-108.44h-42.94v152.46c90.78-1.35,142.2-18.71,150.99-30.5Z"/>
        <path fill="url(#dome-hero-grad-2)" d="M123,342.86v26.14h42.94c49.84,0,91.68-33.91,104.16-79.96-28.63,31-82.9,51.95-147.1,53.82Z"/>
        <path fill="url(#dome-hero-grad-3)" d="M269.59,265.47c-32,16.48-95.65,23.67-146.59,24.6v38.28c68.78-2.15,126.33-27.9,146.59-62.88Z"/>
      </g>
    </svg>
  )
}

/**
 * Symbol Only logo (D icon, 151×246).
 * Just the gradient "D" mark — ideal for hero display.
 */
export function DomeSymbol({ className = '', size = 'lg' }: DomeLogoProps) {
  const heights = { sm: 48, md: 80, lg: 120, xl: 160 }
  const h = heights[size]
  const w = Math.round(h * (151 / 246))

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 151 246"
      width={w}
      height={h}
      className={className}
      aria-label="Dome"
      role="img"
    >
      <defs>
        <linearGradient id="dome-sym-grad-1" x1="0" y1="76.23" x2="151" y2="76.23" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#006bdf"/>
          <stop offset="1" stopColor="#9a00ff"/>
        </linearGradient>
        <linearGradient id="dome-sym-grad-2" y1="206.02" x2="147.11" y2="206.02" xlinkHref="#dome-sym-grad-1"/>
        <linearGradient id="dome-sym-grad-3" y1="173.91" x2="146.6" y2="173.91" xlinkHref="#dome-sym-grad-1"/>
      </defs>
      <path fill="url(#dome-sym-grad-1)" d="M151,121.96v-13.52C151,48.55,102.62,0,42.94,0H0v152.46c90.79-1.35,142.21-18.71,151-30.5Z"/>
      <path fill="url(#dome-sym-grad-2)" d="M0,219.86v26.14h42.94c49.84,0,91.69-33.91,104.16-79.96-28.64,31-82.91,51.95-147.11,53.82Z"/>
      <path fill="url(#dome-sym-grad-3)" d="M146.6,142.47c-32,16.48-95.66,23.67-146.6,24.6v38.28c68.78-2.15,126.34-27.9,146.6-62.88Z"/>
    </svg>
  )
}

export function DomeFavicon({ className = '', size = 32 }: { className?: string; size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 32 32"
      width={size}
      height={size}
      className={className}
      aria-label="D"
      role="img"
    >
      <rect width="32" height="32" rx="4" fill="#0C0C0E"/>
      <defs>
        <linearGradient id="fav-grad-1" x1="0" y1="9.88" x2="19.56" y2="9.88" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#006bdf"/>
          <stop offset="1" stopColor="#9a00ff"/>
        </linearGradient>
        <linearGradient id="fav-grad-2" y1="26.7" x2="19.06" y2="26.7" xlinkHref="#fav-grad-1"/>
        <linearGradient id="fav-grad-3" y1="22.53" x2="18.99" y2="22.53" xlinkHref="#fav-grad-1"/>
      </defs>
      {/* Symbol Only paths scaled to fit 32×32 with padding */}
      <g transform="translate(6, 3) scale(0.1296)">
        <path fill="url(#fav-grad-1)" d="M151,121.96v-13.52C151,48.55,102.62,0,42.94,0H0v152.46c90.79-1.35,142.21-18.71,151-30.5Z"/>
        <path fill="url(#fav-grad-2)" d="M0,219.86v26.14h42.94c49.84,0,91.69-33.91,104.16-79.96-28.64,31-82.91,51.95-147.11,53.82Z"/>
        <path fill="url(#fav-grad-3)" d="M146.6,142.47c-32,16.48-95.66,23.67-146.6,24.6v38.28c68.78-2.15,126.34-27.9,146.6-62.88Z"/>
      </g>
    </svg>
  )
}
