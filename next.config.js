/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  eslint: { ignoreDuringBuilds: true },
  env: {
    BACKOFFICE_URL: process.env.BACKOFFICE_URL,
    DNS: process.env.DNS,
    FACEBOOK_SHARE_LINK: process.env.FACEBOOK_SHARE_LINK,
    LINKEDIN_SHARE_LINK: process.env.LINKEDIN_SHARE_LINK,
    TWITTER_SHARE_LINK: process.env.TWITTER_SHARE_LINK,
    GOOGLE_PACES_API_KEY: process.env.GOOGLE_PACES_API_KEY,
    MAP_ZOOM: process.env.MAP_ZOOM,
    GOOGLE_PACES_CENTER_COORDINATES: process.env.GOOGLE_PACES_CENTER_COORDINATES,
  },
  async redirects() {
    return [
      
    ]
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.BACKOFFICE_URL}/api/:path*`,
      },
    ]
  },
}

module.exports = nextConfig
