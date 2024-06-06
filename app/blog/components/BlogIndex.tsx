"use client";

import { useState } from "react";

import BlogSelector from "./BlogSelector";
import Gallery from "./Gallery";
import BlogCardsRow from "@/app/components/BlogCardsRow";

// interface OptionType {
//   label: string;
//   value: string;
//   targetID: string;
// }

export default function BlogIndex({ blogData }: any) {
  const [selectedSection, setSelectedSection] = useState("news");

  // const dropdownOptions: OptionType[] = [
  //   { label: "News", value: "news", targetID: "news" },
  //   { label: "Insights", value: "insights", targetID: "insights" },
  //   { label: "Events", value: "events", targetID: "events" },
  //   {
  //     label: "Patient Stories",
  //     value: "patient-stories",
  //     targetID: "patient-stories",
  //   },
  // ];

  // const handleSectionSelect = (section: string) => {
  //   setSelectedSection(section);
  // };

  const getSectionData = () => {
    switch (selectedSection) {
      case "news":
        return blogData.news;
      case "insights":
        return blogData.insights;
      case "events":
        return blogData.events;
      case "patient-stories":
        return blogData.patientStories;
      default:
        return [];
    }
  };

  const data = getSectionData();

  return (
    <>
      <BlogSelector onSelect={setSelectedSection} />

      {selectedSection === "news" || selectedSection === "insights" ? (
        <Gallery posts={data} />
      ) : (
        <BlogCardsRow type={selectedSection} cards={data} />
      )}
    </>
  );
}
