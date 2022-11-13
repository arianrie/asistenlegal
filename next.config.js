/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains: ['http://localhost:3000'],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
