import { PageHero } from '@/components/PageHero';
import { useSeo } from '@/hooks/useSeo';

export function AffiliateDisclosurePage() {
  useSeo({
    title: 'Affiliate Disclosure | Liz Palmer',
    description:
      'Affiliate disclosure for Liz Palmer\u2019s website. Liz may earn commissions from qualifying purchases made through affiliate links, at no additional cost to you.',
  });

  return (
    <>
      <PageHero eyebrow="Legal" title="Affiliate Disclosure" />
      <section className="container-prose py-16 lg:py-24">
        <div className="space-y-5 text-lg leading-relaxed text-navy-700">
          <p>
            Some links on this website are affiliate links. This means that Liz Palmer may receive a
            commission if you purchase a product through one of these links, at no additional cost to
            you.
          </p>
          <p>
            Recommendations are selected based on their relevance to Liz's approach to wellness
            and her belief that they may offer meaningful value to her audience. Affiliate
            relationships do not influence which products Liz chooses to highlight, and she does not
            recommend products she does not believe in.
          </p>
          <p>
            Affiliate commissions help support the ongoing work of researching, writing, and
            maintaining this educational resource. Thank you for supporting Liz's work if you
            choose to purchase through these links.
          </p>
          <p>
            If you have any questions about this disclosure, please{' '}
            <a href="/contact" className="font-medium text-teal-700 underline underline-offset-2">
              contact Liz
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
