/** @type {import('next').NextConfig} */

const basePath = '/contact';

const nextConfig = {
  basePath,
  eslint: {
    dirs: ['.']
  },
  reactStrictMode: true,
  swcMinify: true
};

module.exports = nextConfig;
