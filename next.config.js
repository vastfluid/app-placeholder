/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

if (process.env.NODE_ENV === 'development') {
  console.log('info  - MobileURL:', `http://${require('address').ip()}:3000`);
}

module.exports = nextConfig;