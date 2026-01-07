/**
 * SEO Utility Functions
 * Provides helpers for generating absolute canonical URLs and other SEO operations
 */

export function getBaseUrl(): string {
  // Check for environment variable first (production)
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL;
  }
  
  // Fallback for development
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3000';
  }
  
  // Production fallback (should be overridden by env var)
  return 'https://vaalpenskraal.com';
}

export function constructCanonicalUrl(path: string = ''): string {
  const baseUrl = getBaseUrl();
  
  // Clean the input path
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Remove trailing slash from base URL if present
  const cleanBase = baseUrl.replace(/\/$/, '');
  
  if (cleanPath === '' || cleanPath === '/') {
    return `${cleanBase}/`;
  }
  
  // Ensure path starts with / and doesn't have trailing slash (unless it's root)
  const normalizedPath = `/${cleanPath.replace(/\/$/, '')}`;
  
  return `${cleanBase}${normalizedPath}`;
}

export function getAbsoluteImageUrl(imagePath: string): string {
  const baseUrl = getBaseUrl();
  const cleanBase = baseUrl.replace(/\/$/, '');
  const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  return `${cleanBase}${cleanPath}`;
}

