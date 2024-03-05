/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/about-oic/",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/patient-care/specialties/urgent-care/",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/contact-locations/",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/about-oic/careers/",
        destination:
          "https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=1fe50326-beac-4a7c-a564-f8a14f9c5bb0&ccId=19000101_000001&type=MP&lang=en_US",
        permanent: true,
      },
      {
        source: "/ways-to-give/volunteer/",
        destination: "/volunteer",
        permanent: true,
      },
    ];
  },
};

if (process.env.EXPORT_STATIC === "true") {
  nextConfig.output = "export";
  nextConfig.distDir = "_static";
}

module.exports = nextConfig;
