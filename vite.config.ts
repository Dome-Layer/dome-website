import { defineConfig } from 'vite'
import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'
import { isItalianPublished } from './src/i18n/locales'

export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouter(),
  ],
  define: {
    // Read by src/i18n/published.ts. Italian is dormant in production until it is translated.
    __DOME_IT_PUBLISHED__: JSON.stringify(isItalianPublished(process.env)),
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
