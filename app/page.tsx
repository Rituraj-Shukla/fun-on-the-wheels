import Image from 'next/image';
import Reveal from '@/components/Reveal';
import Hero from '@/components/Hero';
import StatBand from '@/components/StatBand';
import CTASection from '@/components/CTASection';
import Marquee from '@/components/interactions/Marquee';
import AnimatedText from '@/components/interactions/AnimatedText';
import RevealImage from '@/components/interactions/RevealImage';
import { ButtonLink, SectionLabel, TextLink } from '@/components/ui';
import {
  QuoteMark,
  ShieldIcon,
  TagIcon,
  HeartIcon,
  StarIcon,
  ClockIcon,
  PinIcon,
} from '@/components/icons';
import { IMAGES } from '@/lib/images';
import { JOURNEYS } from '@/lib/journeys';
import { FLEET } from '@/lib/fleet';
import { SITE } from '@/lib/site';

const DESTINATIONS = [
  'Shirdi',
  'Shani Shingnapur',
  'Trimbakeshwar',
  'Grishneshwar',
  'Bhimashankar',
  'Ajanta & Ellora',
  'Nashik',
  'Pune',
];

const PILLARS = [
  {
    icon: ShieldIcon,
    title: 'Safe, every mile',
    body:
      'Vetted drivers, clean and inspected cars, doorstep pickup. Solo travellers and senior citizens reach darshan feeling completely secure.',
  },
  {
    icon: TagIcon,
    title: 'Honest fares',
    body:
      'Fixed, transparent pricing agreed before you set off — and a drop exactly where you asked. No surprises at the end of the road.',
  },
  {
    icon: HeartIcon,
    title: 'Cared for like family',
    body:
      'Owner Happy Singh plans your route personally and checks in even after you reach home. You are looked after, not just driven.',
  },
];

const TESTIMONIALS = [
  {
    quote:
      'They help you with everything — places to visit, best timings, the right hotels. They respond to every query fast. They are just a text away.',
    name: 'Reena G.',
    trip: 'Shirdi → Mumbai',
  },
  {
    quote:
      'I am from the USA. The driver made sure I covered not only what was asked, but more. Very reasonable price, great service. Highly recommend.',
    name: 'Ram Garapati',
    trip: 'Jyotirlinga circuit',
  },
  {
    quote: 'Awesome service. Great support. The name you can trust.',
    name: 'Rajat Gupta',
    trip: 'Outstation tour',
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        image={IMAGES.heroRoad}
        alt="An open road winding through the Maharashtra countryside toward Shirdi at golden hour."
        eyebrow="Shirdi · Maharashtra · Since the road began"
        title={
          <>
            Sacred journeys,
            <br />
            cared for like our own.
          </>
        }
        cue="Begin"
      >
        <div className="flex flex-col gap-4 sm:flex-row">
          <ButtonLink href="#journeys" variant="solid-light">
            Explore Journeys
          </ButtonLink>
          <ButtonLink href="#fleet" variant="outline" className="text-white">
            View the Fleet
          </ButtonLink>
        </div>
      </Hero>

      {/* Trust strip — pre-empts the fare/drop worries the moment the hero ends. */}
      <div className="border-b border-outline-variant/60 bg-surface-container-low">
        <div className="shell flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-5 text-center md:justify-between">
          {[
            { icon: StarIcon, text: '4.8 ★ · 141 traveller reviews' },
            { icon: ClockIcon, text: 'Open 24 / 7, every day' },
            { icon: ShieldIcon, text: 'Vetted drivers · clean cars' },
            { icon: PinIcon, text: 'Steps from the Sai temple' },
          ].map(({ icon: Icon, text }) => (
            <span key={text} className="inline-flex items-center gap-2.5 t-label text-secondary">
              <Icon className="h-4 w-4 text-tertiary" />
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Philosophy + pillars */}
      <section className="shell py-24 md:py-section-gap">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionLabel className="!text-tertiary">Why travellers return</SectionLabel>
          </Reveal>
          <AnimatedText
            as="h2"
            split="words"
            className="mt-7 font-serif text-headline-md md:text-headline-lg"
          >
            Owner-led care, on every kilometre.
          </AnimatedText>
          <Reveal delay={150}>
            <p className="t-body-lg mx-auto mt-8 max-w-2xl text-secondary">
              For years, families, solo pilgrims, international devotees and businesses have
              trusted Fun On The Wheels to carry them across Maharashtra&apos;s most sacred
              roads — safely, on time, and at a fare you agree before you leave.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 md:mt-20 md:grid-cols-3">
          {PILLARS.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 110}>
              <article className="group relative h-full overflow-hidden border border-outline-variant/70 bg-background p-9 transition-all duration-500 ease-smooth hover:-translate-y-1.5 hover:border-tertiary/60 hover:shadow-lift md:p-11">
                {/* gold hairline draws across the top */}
                <span className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-tertiary transition-transform duration-700 ease-smooth group-hover:scale-x-100" />
                {/* warm gold glow blooms in the corner */}
                <span className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-tertiary/20 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />
                {/* icon chip gradually fills with gold */}
                <span className="relative inline-flex h-14 w-14 items-center justify-center border border-outline-variant text-tertiary transition-all duration-500 ease-smooth group-hover:border-tertiary group-hover:bg-tertiary group-hover:text-on-tertiary group-hover:shadow-[0_10px_30px_rgba(168,136,79,0.38)]">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="relative mt-7 font-serif text-headline-md transition-colors duration-500 group-hover:text-on-surface">
                  {title}
                </h3>
                <p className="t-body relative mt-4 text-secondary transition-colors duration-500 group-hover:text-on-surface-variant">
                  {body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Destination marquee */}
      <div className="border-y border-outline-variant/60 py-6 md:py-8">
        <Marquee
          items={DESTINATIONS}
          className="font-serif text-2xl italic text-on-surface/80 md:text-4xl"
        />
      </div>

      {/* Signature journeys */}
      <section id="journeys" className="scroll-mt-24 bg-surface-container-low py-24 md:py-section-gap">
        <div className="shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Reveal>
                <SectionLabel rule className="!text-tertiary">
                  Signature Journeys
                </SectionLabel>
              </Reveal>
              <AnimatedText as="h2" className="mt-5 max-w-xl font-serif text-headline-lg">
                Routes we know by heart.
              </AnimatedText>
            </div>
            <Reveal delay={120}>
              <p className="t-body max-w-sm text-secondary">
                From a single darshan to a multi-day Jyotirlinga circuit and heritage caves —
                planned around your pace, not a fixed package.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-x-gutter gap-y-14 md:mt-20 md:grid-cols-2">
            {JOURNEYS.map((j, i) => (
              <Reveal key={j.slug} delay={(i % 2) * 120}>
                <article className="group">
                  <div className="relative overflow-hidden bg-surface-dim">
                    <RevealImage
                      src={j.image}
                      alt={`${j.name} — ${j.tagline}`}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="aspect-[16/10]"
                      imgClassName="transition-transform duration-[1100ms] ease-smooth group-hover:scale-105"
                    />
                    <span className="t-label absolute left-5 top-5 bg-primary/85 px-3 py-1.5 text-on-primary backdrop-blur-sm">
                      {j.duration}
                    </span>
                    <span className="pointer-events-none absolute -bottom-2 right-4 font-serif text-[80px] leading-none text-background/90 md:text-[110px]">
                      {j.index}
                    </span>
                  </div>
                  <div className="mt-6">
                    <p className="t-label text-tertiary">{j.tagline}</p>
                    <h3 className="mt-2 font-serif text-headline-md transition-colors group-hover:text-on-surface-variant">
                      {j.name}
                    </h3>
                    <p className="t-body mt-3 max-w-md text-secondary">{j.blurb}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {j.highlights.map((h) => (
                        <li
                          key={h}
                          className="t-label border border-outline-variant px-3 py-1.5 text-secondary"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <StatBand />

      {/* Fleet */}
      <section id="fleet" className="scroll-mt-24 py-24 md:py-section-gap">
        <div className="shell flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <SectionLabel rule className="!text-tertiary">
                The Fleet
              </SectionLabel>
            </Reveal>
            <AnimatedText as="h2" className="mt-5 max-w-xl font-serif text-headline-lg">
              Clean cars, sized to your group.
            </AnimatedText>
          </div>
          <Reveal delay={120}>
            <p className="t-body max-w-sm text-secondary">
              From a Dzire for two to a coach for a pilgrim group — every vehicle air-conditioned,
              inspected, and stocked with complimentary water.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-margin-mobile pb-4 md:mt-16 md:px-margin-desktop [-ms-overflow-style:none] [scrollbar-width:none]">
          {FLEET.map((v, i) => (
            <article
              key={v.slug}
              className="group w-[78vw] shrink-0 snap-center border border-outline-variant/70 bg-background sm:w-[380px]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-surface-dim">
                <Image
                  src={v.image}
                  alt={`${v.name} — ${v.examples}`}
                  fill
                  priority={i === 0}
                  sizes="(max-width: 768px) 78vw, 380px"
                  className="object-cover transition-transform duration-[900ms] ease-smooth group-hover:scale-105"
                />
                <span className="t-label absolute left-4 top-4 bg-surface/90 px-3 py-1.5 text-on-surface backdrop-blur-sm">
                  {v.klass}
                </span>
              </div>
              <div className="p-7">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-serif text-headline-md">{v.name}</h3>
                  <span className="t-label text-tertiary">{v.seats}</span>
                </div>
                <p className="t-body mt-2 text-secondary">{v.examples}</p>
                <p className="t-label mt-5 text-secondary/80">Best for · {v.bestFor}</p>
                <ul className="mt-4 space-y-2 border-t border-outline-variant/60 pt-4">
                  {v.features.map((f) => (
                    <li key={f} className="t-body flex items-center gap-3 text-on-surface-variant">
                      <span className="h-1 w-1 shrink-0 bg-tertiary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <div className="shell mt-8">
          <TextLink href="#contact">Ask for a vehicle &amp; fare</TextLink>
        </div>
      </section>

      {/* Story — owner + the honesty that defines them */}
      <section id="story" className="scroll-mt-24 bg-surface-container-low py-24 md:py-section-gap">
        <div className="shell grid grid-cols-1 items-center gap-x-gutter gap-y-12 md:grid-cols-2">
          <div className="relative order-2 md:order-1">
            <RevealImage
              src={IMAGES.storyTemple}
              alt="A quiet temple courtyard in the Shirdi region at first light."
              sizes="(max-width: 768px) 100vw, 50vw"
              className="aspect-[4/5]"
            />
            <div className="absolute -bottom-6 -right-2 z-10 hidden bg-background p-7 shadow-ambient md:block">
              <p className="t-label text-secondary">Proprietor</p>
              <p className="mt-2 font-serif text-headline-md">Happy Singh</p>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <Reveal>
              <SectionLabel className="!text-tertiary">Our Story</SectionLabel>
            </Reveal>
            <AnimatedText as="h2" split="words" className="mt-6 font-serif text-headline-md md:text-headline-lg">
              A family business, run on trust.
            </AnimatedText>
            <Reveal delay={120}>
              <p className="t-body-lg mt-7 text-secondary">
                Fun On The Wheels is owner-run from a desk steps from the Sai Baba temple. Happy
                Singh and his family greet many guests personally, design each itinerary, and stay
                reachable through the whole trip — the reason travellers from across India, Nepal,
                the USA and beyond come back to us.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <figure className="mt-10 border-l-2 border-tertiary pl-6">
                <QuoteMark className="h-8 w-8 text-tertiary" />
                <blockquote className="mt-4 font-serif text-quote italic text-on-surface-variant">
                  &ldquo;We left our baby&apos;s anklet in the cab. The driver found it — and the
                  travels couriered it all the way back to us.&rdquo;
                </blockquote>
                <figcaption className="t-label mt-5 text-secondary">
                  Chandu P. · verified Google review
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="shell py-24 md:py-section-gap">
        <div className="grid grid-cols-1 items-center gap-x-gutter gap-y-12 md:grid-cols-2">
          <Reveal>
            <QuoteMark className="h-12 w-12 text-tertiary" />
            <blockquote className="mt-6 font-serif text-quote italic text-on-surface-variant md:text-[30px] md:leading-[44px]">
              &ldquo;As a woman travelling alone, safety is my top priority — and I felt completely
              secure throughout the journey. Professional, courteous drivers and spotless cars. I
              highly recommend them, especially to solo travellers.&rdquo;
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <span className="h-px w-12 bg-on-surface" />
              <p className="t-label">Chukkala B. · 3-day Jyotirlinga tour</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <figure className="border border-outline-variant/70 bg-background p-7">
                  <div className="flex gap-1 text-tertiary">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <StarIcon key={s} className="h-4 w-4" />
                    ))}
                  </div>
                  <blockquote className="t-body mt-4 text-on-surface-variant">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="t-label mt-5 text-secondary">
                    {t.name} · {t.trip}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div id="contact" className="scroll-mt-24">
        <CTASection
          eyebrow="Plan a Trip"
          title="Tell us your dates — we'll plan the rest."
          body={`Speak with Happy Singh directly. Share your darshan, your group and your dates, and we'll return a clear route and a fixed fare. Call or message ${SITE.phone}.`}
          image={IMAGES.ctaNightRoad}
          primary={{ href: `tel:${SITE.phoneIntl}`, label: `Call ${SITE.phone}` }}
          secondary={{ href: `https://wa.me/${SITE.whatsapp}`, label: 'WhatsApp Us' }}
        />
      </div>
    </>
  );
}
