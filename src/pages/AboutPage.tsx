import { ArrowRight, BookOpen, Compass, Heart, Microscope } from 'lucide-react';
import { Button } from '@/components/Button';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { useSeo } from '@/hooks/useSeo';

const timeline = [
  {
    decade: 'The Early Years',
    title: 'Building a Foundation in Nutrition',
    body: 'Liz began her career in a local health food shop, then was a professional rep for a functional nutrition company, getting her nutritional certification in 2002.',
  },
  {
    decade: 'The Middle Years',
    title: 'A Growing Focus on Functional Approaches',
    body: 'As the field evolved, Liz deepened her focus on functional nutrition, looking beyond symptoms to the underlying systems that shape how we feel.',
  },
  {
    decade: 'Today',
    title: 'At the Intersection of Experience and Innovation',
    body: 'Liz now brings together three decades of hands-on experience with a curiosity for emerging approaches in longevity, metabolic health, microbiome science, and wellness technology.',
  },
];

const values = [
  {
    icon: Compass,
    title: 'Experience',
    body: 'Three decades of guiding real people through real wellness questions.',
  },
  {
    icon: Microscope,
    title: 'Curiosity',
    body: 'A genuine interest in what\u2019s new, tested against what actually holds up.',
  },
  {
    icon: Heart,
    title: 'Discernment',
    body: 'A willingness to say when something is promising, and when it isn\u2019t.',
  },
  {
    icon: BookOpen,
    title: 'Education First',
    body: 'Helping people understand their options before they ever make a choice.',
  },
];

export function AboutPage() {
  useSeo({
    title: 'About Liz Palmer | Functional Nutrition & Longevity',
    description:
      'Meet Liz Palmer, a functional nutritionist with 30 years of experience helping people age well through practical nutrition and carefully curated wellness innovation.',
  });

  return (
    <>
      <PageHero
        eyebrow="About Liz Palmer"
        title="Three Decades of Helping People Live Well"
        intro="Liz Palmer has watched the health and nutrition field change dramatically over thirty years. Her interest today sits at the intersection of established nutritional principles and emerging approaches to longevity, metabolic wellness, microbiome health, and wellness technology."
      >
        <Button to="/wellness-solutions" size="lg" icon={ArrowRight}>
          Explore Liz’s Wellness Recommendations
        </Button>
      </PageHero>

      {/* Portrait + intro */}
      <section className="container-page py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="mx-auto w-full max-w-md overflow-hidden rounded-4xl shadow-soft">
              <img
                src="/2023-08-25_(6).jpg"
                alt="Liz Palmer celebrating wellness and healthy aging"
                className="w-full object-contain"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="text-3xl sm:text-4xl">A Trusted Guide in a Changing Field</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-navy-600">
              <p>
                Liz has spent her career helping people take a more proactive, natural approach to
                their health. She believes in reducing unnecessary dependence on pharmaceuticals
                where appropriate, while supporting long-term vitality in today’s challenging
                environmental conditions.
              </p>
              <p>
                Rather than relying solely on conventional approaches or chasing every new wellness
                trend, she looks for practical innovations that complement the fundamentals of good
                health. Her philosophy is simple: build trust first, educate second, and introduce
                products third.
              </p>
              <p>
                Today, Liz helps her audience separate useful innovations from hype, curating the
                products and technologies she believes genuinely deserve a closer look.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-cream-100 py-20 lg:py-28">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl sm:text-4xl">A Career Shaped by Change</h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-600">
              The wellness landscape has transformed over three decades. Liz has grown with it,
              always grounding his work in the fundamentals while staying open to what’s next.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {timeline.map((item, i) => (
              <Reveal key={item.decade} delay={i * 100}>
                <div className="flex h-full flex-col rounded-3xl border border-navy-100 bg-white p-7 shadow-card">
                  <span className="text-sm font-semibold uppercase tracking-wider text-teal-700">
                    {item.decade}
                  </span>
                  <h3 className="mt-3 font-serif text-xl text-navy-900">{item.title}</h3>
                  <p className="mt-3 flex-1 text-[17px] leading-relaxed text-navy-600">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container-page py-20 lg:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl">What Guides Liz’s Work</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <div className="flex h-full flex-col items-start rounded-3xl border border-navy-100 bg-white p-7 shadow-card">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
                  <v.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-serif text-xl text-navy-900">{v.title}</h3>
                <p className="mt-2 text-[17px] leading-relaxed text-navy-600">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 py-20 lg:py-24">
        <div className="container-page text-center">
          <Reveal className="mx-auto max-w-2xl">
            <h2 className="text-3xl text-white sm:text-4xl">Ready to Explore What Liz Recommends?</h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-100">
              Browse Liz’s curated wellness solutions, organized around the goals that matter
              most as we age.
            </p>
            <div className="mt-8">
              <Button to="/wellness-solutions" variant="light" size="lg" icon={ArrowRight}>
                Explore Liz’s Wellness Recommendations
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
