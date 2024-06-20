"use client";
// TO DELETE
import { useState } from "react";

// import BlogSelector from "@/app/blog/components/BlogSelector";
import Gallery from "@/app/blog/components/Gallery";
import BlogCardsRow from "@/app/components/BlogCardsRow";

export default function BlogIndex({ blogData }: any) {
  const [selectedSection, setSelectedSection] = useState("news");

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
      {/* <BlogSelector onSelect={setSelectedSection} /> */}
      {selectedSection === "news" || selectedSection === "insights" ? (
        <Gallery type={selectedSection} posts={data} />
      ) : (
        <div className="pt-6 lg:pt-10">
          <BlogCardsRow
            type={selectedSection}
            cards={data}
            showIndexLinks={false}
          />
        </div>
      )}
    </>
  );
}
