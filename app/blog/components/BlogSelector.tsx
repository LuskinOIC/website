"use client";

import Link from "next/link";
import { sendGAEvent } from "@next/third-parties/google";

interface BlogSelectorProps {
  blogType: string;
}

const styles = {
  selectorContainer:
    "flex justify-between md:justify-normal md:gap-10 lg:gap-16 py-4",
  border: "border-b border-[#BBBBBB]",
  fontStyle: "text-base md:text-lg text-[#878787] uppercase font-light",
  hover: "hover:text-[#0076AD]",
  selected: "text-[#0076AD] font-bold underline underline-offset-4",
};

const sections = ["news", "insights", "events", "patient-stories"];

export default function BlogSelector({ blogType = "news" }: BlogSelectorProps) {
  const handleClick = (text: string) => {
    sendGAEvent({
      event: "buttonClicked",
      value: text,
    });
  };

  return (
    <div
      className={`${styles.selectorContainer} ${styles.fontStyle} ${styles.border}`}
    >
      {sections.map((section) => (
        <Link
          key={section}
          href={`/${section}`}
          onClick={() => handleClick("Blog Selection: " + section)}
          className={`${styles.hover} ${
            blogType === section ? styles.selected : ""
          }`}
        >
          {section === "patient-stories"
            ? "PATIENT STORIES"
            : section.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
