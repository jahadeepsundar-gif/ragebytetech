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
  webpack: (config, { dev }) => {
    config.module.rules.push({
      test: /\.html$/i,
      resourceQuery: /raw/,
      type: "asset/source",
    });

    if (dev) {
      // Disable persistent disk caching in dev on Windows to prevent
      // ENOENT errors inside .next/cache/webpack and MODULE_NOT_FOUND chunk mismatches
      config.cache = false;

      // Exclude heavy non-application directories from file watcher to prevent IDE hangs
      config.watchOptions = {
        ...config.watchOptions,
        ignored: [
          "**/node_modules/**",
          "**/.git/**",
          "**/tools/**",
          "**/scratch/**",
          "**/.agents/**",
        ],
      };
    }

    return config;
  },
};

export default nextConfig;
