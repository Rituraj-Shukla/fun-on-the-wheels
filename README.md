# Fun On The Wheels — Tours & Travels

Premium website for **Fun On The Wheels Tours & Travels**, an owner-led pilgrimage &
heritage travel company based in Shirdi, Maharashtra (4.8★ across 141 Google reviews).
Pilgrimage-first, with an airport / outstation / corporate transfer track.

A single-page, cinematic Home experience: sacred-journey hero, trust strip, owner-led
value pillars, signature journeys, fleet showcase, the honesty story, real testimonials,
and a call/WhatsApp CTA.

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) · React 19 · TypeScript |
| Styling | Tailwind CSS 3.4 (token-driven) |
| Fonts | `next/font`: Bodoni Moda (display), Jost (body), Great Vibes (logo script) |
| Motion | GSAP 3 + ScrollTrigger + SplitText, Lenis smooth-scroll (synced to GSAP ticker) |
| Images | `next/image`; **all assets self-hosted in `/public`** (no remote dependency) |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build && npm run start   # production
```

## Structure

```
app/            App Router — layout, home page, template, not-found, globals.css
components/     Nav, Hero, Footer, StatBand, CTASection, Logo, icons, interactions/*
lib/            Typed content + config — site.ts, journeys.ts, fleet.ts, images.ts
public/         All images — hero/, cta/, journeys/, fleet/, videos/
docs/           RESEARCH.md (business + review analysis), HOMEPAGE-CONCEPT.md
```

All copy and figures are content — edit the `lib/*.ts` data files to update the site.

## Image credits

Vehicle & landmark photos from **Wikimedia Commons** (CC-licensed); scenic/atmospheric
shots from **Unsplash**. All downloaded and self-hosted under `/public`.
Replace with the client's own photography when available.

## Notes

- The navbar logo is a faithful SVG + web-font reconstruction of the brand mark. For a
  pixel-exact logo, drop the original artwork at `public/logo.png` and wire it into
  `components/Logo.tsx`.
- Dark mode and the inner pages (About, Services, Fleet, Contact) are planned next.
