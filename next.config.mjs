import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["react-icons"],
    turbo: {
      moduleIdStrategy: "deterministic",
      resolveExtensions: [
        ".mdx",
        ".tsx",
        ".ts",
        ".jsx",
        ".js",
        ".mjs",
        ".json",
      ],
      resolveAlias: {
        underscore: "lodash",
        mocha: { browser: "mocha/browser-entry.js" },
      },
      // rules: {
      //   "*.svg": {
      //     loaders: ["@svgr/webpack"],
      //     as: "*.js",
      //   },
      // },
    },
  },
};

export default withNextVideo(nextConfig);
