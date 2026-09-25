# Bradshaw Plumbing Heating Renovations

Modern static rebuild of bradshawplumbing.com — Next.js App Router, deployed on Vercel.

## Status

**Homepage is fully built.** Header, footer, and page shells for the other 7 nav
routes are in place with placeholder content, ready to be filled in next:

- `/` — Home (complete: hero video, services, testimonials, estimate form)
- `/about-us/`
- `/plumbing-services-toronto/`
- `/bathroom-fixtures-store/` (Our Products)
- `/bathroom-renovations-toronto/` (Bath Renovations)
- `/kitchen-renovations/`
- `/gallery/`
- `/contact-us/` (has the estimate form wired in already)

URL slugs match the current live site exactly (pulled from bradshawplumbing.com's
nav) for SEO continuity, and `trailingSlash: true` is set in `next.config.ts` to
match WordPress's trailing-slash URLs.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form / email

The "Request a Free Estimate" form posts JSON straight to a
[Formspree](https://formspree.io) endpoint (`FORMSPREE_ENDPOINT` in
`src/components/EstimateForm.tsx`). Submissions are emailed by Formspree; set
the notification address and spam settings in the Formspree dashboard. No
environment variables are needed.

## Brand

- Colors: navy/purple/blue tokens defined in `src/app/globals.css` under `--color-*`
  and exposed as Tailwind utilities (`bg-brand-navy`, `text-brand-blue`, etc).
- Fonts: Poppins (headings) + Inter (body), loaded via `next/font/google`.
- Logo: recreated as an inline SVG (`src/components/Logo.tsx`) since no source
  logo file was provided — swap in the client's real logo file when available.
- Hero video: `public/videos/plumbing-hero.mp4`, compressed from the original
  4K/10MB source down to 1080p/~1.3MB (h264, no audio) for fast loading.

## Deploy

Push to a Git repo and import into [Vercel](https://vercel.com/new). No build
config needed beyond the environment variables above.
