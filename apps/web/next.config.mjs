/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@batuta/core', '@batuta/db'],
};

export default nextConfig;
