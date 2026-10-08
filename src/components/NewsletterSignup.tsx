import { FormEvent, useState } from 'react';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import { supabase } from '@/lib/supabase';

type Status = 'idle' | 'loading' | 'success' | 'error';

interface NewsletterSignupProps {
  variant?: 'dark' | 'light';
}

export function NewsletterSignup({ variant = 'dark' }: NewsletterSignupProps) {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  const isDark = variant === 'dark';

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === 'loading') return;
    setStatus('loading');
    setMessage('');

    const { error } = await supabase
      .from('newsletter_subscribers')
      .insert({ first_name: firstName.trim(), email: email.trim().toLowerCase() });

    if (error) {
      if (error.code === '23505') {
        setStatus('success');
        setMessage("You're already on the list, thank you!");
        return;
      }
      setStatus('error');
      setMessage('Something went wrong. Please try again in a moment.');
      return;
    }

    setStatus('success');
    setMessage("You're in! Look out for Liz's next dispatch.");
    setFirstName('');
    setEmail('');
  }

  const inputBase =
    'w-full rounded-2xl border px-5 py-3.5 text-base outline-none transition-colors focus:ring-2 focus:ring-teal-400';
  const inputStyle = isDark
    ? 'border-white/20 bg-white/10 text-white placeholder:text-navy-200 focus:border-teal-300'
    : 'border-navy-200 bg-white text-navy-900 placeholder:text-navy-400 focus:border-teal-500';

  if (status === 'success') {
    return (
      <div
        className={`flex items-center gap-3 rounded-2xl px-6 py-8 ${
          isDark ? 'bg-white/10 text-white' : 'bg-teal-50 text-navy-900'
        }`}
        role="status"
      >
        <CheckCircle2 className="h-7 w-7 shrink-0 text-teal-400" aria-hidden="true" />
        <p className="text-lg font-medium">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full" noValidate>
      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor="nl-first-name">
          First name
        </label>
        <input
          id="nl-first-name"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First name"
          autoComplete="given-name"
          required
          className={`${inputBase} ${inputStyle} sm:max-w-[11rem]`}
        />
        <label className="sr-only" htmlFor="nl-email">
          Email address
        </label>
        <input
          id="nl-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          autoComplete="email"
          required
          className={`${inputBase} ${inputStyle} flex-1`}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-teal-600 px-6 py-3.5 font-semibold text-white shadow-soft transition-all hover:bg-teal-700 disabled:opacity-70"
        >
          {status === 'loading' ? (
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
          ) : (
            <Send className="h-5 w-5" aria-hidden="true" />
          )}
          Subscribe
        </button>
      </div>
      {status === 'error' && (
        <p className="mt-3 text-sm font-medium text-coral-400" role="alert">
          {message}
        </p>
      )}
      <p className={`mt-4 text-sm ${isDark ? 'text-navy-200' : 'text-navy-500'}`}>
        By subscribing you agree to receive occasional emails from Liz Palmer. No spam, and you can
        unsubscribe at any time. See our{' '}
        <a href="/privacy" className="underline underline-offset-2 hover:text-teal-400">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}
