/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import { resolve } from "node:path";

// Node 22+ ships its own Web Storage `localStorage`, which stays undefined unless
// you run with --localstorage-file. It is a non-enumerable own property of
// globalThis, so vitest's jsdom environment (which copies the jsdom window's
// enumerable keys onto the global) never installs jsdom's real Storage over it,
// and every test touching localStorage/sessionStorage fails with
// "Cannot read properties of undefined". Dropping Node's builtin hands the
// global back to jsdom.
//
// The flag does not exist before Node 22 and Node exits on an unknown flag, so
// the option is omitted entirely on older runtimes: CI is on Node 20 and is
// unaffected by this block. Remove it once local and CI Node versions match.
// (Vitest 4 moved the old poolOptions.<pool>.execArgv to this top-level option.)
const nodeMajor = Number(process.versions.node.split(".")[0]);
const nodeStorageFix =
  nodeMajor >= 22 ? { execArgv: ["--no-experimental-webstorage"] } : {};

export default defineConfig({
  // Tests run with every locale published, so every catalogue and route is exercised (see
  // src/i18n/locales.ts). Tests of an unpublished locale pass the locale list explicitly.
  define: {
    __DOME_PUBLISHED_LOCALES__: JSON.stringify(["en", "it", "nl", "de"]),
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
    include: ["src/**/*.test.{ts,tsx}", "middleware.test.ts", "worker/**/*.test.ts"],
    ...nodeStorageFix,
  },
});
