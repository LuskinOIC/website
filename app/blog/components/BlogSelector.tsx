"use client";

import Link from "next/link";
import Image from "next/image";
import { sendGAEvent } from "@next/third-parties/google";
import gridView from "@/public/gridView.svg";
import listView from "@/public/listView.svg";

interface BlogSelectorProps {
  blogType: string;
  toggleView?: () => void;
  isListView?: boolean;
}

const styles = {
  selectorContainer: "flex justify-between",
  selection: "flex justify-between md:justify-normal md:gap-10 lg:gap-16 py-4",
  border: "border-b border-[#BBBBBB]",
  fontStyle: "text-base md:text-lg text-[#878787] uppercase font-light",
  hover: "hover:text-[#0076AD]",
  selected: "text-[#0076AD] font-bold underline underline-offset-4",
};

const sections = ["news", "insights", "patient-stories"];

export default function BlogSelector({
  blogType = "news",
  toggleView,
  isListView,
}: BlogSelectorProps) {
  const handleClick = (text: string) => {
    sendGAEvent({
      event: "buttonClicked",
      value: text,
    });
  };

  return (
    <div
      className={`${styles.fontStyle} ${styles.border} lg:${styles.selectorContainer}`}
    >
      <div className={`${styles.selection}`}>
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
      <div className="mt-4 hidden lg:block">
        <button className="mr-4" onClick={toggleView}>
          {isListView ? (
            <Image src={gridView} alt="grid-icon" width={28} />
          ) : (
            <Image src={listView} className="pt-1" alt="grid-icon" width={28} />
          )}
        </button>
      </div>
    </div>
  );
}
