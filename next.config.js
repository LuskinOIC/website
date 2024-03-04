/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

if (process.env.EXPORT_STATIC === "true") {
  nextConfig.output = "export";
  nextConfig.distDir = "_static";
}

module.exports = nextConfig;
