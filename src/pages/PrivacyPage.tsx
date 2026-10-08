import { PageHero } from '@/components/PageHero';
import { useSeo } from '@/hooks/useSeo';

export function PrivacyPage() {
  useSeo({
    title: 'Privacy Policy | Liz Palmer',
    description:
      'Privacy policy for Liz Palmer\u2019s website, describing how your information is collected, used, and protected.',
  });

  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="container-prose py-16 lg:py-24">
        <div className="space-y-5 text-lg leading-relaxed text-navy-700">
          <p>
            Your privacy matters. This policy describes how Liz Palmer collects, uses, and protects
            information you provide through this website.
          </p>
          <h2 className="text-xl font-semibold text-navy-900">Information We Collect</h2>
          <p>
            When you subscribe to the newsletter or submit the contact form, we collect the
            information you provide, such as your name, email address, phone number (if provided),
            and message. We may also collect basic analytics about how the site is used.
          </p>
          <h2 className="text-xl font-semibold text-navy-900">How We Use Your Information</h2>
          <p>
            Your information is used to respond to your inquiries, send the newsletter you signed up
            for, and improve the content and resources on this site. We do not sell or rent your
            personal information.
          </p>
          <h2 className="text-xl font-semibold text-navy-900">Email Communications</h2>
          <p>
            You can unsubscribe from the newsletter at any time using the link in any email. We will
            honor your request promptly.
          </p>
          <h2 className="text-xl font-semibold text-navy-900">Contact</h2>
          <p>
            If you have any questions about this privacy policy, please{' '}
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
