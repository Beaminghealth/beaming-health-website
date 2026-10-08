export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface WellnessSolution {
  slug: string;
  name: string;
  categorySlug: string;
  categoryLabel: string;
  tagline: string;
  shortDescription: string;
  whyLizRecommends: string;
  image: string;
  imageFit?: 'cover' | 'contain';
  affiliateUrl: string;
  intro: string;
  whatItIs: string;
  whyInteresting: string;
  whoMayWant: string;
  keyFeatures: string[];
  considerations: string[];
  faqs: ProductFAQ[];
}

export const solutions: WellnessSolution[] = [
  {
    slug: 'metaphor',
    name: 'Metaphor',
    categorySlug: 'cellular-health-longevity',
    categoryLabel: 'Cellular Health / Longevity',
    tagline: 'A cellular-health-focused approach to healthy aging',
    shortDescription:
      'A longevity-oriented solution focused on supporting cellular function as part of a healthy-aging routine.',
    whyLizRecommends:
      'Liz is drawn to approaches that work at the cellular level because so much of how we feel as we age traces back to how well our cells function. She appreciates that Metaphor emphasizes foundations rather than quick fixes.',
    image:
      '/human-cell-or-embryonic-stem-cell-microscope-background-medical-science-background-photo.jpg',
    affiliateUrl: 'https://metaphor.life/m4-912548',
    intro:
      'Metaphor sits within the broader conversation about cellular health and longevity, an area that has attracted growing interest from researchers and health-conscious people alike.',
    whatItIs:
      'Metaphor is a cellular-health-focused product positioned around supporting the everyday processes that keep cells functioning well over time. The manufacturer describes it as part of a proactive healthy-aging routine.',
    whyInteresting:
      'Liz finds Metaphor interesting because it reflects a shift in how people think about aging: rather than reacting to problems after they appear, more people want to support the underlying systems that influence how they feel year to year. She views it as a tool that may complement, not replace, the fundamentals of good nutrition and lifestyle.',
    whoMayWant:
      'People age 50 and over who are curious about the science of healthy aging and want to learn more about cellular-health approaches may find Metaphor worth exploring alongside their existing habits.',
    keyFeatures: [
      'Positioned specifically around cellular health and healthy aging',
      'Designed to fit into an everyday wellness routine',
      'Reflects a proactive, foundations-first philosophy',
    ],
    considerations: [
      'It is intended to complement, not replace, good nutrition, sleep, and movement.',
      'Individual experiences vary, and no specific outcomes are promised.',
      'Speak with an appropriate licensed healthcare professional before making changes if you have a medical condition or take medication.',
    ],
    faqs: [
      {
        question: 'Is Metaphor a medication?',
        answer:
          'No. It is a wellness product, not a medication, and it is not intended to diagnose, treat, cure, or prevent any disease.',
      },
      {
        question: 'Will it replace my current routine?',
        answer:
          'Liz views products like Metaphor as complements to the fundamentals of nutrition, movement, and sleep rather than replacements for them.',
      },
      {
        question: 'How do I know if it is right for me?',
        answer:
          'Everyone is different. Consider your own goals and, where relevant, discuss new additions to your routine with an appropriate licensed healthcare professional.',
      },
    ],
  },
  {
    slug: 'orygn',
    name: 'Orygn',
    categorySlug: 'metabolic-health',
    categoryLabel: 'Metabolic Support',
    tagline: 'Metabolic support for steady energy',
    shortDescription:
      'A metabolic-support solution designed to fit into a routine focused on energy and healthy body composition.',
    whyLizRecommends:
      'Metabolic health underpins so much of how energetic and resilient we feel day to day. Liz appreciates that Orygn focuses on supporting metabolism as part of a balanced lifestyle rather than promising dramatic transformations.',
    image:
      'https://images.pexels.com/photos/1660027/pexels-photo-1660027.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    affiliateUrl: 'https://beaminghealth.orygn.co/',
    intro:
      'Orygn is positioned within the growing field of metabolic wellness, an area many people focus on as they look to maintain energy and healthy body composition over time.',
    whatItIs:
      'Orygn is a metabolic-support product the manufacturer describes as designed to complement a routine centered on balanced nutrition, movement, and steady energy.',
    whyInteresting:
      'Liz finds Orygn interesting because metabolic health is so closely tied to how vital people feel as they age. She sees it as one possible tool within a broader approach that starts with everyday nutrition and activity.',
    whoMayWant:
      'People interested in supporting their metabolism, energy, and healthy body composition as part of a proactive lifestyle may want to learn more.',
    keyFeatures: [
      'Focused on supporting metabolism and energy',
      'Designed to complement balanced nutrition and movement',
      'Fits into an everyday, foundations-first routine',
    ],
    considerations: [
      'It is not a weight-loss product and no specific results are guaranteed.',
      'Best considered as part of a broader lifestyle, not a standalone solution.',
      'Consult an appropriate licensed healthcare professional if you have a medical condition or take medication.',
    ],
    faqs: [
      {
        question: 'Is Orygn a weight-loss product?',
        answer:
          'No. It is positioned around metabolic support and should not be understood as a guaranteed weight-loss solution.',
      },
      {
        question: 'Does it replace a healthy diet?',
        answer:
          'No. Liz emphasizes that products like this are meant to complement balanced nutrition and regular movement, not replace them.',
      },
      {
        question: 'Who might be interested?',
        answer:
          'People focused on steady energy and healthy body composition who want to explore metabolic-support options may find it worth a closer look.',
      },
    ],
  },
  {
    slug: 'maxilin',
    name: 'Maxilin',
    categorySlug: 'gut-microbiome-health',
    categoryLabel: 'Gut & Microbiome Health',
    tagline: 'A soil-based organism probiotic solution',
    shortDescription:
      'A soil-based organism (SBO) probiotic solution intended to support digestive wellness and a healthy microbiome.',
    whyLizRecommends:
      'Liz has followed the growing understanding of the gut microbiome with great interest. She appreciates that Maxilin takes a soil-based organism approach, a category she finds worth understanding as part of a thoughtful gut-health conversation.',
    image:
      'https://images.pexels.com/photos/15971806/pexels-photo-15971806.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    affiliateUrl: 'https://maxilinreview.com/',
    intro:
      'Maxilin is a probiotic solution in the soil-based organism category, part of the broader and fast-evolving conversation about gut and microbiome health.',
    whatItIs:
      'Maxilin is described by the manufacturer as a soil-based organism (SBO) probiotic. Probiotics are living microorganisms that some people include in their routine to support digestive wellness and a healthy microbiome.',
    whyInteresting:
      'Liz finds Maxilin interesting because the microbiome has become one of the most active areas of wellness research, and soil-based organisms represent a distinct approach worth understanding. She presents it as an option to learn about rather than a promise of specific results.',
    whoMayWant:
      'People interested in digestive wellness and the microbiome who want to understand the different probiotic approaches available may find Maxilin worth exploring.',
    keyFeatures: [
      'Soil-based organism (SBO) probiotic approach',
      'Positioned around digestive wellness and microbiome support',
      'Part of a considered, foundations-first gut-health routine',
    ],
    considerations: [
      'Probiotic experiences vary widely from person to person.',
      'It is not intended to diagnose, treat, cure, or prevent any digestive condition.',
      'If you have a medical condition or a compromised immune system, consult an appropriate licensed healthcare professional first.',
    ],
    faqs: [
      {
        question: 'What is a soil-based organism probiotic?',
        answer:
          'Soil-based organisms are a category of probiotic microorganisms. Maxilin is described as an SBO probiotic; Liz suggests learning about the category to understand how it differs from other probiotics.',
      },
      {
        question: 'Will it fix digestive problems?',
        answer:
          'No product should be understood as a fix for a medical condition. Maxilin is a wellness product and is not intended to diagnose, treat, cure, or prevent disease.',
      },
      {
        question: 'Should I check with anyone before trying it?',
        answer:
          'If you have a medical condition, take medication, or have a compromised immune system, it is wise to consult an appropriate licensed healthcare professional.',
      },
    ],
  },
  {
    slug: 'olylife',
    name: 'OlyLife',
    categorySlug: 'wellness-technology',
    categoryLabel: 'Wellness Technology',
    tagline: 'Devices incorporating PEMF and terahertz technology',
    shortDescription:
      'Wellness devices that incorporate technologies such as PEMF and terahertz, designed to complement a proactive wellness lifestyle.',
    whyLizRecommends:
      'Liz is fascinated by how at-home wellness technology has advanced. She highlights OlyLife because it represents the kind of emerging, non-invasive device category she believes is worth understanding, while encouraging a measured, informed perspective.',
    image: '/Screenshot_2026-08-25_at_11.56.33_am.png',
    imageFit: 'contain',
    affiliateUrl: 'https://beaming-health.com/',
    intro:
      'OlyLife sits within the wellness-technology category and incorporates approaches such as PEMF (pulsed electromagnetic field) and terahertz technology.',
    whatItIs:
      'OlyLife refers to wellness devices that the manufacturer describes as incorporating technologies including PEMF and terahertz. These are non-invasive technologies some people include as part of a proactive wellness lifestyle.',
    whyInteresting:
      'Liz finds OlyLife interesting because at-home wellness technology has become far more accessible, and PEMF and terahertz are approaches people increasingly ask her about. She presents them as an area to understand and evaluate thoughtfully rather than as a promised outcome.',
    whoMayWant:
      'People curious about emerging, non-invasive wellness technologies who want a knowledgeable perspective on what these devices are may find OlyLife worth learning more about.',
    keyFeatures: [
      'Incorporates PEMF (pulsed electromagnetic field) technology',
      'Incorporates terahertz technology',
      'Non-invasive, designed for use within a wellness lifestyle',
    ],
    considerations: [
      'Wellness technology is an emerging area; approach claims with healthy curiosity and discernment.',
      'These devices are not medical devices and are not intended to diagnose, treat, cure, or prevent disease.',
      'If you have a medical condition, an implanted device such as a pacemaker, or are pregnant, consult an appropriate licensed healthcare professional before use.',
    ],
    faqs: [
      {
        question: 'What are PEMF and terahertz technology?',
        answer:
          'PEMF stands for pulsed electromagnetic field, and terahertz refers to a specific band of the electromagnetic spectrum. Both are approaches used in some wellness devices; Liz encourages learning about them from balanced sources.',
      },
      {
        question: 'Is OlyLife a medical device?',
        answer:
          'No. These are wellness devices, not medical devices, and they are not intended to diagnose, treat, cure, or prevent any condition.',
      },
      {
        question: 'Is there anyone who should be cautious?',
        answer:
          'Yes. If you have an implanted electronic device such as a pacemaker, are pregnant, or have a medical condition, consult an appropriate licensed healthcare professional before using this kind of technology.',
      },
    ],
  },
  {
    slug: 'dxn',
    name: 'DXN',
    categorySlug: 'mushroom-wellness',
    categoryLabel: 'Mushroom Wellness',
    tagline: 'Health through mushrooms',
    shortDescription:
      'A mushroom-based wellness range built around functional mushrooms such as Lingzhi (Reishi), long valued in traditional wellness traditions.',
    whyLizRecommends:
      'Liz is drawn to the long history of mushrooms in wellness traditions and to the growing modern interest in functional mushrooms. She appreciates that DXN focuses on mushrooms as a foundation, offering a straightforward way to explore this category.',
    image:
      'https://images.pexels.com/photos/36849395/pexels-photo-36849395.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    affiliateUrl: 'https://www.dxnaus.com.au/pws/105200766',
    intro:
      'DXN is a wellness company built around functional mushrooms, most notably Lingzhi (Reishi), a mushroom with a long history in traditional wellness practices.',
    whatItIs:
      'DXN offers a range of mushroom-based products, including dietary supplements, beverages, and personal care items. The company is best known for its focus on Lingzhi (Ganoderma lucidum), a mushroom that has been used in traditional wellness traditions for centuries.',
    whyInteresting:
      'Liz finds DXN interesting because functional mushrooms have become one of the most talked-about areas of natural wellness, yet they are grounded in centuries of traditional use. She sees DXN as a practical way for people to explore mushroom wellness without becoming overwhelmed by the many products on the market.',
    whoMayWant:
      'People curious about functional mushrooms and traditional wellness approaches who want a single, established source for mushroom-based products may find DXN worth exploring.',
    keyFeatures: [
      'Focused on functional mushrooms, especially Lingzhi (Reishi)',
      'Range includes supplements, beverages, and personal care',
      'Grounded in traditional wellness use of mushrooms',
    ],
    considerations: [
      'Mushroom supplements are wellness products and are not intended to diagnose, treat, cure, or prevent any disease.',
      'Individual experiences vary and no specific outcomes are promised.',
      'If you have a medical condition, take medication, or have mushroom allergies, consult an appropriate licensed healthcare professional before use.',
    ],
    faqs: [
      {
        question: 'What is Lingzhi (Reishi)?',
        answer:
          'Lingzhi, also known as Reishi or Ganoderma lucidum, is a mushroom with a long history in traditional wellness practices. DXN products are built around this mushroom.',
      },
      {
        question: 'Are DXN products medications?',
        answer:
          'No. DXN products are wellness products and are not intended to diagnose, treat, cure, or prevent any disease.',
      },
      {
        question: 'Who might be interested?',
        answer:
          'People curious about functional mushrooms and traditional wellness approaches who want to explore a mushroom-based routine may find DXN worth a closer look.',
      },
    ],
  },
  {
    slug: 'natural-skin-care',
    name: 'Natural Skin Care',
    categorySlug: 'natural-skin-care-beauty',
    categoryLabel: 'Natural Skin Care & Beauty',
    tagline: 'The newest science. No more needles.',
    shortDescription:
      'Natural skin care and beauty products backed by emerging science, designed to support visible results without invasive treatments.',
    whyLizRecommends:
      'Liz is drawn to skin care that combines natural ingredients with the newest science, offering visible results without needles or invasive procedures. She appreciates an approach that lets people care for their skin on their own terms.',
    image:
      '/Screenshot_2026-09-02_at_10.01.47_am copy.png',
    affiliateUrl: 'https://lizhappy.neora.com',
    intro:
      'Natural skin care and beauty is an area where science has moved quickly, creating new options for people who want visible results without invasive treatments.',
    whatItIs:
      'This is a range of natural skin care and beauty products formulated with emerging science in mind. The products are designed to support healthy, youthful-looking skin through topical use rather than injections or procedures.',
    whyInteresting:
      'Liz finds this category interesting because many people want effective skin care without needles, downtime, or invasive treatments. She sees science-backed natural products as a way to support skin health as part of a proactive wellness routine.',
    whoMayWant:
      'People looking for natural, science-backed skin care and beauty products that offer visible results without invasive treatments may find this worth exploring.',
    keyFeatures: [
      'Formulated with the newest skin care science',
      'Natural ingredients, no needles required',
      'Designed for visible results through a daily routine',
    ],
    considerations: [
      'Skin care products are wellness products and are not intended to diagnose, treat, cure, or prevent any skin condition or disease.',
      'Individual results vary and no specific outcomes are promised.',
      'If you have sensitive skin, allergies, or a skin condition, consult an appropriate licensed healthcare professional before use.',
    ],
    faqs: [
      {
        question: 'Do these products replace professional treatments?',
        answer:
          'No. They are designed to support healthy skin through a daily routine and are not a replacement for professional medical treatments or procedures.',
      },
      {
        question: 'Are these products medications?',
        answer:
          'No. They are skin care and beauty products, not medications, and are not intended to diagnose, treat, cure, or prevent any disease.',
      },
      {
        question: 'Who might be interested?',
        answer:
          'People who want natural, science-backed skin care and beauty products that offer visible results without needles or invasive treatments may find this worth a closer look.',
      },
    ],
  },
];

export function getSolution(slug: string): WellnessSolution | undefined {
  return solutions.find((s) => s.slug === slug);
}

export function solutionsByCategory(categorySlug: string): WellnessSolution[] {
  return solutions.filter((s) => s.categorySlug === categorySlug);
}
