/** Signature journeys — built only from services the Google reviews actually
 *  prove (see docs/RESEARCH.md). Used by the Home preview and, later, Services. */
import { IMAGES } from './images';

export interface Journey {
  slug: string;
  index: string;
  name: string;
  tagline: string;
  blurb: string;
  highlights: string[];
  image: string;
  duration: string;
}

export const JOURNEYS: Journey[] = [
  {
    slug: 'sai-darshan',
    index: '01',
    name: 'Shirdi Sai Darshan',
    tagline: 'The reason most journeys begin',
    blurb:
      'Doorstep pickup, darshan-time guidance and a clean cab waiting whenever you are ready — the local circuit our travellers return to us for, year after year.',
    highlights: ['Local sightseeing', 'Darshan-time advice', 'Hotel Sai Village stays'],
    image: IMAGES.journeyShirdi,
    duration: 'Half / full day',
  },
  {
    slug: 'jyotirlinga-circuit',
    index: '02',
    name: 'Jyotirlinga Circuit',
    tagline: 'Trimbakeshwar · Grishneshwar · Bhimashankar',
    blurb:
      'Three sacred Jyotirlingas, planned around your darshan windows and rest. Drivers who know every route, every queue and the calmest hours to arrive.',
    highlights: ['Multi-temple routing', 'Senior-friendly pacing', 'Shani Shingnapur add-on'],
    image: IMAGES.journeyJyotirlinga,
    duration: '1–3 days',
  },
  {
    slug: 'ajanta-ellora',
    index: '03',
    name: 'Ajanta & Ellora Heritage',
    tagline: 'World-heritage caves of Aurangabad',
    blurb:
      'Beyond the temple towns — the rock-cut wonders of Ajanta and Ellora, unhurried, with a driver-guide who lets the history breathe.',
    highlights: ['Heritage cave tours', 'Aurangabad sights', 'Comfortable long-drive cars'],
    image: IMAGES.journeyCaves,
    duration: '1–2 days',
  },
  {
    slug: 'transfers',
    index: '04',
    name: 'Airport & Outstation Transfers',
    tagline: 'Pune · Mumbai · Nashik · Manmad',
    blurb:
      'Fixed, transparent fares and on-time pickups for one-way drops, station runs and corporate travel — the same care, whether it is a family or a flight to catch.',
    highlights: ['Fixed transparent fares', 'Flight-tracked timing', 'Corporate billing'],
    image: IMAGES.journeyTransfer,
    duration: 'On demand',
  },
];
