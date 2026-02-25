/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  /* ── Hide framework fingerprint ── */
  poweredByHeader: false,

  /* ── Image optimization ── */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  /* ── Security headers ── */
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          /* Prevent MIME-type sniffing */
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          /* Clickjacking protection */
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          /* XSS filter (legacy browsers) */
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          /* Referrer policy */
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          /* HSTS – force HTTPS for 2 years */
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          /* Restrict browser features */
          {
            key: 'Permissions-Policy',
            value:
              'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          /* Content-Security-Policy */
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              process.env.NODE_ENV === 'production'
                ? "script-src 'self' 'unsafe-inline'"
                : "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              "img-src 'self' data: blob:",
              process.env.NODE_ENV === 'production'
                ? "connect-src 'self'"
                : "connect-src 'self' ws: wss:",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "object-src 'none'",
              ...(process.env.NODE_ENV === 'production'
                ? ["upgrade-insecure-requests"]
                : []),
            ].join('; '),
          },
          /* DNS prefetch for performance */
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
