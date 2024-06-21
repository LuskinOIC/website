"use client";

// TO BE DELTED AFTER ILIA CONFIRMATION

import { useState } from "react";
import Gallery from "@/app/blog/components/Gallery";

const styles = {
  selectorContainer:
    "flex justify-between md:justify-normal md:gap-10 lg:gap-16 py-4",
  border: "border-b border-[#BBBBBB]",
  fontStyle: "text-base md:text-lg text-[#878787] uppercase font-light",
  hover: "hover:text-[#0076AD]",
  selected: "text-[#0076AD] font-bold underline underline-offset-4",
};

const sections = ["events", "patient-stories"];

export default function BlogIndex({ blogData }: any) {
  const [selectedSection, setSelectedSection] = useState("events");

  const getSectionData = () => {
    switch (selectedSection) {
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
      <div
        className={`${styles.selectorContainer} ${styles.fontStyle} ${styles.border}`}
      >
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => setSelectedSection(section)}
            className={`${styles.hover} ${
              selectedSection === section ? styles.selected : ""
            }`}
          >
            {section === "patient-stories"
              ? "PATIENT STORIES"
              : section.toUpperCase()}
          </button>
        ))}
      </div>
      <Gallery type={selectedSection} posts={data} />
    </>
  );
}
