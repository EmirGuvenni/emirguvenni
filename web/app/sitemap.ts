import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://emirguvenni.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://emirguvenni.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://emirguvenni.com/projects',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];
}
