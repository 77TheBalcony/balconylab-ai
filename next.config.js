/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['placehold.co'],
  },
  env: {
    ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY || '',
  },
}

module.exports = nextConfig
