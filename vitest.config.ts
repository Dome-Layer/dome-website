/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import { resolve } from "node:path";

export default defineConfig({
  // Tests run with Italian published, as in CI builds (see src/i18n/locales.ts).
  define: {
    __DOME_IT_PUBLISHED__: "true",
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
    include: ["src/**/*.test.{ts,tsx}", "middleware.test.ts"],
  },
});
