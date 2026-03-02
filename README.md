# DRB Infrastructure – Corporate Website

Premium, lightweight corporate website for **DRB Infrastructure Pvt. Ltd.** — Indian infrastructure & road construction company.

## Tech stack

- **Next.js 16** (App Router), **TypeScript**, **Tailwind CSS**
- Static-first, SEO-friendly, Core Web Vitals–oriented
- Design: Deep Navy / Steel Blue, Infra Red accent, Inter & Manrope

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & deploy

```bash
npm run build
npm start
```

Deploy to **Vercel** or **Netlify** (recommended). All routes are statically generated.

## Site structure

| Route | Description |
|-------|-------------|
| `/` | Home — hero, snapshot, expertise, projects, vision/mission, leadership preview, CTA |
| `/about` | Company journey, philosophy, vision, mission, values |
| `/expertise` | Index + 5 sub-pages (Highway, EPC, High-Altitude, Irrigation, Maintenance) |
| `/projects` | Project portfolio (filter UI can be added later) |
| `/plant-machinery` | Equipment categories & capacity |
| `/leadership` | Founder & Director profiles, governance |
| `/careers` | Culture, safety, apply CTA |
| `/contact` | Office, email, phone, contact form, map placeholder |

## Next steps

1. **Contact form** — Wire `/contact` form to your API or email service (e.g. Formspree, Resend, or custom API).
2. **Content** — Replace placeholder office address and phone in `src/app/contact/page.tsx`; add real project photos and copy.
3. **Map** — Add Google Maps (or similar) in the Contact page with your office coordinates.
4. **Images** — Swap Unsplash hero/project images for your own; keep using `next/image` and the existing `remotePatterns` in `next.config.ts` for any external image domains.

## Performance

- Static generation for all pages
- Tailwind with minimal CSS
- Optional: add `framer-motion` for subtle scroll/entrance animations (already in dependencies)
