"use client";

import { useState } from "react";

const styles = {
  selectorContainer:
    "flex justify-between md:justify-normal md:gap-10 lg:gap-16 py-4",
  border: "border-b border-[#BBBBBB]",
  fontStyle: "text-base md:text-lg text-[#878787] uppercase font-light",
  hover: "hover:text-[#0076AD]",
  selected: "text-[#0076AD] font-bold underline underline-offset-4",
};

const sections = ["news", "insights", "events", "patient stories"];

export default function BlogSelector() {
  const [selectedSection, setSelectedSection] = useState("news");

  const handleSectionSelect = (section: string) => {
    setSelectedSection(section);
  };

  return (
    <div
      className={`${styles.selectorContainer} ${styles.fontStyle} ${styles.border}`}
    >
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => handleSectionSelect(section)}
          className={`${styles.hover} ${
            selectedSection === section ? styles.selected : ""
          }`}
        >
          {section.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
