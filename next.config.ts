import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/webp"],
    remotePatterns: [],
  },
  // Trailing slash handling - default is false (no trailing slash)
  // Uncomment to enable trailing slashes:
  // trailingSlash: true,
};

export default nextConfig;

