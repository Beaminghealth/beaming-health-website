import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import type { Article } from '@/data/articles';

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      to={`/resources/${article.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
    >
      <div className="aspect-[16/10] overflow-hidden bg-navy-50">
        <img
          src={article.image}
          alt=""
          loading="lazy"
          className={`h-full w-full transition-transform duration-500 group-hover:scale-105 ${
            article.imageFit === 'contain' ? 'object-contain p-3' : 'object-cover'
          }`}
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-teal-700">
          <span>{article.category}</span>
          <span className="flex items-center gap-1 text-navy-400">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {article.readTime}
          </span>
        </div>
        <h3 className="mt-3 font-serif text-xl leading-snug text-navy-900 transition-colors group-hover:text-teal-700">
          {article.title}
        </h3>
        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-navy-600">
          {article.excerpt}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 font-semibold text-teal-700">
          Read Article
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
