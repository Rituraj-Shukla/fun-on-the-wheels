/** Global brand + site configuration. Single source of truth for copy that
 *  repeats across pages (nav, footer, contact details, headline stats).
 *  Brand: Fun On The Wheels Tours & Travels — owner-led pilgrimage & heritage
 *  travel from Shirdi, Maharashtra. Figures verified from Google Maps (4.8★,
 *  141 reviews). See docs/RESEARCH.md. */

export const SITE = {
  name: 'Fun On The Wheels',
  legalName: 'Fun On The Wheels Tours & Travels',
  tagline: 'Journeys Cared For Like Our Own',
  description:
    'Owner-led tours, taxis and chauffeur travel from Shirdi — Sai darshan, Jyotirlinga circuits, Ajanta & Ellora heritage and airport transfers. Safe, clean cars, honest fares, 4.8★ across 141 traveller reviews.',
  email: 'funonthewheels.shirdi@gmail.com',
  phone: '+91 91759 31544',
  phoneIntl: '+919175931544',
  whatsapp: '+919175931544',
  address: 'Gate No.02, Opp. Laxmi Temple, Pimpalwadi Road, Shirdi, Maharashtra 423109',
  mapsUrl:
    'https://www.google.com/maps/place/Fun+On+The+Wheels+Tours+%26+Travels/@19.7671224,74.4758603,17z',
} as const;

/** Home is a single-scroll experience for this milestone — nav targets in-page
 *  anchors. Dedicated routes get wired as those pages are approved. */
export const NAV_LINKS = [
  { label: 'Journeys', href: '#journeys' },
  { label: 'Fleet', href: '#fleet' },
  { label: 'Our Story', href: '#story' },
  { label: 'Contact', href: '#contact' },
] as const;

/** Count-up trust band — every figure verified or pain-point-driven. */
export const STATS = [
  { value: 4.8, prefix: '', suffix: '/5', decimals: 1, label: 'Google Rating' },
  { value: 141, prefix: '', suffix: '+', decimals: 0, label: 'Traveller Reviews' },
  { value: 24, prefix: '', suffix: '/7', decimals: 0, label: 'Always Available' },
  { value: 100, prefix: '', suffix: '%', decimals: 0, label: 'Doorstep Pickup' },
] as const;

export const OFFICES = [
  {
    city: 'Shirdi',
    role: 'Travel Desk',
    lines: ['Gate No.02, Opp. Laxmi Temple', 'Pimpalwadi Road, Rahata', 'Shirdi, Maharashtra 423109'],
    phone: '+91 91759 31544',
  },
] as const;

export const FOOTER_LINKS = {
  explore: [
    { label: 'Signature Journeys', href: '#journeys' },
    { label: 'Our Fleet', href: '#fleet' },
    { label: 'Our Story', href: '#story' },
    { label: 'Plan a Trip', href: '#contact' },
  ],
  legal: [
    { label: 'Privacy', href: '#contact' },
    { label: 'Terms', href: '#contact' },
    { label: 'Cancellation', href: '#contact' },
  ],
} as const;

export type Office = (typeof OFFICES)[number];
