/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_CALL_URL: process.env.API_CALL_URL,
  },
};

module.exports = nextConfig;
