/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // enable later
  swcMinify: true,
  images: {
    domains: ["lh3.googleusercontent.com", "vercel.com"],
  },
  darkMode: 'class',
};

module.exports = nextConfig;