import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/Button';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Wellness Solutions', to: '/wellness-solutions' },
  { label: 'Resources', to: '/resources' },
  { label: 'Contact', to: '/contact' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream-50/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(15,44,51,0.08)]'
          : 'bg-cream-50/60 backdrop-blur-sm'
      }`}
    >
      <div className="container-page flex items-center justify-between py-4">
        <Link
          to="/"
          className="group flex items-center"
          aria-label="Liz Palmer, home"
        >
          <img
            src="/Screenshot_2026-08-25_at_11.47.54_am.png"
            alt="Liz Palmer NTP, Nutrition and Longevity"
            className="h-auto w-[210px] transition-transform group-hover:scale-[1.02] sm:w-[240px]"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-[15px] font-medium transition-colors ${
                  isActive
                    ? 'text-teal-700'
                    : 'text-navy-700 hover:text-teal-700'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button to="/wellness-solutions" size="md">
            Explore Wellness Solutions
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-navy-200 text-navy-900 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-navy-100 bg-cream-50 lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4" aria-label="Mobile">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-lg font-medium transition-colors ${
                    isActive
                      ? 'bg-teal-50 text-teal-700'
                      : 'text-navy-800 hover:bg-cream-100'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="px-1 pt-3">
              <Button to="/wellness-solutions" className="w-full" size="lg">
                Explore Wellness Solutions
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
