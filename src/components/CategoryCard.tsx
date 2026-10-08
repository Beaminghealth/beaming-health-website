import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { WellnessCategory } from '@/data/categories';

interface CategoryCardProps {
  category: WellnessCategory;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const Icon = category.icon;
  return (
    <Link
      to={`/wellness-solutions#${category.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={category.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/55 via-navy-900/5 to-transparent" />
        <span className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/95 text-teal-700 shadow-soft backdrop-blur">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-2xl text-navy-900">{category.name}</h3>
        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-navy-600">
          {category.description}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 font-semibold text-teal-700">
          Explore
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
