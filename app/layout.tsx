import type { Metadata } from 'next';
import { Bodoni_Moda, Jost, Great_Vibes } from 'next/font/google';
import './globals.css';
import 'lenis/dist/lenis.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/providers/SmoothScroll';
import Intro from '@/components/interactions/Intro';
import { SITE } from '@/lib/site';

// Display — high-contrast Didone serif: sacred gravitas + editorial luxury.
const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

// Body / UI — clean geometric sans, calm and trustworthy.
const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

// Script — for the wordmark only, approximating the original calligraphic logo.
const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-script',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://funonthewheels.in'),
  title: {
    default: `${SITE.legalName} — ${SITE.tagline} | Shirdi Taxi & Tours`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    'Shirdi taxi service',
    'Shirdi tours and travels',
    'Sai darshan cab Shirdi',
    'Jyotirlinga tour package',
    'Trimbakeshwar Grishneshwar Bhimashankar',
    'Ajanta Ellora cave tour',
    'Shirdi to Pune Mumbai airport drop',
  ],
  openGraph: {
    title: `${SITE.legalName} — ${SITE.tagline}`,
    description: SITE.description,
    type: 'website',
    locale: 'en_IN',
    siteName: SITE.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bodoni.variable} ${jost.variable} ${greatVibes.variable}`}>
      <body className="grain overflow-x-hidden">
        <Intro />
        <SmoothScroll>
          <Nav />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
