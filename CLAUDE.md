# BlueYucca

Free single file HTML website templates, a prompt builder, and hosting guides: blueyucca.com.
Repo: github.com/7PDaddy/blueyucca. Separate brand from the Dolan sites (GYLR, RWTD).

## Stack and deploy

- Astro (static output, no client framework). Run npm commands from the repo root.
- Hosting: Cloudflare Workers static assets, Worker name `blueyucca` (`wrangler.jsonc`), serves `dist/`. Once Workers Builds is connected, push to `main` deploys to production. No staging, so `npm run build` must pass before every push.
- Dev server: `npm run dev`. Preview the build: `npm run preview`.
- `astro.config.mjs` uses `build.format: 'preserve'` so `examples.astro` builds to `examples.html` (served at `/examples`) and `blog/index.astro` builds to `blog/index.html` (served at `/blog/`). These match the URLs Google already has. Do not change it.
- 404: `src/pages/404.astro`, wired up by `not_found_handling` in `wrangler.jsonc`.

## Structure

- `src/layouts/Layout.astro`: the shared shell. Charset, viewport, Umami, and GoatCounter live here, so site-wide scripts go here once.
- `src/pages/*.astro`: one file per page. Each page passes its own title, meta, canonical, OG tags and its own inline `<style>` through `<Fragment slot="head">`. Pages were ported 1:1 from the original hand-written HTML, so each still carries its own CSS and its own header and footer markup.
- `<style is:inline>` and `<script is:inline>` keep Astro from rewriting the original CSS and JS. Keep `is:inline` on them.
- `public/`: copied as is. `downloads/` (the template files people download), `frontpage/` (the FrontPage 2003 experiment, plain HTML on purpose, keep it that way), `robots.txt`, `sitemap.xml`.
- Contact form posts to Web3Forms from `contact.astro`.
- Analytics: Umami (every page except `/blog/`, matching the old site) and GoatCounter (every page, including `/frontpage/` which has the tag in its HTML).

## URLs and SEO

- Internal links, canonicals, and `og:url` are extensionless. Never `.html`.
- `public/sitemap.xml` is hand-maintained: add new pages, bump `lastmod` when a page changes.
- `/downloads/` is disallowed in robots.txt on purpose.

## Copy rules

- No em dashes or en dashes in copy. Use a period, comma, colon, or a short hyphen.
- Plain, honest, non-technical voice for small business owners. No hype.

## Working style

- Surgical edits over rewrites. Change what was asked.
- Small descriptive commits. Ask before pushing once `main` is connected to Cloudflare.
