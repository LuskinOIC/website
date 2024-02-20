import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import Navbar from "@/app/components/NabarLayout/Navbar";
import Footer from "@/app/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import { getNavigationBar } from "@/app/utils/contentful";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title:
    "Pediatric Orthopedic Specialists - Luskin Orthopaedic Institute for Children",
  description:
    "Luskin Orthopaedic Institute for Children provides the highest levels of specialized care in pediatric orthopedics. Your child will receive exceptional care & treatment for their pediatric orthopedic needs.",
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({
  children,
  pageProps,
}: {
  children: React.ReactNode;
  pageProps: { session: Session };
}) {
  const navigationBar = await getNavigationBar();
  return (
    <html lang="en">
      <body className="font-arial block w-full bg-slate-200">
        <SessionProvider session={pageProps.session}>
          <div className="w-full m-auto page-container bg-white">
            <Navbar navigationBar={navigationBar} />
            <div className="h-[95px] md:h-[166px]"></div>
            <main className="">{children}</main>
            <Footer />
          </div>
        </SessionProvider>
      </body>
      <GoogleAnalytics gaId="G-7HE98BYBD0" />
      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></Script>
    </html>
  );
}
