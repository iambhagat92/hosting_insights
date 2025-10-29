import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://hostinginsights.vercel.app';
  const now = new Date();
  const paths = [
    '/',
    '/contact',
    '/privacy-policy',
    '/terms-of-service',
    '/affiliate-disclosure',
    '/blog/hosting-comparison',
    '/blog/bluehost-review',
    '/blog/siteground-review',
    '/blog/a2-hosting-review',
    '/blog/hostgator-review',
    '/blog/dreamhost-review',
    '/blog/interserver-review',
    '/blog/milesweb-review',
    '/blog/namecheap-review',
  ];
  return paths.map((p) => ({ url: `${base}${p}`, lastModified: now }));
}
