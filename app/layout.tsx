import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import Navbar from "@/app/components/NabarLayout/Navbar";
import Footer from "@/app/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import { getNavigationBar } from "@/app/utils/contentful";
import getBackgroundColor from "@/app/components/ui/BackgroundColor";
import packageJson from "../package.json";
import { SEO_DEFAULTS } from "@/app/constants/seo";

const AxeDevTools = React.lazy(() => import("@/app/components/AxeDevTools"));

export const metadata: Metadata = {
  title: SEO_DEFAULTS.TITLE,
  description: SEO_DEFAULTS.DESCRIPTION,
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION as string,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigationBar = await getNavigationBar();
  const bgColor = getBackgroundColor("blue");
  return (
    <html lang="en">
      <body className="font-arial block w-full bg-slate-200 overscroll-none">
        <div data-testid={packageJson.version} className="hidden"></div>
        <div className="w-full m-auto page-container bg-white">
          <Navbar navigationBar={navigationBar} />
          {/* This div provides margin for the main layout since the navbar is stick */}
          <div className={`h-[89px] md:h-[180px] md:${bgColor}`}></div>
          <main id="main">{children}</main>
          <Footer />
        </div>
      </body>
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID as string} />
      {process.env.NODE_ENV === "development" ? <AxeDevTools /> : null}
      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></Script>
    </html>
  );
}
