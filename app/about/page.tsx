import React from "react";
import SocialMediaBanner from "@/app/components/SocialMediaBanner";
import QuadCard from "../components/QuadComponent";
import LegacyCard from "../components/LegacyCard";

// TODO: Move grid components to their final homes.
export default function About() {
  return (
    <main>
      <h1>TOGETHER, we are LuskinOIC.</h1>
      <SocialMediaBanner />
      <QuadCard />
      <LegacyCard />
    </main>
  );
}
