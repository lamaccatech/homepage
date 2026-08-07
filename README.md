# Lamacca — company website

Marketing site for **PT Lamacca Kreatif Solusi**. Astro 7 + Tailwind v4, statically
generated, deployed to Cloudflare.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview  # serve dist/ locally
npm run deploy   # build + wrangler deploy
```

## Stack

| Concern    | Choice                                                          |
| ---------- | --------------------------------------------------------------- |
| Framework  | Astro 7, `output: 'static'` — zero framework JS shipped          |
| Styling    | Tailwind v4 via `@tailwindcss/vite`, tokens in `src/styles/global.css` |
| Animation  | [`motion`](https://motion.dev) (vanilla, ~21 KB gz) + `lenis` smooth scroll |
| Fonts      | Plus Jakarta Sans Variable, self-hosted via `@fontsource-variable` |
| Images     | `astro:assets` → responsive WebP at build time                   |

Total client JS is roughly **31 KB gzipped**. There is no React on the site.

## Content lives in `src/data/`

All copy is typed data, not CMS content. Edit these and the pages follow:

- `site.ts` — company details, nav, contact, headline stats
- `services.ts` — the four services and the delivery process
- `products.ts` — in-house platforms (e-Partai, Pantau Relawan, …)
- `work.ts` — client engagements. **Array order matters**: the homepage
  features the first six entries, in order.
- `company.ts` — team, values, vision/mission, client list, tech stack

Project screenshots go in `src/assets/projects/` and are attached via the
optional `image` field on a work or product entry. Entries without an image get
a tinted fallback plate, so the grids stay even — no need to backfill every one.

## Brand

- Primary red is **`#C50403`**, sampled from the logo bitmap. It is the only
  fully saturated colour in the palette and is deliberately rationed: CTAs,
  active states, the lamp mark, one highlight stroke, and the single red CTA
  band. Everything else sits on warm paper (`#FDFAF5`) and warm ink (`#14100F`).
- Supporting accents (amber, lilac, mint) are desaturated nods to the company
  profile deck and appear only in small doses.
- The lamp mark is vectorised from the logo into `src/components/brand/LampSymbol.astro`
  as an SVG `<symbol>`, rendered once per page by the layout. `<LampMark />`
  references it with `<use>`, which keeps repeated marks out of the HTML.
  `public/favicon.svg` and the app icons are generated from the same paths.

## Animation

`src/scripts/site.ts` wires everything: scroll reveals, stat counters, magnetic
buttons, parallax, the reading-progress bar, header state, and the mobile menu.
Every effect is gated on `prefers-reduced-motion`, and pointer-driven effects
(smooth scroll, magnetic buttons, the work-list hover preview) only initialise
on `(pointer: fine)` devices.

Elements marked `[data-reveal]` start at `opacity: 0` **only when the `js` class
is present** on `<html>`, so the site degrades to fully visible content without
JavaScript.

## Contact form

`/contact` composes the enquiry and hands it to WhatsApp (or email as a
fallback). No backend, no third-party form service, no API keys — which suits a
static Cloudflare deploy and matches how Indonesian clients actually get in
touch. To switch to a server-side handler later, add the Cloudflare adapter and
POST to an Astro endpoint with `export const prerender = false`.

## Deploying

`npm run deploy` builds and uploads via Wrangler using `wrangler.jsonc`
(Workers static assets, with `404.html` served for unknown paths).

For a git-connected Cloudflare Pages project instead, use:

- Build command: `npm run build`
- Output directory: `dist`

Update `site` in `astro.config.mjs` if the production hostname ever changes —
it drives canonical URLs, Open Graph tags, and `sitemap-index.xml`.
