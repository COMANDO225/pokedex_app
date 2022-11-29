/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['raw.githubusercontent.com'],
    minimumCacheTTL: 84600 * 90, // 90days
  },
}

module.exports = nextConfig
