import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/'],
        crawlDelay: 0,
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
        disallow: [],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/_next/'],
        crawlDelay: 0,
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/404',
          '/*.json$',
        ],
        crawlDelay: 1,
      },
    ],
    sitemap: 'https://aditraveltours.ro/sitemap.xml',
    host: 'https://aditraveltours.ro',
  }
}
