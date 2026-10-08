import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const columns = [
  {
    title: 'Explore',
    links: [
      { label: 'Home', to: '/' },
      { label: 'About Liz', to: '/about' },
      { label: 'Wellness Solutions', to: '/wellness-solutions' },
      { label: 'Resources', to: '/resources' },
      { label: 'Start Here', to: '/resources/start-here' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Contact', to: '/contact' },
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Terms', to: '/terms' },
      { label: 'Affiliate Disclosure', to: '/affiliate-disclosure' },
      { label: 'Medical Disclaimer', to: '/medical-disclaimer' },
    ],
  },
];

const socials = [
  { label: 'Instagram', icon: Instagram, href: '#' },
  { label: 'Facebook', icon: Facebook, href: '#' },
  { label: 'YouTube', icon: Youtube, href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-navy-900 text-navy-100">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:pr-6">
            <Link to="/" className="inline-flex overflow-hidden rounded-2xl bg-white" aria-label="Liz Palmer, home">
              <img
                src="/Screenshot_2026-08-25_at_11.47.54_am.png"
                alt="Liz Palmer NTP, Nutrition and Longevity"
                className="h-auto w-[240px]"
              />
            </Link>
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-navy-200">
              Functional nutrition, healthy aging, and thoughtfully curated wellness innovation
              for living well at every age.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-navy-100 transition-colors hover:border-teal-400 hover:text-teal-300"
                >
                  <s.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-teal-300">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-[15px] text-navy-200 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-teal-300">
              A note on wellness
            </h3>
            <p className="mt-5 text-[15px] leading-relaxed text-navy-200">
              Information here is educational and is not intended to diagnose, treat, cure, or
              prevent any disease, and does not replace individualized medical advice.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-navy-300 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Liz Palmer. All rights reserved.</p>
          <p>Functional Nutrition + Longevity</p>
        </div>
      </div>
    </footer>
  );
}
