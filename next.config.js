/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "links.papareact.com",
      "aiimagegenerator120f5290.blob.core.windows.net",
    ],
  },
};

module.exports = nextConfig;
