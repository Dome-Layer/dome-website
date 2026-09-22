# Media credits

Provenance for every file in this folder. The machine-readable version is the media manifest,
`src/content/media.ts`; this file is the human-readable record, and the one a lawyer or a client can
be pointed at. `src/content/media.test.ts` checks the two against each other and against the files
on disk, so neither can drift.

Everything here is self-hosted. Nothing loads from a third-party CDN, so the site's
`default-src 'self'` covers it and no `media-src` entry is needed in `vercel.json`.

## Rules

- **AI-generated imagery carries a visible "AI-generated image" label** wherever it appears. The
  legal notice commits us to this, and the manifest's `aiLabel` flag drives it.
- **The portrait is not labelled.** It is a real photograph that was only enhanced, so an AI label
  would misrepresent it in the other direction.
- **Nothing is licensed stock today.** If that changes, the licence goes in the manifest's `licence`
  field and in the table below, naming the licensor and the licence.
- Originals live outside the deployed folder, in `_design/media-originals/` under the DOME root. The
  prompts the AI images were generated from are in `_design/domelayer-redesign/IMAGE_BRIEF.md`.

## Encoding

Every raster asset ships as AVIF with a JPEG fallback, in two widths. Full-bleed imagery is 16:9 at
1376x768 and 768x428; the portrait is square at 600x600 and 320x320; the hero poster is 1920x1080
and 960x540. Explicit width and height are recorded in the manifest, so nothing shifts as images
load.

The hero video is AV1 in WebM (1920x1080, 1.1 MB) with an H.264 MP4 fallback (1280x720, 2.1 MB,
30 s). **Both are silent**: the audio track was stripped at encode time, which matters because the
video autoplays. It is decorative and rendered `aria-hidden`, so the headline carries the meaning.

Commands used, for reproducibility:

```
# still images
ffmpeg -i in -vf scale=W:-2:flags=lanczos -q:v 4 out.jpg
ffmpeg -i in -vf scale=W:-2:flags=lanczos,format=yuv420p10le -c:v libsvtav1 -crf 34 -frames:v 1 out.avif

# video
ffmpeg -i in -an -c:v libsvtav1 -crf 40 hero-home-1080.webm
ffmpeg -i in -an -vf scale=1280:-2 -c:v libx264 -preset slow -crf 26 -movflags +faststart hero-home-720.mp4
```

## Inventory

| File base | Source | AI label | Used on |
|---|---|---|---|
| `hero-home-1080.webm`, `hero-home-720.mp4` | Francesco Prodomo | no (decorative) | Home hero background |
| `hero-home-poster-*` | Francesco Prodomo, first frame of the video | no (decorative) | Home hero poster, and the LCP image |
| `hero-home-still-*` | AI-generated | **yes** | Home hero, still alternative to the video |
| `hero-ai-process-automation-*` | AI-generated | **yes** | AI process automation hero |
| `hero-enterprise-ux-*` | AI-generated | **yes** | Enterprise UX hero |
| `hero-capabilities-*` | AI-generated | **yes** | DOME capabilities hero |
| `hero-about-*` | AI-generated | **yes** | About hero |
| `hero-case-studies-*` | AI-generated | **yes** | Case studies index hero |
| `hero-contact-*` | AI-generated | **yes** | Contact hero |
| `texture-network-*` | AI-generated | **yes** | How we work, and the call-to-action backgrounds |
| `texture-architecture-*` | AI-generated | **yes** | Built for regulated work, and Where we work |
| `case-procurement-workflow-redesign-*` | AI-generated | **yes** | Case study: procurement workflow redesign |
| `case-ai-compliance-assessments-*` | AI-generated | **yes** | Case study: AI compliance assessments |
| `case-metals-trading-platform-*` | AI-generated | **yes** | Case study: metals trading platform |
| `case-food-traceability-platform-*` | AI-generated | **yes** | Case study: food traceability platform |
| `case-trading-app-redesign-*` | AI-generated | **yes** | Case study: trading app redesign |
| `case-ai-procurement-platform-*` | AI-generated | **yes** | Case study: AI procurement platform |
| `case-ai-training-videos-*` | AI-generated | **yes** | Case study: AI training videos |
| `team-francesco-prodomo-*` | Photograph of Francesco Prodomo, AI-enhanced | no (see the rules above) | About, and the leadership card |
| `partner-ionita-logo-light-bg.svg`, `partner-ionita-logo-dark-bg.svg` | Ionita Consulting, used with permission | no | About, and DOME capabilities |
