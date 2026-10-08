import { PageHero } from '@/components/PageHero';
import { useSeo } from '@/hooks/useSeo';

export function TermsPage() {
  useSeo({
    title: 'Terms of Use | Liz Palmer',
    description: 'Terms of use for Liz Palmer\u2019s website.',
  });

  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Use" />
      <section className="container-prose py-16 lg:py-24">
        <div className="space-y-5 text-lg leading-relaxed text-navy-700">
          <p>
            By accessing and using this website, you agree to these terms of use. If you do not
            agree, please do not use the site.
          </p>
          <h2 className="text-xl font-semibold text-navy-900">Educational Content</h2>
          <p>
            All content on this website is provided for educational purposes only and is not
            intended as medical advice. Please review our{' '}
            <a
              href="/medical-disclaimer"
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              Medical Disclaimer
            </a>{' '}
            for full details.
          </p>
          <h2 className="text-xl font-semibold text-navy-900">Affiliate Links</h2>
          <p>
            Some links on this site are affiliate links. Please review our{' '}
            <a
              href="/affiliate-disclosure"
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              Affiliate Disclosure
            </a>{' '}
            for details.
          </p>
          <h2 className="text-xl font-semibold text-navy-900">No Warranty</h2>
          <p>
            This website and its content are provided \u201cas is\u201d without warranties of any
            kind. Liz Palmer makes no guarantees regarding the accuracy, completeness, or
            timeliness of the information presented.
          </p>
          <h2 className="text-xl font-semibold text-navy-900">Changes to These Terms</h2>
          <p>
            These terms may be updated from time to time. Continued use of the site after changes
            constitutes acceptance of the updated terms.
          </p>
        </div>
      </section>
    </>
  );
}
