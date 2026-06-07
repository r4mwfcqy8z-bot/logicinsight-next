# Logic Insight redesign — session handoff

You are picking up a frontend redesign project mid-stream. The previous session's
context window is full. Read this whole doc before doing anything.

---

## Who you're working with

**Aiden** (solo builder, no formal dev experience, macOS). He's a contractor
doing a **redesign for his client Logic Insight** (the original logicinsight.io
site, which he also built). He has full authority over their content.

**Working style — non-negotiable:**
- Terse responses, 1–3 sentences per turn. No preamble.
- Never editorialize about scope / energy / "this is a lot." Just execute.
- Never suggest pausing, wrapping up, "saving for tomorrow." He manages his own pacing.
- Make code fixes proactively on this project. Still ask before destructive ops, scope expansion, or pushing force-changes.
- He pushes back hard on the slightest divergence from his client's actual content. Content fidelity > redesign creativity.

---

## What this project is

A **Next.js 16 static-export redesign** of every page on logicinsight.io,
deployed to GitHub Pages. The brief from the start: keep all content / section
structure identical to the live site; only change the design.

### Locations
| Thing | Path |
|---|---|
| Repo (local) | `~/Projects/logicinsight-next/` |
| Repo (remote) | `https://github.com/r4mwfcqy8z-bot/logicinsight-next` |
| Live URL | `https://r4mwfcqy8z-bot.github.io/logicinsight-next/` |
| Live source site (client's actual site) | `https://logicinsight.io/` |
| Crawl scratchpad | `/tmp/puppe/` (puppeteer scripts + JSON dumps) |
| Old static-HTML attempt (archived) | `~/Projects/logicinsight-redesign/` — do NOT modify |
| Product screenshots | `~/Projects/logicinsight-next/public/dashboards/` |
| Brand PNG logo | `~/Projects/logicinsight-next/public/logo-wordmark.png` |

### Stack (all installed in package.json)
- Next.js 16.2.6 · React 19 · Tailwind 4 (note: AGENTS.md in the repo says read `node_modules/next/dist/docs/` before writing Next code — v16 has breaking changes)
- `motion` (Motion / Framer Motion successor) — primary animation engine
- `@react-three/fiber` + `@react-three/drei` + `@react-three/postprocessing` — Bloom on R3F scenes
- `gsap` + `@gsap/react` — installed but mostly Motion-driven
- `lenis` — smooth scroll, mounted in `LenisProvider`
- `cmdk` — installed for command palette (modal NOT yet wired)
- `canvas-confetti`, `vanilla-tilt`, `lucide-react`, `clsx`, `tailwind-merge`, `class-variance-authority`, `geist`

### Build + deploy workflow
```bash
cd ~/Projects/logicinsight-next
PAGES=1 npm run build       # writes static export to ./out
cd out
touch .nojekyll
rm -rf .git
git init -q -b gh-pages
git -c user.email="builder@logicinsight.local" -c user.name="Logic Insight Next" add -A
git -c user.email="builder@logicinsight.local" -c user.name="Logic Insight Next" commit -q -m "<msg>"
git remote add origin https://github.com/r4mwfcqy8z-bot/logicinsight-next.git
git push -q -f origin gh-pages
```
`gh` CLI is authed as `r4mwfcqy8z-bot`. Pages is on `gh-pages` branch root.

### basePath gotcha
`next.config.ts` switches `basePath: "/logicinsight-next"` when `PAGES=1`.
For `public/` assets in `<img>` tags, use the `asset()` helper from
`@/lib/asset` — `next/image` does NOT prefix basePath correctly in static
export, so we use plain `<img src={asset("/...")}/>`.

---

## File / route tree

```
app/
├─ layout.tsx                          (Lenis + fonts: Inter, Instrument Serif, JetBrains Mono)
├─ page.tsx                            (HOME — 11 sections)
├─ globals.css                         (purple token system + glass primitives)
├─ demo/page.tsx                       (contact-style form)
├─ free-trial/page.tsx                 (trial signup form)
├─ pricing/page.tsx                    (3 tiers + comparison + FAQ)
├─ blog/page.tsx                       (article cards → real logicinsight.io URLs)
├─ about/page.tsx                      (Why / Team / Contact)
├─ resources/
│  ├─ page.tsx                         (Core Coverage + Buyer Guides index)
│  ├─ how-to-monitor-nutanix-with-datadog/page.tsx
│  └─ how-to-monitor-nutanix-with-grafana/page.tsx
├─ solutions/
│  ├─ use-cases/page.tsx               (7 scenarios, CHALLENGE/HELP/OUTCOME pattern)
│  └─ monitoring-as-a-service/page.tsx (MaaS — 9 sections incl. 3 Service Tiers)
└─ product/
   ├─ features/page.tsx                (5 stages: Collect once / Enrich locally / Analyze with context / Visualize and report / Operate one platform)
   ├─ architecture/page.tsx            (5 stages: Unified collection fabric / Local ops graph / Cross-domain analysis / Dashboards & forwarding / Operating model)
   ├─ ai-assistant/page.tsx            (7 sections incl. Daily Insights, VM Quick Review, AI Focus Mode, Architecture)
   ├─ integrations/page.tsx            (10 exact categories, 27 integrations with GA / Coming Soon)
   ├─ cluster-monitoring/page.tsx
   ├─ predictive-analytics/page.tsx
   ├─ network-flow-analysis/page.tsx
   ├─ hci-monitoring/page.tsx
   ├─ snmp-monitoring/page.tsx
   ├─ hycu-monitoring/page.tsx
   ├─ redfish-monitoring/page.tsx
   ├─ prism-central-monitoring/page.tsx
   ├─ ahv-monitoring/page.tsx
   ├─ nutanix-datadog/page.tsx
   ├─ nutanix-grafana/page.tsx
   └─ nutanix-monitoring-vs-prism/page.tsx

components/
├─ nav.tsx                             (glass capsule, dropdowns, magnetic CTA, ⌘K trigger NOT wired to modal)
├─ footer.tsx                          (4 cols, contact: Orlando FL + email + +1-407-513-2359)
├─ logo.tsx                            (uses /public/logo-wordmark.png via asset())
├─ lenis-provider.tsx
├─ magnetic.tsx
├─ aurora-bg.tsx                       (AuroraBg + GridBg)
├─ sections/
│  ├─ hero.tsx                         (HeroPolyhedron R3F mounted via VisibilityMount)
│  ├─ page-head.tsx                    (PageHead + SectionHead + FeatGrid — reusable subpage primitives)
│  ├─ coverage-stats.tsx               (50+ / 17 / 1 strip)
│  ├─ trust-marquee.tsx
│  ├─ coverage-bento.tsx               (818+ / Hardware / Backups / 210+ Network & Flow with "Optional output" badge)
│  ├─ nutanix-first.tsx                (ClusterConstellation R3F)
│  ├─ five-engines.tsx                 (Collection / Correlation / ML / Reporting / Forwarding — homepage engines, not features-page stages)
│  ├─ forwarding.tsx                   (SVG diagram: viewBox 1100×520, BOX_W=230, centered columns)
│  └─ why-and-cta.tsx                  (WhyLogicInsight + FinalCTA)
├─ dashboards/
│  ├─ dashboard-panel.tsx              (Browser-chrome frame + real product screenshot with `filter: invert(0.92) hue-rotate(180deg) saturate(1.1)` for dark mode)
│  └─ <legacy command-center.tsx, netflow.tsx — not imported anywhere, can delete>
└─ scenes/
   ├─ hero-polyhedron.tsx              (R3F · IcosahedronGeometry + MeshDistortMaterial + Bloom)
   ├─ cluster-constellation.tsx        (R3F · orbiting hexagonal satellites on 4 ring planes)
   └─ visibility.tsx                   (VisibilityMount — unmounts children when off-screen)

lib/
├─ utils.ts                            (cn helper)
└─ asset.ts                            (asset() — prefixes basePath for /public/ assets)
```

---

## Design system (already locked)

- **Brand:** purple primary (`--color-p-400 #A78BFA`, `--color-p-500 #8B5CF6`,
  `--color-p-600 #7C3AED`), pink accent (`--color-pink-400 #FF6B9C`), green
  used only for live-pulse data dots.
- **Bg:** `#07050E` (warm-cool blend toward violet, never pure black).
- **Type:** Inter (sans), Instrument Serif italic (display moments), JetBrains
  Mono (eyebrows, labels, code-ish).
- **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` exponential-out is the brand standard.
- **Glass utilities:** `.glass`, `.glass-strong`, **`.glass-panel`** (use this
  for dropdowns / modals — fully opaque, NOT transparent).
- **Cursor:** removed (Aiden hates custom cursor followers).

---

## What's done (live now)

### Pages — all 26 routes return 200
All sections rewritten with **exact section structure** from logicinsight.io.
Aiden audited specifically: Features, AI Assistant, MaaS, Pricing, Blog,
Architecture, Use Cases, vs Prism, Integrations, SNMP, HCI, Cluster, Predictive,
Network Flow, HYCU, Redfish, Prism Central, AHV, Datadog, Grafana, Resources.

### Hero / visuals
- Hero polyhedron (R3F first-paint scene) ✅
- Cluster constellation (R3F second scene on Nutanix-First section) ✅
- Both wrapped in `VisibilityMount` for perf
- DPR clamped to 1.6, `performance:{min:0.5}` on R3F canvases
- Dashboards: actual product screenshots inverted to dark mode via CSS filter
- Forwarding diagram: just centered + rounded + viewBox widened to 1100×520

### Content parity confirmed
- Pricing: $7/core/month Self-Hosted · MaaS Contact for quote · Marketplace Vendor contract · 14-day trial
- 3 MaaS Service Tiers verbatim (Essentials / Pro / Enterprise) with full feature lists
- 3 Built For categories (Lean IT Teams / MSPs & Service Providers / Compliance-Driven Orgs)
- DIY vs MaaS comparison table verbatim
- Use Cases: 7 scenarios (Infrastructure Health & Capacity Planning / Performance Degradation / Change Impact / Alert Noise Reduction / Executive / Pre-Incident Detection / Physical Layer Visibility) — each with THE CHALLENGE / HOW OVERWATCH HELPS / OUTCOME + custom mock UI
- Integrations: 27 integrations across 10 exact categories with GA / Coming Soon badges
- vs Prism: 6-row comparison snapshot verbatim
- Blog: 6 articles linked to real `/blog/{slug}/` URLs on logicinsight.io
- Contact: Orlando FL · contact@logicinsight.io · +1-407-513-2359

### Last batch fixes (most recent)
- Real PNG logo wired
- Nav: Product dropdown reverted to live's 6 items (Features · HCI · SNMP · AI Assistant · Architecture · Integrations); Solutions: 2 items (Use Cases · MaaS)
- Demo → `/demo`, Free Trial → `/free-trial` (forms collect first/last/email/company/clusters)
- Pricing CTAs: Self-Hosted **Start trial** → `/free-trial` · MaaS **Get a quote** → `/demo` · Marketplace **Contact us** → `/demo`
- Forwarding diagram centered + rounded + no edge cutoff
- Blog cards: same-tab links to real article URLs

---

## Open items / known issues

1. **cmdk command palette modal is not wired.** The ⌘K trigger in the nav exists; the dialog doesn't open. Library is installed.
2. **View Transitions API** not implemented between pages.
3. **"Optional output" badge** on the Coverage Bento Network & Flow card — Aiden asked what it means; I explained it (signals that forwarding network flow externally is selective). He hasn't decided whether to rename, apply to all 4 cards, or remove it. **Wait for his call.**
4. **Legacy unused files** in `components/dashboards/`: `command-center.tsx` and `netflow.tsx` are no longer imported (replaced by `DashboardPanel` + real screenshots). Safe to delete.
5. **Vercel** not connected. Currently on GitHub Pages. If Aiden wants a custom domain or faster CDN, `npx vercel --prod` (will OAuth on first run).
6. The "Use Cases" page is wider in scope than the live site originally suggested — I matched the 7 scenarios verbatim from the live `/use-cases/` page (it exists; I built it section-by-section from the live).

---

## How to verify the live site

```bash
# Screenshot the live URL after deploy
cat > /tmp/check.mjs <<'EOF'
import puppeteer from "puppeteer";
const b = await puppeteer.launch({ headless: "new", args: ["--no-sandbox"] });
const p = await b.newPage();
await p.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
await p.goto("https://r4mwfcqy8z-bot.github.io/logicinsight-next/?cb=" + Date.now(), { waitUntil: "networkidle0" });
await new Promise(r => setTimeout(r, 3000));
await p.screenshot({ path: "/tmp/home.png" });
await b.close();
EOF
node /tmp/check.mjs
# Then Read /tmp/home.png to view
```

`puppeteer` is installed at `/tmp/puppe/node_modules/puppeteer` — script can be
run from there, or copy to `/tmp/`.

---

## Things Aiden has been emphatic about (do not violate)

1. **"This is a redesign, not a redo."** — Section structure, headings, list
   items, stat numbers, integration names, FAQ questions, tier names + features,
   contact info: VERBATIM from logicinsight.io. Don't paraphrase those.
2. Long marketing prose paragraphs: he's fine with fresh dense restatements in
   our own words that capture the same meaning.
3. He explicitly wants the design to feel **executive premium / WOW** — 3D, scrollytelling, glassmorphism, motion polish — but **content fidelity comes first**.
4. He flagged specific things he hates: custom cursor followers, the diagonal
   pink "border-beam" animation that used to be on featured pricing card
   (removed), the broken Five-Engines stage card overflow (fixed).
5. **No "Optional output" decision yet** — wait for him.

---

## Where to look first when he comes back

1. Read his most recent message.
2. If he's giving feedback on a specific page or visual, screenshot it from the
   live URL and compare to what he's saying.
3. Make the fix, run `PAGES=1 npm run build`, push the `out/` to gh-pages, then
   tell him the deploy is live with a one-line summary.

Last user message in the previous session was: he asked about the "Optional
output" badge. I explained it; he hasn't responded with a decision yet.
