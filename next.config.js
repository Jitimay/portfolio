/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com'],
    unoptimized: true
  },
  output: 'export',
  trailingSlash: true,
  distDir: 'out'
}

module.exports = nextConfig
