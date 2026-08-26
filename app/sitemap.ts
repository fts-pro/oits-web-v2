import { MetadataRoute } from 'next';
import { GOVERNED_CASE_STUDIES } from '../data/governedData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://oitsdhaka.com';

  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/work',
    '/services/modernise',
    '/services/build',
    '/services/operate',
    '/how-we-work',
    '/ai',
    '/security',
    '/about',
    '/team',
    '/start',
    '/sv',
    '/privacy',
    '/cookies',
    '/terms',
    '/sub-processors',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route.startsWith('/services') || route === '/start' ? 0.9 : 0.7,
  }));

  const caseStudyRoutes: MetadataRoute.Sitemap = GOVERNED_CASE_STUDIES.map((cs) => ({
    url: `${baseUrl}/work/${cs.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...caseStudyRoutes];
}
