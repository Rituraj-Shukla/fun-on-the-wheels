/** Fleet structure — Indian transport categories anchored to the vehicles named
 *  in reviews (Dzire, Ertiga, Innova) plus standard group options. Specs are
 *  structural placeholders to be confirmed with the client's real fleet. */
import { IMAGES } from './images';

export interface Vehicle {
  slug: string;
  name: string;
  klass: string;
  seats: string;
  examples: string;
  bestFor: string;
  features: string[];
  image: string;
}

export const FLEET: Vehicle[] = [
  {
    slug: 'sedan',
    name: 'Sedan',
    klass: 'Comfort',
    seats: '4 seats',
    examples: 'Hyundai Verna · Honda City',
    bestFor: 'Couples & solo darshan',
    features: ['AC', 'Boot for 2–3 bags', 'Complimentary water'],
    image: IMAGES.fleetSedan,
  },
  {
    slug: 'mpv',
    name: 'MPV',
    klass: 'Family',
    seats: '6–7 seats',
    examples: 'Toyota Innova Crysta',
    bestFor: 'Families & comfort tours',
    features: ['AC', 'Flexible seating', 'Ample luggage'],
    image: IMAGES.fleetMpv,
  },
  {
    slug: 'premium-suv',
    name: 'Premium SUV',
    klass: 'Premium',
    seats: '7 seats',
    examples: 'Toyota Fortuner · MG Gloster',
    bestFor: 'Long outstation comfort',
    features: ['Plush ride', 'Captain seats', 'Highway-ready'],
    image: IMAGES.fleetSuv,
  },
  {
    slug: 'tempo-traveller',
    name: 'Tempo Traveller',
    klass: 'Group',
    seats: '12–17 seats',
    examples: 'Force Tempo Traveller',
    bestFor: 'Extended families & groups',
    features: ['Push-back seats', 'Standing room', 'Group luggage'],
    image: IMAGES.fleetTempo,
  },
  {
    slug: 'coach',
    name: 'Mini & Coach Bus',
    klass: 'Large Group',
    seats: '20–40 seats',
    examples: 'Mini bus · Coach',
    bestFor: 'Pilgrim & corporate groups',
    features: ['AC coach', 'Tour coordinator', 'Bulk pilgrimage tours'],
    image: IMAGES.fleetCoach,
  },
];
