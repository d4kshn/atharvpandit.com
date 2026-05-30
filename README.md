# atharvpandit.com

Personal portfolio template by [Atharv Pandit](https://github.com/d4kshn),
built with [Next.js 15](https://nextjs.org/),
[Tailwind CSS](https://tailwindcss.com/), and TypeScript.

All content lives in typed `data/*.ts` modules — no CMS, no MDX, no
build-time content pipeline. Ships as a **fully static site**
(`output: "export"`), so it hosts anywhere static.

## Features

- Single-page scroll with sticky navbar and scroll-spy active highlight
- Dark / light theme — system default, user toggle, persisted in localStorage
- Theme-aware particle background with gentle, lagged cursor repulsion
- Mouse- and touch-following radial hover light on cards
- One-time hero entrance animation (once per browser session, flicker-free)
- Mobile hamburger menu with always-visible Projects / Blog / Contact
- Typed content layer — edit one file per section, no CMS to wire up

## Getting started

```bash
git clone https://github.com/d4kshn/atharvpandit.com.git
cd atharvpandit.com
pnpm install
pnpm dev
```

Then open http://localhost:3000.

## Build & run

```bash
pnpm build     # static export → ./out
pnpm preview   # serve ./out locally
```

### Docker

```bash
docker build -t atharvpandit.com .
docker run --rm -p 3000:3000 --name atharvpandit.com atharvpandit.com
```

Then open http://localhost:3000. The image builds the static export and
serves `./out`.

## Make it yours

Edit the typed modules under `data/`:

| File | Contents |
|---|---|
| `data/profile.ts` | name, displayName, alias, logo, tagline, bio, social links |
| `data/experience.ts` | work history (`description: string[]`) |
| `data/education.ts` | degrees with optional highlights |
| `data/cves.ts` | two exports: `cves` (with severity) and `publications` |
| `data/certifications.ts` | cert entries with verify URLs |
| `data/projects.ts` | project entries (empty by default → placeholder card) |

Logo and favicon live in `public/`. Set `profile.logo` to your file's
path (or `""` to hide it from the hero). Replace `public/favicon.svg`
and `public/favicon.png` with your own marks.

### Forking checklist

If you're using this as a starting point, swap out the personal bits:

- [ ] `data/*.ts` — your experience, education, CVEs, certs, projects
- [ ] `data/profile.ts` — name, alias, tagline, bio, social links
- [ ] `public/favicon.svg`, `public/favicon.png`, and your hero logo
      (e.g. `public/d4kshn-logo.png` → your own, then update `profile.logo`)
- [ ] `package.json` `name`
- [ ] `wrangler.jsonc` `name` — set to *your* Worker name (see Deploy below)
- [ ] `app/layout.tsx` — set `metadata.metadataBase` to your domain once you
      have one (removes the build-time `metadataBase` warning)
- [ ] `CLAUDE.md` — project notes written for this repo; tweak or delete

## Deploy

The app is a plain static export (`pnpm build` → `out/`), so it hosts on any
static host — Cloudflare, Netlify, GitHub Pages, S3, etc. Just serve `out/`.

**Cloudflare (optional, what this repo is set up for):** `wrangler.jsonc` is an
assets-only Worker serving `./out`. Change its `name` to your own Worker, then:

```bash
pnpm deploy    # next build && wrangler deploy
```

If you deploy somewhere else, `wrangler.jsonc`, the `wrangler` dependency, and
`public/_headers` (Cloudflare cache headers) are safe to delete.

## Stack

Next.js 15 (App Router, static export) · React 19 · TypeScript (strict,
es2022) · Tailwind CSS 3.4 · next-themes · Framer Motion · lucide-react ·
Rome (formatter + linter).

## Environment

The app runs with no environment variables. Optional:

- `NEXT_PUBLIC_BEAM_TOKEN` — Beam Analytics token (read by
  `app/components/analytics.tsx`). Without it, analytics silently no-ops.

## License

Add a license of your choice before publishing. Please mention me somewhere if you like the redesign!! 
