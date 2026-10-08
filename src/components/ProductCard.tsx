import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import type { WellnessSolution } from '@/data/solutions';

interface ProductCardProps {
  solution: WellnessSolution;
}

export function ProductCard({ solution }: ProductCardProps) {
  const detailPath = `/wellness-solutions/${solution.slug}`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
      <Link to={detailPath} className="block overflow-hidden" aria-hidden="true" tabIndex={-1}>
        <div className={`overflow-hidden ${solution.imageFit === 'contain' ? 'bg-cream-50' : 'aspect-[2/1]'}`}>
          <img
            src={solution.image}
            alt=""
            loading="lazy"
            className={`w-full transition-transform duration-500 group-hover:scale-105 ${
              solution.imageFit === 'contain'
                ? 'h-auto object-contain'
                : 'h-full object-cover'
            }`}
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-teal-700">
          {solution.categoryLabel}
        </span>
        <h3 className="mt-2 font-serif text-2xl text-navy-900">
          <Link to={detailPath} className="transition-colors hover:text-teal-700">
            {solution.name}
          </Link>
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-navy-600">
          {solution.shortDescription}
        </p>

        <div className="mt-5 rounded-2xl bg-cream-100 p-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-navy-900">
            <Sparkles className="h-4 w-4 text-coral-500" aria-hidden="true" />
            Why Liz Recommends It
          </div>
          <p className="mt-2 text-sm leading-relaxed text-navy-600">
            {solution.whyLizRecommends}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 pt-1">
          <Link
            to={detailPath}
            className="inline-flex items-center gap-1.5 font-semibold text-teal-700 transition-colors hover:text-teal-800"
          >
            Learn More
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <a
            href={solution.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-500 transition-colors hover:text-navy-800"
          >
            Visit Official Website
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}
