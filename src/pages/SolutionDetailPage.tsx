import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink, Info, Sparkles } from 'lucide-react';
import { Button } from '@/components/Button';
import { DisclosureNotice } from '@/components/DisclosureNotice';
import { Reveal } from '@/components/Reveal';
import { getCategory } from '@/data/categories';
import { getSolution } from '@/data/solutions';
import { useSeo } from '@/hooks/useSeo';

export function SolutionDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const solution = slug ? getSolution(slug) : undefined;

  useSeo({
    title: solution
      ? `${solution.name} | Liz Palmer`
      : 'Solution Not Found | Liz Palmer',
    description: solution
      ? solution.shortDescription
      : 'The wellness solution you are looking for could not be found.',
  });

  if (!solution) {
    return (
      <section className="container-page py-32 text-center">
        <h1 className="text-4xl">Solution not found</h1>
        <p className="mt-4 text-lg text-navy-600">
          We couldn’t find the wellness solution you were looking for.
        </p>
        <div className="mt-8">
          <Button to="/wellness-solutions" icon={ArrowLeft}>
            Back to Wellness Solutions
          </Button>
        </div>
      </section>
    );
  }

  const category = getCategory(solution.categorySlug);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(60% 60% at 15% 10%, rgba(27,163,162,0.45) 0%, transparent 60%), radial-gradient(50% 50% at 90% 30%, rgba(117,216,212,0.25) 0%, transparent 55%)',
          }}
          aria-hidden="true"
        />
        <div className="container-page relative py-16 lg:py-24">
          <Reveal className="max-w-3xl">
            <Link
              to="/wellness-solutions"
              className="inline-flex items-center gap-2 text-sm font-medium text-teal-300 hover:text-teal-200"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              All Wellness Solutions
            </Link>
            <span className="mt-6 block text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">
              {solution.categoryLabel}
            </span>
            <h1 className="mt-3 text-4xl leading-tight text-white sm:text-5xl">
              {solution.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy-100 sm:text-xl">
              {solution.intro}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Image + why recommend */}
      <section className="container-page py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-4xl shadow-soft">
              <img
                src={solution.image}
                alt=""
                className={`w-full object-cover ${
                  solution.imageFit === 'contain' ? 'h-auto object-contain' : 'aspect-[4/3]'
                }`}
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={120} className="flex flex-col justify-center">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-coral-500">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Why Liz Recommends It
            </span>
            <p className="mt-4 text-lg leading-relaxed text-navy-700">
              {solution.whyLizRecommends}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={solution.affiliateUrl} size="lg" icon={ExternalLink}>
                Visit Official Website
              </Button>
              <Button to="/contact" variant="secondary" size="lg">
                Ask Liz a Question
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Detail sections */}
      <section className="bg-cream-100 py-16 lg:py-24">
        <div className="container-prose space-y-12">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl">What It Is</h2>
            <p className="mt-4 text-lg leading-relaxed text-navy-700">{solution.whatItIs}</p>
          </Reveal>
          <Reveal>
            <h2 className="text-2xl sm:text-3xl">Why Liz Finds It Interesting</h2>
            <p className="mt-4 text-lg leading-relaxed text-navy-700">{solution.whyInteresting}</p>
          </Reveal>
          <Reveal>
            <h2 className="text-2xl sm:text-3xl">Who May Want to Learn More</h2>
            <p className="mt-4 text-lg leading-relaxed text-navy-700">{solution.whoMayWant}</p>
          </Reveal>

          <div className="grid gap-8 sm:grid-cols-2">
            <Reveal>
              <h3 className="text-xl font-semibold text-navy-900">Key Features</h3>
              <ul className="mt-4 space-y-3">
                {solution.keyFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" aria-hidden="true" />
                    <span className="text-[17px] leading-relaxed text-navy-700">{f}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={100}>
              <h3 className="text-xl font-semibold text-navy-900">Important Considerations</h3>
              <ul className="mt-4 space-y-3">
                {solution.considerations.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <Info className="mt-0.5 h-5 w-5 shrink-0 text-coral-500" aria-hidden="true" />
                    <span className="text-[17px] leading-relaxed text-navy-700">{c}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-prose py-16 lg:py-24">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl">Frequently Asked Questions</h2>
        </Reveal>
        <div className="mt-8 space-y-4">
          {solution.faqs.map((faq, i) => (
            <Reveal key={faq.question} delay={i * 60}>
              <details className="group rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
                <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-navy-900 marker:content-none">
                  {faq.question}
                  <span className="ml-4 text-teal-600 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-[17px] leading-relaxed text-navy-600">{faq.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Disclosure + CTA */}
      <section className="bg-cream-100 py-16 lg:py-20">
        <div className="container-prose space-y-8">
          <DisclosureNotice />
          <div className="rounded-4xl bg-navy-900 p-10 text-center lg:p-14">
            <h2 className="text-2xl text-white sm:text-3xl">Want to Learn More?</h2>
            <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-navy-100">
              Visit the official website to read more from the manufacturer and decide if it may be
              right for your wellness journey.
            </p>
            <div className="mt-8">
              <Button href={solution.affiliateUrl} size="lg" icon={ExternalLink}>
                Visit Official Website
              </Button>
            </div>
            {category && (
              <p className="mt-6 text-sm text-navy-200">
                Or explore more in{' '}
                <Link
                  to={`/wellness-solutions#${category.slug}`}
                  className="font-medium text-teal-300 underline underline-offset-2 hover:text-teal-200"
                >
                  {category.name}
                </Link>
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
