/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['t.scdn.co', 'i.imgur.com', 'i.scdn.co', 'mosaic.scdn.co', 'seeded-session-images.scdn.co', 'seed-mix-image.spotifycdn.com', 'thisis-images.scdn.co', 'daily-mix.scdn.co', 'newjams-images.scdn.co', 'lineup-images.scdn.co'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  }
}
