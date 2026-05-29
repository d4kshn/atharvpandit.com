# CLAUDE.md

Guidance for Claude Code working in this repository.

## What this is

A Next.js 13 (App Router) personal portfolio template, customized for
**Atharv Pandit** (alias `d4kshn`). All site content lives in typed
TypeScript modules under `data/` — there is no CMS, no MDX, no
Contentlayer. Anyone using this as a template only needs to edit
`data/*.ts` files to swap in their own content.

## Build & Development Commands

- `pnpm dev` — Start dev server at http://localhost:3000
- `pnpm build` — Production build
- `pnpm start` — Start production server
- `pnpm fmt` — Format and lint with Rome

## Architecture

**Stack:** Next.js 13.5 App Router · TypeScript (strict, es2022) ·
Tailwind CSS 3.4 (class-based dark mode) · `next-themes` ·
Framer Motion · `lucide-react`.

**Pages**

| Route | File | Purpose |
|---|---|---|
| `/` | `app/page.tsx` | Single-page scroll: Hero → About → Experience → Education → CVEs & Publications → Certifications |
| `/projects` | `app/projects/page.tsx` | Grid from `data/projects.ts`; placeholder card when empty |
| `/contact` | `app/contact/page.tsx` | Email, LinkedIn, GitHub, Twitter, Discord cards |

**Content layer** — typed modules under `data/`:

- `data/profile.ts` — name, displayName, alias, logo, tagline, bio,
  highlights, social links
- `data/experience.ts` — work history; `description: string[]`
- `data/education.ts` — degrees with optional highlights
- `data/cves.ts` — two exports: `cves` (with severity) and `publications`
- `data/certifications.ts` — cert entries with verify URLs
- `data/projects.ts` — project entries (empty by default → placeholder card)

**Shared components** (`app/components/`)

- `top-nav.tsx` — sticky navbar, scroll-spy, theme toggle, mobile hamburger
- `site-background.tsx` — fixed gradient + particles, persists across routes
- `particles.tsx` — theme-aware canvas with gentle cursor repulsion
- `card.tsx` — mouse/touch-following radial hover light
- `theme-provider.tsx`, `theme-toggle.tsx` — next-themes wrapper + sun/moon
- `visit-tracker.tsx` — session cookie that gates the hero entrance animation
- `sections/` — Hero, SectionShell, About, Experience, Education,
  CvesPublications, Certifications

**Client vs Server:** Interactive components carry `"use client"`. Pages
are server components by default. The one-time hero animation is gated
server-side via `cookies().get("home-visited")` to avoid client flicker.

**Path alias:** `@/*` → project root (see `tsconfig.json`).

## Environment Variables

- `NEXT_PUBLIC_BEAM_TOKEN` *(optional)* — Beam Analytics token, read by
  `app/components/analytics.tsx`. App runs without it; analytics
  silently no-ops.

No other env vars required.

## Editing notes

- Content changes — edit `data/*.ts`; almost nothing else needs touching.
- Look-and-feel knobs live in the component itself, via Tailwind classes
  or props: see `app/components/particles.tsx` (density, repel radius,
  ease, lag), `app/components/card.tsx` (hover radius, blend modes),
  `app/components/top-nav.tsx` (scroll thresholds, scroll-spy band),
  `app/components/sections/hero.tsx` (text sizes, logo tile).
- Logo + favicon live in `public/`. Set `profile.logo` to your file's
  path (or `""` to hide it from the hero).
- `errors.txt` (gitignored) is a scratchpad for runtime errors — paste
  errors into it and ask me to read+fix.
