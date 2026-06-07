# Logic Insight redesign — current state handoff (2026-06-07)

Resume point after the full editorial redesign + WOW pass + empty-space sweep + Partners/Contact build + SEO + performance pass. Everything below is **built, deployed, and verified live**.

## Locations
| Thing | Path |
|---|---|
| Repo (local) | `~/Projects/logicinsight-next/` |
| Live URL | `https://r4mwfcqy8z-bot.github.io/logicinsight-next/` |
| Source client site (content authority) | `https://logicinsight.io/` |
| Puppeteer scratch (fragile install) | `/tmp/puppe/` |

## Build + deploy (one loop, runs without prompts now)
```bash
cd ~/Projects/logicinsight-next && PAGES=1 npm run build
cd out && touch .nojekyll && rm -rf .git && git init -q -b gh-pages \
 && git -c user.email="b@l.local" -c user.name="LI" add -A \
 && git -c user.email="b@l.local" -c user.name="LI" commit -q -m "<msg>" \
 && git remote add origin https://github.com/r4mwfcqy8z-bot/logicinsight-next.git \
 && git push -q -f origin gh-pages
```
`.claude/settings.local.json` has a permission allowlist (acceptEdits + git/npm/node/inspection) so the loop runs without click-prompts. GH Pages takes ~30–60s to propagate; a fresh route can 404 briefly right after deploy.

## Design system (locked)
- **Type:** Geist Sans + Geist Mono only. Instrument Serif + Inter removed. Emphasis = `italic font-bold text-[var(--color-p-200)]` (NOT serif). The legacy `.serif-italic`/`.gradient-text` classes still exist and render as italic-bold gradient (kept for back-compat; safe).
- **Scale:** `editorial-display` (~6rem cap), `editorial-statement`, `editorial-lede`, `editorial-sub`, `numeral`, `kicker` (mono uppercase, no pill/dot), `section-mark`. In `globals.css`.
- **Color:** purple brand spine (`--color-p-*`), pink accent, bone ink `#F4F1EA`, bg `#08060E`. One accent per section.
- **Surfaces:** `.matte`, `.matte-strong`, `.glass*`, `.signature-glass` (frosted, ONE per page max), `.depth-1/2`, `.violet-glow`.
- **Buttons:** `.btn-primary` (bone), `.btn-ghost`, `.btn-violet`. No gradient sheen-sweep.
- **Layout:** `.editorial-shell` (max-w 1480), `.grid-edit` (12-col), asymmetric.
- **Motion curve:** `--ease-editorial: cubic-bezier(0.22,1,0.36,1)`. Reduced-motion respected.

## Shared primitives (`src/components/sections/page-head.tsx`)
- `PageHead` — asymmetric hero, kicker + KineticHeadline + SectionAmbient + hairline grid.
- `SectionHead` — left-aligned editorial spread (title left, sub right).
- `StatementBand` — **contained** matte panel for standalone statements (fixed the "floating headline in dead space" problem on small product pages).
- `FeatGrid` — SpotlightCard tiles, cursor-follow glow, no decorative dots.

## WOW layer (`src/components/wow/`)
- `spotlight-card` (cursor glow + optional tilt), `tilt-card`, `kinetic-headline` (word stagger), `scroll-ambient` (ScrollAmbient = global evolving backdrop in layout; SectionAmbient = per-section), `cursor-parallax` (hero 3D drifts to cursor), `scroll-progress-rail` (blog), `simulated-chat` (AI Assistant live demo), `homepage-loader` (curtain, HOME ONLY).
- Five Engines = GSAP sticky scroll-stack + viewport-edge StageRail. Pricing tier = hover-morph (scale/dim/scan + shimmer). Bento = traveling SVG particles. Founder cards = TiltCard + signature-glass.

## 3D (`src/components/scenes/`)
- `hero-polyhedron` (R3F, full-bleed + radial CSS mask so NO rectangle cutoff), `cluster-constellation` (R3F, left-bleed masked on NutanixFirst). Both dynamic-imported, ssr:false, wrapped in `VisibilityMount`.
- **`VisibilityMount` now UNMOUNTS children when offscreen** (was display:none) → 3D render loop stops off-view. Verified: only 1 WebGL canvas in DOM at a time.
- Perf-tuned: DPR `[1,1.5]`, stars 240 / dust 190, bloom intensity 0.7/0.75.

## Routes (40 built)
Home (11 sections + FAQ) · about · pricing · blog (+6 article pages, all summarized ~⅔, internal links basePath-fixed) · demo · free-trial · resources (+2 guides) · **partners** (4 programs, 7 benefits, 10-field application form) · **contact** (channels + 7-field form) · solutions/{use-cases, monitoring-as-a-service} · product/{features, architecture, ai-assistant, integrations, cluster-monitoring, predictive-analytics, network-flow-analysis, hci-monitoring, snmp-monitoring, hycu-monitoring, redfish-monitoring, prism-central-monitoring, ahv-monitoring, nutanix-datadog, nutanix-grafana, nutanix-monitoring-vs-prism}.

Client (use-client) pages use a `page.tsx` server wrapper (exports metadata) + `view.tsx` client body — needed so per-page `<title>`/description exist in static HTML.

## SEO
`app/sitemap.ts` (40 URLs, logicinsight.io domain) + `app/robots.ts` + JSON-LD (Org/WebSite/SoftwareApplication) in layout + OG/Twitter + per-page titles/descriptions.

## Gotchas
- **basePath:** raw `<a href="/...">` strips `/logicinsight-next`. Use Next `<Link>`, or for HTML strings (blog `dangerouslySetInnerHTML`) prefix with `process.env.NEXT_PUBLIC_BASE_PATH`. `asset()` for `/public` imgs.
- **Next 16:** read `node_modules/next/dist/docs/` before routing/Next API changes (AGENTS.md).
- **Puppeteer** in /tmp/puppe breaks (missing package.json); restore with `npm install puppeteer --ignore-scripts` (Chromium cached).
- Content fidelity: headings, list items, stat numbers, integration/program names, form fields, contact info = VERBATIM from logicinsight.io. Marketing prose may be restated. ZERO em-dashes anywhere.

## Open / not done
- Content-to-improve-feel: homepage FAQ shipped; **glossary / interactive coverage explorer / self-hosted deploy timeline** still on the menu (Aiden's pick).
- Legal pages (`/security`, `/privacy-policy`, `/terms-of-service`) exist on logicinsight.io, NOT yet in ours (Aiden focused on form pages partners+contact).
- cmdk ⌘K palette + View Transitions: still unwired from earlier handoff.
- No real OG share image asset (metadata declares it; no `opengraph-image` file).
