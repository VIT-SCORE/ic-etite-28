# ic-ETITE '28

The conference website for the **International Conference on Emerging Trends in
Information Technology and Engineering**, hosted by VIT Vellore and technically
co-sponsored by IEEE Madras Section.

This is a single-page Next.js site with a dark PCB/electronics visual language,
scroll-reactive circuit artwork, conference information, submission details,
sponsor content, and contact information.

## Technology

- Next.js 14 with the App Router
- React 18 and TypeScript
- Tailwind CSS 4 with PostCSS
- Framer Motion for scroll reveals and circuit animation
- `@fontsource` packages for self-hosted Space Grotesk, Inter, and JetBrains Mono

## Getting started

Requirements: Node.js 18.17 or newer and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser. The available
project scripts are:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run lint` | Run Next.js ESLint checks. |
| `npm run build` | Create an optimized production build. |
| `npm start` | Serve the production build after `npm run build`. |

No environment variables or backend services are required by the current site.

## Page composition

The homepage is assembled in `app/page.tsx` in this order:

1. Fixed PCB circuit background
2. Navigation and deadline notice
3. Hero and conference calls to action
4. About ic-ETITE
5. Conference theme and research tracks
6. ic-ETITE'20 legacy highlights and proceedings
7. About VIT and ranking/accreditation
8. About SCORE and the IEEE Information Theory Society
9. Manuscript submission guidance
10. Sponsors and supporting organisations
11. Contact footer

Trace dividers visually connect the major sections. The page currently has no
server-side data fetching, API routes, authentication, or database.

## Project structure

```text
app/
  layout.tsx              Root layout, metadata, viewport, and font imports
  page.tsx                Homepage composition and section order
  globals.css             Theme tokens, layout utilities, keyframes, and motion rules
components/
  CircuitBackground.tsx   Animated SVG PCB layer and scroll-driven effects
  Navbar.tsx              Desktop navigation, dropdown, mobile menu, and notice strip
  Hero.tsx                Hero copy, calls to action, signals, and chip visual
  ChipVisual.tsx          Decorative processor/IC illustration
  SectionHeader.tsx       Shared section label and heading
  Reveal.tsx              Scroll-reveal wrapper with reduced-motion support
  TraceDivider.tsx        PCB trace connectors between sections
  ContentSection.tsx      About ic-ETITE
  ThemeSection.tsx        Theme and research tracks
  HighlightsSection.tsx   ic-ETITE'20 history, statistics, and proceedings
  VITSection.tsx          VIT overview, ranking, and accreditation
  ScoreSection.tsx        SCORE and IEEE Information Theory Society information
  ManuscriptSection.tsx   Submission copy, checklist, and CMT link
  SponsorGrid.tsx         Sponsor and supporting organisation lists
  Footer.tsx              Contact, documents, address, and social links
  SocialIcons.tsx         Social icon rendering
data/
  content.ts              Typed source of all visible conference content and links
public/
  assets/logo.svg         Logo asset referenced by the brand configuration
types/
  styles.d.ts             Type declarations for imported style modules
next.config.js            Next.js configuration
tailwind.config.ts        Design tokens, fonts, colors, shadows, and animations
postcss.config.mjs        PostCSS/Tailwind integration
tsconfig.json             TypeScript compiler and path alias configuration
```

## Updating conference content

Edit `data/content.ts` for copy and links. The main typed content groups are:

- `BRAND`: name, edition, full conference name, and logo path
- `NAV_ITEMS`: primary navigation and conference submenu links
- `DEADLINE_NOTICE`: the alert-strip copy and placeholder state
- `HERO`: hero copy, dates, sponsor line, calls to action, and signal labels
- `ABOUT`, `THEME`, `HIGHLIGHTS`, `VIT`, `SCORE`, `MANUSCRIPT`: page sections
- `SPONSORS` and `SUPPORTED_BY`: organisation names, tiers, and optional links
- `CONTACT` and `SOCIALS`: contact address, documents, email, and social links

The 2028 dates, deadlines, speakers, fees, and several links are still marked as
placeholder information retained from the 2024 conference. Update the values and
remove the relevant `placeholder: true` flags when official information is
available. The components already render placeholder content with a visible TBA
treatment.

The navigation includes several legacy or future routes such as `/authors`,
`/registrations`, `/speakers`, `/committee`, `/sponsorship`, `/visa`,
`/icetite20`, and `/hotel`. These paths are configured as links, but corresponding
pages are not included in this repository yet. Add App Router pages under `app/`
before treating them as active routes.

## Branding and assets

Replace `public/assets/logo.svg` with the final logo while keeping the same path.
The path is read from `BRAND.logo`, so the navbar, hero, and footer update without
component changes. Additional public assets can be referenced with paths beginning
at `/`, for example `/assets/conference-brochure.pdf`.

## Visual system and motion

The visual tokens live in `tailwind.config.ts` and `app/globals.css`. The design
uses a near-black surface with cyan, electric green, and IEEE red accents, plus
Space Grotesk for display text, Inter for body text, and JetBrains Mono for labels.

`CircuitBackground.tsx` provides the fixed full-viewport board behind the page:

- SVG traces use a `1440 x 900` viewBox and `pathLength={100}`.
- Framer Motion drives travelling pulses and scroll-bound dash offsets.
- CSS keyframes flash junction nodes and animate the scan-line treatment.
- A parallax grid and board drift respond to scroll progress.
- Mobile layouts remove desktop-only traces and reduce grid density.
- `prefers-reduced-motion` disables animation and leaves a static board.

`Reveal.tsx` applies section entrance animation while respecting the same reduced-
motion preference. Keep text over the circuit layer readable by preserving the
existing opacity and veil treatments when changing the artwork.

## Validation and production

Run the checks locally before publishing:

```bash
npm run lint
npm run build
npm start
```

The production server listens on port 3000 by default. Set `PORT` when another
local service is already using that port, for example `PORT=3001 npm start` in a
shell that supports environment-variable prefixes.

The app is compatible with standard Next.js hosting. Deploy the repository with
the build command `npm run build` and the start command `npm start`, or connect it
to a platform with native Next.js support.
```
