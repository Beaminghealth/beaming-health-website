import { useEffect } from 'react';

interface SeoOptions {
  title: string;
  description?: string;
}

const DEFAULT_DESCRIPTION =
  'Explore functional nutrition, healthy aging, longevity strategies and innovative wellness technologies with nutrition coach Liz Palmer.';

function setMeta(selector: string, attr: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    const [key, val] = selector.replace('meta[', '').replace(']', '').split('=');
    el.setAttribute(key, val.replace(/["']/g, ''));
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

export function useSeo({ title, description = DEFAULT_DESCRIPTION }: SeoOptions) {
  useEffect(() => {
    document.title = title;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
  }, [title, description]);
}
