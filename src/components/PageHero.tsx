import { Reveal } from '@/components/Reveal';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: React.ReactNode;
}

export function PageHero({ eyebrow, title, intro, children }: PageHeroProps) {
  return (
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
            {eyebrow}
          </span>
          <h1 className="mt-4 text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-100 sm:text-xl">
              {intro}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
