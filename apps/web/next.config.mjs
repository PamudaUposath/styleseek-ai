/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  images: {
    unoptimized: true,
  },

  transpilePackages: ['@styleseek/shared'],
};

export default nextConfig;
