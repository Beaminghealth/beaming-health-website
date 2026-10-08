import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

import { ProductCard } from '@/components/ProductCard';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { categories } from '@/data/categories';
import { solutionsByCategory } from '@/data/solutions';
import { useSeo } from '@/hooks/useSeo';

export function WellnessSolutionsPage() {
  useSeo({
    title: 'Wellness Solutions | Liz Palmer',
    description:
      'Explore Liz Palmer\u2019s curated wellness solutions, organized by goal: cellular health, metabolic health, gut and microbiome health, and wellness technology.',
  });

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [hash]);

  return (
    <>
      <section className="relative overflow-hidden bg-navy-900">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(60% 60% at 15% 10%, rgba(27,163,162,0.45) 0%, transparent 60%), radial-gradient(50% 50% at 90% 30%, rgba(117,216,212,0.25) 0%, transparent 55%)',
          }}
          aria-hidden="true"
        />
        <div className="container-page relative py-20 lg:py-28">
          <Reveal className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">
              Wellness Solutions
            </span>
            <h1 className="mt-4 text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              Innovative Products and Wellness Devices to Take Your Health to the Next Level
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-100 sm:text-xl">
              Rather than presenting products at random, Liz organizes her recommendations around
              the wellness goals that matter most as we age. Explore each category to find solutions
              she believes are worth a closer look.
            </p>
          </Reveal>
        </div>
      </section>


      {categories.map((cat) => {
        const items = solutionsByCategory(cat.slug);
        if (items.length === 0) return null;
        const Icon = cat.icon;
        const isSingleWithArt = items.length === 1 && cat.slug === 'natural-skin-care-beauty';
        return (
          <section key={cat.slug} id={cat.slug} className="scroll-mt-24 py-16 lg:py-20">
            <div className="container-page">
              <Reveal className="flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-2xl sm:text-3xl">{cat.name}</h2>
                  <p className="text-navy-500">{cat.tagline}</p>
                </div>
              </Reveal>
              {cat.slug === 'gut-microbiome-health' && (
                <Reveal className="mt-4">
                  <a
                    href="https://maxilinreview.com/"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition-colors hover:text-teal-800"
                  >
                    Visit Maxilin Review
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                </Reveal>
              )}
              {isSingleWithArt ? (
                <div className="mt-10 grid gap-6 lg:grid-cols-2">
                  <Reveal className="min-w-0 h-full">
                    <ProductCard solution={items[0]} />
                  </Reveal>
                  <Reveal delay={120} className="relative overflow-hidden rounded-3xl shadow-card min-h-[320px]">
                    <img
                      src="https://images.pexels.com/photos/30473045/pexels-photo-30473045.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                      alt="Women and men with healthy, glowing skin enjoying their skincare routine"
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-navy-900/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <p className="font-serif text-2xl text-white">
                        Healthy skin is for everyone
                      </p>
                      <p className="mt-2 max-w-md text-[15px] leading-relaxed text-white/90">
                        Natural, science-backed skin care helps women and men feel confident in their skin at every age.
                      </p>
                    </div>
                  </Reveal>
                </div>
              ) : (
                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((s, i) => (
                    <Reveal key={s.slug} delay={i * 80} className="min-w-0 h-full">
                      <ProductCard solution={s} />
                    </Reveal>
                  ))}
                </div>
              )}
            </div>
          </section>
        );
      })}

      <section className="bg-cream-100 py-20">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionHeading
              title="A Reminder About Wellness"
              tone="dark"
            />
            <p className="mt-5 text-lg leading-relaxed text-navy-600">
              These solutions are presented as options to explore, not as guarantees. Nothing here
              is intended to diagnose, treat, cure, or prevent any disease. If you have a medical
              condition or take medication, please consult an appropriate licensed healthcare
              professional before making changes to your routine.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
