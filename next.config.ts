import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/sharkunlock-website",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
