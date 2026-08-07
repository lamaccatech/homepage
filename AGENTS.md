# Working in this repo

Marketing site for PT Lamacca Kreatif Solusi. Astro 7 (static) + Tailwind v4.
See `README.md` for the full tour; this file covers the things that are easy to
get wrong.

## Commands

```bash
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run deploy   # build + wrangler deploy
```

## Conventions

- **Content is data, not markup.** Copy lives in `src/data/*.ts`. Add a project
  or service there rather than hardcoding it into a page.
- **`work.ts` order is the homepage order.** `FeaturedWork` renders
  `work.slice(0, 6)`. Reordering that array is how projects get promoted.
- **Accent colours must be whole class strings.** Tailwind cannot see
  interpolated names, so variants are spelled out in `src/lib/accents.ts`.
  Use `textOnDark` / `softOnDark` on the ink-coloured sections — the 600-weight
  red fails contrast on dark backgrounds.
- **Never inline the lamp SVG again.** `<LampMark />` uses `<use>` against the
  single `<symbol>` that `Base.astro` renders. Inlining it per instance put
  ~70 KB back into every page.
- **Animations are progressive.** Anything using `[data-reveal]` is hidden only
  under `html.js`; check `prefers-reduced-motion` and `(pointer: fine)` before
  adding pointer-driven effects.

## Astro 7 gotchas hit while building this

- `compressHTML` defaults to `'jsx'`, which strips whitespace between adjacent
  inline expressions. Put explicit spaces on the same line —
  `{a}, {b} {c}` — rather than relying on a newline to separate them.
- The Rust compiler errors on unclosed tags instead of silently repairing them.
- A parent with a `z-index` creates a stacking context: a child's higher
  `z-index` cannot escape it. This is why `Header` sits at `z-92`, above the
  mobile menu panel at `z-85`.
