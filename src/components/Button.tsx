import { Link } from 'react-router-dom';
import type { ComponentType } from 'react';
import type { LucideProps } from 'lucide-react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'light';
type Size = 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 font-sans font-semibold rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-500 disabled:opacity-60 disabled:cursor-not-allowed';

const variants: Record<Variant, string> = {
  primary:
    'bg-teal-600 text-white hover:bg-teal-700 shadow-soft hover:-translate-y-0.5',
  secondary:
    'bg-white text-navy-900 border border-navy-200 hover:border-teal-500 hover:text-teal-700',
  ghost: 'bg-transparent text-teal-700 hover:bg-teal-50',
  light:
    'bg-white/10 text-white border border-white/40 hover:bg-white/20 backdrop-blur-sm',
};

const sizes: Record<Size, string> = {
  md: 'text-base px-6 py-3',
  lg: 'text-lg px-8 py-4',
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: ComponentType<LucideProps>;
  children: React.ReactNode;
}

interface ButtonAsLink extends CommonProps {
  to: string;
  href?: never;
  onClick?: never;
}

interface ButtonAsAnchor extends CommonProps {
  href: string;
  to?: never;
  onClick?: never;
}

interface ButtonAsButton extends CommonProps {
  onClick?: () => void;
  type?: 'button' | 'submit';
  to?: never;
  href?: never;
}

type ButtonProps = ButtonAsLink | ButtonAsAnchor | ButtonAsButton;

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className = '', icon: Icon, children } = props;
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const content = (
    <>
      {children}
      {Icon && <Icon className="h-5 w-5" aria-hidden="true" />}
    </>
  );

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {content}
      </Link>
    );
  }

  if ('href' in props && props.href) {
    return (
      <a href={props.href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  const { onClick, type = 'button' } = props as ButtonAsButton;
  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
