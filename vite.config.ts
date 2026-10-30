import { defineConfig } from 'vite'
import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'
import { publishedLocales } from './src/i18n/locales'

export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouter(),
  ],
  define: {
    // Read by src/i18n/published.ts. A locale stays dormant until its DOME_PUBLISH_<LOCALE> flag says so.
    __DOME_PUBLISHED_LOCALES__: JSON.stringify(publishedLocales(process.env)),
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
