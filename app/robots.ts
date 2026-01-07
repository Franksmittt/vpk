import { MetadataRoute } from 'next';
import { getBaseUrl } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getBaseUrl();
  
  // Determine environment - block non-production
  const isProduction = process.env.NODE_ENV === 'production' && 
                       process.env.VERCEL_ENV === 'production';
  
  // Defensive posture for non-production
  if (!isProduction) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/', // TOTAL BLOCK for staging/dev
      },
    };
  }
  
  // Permissive posture for production
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/admin/',
        '/_next/',
        '/private/',
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

