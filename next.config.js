/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'user-images.githubusercontent.com',
      },
    ],
  },
}

module.exports = nextConfig
