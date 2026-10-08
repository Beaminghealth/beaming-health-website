import { PageHero } from '@/components/PageHero';
import { useSeo } from '@/hooks/useSeo';

export function MedicalDisclaimerPage() {
  useSeo({
    title: 'Medical Disclaimer | Liz Palmer',
    description:
      'Medical disclaimer for Liz Palmer\u2019s website. All information is educational and is not intended to diagnose, treat, cure, or prevent any disease.',
  });

  return (
    <>
      <PageHero eyebrow="Legal" title="Medical Disclaimer" />
      <section className="container-prose py-16 lg:py-24">
        <div className="space-y-5 text-lg leading-relaxed text-navy-700">
          <p>
            All information on this website is provided for educational purposes only. It is not
            intended to diagnose, treat, cure, or prevent any disease or medical condition, and it
            does not constitute medical advice.
          </p>
          <p>
            The content here reflects Liz Palmer’s personal perspectives on functional
            nutrition, longevity, and wellness, informed by her professional experience. It is not a
            substitute for individualized medical advice, diagnosis, or treatment from a qualified
            licensed healthcare professional.
          </p>
          <p>
            Always consult with an appropriate licensed healthcare professional before making any
            changes to your diet, lifestyle, supplements, or wellness routine, especially if you have
            a medical condition, take prescription medication, are pregnant, or are nursing. Never
            disregard professional medical advice or delay seeking it because of something you have
            read on this website.
          </p>
          <p>
            Liz Palmer does not recommend that anyone discontinue prescription medications without
            guidance from an appropriate licensed healthcare professional.
          </p>
          <p>
            If you think you may have a medical emergency, contact your local emergency services
            immediately.
          </p>
        </div>
      </section>
    </>
  );
}
