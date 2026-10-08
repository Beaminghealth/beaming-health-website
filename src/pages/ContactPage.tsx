import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { useSeo } from '@/hooks/useSeo';

export function ContactPage() {
  useSeo({
    title: 'Contact | Liz Palmer',
    description:
      'Get in touch with Liz Palmer about your wellness goals, from healthy aging and metabolic health to gut health and wellness technology.',
  });

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s Talk About Your Wellness Goals"
        intro="Whether you’re curious about healthy aging, exploring a new wellness technology, or just have a question, Liz would love to hear from you. Send a note and she’ll get back to you personally."
      />

      <section className="container-page py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl">A Few Ways to Reach Out</h2>
                <p className="mt-4 text-lg leading-relaxed text-navy-600">
                  This form is the best way to reach Liz directly. She reads every message
                  personally and responds as soon as she can.
                </p>
              </div>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold text-navy-900">Email</p>
                    <a
                      href="mailto:beaminghealth@proton.me"
                      className="text-navy-600 underline decoration-teal-300 underline-offset-2 transition-colors hover:text-teal-700"
                    >
                      beaminghealth@proton.me
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold text-navy-900">Phone</p>
                    <p className="text-navy-600">By appointment only</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold text-navy-900">WhatsApp</p>
                    <a
                      href="https://wa.me/9712252534"
                      className="text-navy-600 underline decoration-teal-300 underline-offset-2 transition-colors hover:text-teal-700"
                    >
                      +971 225 2534
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold text-navy-900">Location</p>
                    <p className="text-navy-600">Remote and in-person sessions available</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-teal-100 bg-teal-50/60 p-5">
                <p className="text-[15px] leading-relaxed text-navy-600">
                  <strong className="font-semibold text-navy-900">Please note:</strong> This form is
                  for general wellness inquiries only. It is not for medical emergencies. If you are
                  experiencing a health emergency, please contact your local emergency services
                  immediately.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-4xl border border-navy-100 bg-white p-8 shadow-card lg:p-10">
              <h2 className="text-2xl">Send a Message</h2>
              <p className="mt-2 text-navy-500">Fields marked with * are required.</p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
