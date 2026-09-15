# ic-ETITE '28 — Conference Website

A futuristic IEEE electronic-circuit / PCB themed conference site built with
**Next.js 14 (App Router) · React · TypeScript · Tailwind CSS · Framer Motion**.

The visual centrepiece is a **dynamic, scroll-reactive PCB circuit background**
that lives behind every section — SVG traces with neon glow, continuous
travelling pulses at different speeds, flashing junction nodes, a parallax grid,
and pulses that react to scroll progress.

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (already passes clean: 0 errors, 0 warnings)
npm start        # serve the production build
```

> This project has been built and linted successfully with `next@14.2.35`
> (`✔ No ESLint warnings or errors`).

---

## Project structure

```
app/
  layout.tsx              Root layout + self-hosted fonts (@fontsource)
  page.tsx                Assembles all sections + trace dividers
  globals.css             Theme tokens, glass panels, keyframes, reduced-motion
components/
  CircuitBackground.tsx   ★ The dynamic PCB background (SVG + Framer Motion)
  Navbar.tsx              Fixed dark-glass nav, Conference dropdown, mobile menu,
                          red deadline alert strip
  Hero.tsx                Control-system hero (typography, CTAs, signals, particles)
  ChipVisual.tsx          Glowing IC/processor graphic used in the hero
  SectionHeader.tsx       Mono label + display title
  Reveal.tsx              Scroll-reveal wrapper (reduced-motion aware)
  TraceDivider.tsx        PCB traces that connect sections (straight/branch/nodes)
  ContentSection.tsx      About ic-ETITE
  ThemeSection.tsx        Theme + track cards
  HighlightsSection.tsx   ic-ETITE'20 legacy stats + proceedings
  VITSection.tsx          About VIT + Ranking & Accreditation
  ScoreSection.tsx        About SCORE + IEEE Information Theory Society
  ManuscriptSection.tsx   Submission info + checklist
  SponsorGrid.tsx         Tiered sponsors + Supported By
  Footer.tsx              Contact, address, documents, social links
  SocialIcons.tsx         Inline SVG social glyphs
data/
  content.ts              ★ ALL copy as typed constants — edit here
public/
  assets/logo.svg         Placeholder logo (see below)
```

---

## Editing content

Everything visible on the site is defined in **`data/content.ts`** as typed
constants (`HERO`, `ABOUT`, `THEME`, `HIGHLIGHTS`, `VIT`, `SCORE`, `MANUSCRIPT`,
`SPONSORS`, `CONTACT`, `NAV_ITEMS`, `DEADLINE_NOTICE`, …). Change a value there and
it updates across the site — no component edits needed.

### About the 2028 details
Per the brief, **no official 2028 dates, deadlines, speakers, sponsors, fees or
links were invented.** The 2024 content is retained as editable placeholder
content. Fields that are not yet official are marked `placeholder: true` and
render with a subtle red **"PLACEHOLDER / TBA"** chip (hero date line and the
deadline strip). Remove those flags once official info is available.

---

## Replacing the logo

Drop the final logo at **`public/assets/logo.svg`** (overwrite the placeholder).
Every logo reference (`BRAND.logo` in `data/content.ts`) points at that path, so
the navbar, hero chip and footer update automatically — no code changes.

---

## The circuit background

`components/CircuitBackground.tsx` is a fixed, full-viewport layer behind the
content (`-z-10`). It uses:

- **SVG traces** authored on a `1440×900` viewBox (orthogonal + 45° PCB routing).
- **`pathLength={100}`** so travelling pulses are path-length independent.
- **Ambient pulses** (Framer Motion loops) with a different duration per trace.
- **Scroll-bound pulses** whose `strokeDashoffset` is driven by `useScroll` →
  `useTransform`, so current flows as you scroll.
- **Flashing nodes** via a staggered CSS keyframe.
- **Parallax grid** + subtle board drift tied to scroll progress.
- **`prefers-reduced-motion`**: all motion is disabled and a static board is shown.
- **Mobile**: `desktopOnly` traces/nodes are dropped and grid density is reduced.

Opacity is kept low and a readability veil sits on top so text stays crisp.

### Fonts
Fonts are self-hosted via `@fontsource/*` packages (imported in `app/layout.tsx`),
so the build needs no network access. To switch to `next/font/google`, replace the
imports in `app/layout.tsx` with the loaders and apply their `.variable` classes to
`<html>` — the Tailwind config already reads the same `--font-*` variables.
```
