import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: './lib/cloudinaryLoader.ts',
  },
};

export default nextConfig; 
