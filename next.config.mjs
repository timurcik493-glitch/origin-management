/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/origin-management', // Название будущего репозитория
  assetPrefix: '/origin-management/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;