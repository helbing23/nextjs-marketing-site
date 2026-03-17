# Next.js Marketing Site Template

A production-ready starter for any SaaS or product marketing site. Ships with a complete dark design system, 10 homepage sections, MDX blog, SEO factory, and a `[CHANGE]` placeholder system so you can go from clone to launch in a single session.

> **Live demo:** _[CHANGE] Add your deployed URL here_

---

## Quick Start

```bash
git clone <your-fork> my-project
cd my-project
npm install
cp .env.local .env.local          # already present — add real keys
npx shadcn@latest add             # add any extra shadcn components you need
npm run dev
```

Visit `http://localhost:3000` to see the homepage with all 10 sections.

---

## Stack

| Layer | Library | Notes |
|-------|---------|-------|
| Framework | Next.js 15 (App Router) | `app/` directory, React Server Components |
| Styling | Tailwind CSS v4 | CSS-first config in `globals.css` — no `tailwind.config.ts` |
| Components | shadcn/ui | Pre-installed; add more with `npx shadcn@latest add` |
| Icons | Lucide React | Tree-shakeable |
| Blog | gray-matter + next-mdx-remote | MDX files in `content/blog/` |
| Forms | React Hook Form + Zod | API route at `app/api/contact/route.ts` |
| Animation | Framer Motion | Used sparingly for counters and entrance transitions |
| OG Images | @vercel/og | `app/api/og/route.tsx` — `?title=` param |
| Sitemap | next-sitemap | Config in `next-sitemap.config.js` |
| TypeScript | Strict mode | `tsconfig.json` |

---

## Directory Map

```
app/
  (marketing)/          — All public-facing pages
    page.tsx            — Homepage (imports all 10 sections)
    blog/               — Listing + [slug] detail pages (wired to MDX)
    compare/[competitor]/  — Auto-generated comparison pages
    pricing/            — Standalone pricing page
    use-cases/[slug]/   — Use-case landing pages
    legal/              — Privacy + Terms (static pages)
    contact/            — Contact form page
  api/
    contact/route.ts    — Form submission handler
    og/route.tsx        — Dynamic OG image endpoint
  globals.css           — Design system: ALL tokens live here
  layout.tsx            — Root layout with font loading

components/
  layout/               — Header, Footer, Container, MobileNav
  sections/             — 10 homepage sections (Hero → CTA)
  blog/                 — BlogCard, BlogContent
  graphics/             — HeroGraphic (client component)
  shared/               — AnimatedCounter, Badge, AccountCard
  ui/                   — shadcn/ui primitives

lib/
  constants.ts          — SITE_CONFIG, nav links, competitors list
  seo.ts                — createMetadata() factory
  utils.ts              — cn() and helpers
  mdx.ts                — getAllPosts(), getPostBySlug()

content/
  blog/                 — MDX posts (add .mdx files here)

public/
  images/               — og/, icons/, logos/, screenshots/
```

---

## The [CHANGE] System

Every placeholder that needs your attention before launch is marked with a `[CHANGE]` comment. Find them all:

```bash
grep -r "\[CHANGE\]" app components lib --include="*.tsx" --include="*.ts" --include="*.js"
```

You should see ~30+ markers. That list is your pre-launch checklist.

---

## Customisation Cheatsheet

| I want to change… | Edit this file |
|---|---|
| Site name, URL, tagline | `lib/constants.ts` → `SITE_CONFIG` |
| Accent colour | `app/globals.css` → `--color-accent` and `--color-accent-hover` |
| Body / heading font | `app/globals.css` → `--font-sans` / `--font-heading` |
| Navigation links | `lib/constants.ts` → `NAV_LINKS` |
| Footer columns | `lib/constants.ts` → `FOOTER_LINKS` |
| Homepage hero copy | `components/sections/Hero.tsx` |
| Pricing tiers | `components/sections/Pricing.tsx` |
| FAQ questions | `components/sections/FAQ.tsx` |
| Stats numbers | `components/sections/Stats.tsx` |
| Features list | `components/sections/Features.tsx` |
| Social links | `lib/constants.ts` → `SOCIAL_LINKS` |
| Contact form handler | `app/api/contact/route.ts` |
| Default OG image | `public/images/og/default.png` |
| Competitors list | `lib/constants.ts` → `COMPETITORS` + `app/(marketing)/compare/[competitor]/page.tsx` |

---

## PRD Workflow

**Given a PRD for "[Project Name]", work in this order:**

```
1.  lib/constants.ts                        → SITE_CONFIG: name, url, tagline, description
2.  app/globals.css                         → pick accent colour preset, update --color-accent vars
3.  components/sections/Hero.tsx            → headline, subheadline, CTA button text
4.  components/sections/Stats.tsx           → real, defensible stats
5.  components/sections/Features.tsx        → real feature list (icon, title, description)
6.  components/sections/Pricing.tsx         → real tiers (name, price, features, CTA)
7.  components/sections/FAQ.tsx             → real questions and answers
8.  components/sections/PainPoints.tsx      → real problem/solution pairs
9.  components/sections/Founder.tsx         → real founder quote and bio
10. components/sections/Testimonials.tsx    → real testimonials (name, role, quote)
11. lib/constants.ts                        → COMPETITORS and USE_CASES arrays
12. app/(marketing)/compare/[competitor]/page.tsx → real comparison data per competitor
13. content/blog/                           → add real .mdx posts
14. public/images/                          → replace placeholder images
15. app/api/contact/route.ts               → connect to real email/CRM provider
16. .env.local                              → add real API keys
```

**Tips:**
- Steps 1–2 are multipliers — they propagate changes across the whole site automatically.
- Steps 3–10 are independent and can be done in any order.
- Steps 11–12 are optional if you have no direct competitors to compare against.
- Run `npm run build` after step 10 to catch any TypeScript errors before moving to content.

---

## Design Tokens

All visual tokens live in `app/globals.css`. To retheme the entire site, edit these lines only:

```css
/* Accent colour — change both values */
--color-accent: oklch(62% 0.2 264);        /* indigo-500 equivalent */
--color-accent-hover: oklch(55% 0.2 264);  /* slightly darker */

/* Fonts — must match the Next.js font variables in app/layout.tsx */
--font-sans: var(--font-geist-sans);
--font-heading: var(--font-geist-sans);
```

To use a different accent colour, pick an `oklch()` value from [oklch.com](https://oklch.com) and update both variables. The entire design system cascades from there.

---

## Adding Blog Posts

1. Create `content/blog/my-post.mdx` with this frontmatter:

```mdx
---
title: "My Post Title"
description: "One sentence summary shown on the listing page and in SEO meta."
date: "2026-03-01"
readingTime: "4 min read"
---

Your MDX content here. Standard markdown plus JSX components.
```

2. The post appears at `/blog/my-post` automatically — no code changes needed.

**MDX components:** To use custom components in posts, add them to the `components` prop of `MDXRemote` in `components/blog/BlogContent.tsx`.

---

## Deploy

```bash
# Vercel (recommended)
npx vercel

# After first deploy, set env vars in Vercel dashboard to match .env.local
```

For `next-sitemap`, add a `postbuild` script to `package.json`:

```json
"scripts": {
  "postbuild": "next-sitemap"
}
```

---

## What NOT to Do

These anti-patterns will cause build failures or subtle bugs:

- **Don't add `tailwind.config.ts`** — Tailwind v4 is configured via `globals.css` using `@import "tailwindcss"`. A config file will conflict.
- **Don't call `new Date()` in static page components** — it prevents static rendering. Use hardcoded date strings instead.
- **Don't use `key={index}` in lists** — use a stable unique value (e.g. `key={item.slug}`). The template's lists all have unique labels.
- **Don't add `console.log` in Server Components** — output goes to the terminal, not the browser, and is stripped in production builds.
- **Don't modify `app/sitemap.ts` and `next-sitemap.config.js` independently** — they serve different purposes. `sitemap.ts` generates `/sitemap.xml` at runtime via Next.js. `next-sitemap` is for post-build static generation. Pick one approach per project.
- **Don't import client components into Server Components without `"use client"`** — the boundary must be explicit.

---

## Template Maintenance

This template tracks:
- `tasks/todo.md` — planned improvements and known gaps
- `tasks/lessons.md` — decisions made and why
- `CLAUDE.md` — AI assistant instructions for working in this repo
