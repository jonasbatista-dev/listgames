import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: [
      '@react-icons/all-files',
      '@styled-icons/boxicons-regular',
      '@styled-icons/boxicons-solid',
      '@styled-icons/fa-brands',
      '@styled-icons/material-outlined',
      '@styled-icons/remix-fill',
    ],
  },
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
