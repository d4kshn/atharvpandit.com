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
docker build -t atharvpandit .
docker run --rm -p 3000:3000 atharvpandit
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

## Stack

Next.js 15 (App Router, static export) · React 19 · TypeScript (strict,
es2022) · Tailwind CSS 3.4 · next-themes · Framer Motion · lucide-react ·
Rome (formatter + linter).

## Environment

The app runs with no environment variables. Optional:

- `NEXT_PUBLIC_BEAM_TOKEN` — Beam Analytics token (read by
  `app/components/analytics.tsx`). Without it, analytics silently no-ops.

## License

Add a license of your choice before publishing.
