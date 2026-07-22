# MUCORA — Website

A modern, animated Next.js website for MUCORA, built with the App Router,
TypeScript, Tailwind CSS and Framer Motion.

## What's inside

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** with MUCORA's brand palette wired in as design tokens
- **Framer Motion** for scroll reveals, parallax hero, and the animated
  "mycelium thread" signature motif
- **lucide-react** for icons
- Fully responsive, keyboard-accessible, and respects `prefers-reduced-motion`
- Floating **Call Now** and **WhatsApp Now** buttons, plus both in the nav,
  mobile menu, and contact section — all wired to `+91 84204 24903`

## Before you deploy — things to add/customize

1. **Logo & favicon** — the navbar and footer are already wired to display
   your logo automatically. Just add these two files (exact names matter):
   - `public/logo.png` — your round brand logo (square image, ~200x200px+
     works best; it gets cropped into a circle automatically)
   - `public/favicon.ico` — your favicon (Next.js picks this up automatically
     from the `public/` folder, no code changes needed). You can also add
     `public/apple-touch-icon.png` (180x180px) for iOS home-screen icons.
2. **Product photos** — until then, the shop cards use a hand-drawn line-art
   mushroom mark (`components/MushroomMark.tsx`) on a brand-colored panel.
   Once you have real photos, replace that block in `components/Products.tsx`
   with `next/image`.
3. **Delivery zone names** — `lib/data.ts` → `DELIVERY_AREAS` has placeholder
   zone names (City Centre, North Zone, etc). Replace with your real
   neighbourhoods/localities.
4. **Prices & varieties** — edit the `PRODUCTS` array in `lib/data.ts`.
5. **Domain** — update `metadataBase` in `app/layout.tsx` and the sitemap URL
   in `public/robots.txt` once you have your real domain.

## Run it locally (Ubuntu)

```bash
# 1. Install Node.js 18+ if you don't have it already
node -v

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Visit `http://localhost:3000`.

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial MUCORA website"
git branch -M main
git remote add origin https://github.com/<your-username>/mucora-website.git
git push -u origin main
```

## Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repo.
2. Framework preset: **Next.js** (auto-detected) — no config needed.
3. Click **Deploy**. That's it — Vercel builds and hosts it for you.
4. Add your custom domain under **Project → Settings → Domains** once you
   have one.

## Project structure

```
app/
  layout.tsx        Root layout, fonts, metadata
  page.tsx           Assembles all sections
  globals.css         Global styles, brand color variables
components/
  Navbar.tsx          Sticky nav + hamburger mobile menu
  Hero.tsx            Parallax hero with drifting spores
  WhyMucora.tsx        Feature grid
  Process.tsx          "How it grows" timeline
  Products.tsx         Shop grid, WhatsApp order links
  DeliveryArea.tsx      Local delivery zones + marquee
  Testimonials.tsx       Reviews
  CTASection.tsx         Final call-to-action
  Footer.tsx              Footer
  FloatingActions.tsx     Persistent Call/WhatsApp buttons
  MyceliumThread.tsx       Signature animated line motif
  MushroomMark.tsx          Placeholder illustration
  Reveal.tsx                 Scroll-reveal animation wrapper
lib/
  data.ts               All copy, products, contact info in one place
```

Almost everything editable (copy, prices, phone number, delivery zones)
lives in `lib/data.ts` so you rarely need to touch component files.
