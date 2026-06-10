// @dome-layer/dome-ui's subpath exports (e.g. /utils) don't reliably resolve
// their generated .d.ts on a clean CI/Vercel install of the git dependency
// (TS7016). The runtime values load fine; an ambient module declaration
// unblocks type-checking — the canonical fix the compiler error itself suggests.
declare module "@dome-layer/dome-ui/utils";
