/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,

  // SEO Optimization
  compress: true, // Enable gzip compression

  // Image Optimization for SEO
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Headers for SEO and Security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      },
      // Cache static assets aggressively
      {
        source: '/icon:size*.png',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },

  // Redirects for SEO (if needed)
  async redirects() {
    return [
      // Add any necessary redirects here
      // Example: redirect www to non-www
      // {
      //   source: '/:path*',
      //   has: [{ type: 'host', value: 'www.aditraveltours.ro' }],
      //   destination: 'https://aditraveltours.ro/:path*',
      //   permanent: true,
      // },
    ]
  },

  // Performance optimizations
  swcMinify: true,
  poweredByHeader: false, // Remove X-Powered-By header for security
  reactStrictMode: true,

  // Internationalization for SEO
  i18n: {
    locales: ['ro'],
    defaultLocale: 'ro',
  },
}

module.exports = nextConfig