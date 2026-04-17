import type { NextConfig } from "next";

// GitHub Pages serves the site under /<repo>/ when using project pages.
// Set NEXT_PUBLIC_BASE_PATH in CI (e.g. "/youngwoo-sohn-homepage").
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eliott331.github.io',
      },
    ],
  },
};

export default nextConfig;
