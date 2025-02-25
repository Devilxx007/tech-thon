/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'files.oaiusercontent.com',
      },
    ],
  },
};

module.exports = nextConfig;
