import { FormEvent, useState } from 'react';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import { supabase } from '@/lib/supabase';

type Status = 'idle' | 'loading' | 'success' | 'error';

const interests = [
  'Healthy Aging & Longevity',
  'Metabolic Health',
  'Gut Health',
  'Wellness Technology',
  'General Nutrition & Wellness',
  'Not Sure Yet',
];

const fieldBase =
  'w-full rounded-2xl border border-navy-200 bg-white px-5 py-3.5 text-base text-navy-900 placeholder:text-navy-400 outline-none transition-colors focus:border-teal-500 focus:ring-2 focus:ring-teal-400';
const labelBase = 'mb-2 block text-sm font-semibold text-navy-900';

export function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    interest: interests[0],
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === 'loading') return;
    setStatus('loading');

    const { error } = await supabase.from('contact_submissions').insert({
      name: form.name.trim(),
      email: form.email.trim().toLowerCase(),
      phone: form.phone.trim(),
      interest: form.interest,
      message: form.message.trim(),
    });

    if (!error) {
      try {
        const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`;
        await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({
            name: form.name.trim(),
            email: form.email.trim().toLowerCase(),
            phone: form.phone.trim(),
            interest: form.interest,
            message: form.message.trim(),
          }),
        });
      } catch {
        // Email notification is best-effort; the submission was already saved
      };
    }

    setStatus(error ? 'error' : 'success');
  }

  if (status === 'success') {
    return (
      <div
        className="flex flex-col items-center gap-4 rounded-3xl border border-teal-200 bg-teal-50 px-8 py-14 text-center"
        role="status"
      >
        <CheckCircle2 className="h-14 w-14 text-teal-600" aria-hidden="true" />
        <h3 className="font-serif text-2xl text-navy-900">Thank you for reaching out</h3>
        <p className="max-w-md text-navy-600">
          Your message is on its way to Liz. She reads every note personally and will get back to
          you as soon as she can.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelBase} htmlFor="cf-name">
            Name
          </label>
          <input
            id="cf-name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            className={fieldBase}
          />
        </div>
        <div>
          <label className={labelBase} htmlFor="cf-email">
            Email
          </label>
          <input
            id="cf-email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            className={fieldBase}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelBase} htmlFor="cf-phone">
            Phone <span className="font-normal text-navy-400">(optional)</span>
          </label>
          <input
            id="cf-phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            className={fieldBase}
          />
        </div>
        <div>
          <label className={labelBase} htmlFor="cf-interest">
            What are you most interested in?
          </label>
          <select
            id="cf-interest"
            value={form.interest}
            onChange={(e) => update('interest', e.target.value)}
            className={`${fieldBase} appearance-none bg-[length:1.25rem] bg-[right_1rem_center] bg-no-repeat`}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23436979' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E\")",
            }}
          >
            {interests.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelBase} htmlFor="cf-message">
          Message
        </label>
        <textarea
          id="cf-message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          className={`${fieldBase} resize-y`}
        />
      </div>

      {status === 'error' && (
        <p className="text-sm font-medium text-coral-600" role="alert">
          Something went wrong sending your message. Please try again in a moment.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal-600 px-8 py-4 text-lg font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-teal-700 disabled:opacity-70 sm:w-auto"
      >
        {status === 'loading' ? (
          <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
        ) : (
          <Send className="h-5 w-5" aria-hidden="true" />
        )}
        Send Message
      </button>
    </form>
  );
}
