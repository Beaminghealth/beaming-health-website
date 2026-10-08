import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/Button';
import { CategoryCard } from '@/components/CategoryCard';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { categories } from '@/data/categories';
import { solutions } from '@/data/solutions';
import { useSeo } from '@/hooks/useSeo';

const focusAreas = [
  {
    title: 'Healthy Aging & Longevity',
    body: 'The big picture: supporting how you age across energy, resilience, and independence. Start with the foundations of nutrition, movement, and sleep, then explore what’s emerging in cellular health.',
    related: 'cellular-health-longevity',
  },
  {
    title: 'Metabolic Health',
    body: 'Metabolism underpins how energetic you feel day to day. Understanding blood sugar, body composition, and energy regulation gives you a foundation for exploring metabolic-support options.',
    related: 'metabolic-health',
  },
  {
    title: 'Gut & Microbiome Health',
    body: 'The microbiome has become one of the most active areas of wellness research. Understanding how it works helps you evaluate probiotics and nutritional strategies thoughtfully.',
    related: 'gut-microbiome-health',
  },
  {
    title: 'Wellness Technology',
    body: 'From PEMF to terahertz and beyond, at-home wellness devices are more accessible than ever. Liz helps you understand what these technologies are and how to think about them.',
    related: 'wellness-technology',
  },
];

export function StartHerePage() {
  useSeo({
    title: 'Start Here | Liz Palmer',
    description:
      'New to Liz’s approach? Start here. A cornerstone guide to the key areas of healthy aging and the wellness strategies and technologies worth learning about.',
  });

  return (
    <>
      <PageHero
        eyebrow="Start Here"
        title="Not Sure Where to Start? Start Here."
        intro="Explore Liz’s guide to the key areas of healthy aging and discover which wellness strategies and technologies may be worth learning more about."
      />

      {/* Welcome */}
      <section className="container-prose py-16 lg:py-20">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl">Welcome</h2>
          <div className="mt-5 space-y-5 text-lg leading-relaxed text-navy-700">
            <p>
              If you’re new to functional nutrition or curious about the new wellness
              technologies people are talking about, it’s easy to feel overwhelmed. This guide
              is designed to give you a grounded starting point.
            </p>
            <p>
              Liz’s philosophy is simple: start with the foundations of good health, stay
              curious about what’s emerging, and choose thoughtfully. You don’t need to
              adopt everything at once. Understanding your options is the first step.
            </p>
            <p>
              Below, you’ll find the four major areas Liz focuses on. For each, you’ll find
              a brief explanation and a gentle nudge toward relevant resources and solutions to
              explore when you’re ready.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Focus areas */}
      <section className="bg-cream-100 py-16 lg:py-24">
        <div className="container-prose space-y-10">
          {focusAreas.map((area, i) => (
            <Reveal key={area.title} delay={i * 60}>
              <div className="rounded-3xl border border-navy-100 bg-white p-8 shadow-card">
                <h3 className="font-serif text-2xl text-navy-900">{area.title}</h3>
                <p className="mt-4 text-lg leading-relaxed text-navy-600">{area.body}</p>
                <div className="mt-6">
                  <Button
                    to={`/wellness-solutions#${area.related}`}
                    variant="secondary"
                    icon={ArrowRight}
                  >
                    Explore This Area
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container-page py-16 lg:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="The Four Pillars"
            title="Liz’s Areas of Focus"
            intro="Each pillar is grounded in the fundamentals and open to promising new approaches."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <Reveal key={cat.slug} delay={i * 80}>
              <CategoryCard category={cat} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured solutions */}
      <section className="bg-cream-100 py-16 lg:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="When You’re Ready"
              title="Solutions Worth Exploring"
              intro="Once you understand the landscape, these are the innovative solutions Liz believes deserve a closer look."
            />
          </Reveal>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button to="/wellness-solutions" size="lg" icon={ArrowRight}>
              Browse All Solutions
            </Button>
            <Button to="/resources" variant="secondary" size="lg">
              Read More Resources
            </Button>
          </div>
        </div>
      </section>

      {/* A note */}
      <section className="container-prose py-16 lg:py-20">
        <Reveal className="rounded-3xl border border-teal-100 bg-teal-50/60 p-8">
          <h2 className="text-xl text-navy-900">An Important Note</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-navy-600">
            Everything here is educational. Nothing on this site is intended to diagnose, treat,
            cure, or prevent any disease, and it does not replace individualized medical advice. If
            you have a medical condition or take medication, please consult an appropriate licensed
            healthcare professional before making changes to your routine.
          </p>
        </Reveal>
      </section>
    </>
  );
}
