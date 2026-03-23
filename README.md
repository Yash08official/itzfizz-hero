# Itzfizz Hero — Scroll-Driven Animation

A Next.js + GSAP scroll-driven hero section built for the Itzfizz Digital internship assignment.

## Tech Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **GSAP + ScrollTrigger** (scroll-pinned animations)
- Google Fonts: Bebas Neue, DM Sans, Space Mono

## Features
- ✅ Full-screen hero section (above the fold)
- ✅ Letter-spaced `W E L C O M E  T O  I T Z F I Z Z` headline
- ✅ Impact metrics with staggered reveal on load
- ✅ Smooth GSAP intro animations (fade + rotateX stagger)
- ✅ Scroll-driven orb movement tied to scroll progress
- ✅ Pinned scroll section (300vh scroll travel)
- ✅ Letters scatter on scroll
- ✅ Accent-color reveal panel on scroll end
- ✅ Services section below fold with scroll-triggered reveals
- ✅ `transform`-only animations (no layout reflow)
- ✅ Grain texture overlay for premium feel

## Setup & Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open in browser
http://localhost:3000
```

## Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts — it auto-detects Next.js
# You'll get a live URL like: https://itzfizz-hero.vercel.app
```

## Deploy to GitHub Pages (Alternative)

GitHub Pages doesn't natively support Next.js SSR.
Use Vercel for the best experience — it's free and instant.

If you must use GitHub Pages, add this to `next.config.mjs`:
```js
const nextConfig = {
  output: 'export',
  trailingSlash: true,
};
```
Then push and enable Pages from the `out/` folder.

## Project Structure

```
itzfizz-hero/
├── app/
│   ├── layout.tsx       # Root layout + metadata
│   ├── page.tsx         # Main page
│   └── globals.css      # CSS variables, grain, fonts
├── components/
│   ├── HeroSection.tsx  # Core scroll animation component
│   └── BelowFold.tsx    # Services section
├── tailwind.config.ts
└── package.json
```

## Animation Architecture

All scroll animations use `ScrollTrigger.scrub` so they're tied to scroll position, not time — ensuring smooth, fluid motion at any scroll speed.

```
ScrollTrigger config:
  trigger: heroSection
  start: "top top"
  end: "+=200%"        ← 200vh of scroll travel
  scrub: 1.5           ← smooth lag for natural feel
  pin: pinWrapper      ← section stays fixed while scrolling
```
