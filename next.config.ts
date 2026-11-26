import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export, required for GitHub Pages.
  output: "export",
  images: {
    // next/image cannot optimise at runtime on a static host.
    unoptimized: true,
  },
};

export default nextConfig;
