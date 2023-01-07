/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  images: {
    domains: ['i.discogs.com', 'st.discogs.com']
  },
  env: {
    discogs_api: 'https://api.discogs.com'
  }
}
