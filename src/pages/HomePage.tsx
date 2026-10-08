import { Link } from 'react-router-dom';
import { ArrowRight, CalendarHeart, Compass, FlaskConical, HeartHandshake, Lightbulb, Microscope, ShieldCheck, Sparkles } from 'lucide-react';
import { Button } from '@/components/Button';
import { CategoryCard } from '@/components/CategoryCard';
import { ProductCard } from '@/components/ProductCard';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { NewsletterSignup } from '@/components/NewsletterSignup';
import { categories } from '@/data/categories';
import { solutions } from '@/data/solutions';
import { useSeo } from '@/hooks/useSeo';

const trustStrip = [
  { icon: ShieldCheck, title: '30 Years Experience', sub: 'Functional Nutrition' },
  { icon: Sparkles, title: 'Longevity Focused', sub: 'Healthy Aging + Vitality' },
  { icon: Lightbulb, title: 'Innovation Minded', sub: 'Emerging Wellness Technologies' },
  { icon: HeartHandshake, title: 'Carefully Curated', sub: 'Solutions Liz Believes In' },
];

const principles = [
  {
    icon: Compass,
    title: 'Start with the foundations',
    body: 'Nutrition, lifestyle, movement, sleep, and everyday habits still matter.',
  },
  {
    icon: Microscope,
    title: 'Stay curious',
    body: 'Wellness science and technology continue to evolve.',
  },
  {
    icon: FlaskConical,
    title: 'Choose thoughtfully',
    body: 'New doesn\u2019t automatically mean better. Liz focuses on solutions she believes offer meaningful value.',
  },
];

export function HomePage() {
  useSeo({
    title: 'Liz Palmer | Functional Nutrition, Longevity & Wellness Innovation',
    description:
      'Explore functional nutrition, healthy aging, longevity strategies and innovative wellness technologies with nutrition coach Liz Palmer.',
  });

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(55% 50% at 85% 15%, rgba(117,216,212,0.35) 0%, transparent 60%), radial-gradient(40% 40% at 5% 85%, rgba(27,163,162,0.12) 0%, transparent 55%)',
          }}
          aria-hidden="true"
        />
        <div className="container-page relative grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
              Functional Nutrition + Longevity
            </span>
            <h1 className="mt-5 text-4xl leading-tight sm:text-5xl lg:text-6xl">
              A Smarter Approach to Feeling Your Best at Every Age
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-600 sm:text-xl">
              For 30 years, Liz has helped people explore practical, forward-thinking
              approaches to nutrition and wellness. Today, she combines decades of experience with
              emerging products and technologies designed to support energy, resilience, healthy
              aging, and long-term vitality.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/wellness-solutions" size="lg" icon={ArrowRight}>
                Explore Wellness Solutions
              </Button>
              <Button to="/about" variant="secondary" size="lg">
                Meet Liz
              </Button>
            </div>
          </Reveal>

          <Reveal delay={150} className="relative">
            <div className="relative overflow-hidden rounded-4xl shadow-soft">
              <img
                src="/Screenshot_2026-08-28_at_8.20.50_am copy 2.png"
                alt="Liz Palmer, functional nutritionist"
                className="h-auto w-full object-contain"
                loading="eager"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-navy-100 bg-white">
        <div className="container-page grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {trustStrip.map((item, i) => (
            <Reveal key={item.title} delay={i * 80} className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <p className="font-serif text-lg text-navy-900">{item.title}</p>
                <p className="text-sm text-navy-500">{item.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Introduction */}
      <section className="container-page py-20 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionHeading
              eyebrow="The Landscape"
              title="Old problems. New possibilities."
              intro="Wellness is evolving. New discoveries in nutrition, peptides, microbiome science, cellular health, and wellness technology are creating new possibilities for people who want to stay active and healthy as they age. Liz researches emerging approaches and helps her audience understand which products and technologies may be worth exploring."
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto mt-8 max-w-2xl rounded-2xl border border-teal-100 bg-teal-50/60 px-6 py-5 text-left text-base leading-relaxed text-navy-600">
              <strong className="font-semibold text-navy-900">An important note:</strong> Nothing on
              this site promises cures, disease treatment, reversal of medical conditions, or
              guaranteed outcomes. Liz does not suggest that you discontinue prescription
              medications without guidance from an appropriate licensed healthcare professional.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Wellness categories */}
      <section className="bg-cream-100 py-20 lg:py-28">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Areas of Focus"
              title="Wellness, Organized Around Your Goals"
              intro="Explore the four pillars Liz focuses on, each grounded in the fundamentals of good health and open to promising new approaches."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat, i) => (
              <Reveal key={cat.slug} delay={i * 80}>
                <CategoryCard category={cat} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured solutions */}
      <section className="container-page py-20 lg:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Featured Solutions"
            title="Solutions Worth Exploring"
            intro="There’s no shortage of wellness products making big promises. Liz focuses on innovative solutions she believes deserve a closer look."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((s, i) => (
            <Reveal key={s.slug} delay={i * 80}>
              <ProductCard solution={s} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <Button to="/wellness-solutions" variant="secondary" size="lg" icon={ArrowRight}>
            View All Wellness Solutions
          </Button>
        </Reveal>
      </section>

      {/* Liz's approach */}
      <section className="relative overflow-hidden bg-navy-900 py-20 lg:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(50% 50% at 10% 20%, rgba(27,163,162,0.4) 0%, transparent 60%), radial-gradient(40% 40% at 90% 80%, rgba(117,216,212,0.2) 0%, transparent 55%)',
          }}
          aria-hidden="true"
        />
        <div className="container-page relative mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">
              Liz’s Approach
            </span>
            <h2 className="mt-4 text-3xl text-white sm:text-4xl lg:text-[2.75rem]">
              Experience Meets Innovation
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-navy-100">
              Liz has spent three decades working in nutrition and wellness. Rather than relying
              solely on conventional approaches or chasing every new wellness trend, she looks for
              practical innovations that complement the fundamentals of good health.
            </p>
            <div className="mt-10 grid gap-5 text-left sm:grid-cols-2">
              {principles.map((p) => (
                <div key={p.title} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-teal-300">
                    <p.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-serif text-xl text-white">{p.title}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-navy-200">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Button to="/about" variant="light" size="lg" icon={ArrowRight}>
                Learn More About Liz
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact / appointment */}
      <section className="relative overflow-hidden bg-teal-700 py-20 lg:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              'radial-gradient(50% 50% at 85% 15%, rgba(255,255,255,0.35) 0%, transparent 60%), radial-gradient(40% 40% at 5% 85%, rgba(117,216,212,0.4) 0%, transparent 55%)',
          }}
          aria-hidden="true"
        />
        <div className="container-page relative grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-100">
              Work With Liz
            </span>
            <h2 className="mt-4 text-3xl text-white sm:text-4xl lg:text-[2.75rem]">
              Have a Question? Let&apos;s Talk.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-teal-50">
              Whether you&apos;re curious about a specific wellness approach, want help making sense
              of new products, or would like to schedule a one-on-one conversation, Liz would love to
              hear from you. Reach out and she&apos;ll get back to you personally.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/contact" size="lg" icon={CalendarHeart}>
                Contact Liz
              </Button>
              <Button to="/about" variant="light" size="lg">
                Learn About Working Together
              </Button>
            </div>
          </Reveal>
          <Reveal delay={150} className="relative">
            <div className="relative overflow-hidden rounded-4xl border border-white/20 bg-white/10 p-8 shadow-soft backdrop-blur-sm lg:p-10">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white">
                    <CalendarHeart className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-serif text-xl text-white">Personal Consultations</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-teal-50">
                      One-on-one conversations tailored to your wellness goals and questions.
                    </p>
                  </div>
                </div>
                <div className="h-px w-full bg-white/20" />
                <p className="text-[15px] leading-relaxed text-teal-50">
                  Use the contact form to share what you&apos;re exploring or to request an
                  appointment. Liz personally reviews every message and will respond to help you find
                  the right next step.
                </p>
                <Button to="/contact" variant="light" size="md" icon={ArrowRight} className="w-full">
                  Send a Message
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Start here */}
      <section className="bg-cream-100 py-20 lg:py-28">
        <div className="container-page">
          <Reveal className="mx-auto max-w-3xl rounded-4xl border border-teal-100 bg-white p-10 text-center shadow-card lg:p-14">
            <span className="flex h-16 w-16 mx-auto items-center justify-center rounded-3xl bg-teal-50 text-teal-700">
              <Compass className="h-8 w-8" aria-hidden="true" />
            </span>
            <h2 className="mt-6 text-3xl sm:text-4xl">Not Sure Where to Start?</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-navy-600">
              Explore Liz’s guide to the key areas of healthy aging and discover which wellness
              strategies and technologies may be worth learning more about.
            </p>
            <div className="mt-8">
              <Button to="/resources/start-here" size="lg" icon={ArrowRight}>
                Start Here
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container-page py-20 lg:py-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="Newsletter"
            title="Stay Ahead of What’s Next in Wellness"
            intro="Get Liz’s latest discoveries, longevity insights, product recommendations, and emerging wellness technologies delivered to your inbox."
          />
          <div className="mt-10 text-left">
            <NewsletterSignup variant="light" />
          </div>
        </Reveal>
      </section>
    </>
  );
}
