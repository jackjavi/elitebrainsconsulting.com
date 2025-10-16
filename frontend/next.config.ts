import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        // destination: "http://localhost:8888/api/:path*",
        destination: "https://elitebrainsconsulting.com/api/:path*",
      },
      {
        source: "/auth/:path*",
        // destination: "http://localhost:8888/auth/:path*",
        destination: "https://elitebrainsconsulting.com/auth/:path*",
      },

      {
        source: "/sockets/:path*",
        // destination: "http://localhost:8888/:path*",
        destination: "https://elitebrainsconsulting.com/:path*",
      },
    ];
  },
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
  video: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
