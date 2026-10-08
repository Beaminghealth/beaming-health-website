import type { LucideIcon } from 'lucide-react';
import { Activity, Dna, HeartPulse, Leaf, Radio, Sparkles } from 'lucide-react';

export interface WellnessCategory {
  slug: string;
  name: string;
  shortName: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  image: string;
}

export const categories: WellnessCategory[] = [
  {
    slug: 'cellular-health-longevity',
    name: 'Cellular Health & Healthy Aging',
    shortName: 'Cellular Health & Longevity',
    icon: Dna,
    tagline: 'Support at the foundation of how you age',
    description:
      'Explore emerging approaches designed to support cellular function, recovery, and healthy aging.',
    image:
      'https://images.pexels.com/photos/8681022/pexels-photo-8681022.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'metabolic-health',
    name: 'Metabolic Health',
    shortName: 'Metabolic Health',
    icon: Activity,
    tagline: 'Steady energy and healthy body composition',
    description:
      'Nutrition and innovative products designed to support metabolism, energy, and healthy body composition.',
    image:
      'https://images.pexels.com/photos/4136306/pexels-photo-4136306.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'gut-microbiome-health',
    name: 'Gut & Microbiome Health',
    shortName: 'Gut & Microbiome Health',
    icon: HeartPulse,
    tagline: 'Care for the ecosystem that shapes your wellbeing',
    description:
      'Support digestive wellness and a healthy microbiome with carefully selected nutritional strategies and probiotics.',
    image:
      'https://images.pexels.com/photos/4006362/pexels-photo-4006362.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'wellness-technology',
    name: 'Wellness Technology',
    shortName: 'Wellness Technology',
    icon: Radio,
    tagline: 'Thoughtful devices for a proactive lifestyle',
    description:
      'Explore emerging non-invasive devices and technologies designed to complement a proactive wellness lifestyle.',
    image: '/Screenshot_2026-08-25_at_12.07.41_pm.png',
  },
  {
    slug: 'mushroom-wellness',
    name: 'Mushroom Wellness',
    shortName: 'Mushroom Wellness',
    icon: Leaf,
    tagline: 'Health through mushrooms',
    description:
      'Explore functional mushrooms and mushroom-based wellness products, a time-honored approach to everyday vitality.',
    image:
      'https://images.pexels.com/photos/36849395/pexels-photo-36849395.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'natural-skin-care-beauty',
    name: 'Natural Skin Care & Beauty',
    shortName: 'Natural Skin Care & Beauty',
    icon: Sparkles,
    tagline: 'The newest science. No more needles.',
    description:
      'Explore natural skin care and beauty products backed by emerging science, designed for visible results without invasive treatments.',
    image:
      '/Screenshot_2026-09-02_at_10.01.47_am copy.png',
  },
];

export function getCategory(slug: string): WellnessCategory | undefined {
  return categories.find((c) => c.slug === slug);
}
