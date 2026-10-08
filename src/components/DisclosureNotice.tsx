import { Info } from 'lucide-react';

interface DisclosureNoticeProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

export function DisclosureNotice({
  title = 'Affiliate Disclosure',
  children,
  className = '',
}: DisclosureNoticeProps) {
  return (
    <div
      className={`flex gap-3 rounded-2xl border border-teal-200 bg-teal-50/70 px-5 py-4 ${className}`}
    >
      <Info className="mt-0.5 h-5 w-5 shrink-0 text-teal-700" aria-hidden="true" />
      <div className="text-[15px] leading-relaxed text-navy-700">
        <span className="font-semibold text-navy-900">{title}: </span>
        {children ?? 'Some links on this website are affiliate links. Liz may receive a commission if you purchase through these links, at no additional cost to you.'}
      </div>
    </div>
  );
}
