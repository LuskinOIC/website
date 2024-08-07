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
        source: "/_error",
        destination: "/",
        permanent: true,
      },
      {
        source: "/about-oic/",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/patient-care/urgent-care/",
        destination: "/patient-care/specialties/urgent-care/",
        permanent: true,
      },
      {
        source: "/patient-care/orthopedic-specialties/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/patient-care/specialties/",
        destination: "/specialties",
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
        source: "/volunteer/",
        destination: "/ways-to-give/",
        permanent: true,
      },
      {
        source: "/plan-your-visit/",
        destination: "/patient-care/",
        permanent: true,
      },
      {
        source: "/plan-your-visit/billing-insurance/",
        destination: "/patient-care/?tab=BillingInsurance#BillingInsurance",
        permanent: true,
      },
      {
        source: "/education/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/physicians/",
        destination: "/providers",
        permanent: true,
      },
      {
        source: "/hemophilia/",
        destination: "/specialties/",
        permanent: true,
      },
      {
        source: "/index.php/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/sitemap.xml.gz",
        destination: "/sitemap.xml",
        permanent: true,
      },
      {
        source: "/.env",
        destination: "/",
        permanent: true,
      },
      {
        source: "/donate/",
        destination: "https://fundraise.givesmart.com/form/P4fGmg?vid=13nh3f",
        permanent: true,
      },
      {
        source: "/blog/",
        destination: "/news",
        permanent: true,
      },
      {
        source: "/events/",
        destination: "/news",
        permanent: true,
      },
    ];
  },
};

// if (process.env.EXPORT_STATIC === "true") {
//   nextConfig.output = "export";
//   nextConfig.distDir = "_static";
// }

module.exports = nextConfig;
