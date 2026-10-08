import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import { Button } from '@/components/Button';
import { DisclosureNotice } from '@/components/DisclosureNotice';
import { Reveal } from '@/components/Reveal';
import { articles, getArticle } from '@/data/articles';
import { useSeo } from '@/hooks/useSeo';

export function ArticleDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticle(slug) : undefined;

  useSeo({
    title: article
      ? `${article.title} | Liz Palmer`
      : 'Article Not Found | Liz Palmer',
    description: article
      ? article.excerpt
      : 'The article you are looking for could not be found.',
  });

  if (!article) {
    return (
      <section className="container-page py-32 text-center">
        <h1 className="text-4xl">Article not found</h1>
        <p className="mt-4 text-lg text-navy-600">
          We couldn’t find the article you were looking for.
        </p>
        <div className="mt-8">
          <Button to="/resources" icon={ArrowLeft}>
            Back to Resources
          </Button>
        </div>
      </section>
    );
  }

  const currentIndex = articles.findIndex((a) => a.slug === article.slug);
  const nextArticle = articles[(currentIndex + 1) % articles.length];

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
              to="/resources"
              className="inline-flex items-center gap-2 text-sm font-medium text-teal-300 hover:text-teal-200"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              All Resources
            </Link>
            <div className="mt-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-teal-300">
              <span>{article.category}</span>
              <span className="flex items-center gap-1 text-navy-200">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                {article.readTime}
              </span>
            </div>
            <h1 className="mt-3 text-4xl leading-tight text-white sm:text-5xl">
              {article.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy-100 sm:text-xl">
              {article.intro}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Hero image */}
      <section className="container-page py-12 lg:py-16">
        <Reveal>
          <div className="overflow-hidden rounded-4xl bg-navy-50 shadow-soft">
            <img
              src={article.image}
              alt=""
              className={`mx-auto w-full ${
                article.imageFit === 'contain'
                  ? 'h-auto max-h-[420px] object-contain p-6'
                  : 'aspect-[16/9] object-cover'
              }`}
              loading="lazy"
            />
          </div>
        </Reveal>
      </section>

      {/* Body */}
      <section className="container-prose py-8 lg:py-12">
        <div className="space-y-12">
          {article.sections.map((section, i) => (
            <Reveal key={section.heading} delay={i * 40}>
              <h2 className="text-2xl sm:text-3xl">{section.heading}</h2>
              <div className="mt-4 space-y-4">
                {section.paragraphs.map((para, j) => (
                  <p
                    key={j}
                    className="text-lg leading-relaxed text-navy-700"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Key takeaways */}
      <section className="bg-cream-100 py-16 lg:py-20">
        <div className="container-prose">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl">Key Takeaways</h2>
            <ul className="mt-6 space-y-3">
              {article.keyTakeaways.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-teal-600"
                    aria-hidden="true"
                  />
                  <span className="text-[17px] leading-relaxed text-navy-700">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Disclosure + next article */}
      <section className="container-prose py-16 lg:py-20">
        <Reveal className="mb-10">
          <DisclosureNotice title="Educational Note">
            This article is for educational purposes only and is not intended to
            diagnose, treat, cure, or prevent any disease. If you have a medical
            condition or take medication, please consult an appropriate licensed
            healthcare professional before making changes to your routine.
          </DisclosureNotice>
        </Reveal>

        <Reveal className="rounded-4xl bg-navy-900 p-10 text-center lg:p-14">
          <h2 className="text-2xl text-white sm:text-3xl">Keep Reading</h2>
          <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-navy-100">
            Up next: {nextArticle.title}
          </p>
          <div className="mt-8">
            <Button to={`/resources/${nextArticle.slug}`} size="lg" icon={ArrowRight}>
              Read Next Article
            </Button>
          </div>
          <p className="mt-6 text-sm text-navy-200">
            Or{' '}
            <Link
              to="/resources"
              className="font-medium text-teal-300 underline underline-offset-2 hover:text-teal-200"
            >
              browse all resources
            </Link>
          </p>
        </Reveal>
      </section>
    </>
  );
}
