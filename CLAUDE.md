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
(`4019:1594`), frame **"Pixel Spell — Home (Desktop 1440)"** (`4021:330`).
Sections top to bottom: Hero v2 · Marquee · Selected Work · Services · Products ·
Studio · Process · Packages · FAQ · CTA · Footer, plus the fixed Floating Nav.
The old hero is still in the frame as a hidden layer; ignore it.

Each section is one component in `components/`, composed in `app/page.tsx`.
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
- **Hero and package scenes are positioned in Figma pixels** and converted to
  percentages (`at()` in `hero.tsx`, `place()` in `packages.tsx`), so they scale
  as one piece. To move a character, change its Figma coordinates there.
- The arched hero headline is SVG `<textPath>` on the same circle as the Figma
  glyphs (centre 720,1190 → 720,1110 in stage space, r=1020). The real `<h1>`
  is screen-reader only.
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
  (2880×1720, opaque on `#fbf8f2`, the footer's own colour, so no seam).

## Still placeholder (from Figma)

Prices (`$X,XXX`), founder photo and name, the three testimonials, social
URLs, and the "Book a call" target (currently a `mailto:`). Product and
package copy, FAQ answers and the "Q4 2026" booking chip are drafts for Steven
to confirm. Works cards link to `#work` until case-study pages exist.

## Working with Steven

He's a designer, new to git — explain in plain terms, answer directly. He gives
precise visual feedback; verify the mechanism yourself when something "has no
effect".
