/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.html$/i,
      resourceQuery: /raw/,
      type: "asset/source",
    });
    return config;
  },
};

export default nextConfig;
