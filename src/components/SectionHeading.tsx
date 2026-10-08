interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: 'left' | 'center';
  tone?: 'dark' | 'light';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'center',
  tone = 'dark',
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center';
  const isLight = tone === 'light';
  return (
    <div
      className={`${isCenter ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl text-left'} ${className}`}
    >
      {eyebrow && (
        <span
          className={`text-sm font-semibold uppercase tracking-[0.18em] ${
            isLight ? 'text-teal-300' : 'text-teal-700'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-3 text-3xl sm:text-4xl lg:text-[2.75rem] ${
          isLight ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            isLight ? 'text-navy-100' : 'text-navy-600'
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
