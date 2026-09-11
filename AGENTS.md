# AGENTS.md

Guidance for AI coding agents working in this repo. Human contributors may find it useful too.

## Project

Andrew Mao's personal portfolio — a single-page site showcasing projects, experience, and open-source work. Designed in Figma, built as a Vite + React + TypeScript SPA with a `react-three-fiber` 3D hero (a WallE model rendered from CAD).

## Tech stack

- **Build:** Vite 7, TypeScript 5 (strict via `tsc`), `@vitejs/plugin-react`
- **UI:** React 18 (function components + hooks), plain CSS per component (no CSS framework)
- **3D:** `three`, `@react-three/fiber`, `@react-three/drei` (models in `public/*.glb`)
- **Libraries of note:** `react-vertical-timeline-component` (Experience), `react-github-calendar` (contributions), `@fortawesome/*` (social icons), `@vercel/speed-insights`
- **Deploy:** Vercel

## Commands

Use **Yarn** (both `yarn.lock` and `package-lock.json` are present; Yarn is the source of truth).

```bash
yarn dev        # Vite dev server (usually http://localhost:5173)
yarn build      # tsc typecheck + vite production build — run before finishing changes
yarn lint       # eslint, --max-warnings 0 (must stay clean)
yarn preview    # serve the production build
```

Always run `yarn lint` and `yarn build` after changes; both must pass with zero errors/warnings.

## Structure

```
src/
  App.tsx / App.css        # Page composition + landing/footer; global design tokens live in App.css :root
  index.css                # Global resets, typography, focus rings, reduced-motion, responsive breakpoints
  Components/
    Nav/                   # Sticky top nav with smooth-scroll anchors
    About/                 # Bio, selfie, GitHub calendar, skill lists
    Experience/            # Vertical timeline of roles
    Projects/              # Filterable project grid (main content)
    OpenSource/            # Open-source contribution cards
    GitHub/                # GitHub contributions calendar wrapper
    Links/                 # Social icon links
    Misc/                  # Model.tsx (3D scene), Walle.tsx (gltfjsx output), SkillBox.tsx
  assets/                  # Images, videos, resume PDF
public/                    # *.glb 3D models, favicon
```

Sections are `<section id="...-wrapper">` in `App.tsx`; the Nav anchors to those ids and `html { scroll-padding-top }` offsets for the fixed bar.

## Conventions

- **Design tokens** are CSS custom properties on `:root` in `App.css`: `--dark-base`, `--dark-surface`, `--accent-primary` (indigo), `--accent-secondary` (cyan), `--accent-tertiary` (violet), `--accent-light`, `--lightgreytext`. Use these — do not hardcode hex colors.
- **Shared "card" visual language** (Projects, Experience, Open Source all follow it — keep new content sections consistent):
  - Surface `rgba(255,255,255,0.03)`, border `1px solid rgba(255,255,255,0.08)`, `border-radius: 1rem`
  - Hover: `translateY(-0.4rem)` + `box-shadow: 0 1rem 3rem rgba(99,102,241,0.28)`
  - Cyan uppercase **eyebrow** (`--accent-secondary`, `letter-spacing: 0.08em`), white `h3` title, `--lightgreytext` body
  - Pill **tags**: `rgba(255,255,255,0.06)` bg, `--accent-light` text, `border-radius: 0.9rem`
  - Pill **action buttons** ending in `↗`: outlined by default; on hover fill with the `background-pan` gradient
  - Media is 16:9 `object-fit: cover` with a subtle `scale(1.05)` on hover
  - "Starred"/featured items get a cyan glow border (`--accent-secondary`)
- **Content is data-driven:** each section defines a typed array (e.g. `Project[]`) and maps it to a card component. Add items to the array, not new JSX.
- **CSS lives next to its component** as `Component.css`, imported at the top of `Component.tsx`.
- **Accessibility:** icon-only links need `aria-label`; card actions are real `<a>` buttons (avoid wrapping whole cards / headings in one giant link); keep the `:focus-visible` rings and `prefers-reduced-motion` fallback in `index.css`.
- **Prefer `class` over `id`** for anything a component renders more than once (past bugs came from duplicate `id`s like `contact`, `skill`, `experience`).

## Assets — important

Source images must be **pre-optimized before import**; do not commit multi-MB originals (the repo previously shipped a 7MB selfie). Targets:

- Photos/screenshots: longest side ≤ ~1200px, JPEG quality ~82–85, progressive. The selfie is a square ~800×800.
- Convert opaque PNG screenshots to JPEG (check for real transparency first).
- Add `loading="lazy"` + `decoding="async"` to below-the-fold `<img>`; give `<video>` `muted playsInline` for mobile autoplay.

No ImageMagick in this environment; Python **Pillow** is available for resizing.

## Gotchas

- **Two lockfiles exist.** Stick with Yarn to avoid churn.
- **3D hero needs WebGL** — it renders blank in headless browsers without GPU (e.g. headless Firefox), which is a capture artifact, not a bug.
- **`react-vertical-timeline-component` animates cards in on scroll** — they are `opacity: 0` until in view, so a frozen/full-page screenshot may show an "empty" timeline. Its content div is targeted via `textClassName="text-class"`; default backgrounds are light and must be overridden.
- **The GitHub calendar is a fixed-width SVG** — it must scroll horizontally (`overflow-x: auto`) on mobile, not be clipped.
- Landing hero adds top padding to clear the fixed Nav; keep that when editing `#landing`.

## Contact / links used in the site

Social + contact links live in `Links/Links.tsx`, `Nav/Nav.tsx`, and `App.tsx` (contact email `andrewmaobc@gmail.com`). Project live/repo URLs are in `Projects/Projects.tsx`.
