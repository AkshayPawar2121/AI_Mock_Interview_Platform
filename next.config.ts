import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint :{
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,        // Fix for "Can't resolve 'fs'"
        path: false,      // Often needed alongside fs
        os: false         // Sometimes required
      };
    }
    return config;
  }
};

export default nextConfig;
