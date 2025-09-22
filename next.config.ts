import type { NextConfig } from 'next';

const domains = process.env.NODE_ENV === 'development' ? ['localhost'] : [];

const nextConfig: NextConfig = {
  images: {
    domains,
  },
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
