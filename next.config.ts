import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      { source: '/home', destination: '/#home', permanent: false },
      { source: '/about-us', destination: '/#about-us', permanent: false },
      { source: '/service', destination: '/#service', permanent: false },
      { source: '/contact-us', destination: '/#contact-us', permanent: false },
    ]
  },
};

export default nextConfig;
