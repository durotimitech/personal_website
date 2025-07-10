import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/dashboard/',
          '/private/',
          '*.json',
          '*.xml',
          '/sitemap.xml',
          '/sitemap-*.xml',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/dashboard/',
          '/private/',
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/dashboard/',
          '/private/',
        ],
      },
      {
        userAgent: 'facebookexternalhit',
        allow: '/',
      },
      {
        userAgent: 'Twitterbot',
        allow: '/',
      },
      {
        userAgent: 'LinkedInBot',
        allow: '/',
      },
      {
        userAgent: 'WhatsApp',
        allow: '/',
      },
      {
        userAgent: 'Applebot',
        allow: '/',
      },
      {
        userAgent: 'ia_archiver',
        allow: '/',
      },
      // Block known bad bots
      {
        userAgent: 'SemrushBot',
        disallow: '/',
      },
      {
        userAgent: 'AhrefsBot',
        disallow: '/',
      },
      {
        userAgent: 'MJ12bot',
        disallow: '/',
      },
      {
        userAgent: 'DotBot',
        disallow: '/',
      },
      {
        userAgent: 'BLEXBot',
        disallow: '/',
      },
    ],
    sitemap: [
      'https://mejabidurotimi.com/sitemap.xml',
      'https://mejabidurotimi.com/sitemap-0.xml',
    ],
    host: 'https://mejabidurotimi.com',
  }
} 