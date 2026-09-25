@AGENTS.md

# CLAUDE.md — Pixel Spell studio site

Pixel Spell is Steven Charlino's design & engineering studio (Jakarta, est. 2026).
This repo is the studio's one-page site, built from the Figma design.

## Stack and commands

Next.js 16 (App Router, Turbopack) + Tailwind CSS v4 + TypeScript. No other
dependencies.

**Hosting: GitHub Pages**, https://stvx1001.github.io/pixel-spell/ (the repo is
public). The site is a static export (`output: "export"`). Every push to `main`
runs `.github/workflows/deploy.yml`, which builds with
`NEXT_PUBLIC_BASE_PATH=/pixel-spell` and force-pushes `out/` to `gh-pages`.
Paths to files in `public/` must go through `asset()` (`lib/asset.ts`) —
`next/image` does not add the base path to string `src`. To check a build the
way Pages serves it, put `out/` under a `pixel-spell/` folder and serve the
parent. On a custom domain, drop the base path from the workflow.

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build   # must pass before pushing
```

## Source design

Figma file `YUZMDH5kqna1441GZLvRPm` ("01. SkorKu Website 3.0"), page "Ref"
(`4019:1594`), frames **"Pixel Spell — Home (Desktop 1440)"** (`4021:330`) and
**"Pixel Spell — Home (Mobile 390)"** (`4073:400`), plus **"Brief Modal — Desktop"**
(`4121:478`) and **"— Mobile 390"** (`4121:543`).
Sections top to bottom: Hero v2 · Marquee · About (`studio.tsx`) · Selected Work ·
Services · Packages · Products · Testimonials · FAQ · Footer, plus the fixed Floating
Nav (desktop only; the phone has a menu button in the hero instead). The old hero
is still in the frames as a hidden layer; ignore it. Eyebrow numbers follow Figma
as they are, gaps and repeats included (Packages and Products are both 06).

Each section is one component in `components/`, composed in `app/page.tsx`. The
phone frame is built into the same components with Tailwind breakpoints (`md` and
up is desktop); where the phone frame is a scaled copy of the desktop card
(packages, products) the phone sizes are the desktop ones × 350/421.
Copy, colours and sizes were taken from the Figma nodes — check there before
"fixing" a value.

- **Tokens** live in `app/globals.css` (`@theme`): ink `#0d0e1a`, cream
  `#fbf8f2`, sand `#f2ead3`, pink `#f2549e`, plus the four pastel tints.
  Utilities `eyebrow`, `title` (Shrikhand heading), `lead` (mono paragraph).
- **Fonts** (all `next/font/google`, variables set in `app/layout.tsx`):
  Shrikhand (headings), Geist (UI), Geist Mono (body copy), Archivo Black
  (marquee, service and step titles), Caveat (stickers), Silkscreen (pixel numbers).
- **Rotation sign flips.** Figma rotation is counter-clockwise, CSS is clockwise:
  a Figma `-3` is CSS `rotate(3deg)`.
- **Hero, campfire and package scenes are positioned in Figma pixels** and
  converted to percentages (`at()`/`atM()` in `hero.tsx`, `box()` in
  `campfire.tsx`, `place()` in `packages.tsx`), so they scale as one piece. To
  move a character, change its Figma coordinates there. The phone hero is its own
  composition (`atM`, the 390 frame from y=80 to y=380).
- The arched hero headline is SVG `<textPath>` on the same circle as the Figma
  glyphs (desktop: centre 720,1190 → 720,1110 in stage space, r=1020; phone:
  centre 195,325 in its stage, r=285.5, `textLength` 338). The real `<h1>` is
  screen-reader only.
- **Book a call** (floating nav, phone menu, footer) and the package buttons open
  the Brief form (`brief.tsx`, a native `<dialog>`); a package button pre-picks its
  package. The site is static, so "Send the brief" opens the visitor's email app
  with the brief filled in. `#brief` in the URL opens it on load.
- Works card art (`work-art.tsx`) is redrawn as SVG from the Figma shapes;
  pixel icons come from bitmaps in `components/pixel.tsx`.
- `body` has `overflow-x: clip` because characters deliberately stand outside
  their cards. On a phone `documentElement.scrollWidth` still reports a few
  extra pixels; the page does not actually scroll sideways.

## Characters (raster art)

The fox, cat, wolf and bird are raster images in Figma. This cloud environment
cannot download from figma.com, so they are exported by Steven and committed as
files. `components/character.tsx` lists each one with its Figma component id.

- Each file is 800×800 (the 400px component at 2x), **transparent**, with the
  component's soft ground shadow. Until a file exists, `<Character>` renders a
  labelled dashed placeholder; the check runs at build time.
- **Figma renders of these components come back opaque** (component fill
  `#f9f6ea`, and `download_assets` flattens even a fill-less frame). So the
  PNGs were composed from each component's *raw* transparent `Art` image
  (FIT into the Art rect) over its `Shadow` ellipse (`#2a2140` at the layer's
  opacity, layer blur 6 ≈ Gaussian sigma 3). Flattened back onto `#f9f6ea` they
  match Figma's render to <1/255 on average. Re-pulling needs `www.figma.com`
  allowed in the environment's network settings.
- Footer illustration: frame "Spell Isle" (`4070:418`) → `public/island.png`
  (2880×1720, opaque on `#fbf8f2`, the footer's own colour, so no seam). The phone
  shows the middle of it without the signpost (`4073:1420`) →
  `public/island-mobile.png` (1169×1187). It was rendered in Chromium from the
  Figma layers (island vector, sign, the four mascots' Art + Shadow); the same
  render of the desktop frame matches `island.png` to <1/255.
- Package card scenes (`package-scenes.tsx`, files in `public/packages/`): First
  Spark's campfire (`4150:1776`, ~25 vector layers) is one image,
  `campfire.webp`, rendered at 3× in Chromium from Figma's own layer code.
  Grand Spell's battle keeps its layers: magic FX SVGs behind and in front, and
  the battle-pose fox, cat and wolf plus the archer bird as raw Art PNGs (2× the
  size shown) with Shadow SVGs. The phone Packages frame still shows the old
  scenes; the phone cards use the new desktop scenes, scaled.
- The Studio campfire (`4117:522`) is built from its Figma layers in
  `public/campfire/`: the island vector SVG, each mascot's raw Art PNG (resized
  to 2× the size shown) and Shadow SVG, and the staff and sword props.

## Still placeholder (from Figma)

Founder name, the three testimonials and social URLs. The Brief form has no
backend (it hands off to email; file uploads would need a form service), and the
References field takes links rather than files. Product and package copy, FAQ
answers and the "Q4 2026" booking chip are drafts for Steven to confirm. Works
cards and "View all works" link to `#work` until case-study pages exist.
"Join the waitlist" is a `mailto:`.

## Working with Steven

He's a designer, new to git — explain in plain terms, answer directly. He gives
precise visual feedback; verify the mechanism yourself when something "has no
effect".
