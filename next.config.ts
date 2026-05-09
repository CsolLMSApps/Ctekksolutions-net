import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Product pages → real product URLs (external) or platforms page
      {
        source: '/products/ai-learn-hub',
        destination: 'https://www.ailearnhub.io',
        permanent: true,
        basePath: false,
      },
      {
        source: '/products/benzaiten-lms',
        destination: 'https://benzaitenlms.com',
        permanent: true,
        basePath: false,
      },
      {
        source: '/products/dfwitjobs',
        destination: 'https://www.dfwitjobs.com',
        permanent: true,
        basePath: false,
      },
      {
        source: '/products/optplanet',
        destination: 'https://www.optplanet.net',
        permanent: true,
        basePath: false,
      },
      {
        source: '/products/optplanet-tech',
        destination: 'https://optplanet.tech',
        permanent: true,
        basePath: false,
      },
      {
        source: '/products/optplanet-online',
        destination: 'https://optplanet.online',
        permanent: true,
        basePath: false,
      },
      {
        source: '/products/:slug*',
        destination: '/platforms',
        permanent: true,
      },

      // Service sub-pages → /services
      {
        source: '/services/:slug*',
        destination: '/services',
        permanent: true,
      },

      // Common alternative URLs
      { source: '/careers', destination: '/jobs', permanent: true },
      { source: '/careers/:slug*', destination: '/jobs', permanent: true },
      { source: '/blog', destination: '/insights', permanent: true },
      { source: '/blog/:slug*', destination: '/insights', permanent: true },
      { source: '/news', destination: '/insights', permanent: true },
      { source: '/articles', destination: '/insights', permanent: true },
      { source: '/articles/:slug*', destination: '/insights', permanent: true },
      { source: '/team', destination: '/about', permanent: true },
      { source: '/leadership', destination: '/about', permanent: true },
      { source: '/company', destination: '/about', permanent: true },
      { source: '/our-story', destination: '/about', permanent: true },
      { source: '/training', destination: '/education', permanent: true },
      { source: '/courses', destination: '/education', permanent: true },
      { source: '/staffing', destination: '/services', permanent: true },
      { source: '/consulting', destination: '/services', permanent: true },
      { source: '/ai', destination: '/services', permanent: true },
      { source: '/cloud', destination: '/services', permanent: true },
      { source: '/devops', destination: '/services', permanent: true },
      { source: '/offshore', destination: '/services', permanent: true },
      { source: '/talent', destination: '/jobs', permanent: true },
      { source: '/apply-now', destination: '/apply', permanent: true },
      { source: '/job-application', destination: '/apply', permanent: true },
      { source: '/invest', destination: '/investors', permanent: true },
      { source: '/investor-relations', destination: '/investors', permanent: true },
      { source: '/partners', destination: '/contact', permanent: true },
      { source: '/partnership', destination: '/contact', permanent: true },
      { source: '/support', destination: '/contact', permanent: true },
      { source: '/help', destination: '/contact', permanent: true },
      { source: '/faq', destination: '/contact', permanent: true },
    ];
  },
};

export default nextConfig;
