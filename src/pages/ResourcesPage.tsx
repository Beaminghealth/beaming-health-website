import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { ArticleCard } from '@/components/ArticleCard';
import { Button } from '@/components/Button';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { articles, articleCategories } from '@/data/articles';
import { useSeo } from '@/hooks/useSeo';

export function ResourcesPage() {
  useSeo({
    title: 'Resources | Liz Palmer',
    description:
      'An educational content hub from Liz Palmer covering healthy aging, functional nutrition, metabolic health, gut health, longevity, wellness technology, and product guides.',
  });

  const [active, setActive] = useState<string | 'All'>('All');

  const filtered =
    active === 'All' ? articles : articles.filter((a) => a.category === active);

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Learn, Explore, Stay Curious"
        intro="An educational hub for understanding the ideas behind Liz’s approach. No sales pitch, just thoughtful guides to help you make informed wellness decisions."
      >
        <Button to="/resources/start-here" size="lg" icon={ArrowRight}>
          Start Here
        </Button>
      </PageHero>

      {/* Category filter */}
      <section className="border-b border-navy-100 bg-white">
        <div className="container-page flex flex-wrap gap-2 py-6">
          <button
            type="button"
            onClick={() => setActive('All')}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              active === 'All'
                ? 'bg-teal-600 text-white'
                : 'bg-cream-100 text-navy-700 hover:bg-teal-50'
            }`}
          >
            All Topics
          </button>
          {articleCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === cat
                  ? 'bg-teal-600 text-white'
                  : 'bg-cream-100 text-navy-700 hover:bg-teal-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Articles */}
      <section className="container-page py-16 lg:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article, i) => (
            <Reveal key={article.slug} delay={i * 70}>
              <ArticleCard article={article} />
            </Reveal>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="py-20 text-center text-lg text-navy-500">
            No articles in this category yet. Check back soon.
          </p>
        )}
      </section>
    </>
  );
}
