import React from "react";
import { getPhysicians, getPhysicianBioBySlug } from "@/app/utils/contentful";
import { PageSectionType } from "@/app/constants/types";
// import Dropdown from "@/app/components/ui/Dropdown";
import PageSection from "@/app/components/PageSection/PageSection";
import TwoColumnLayout from "@/app/components/PageSection/ColumnsLayout/TwoColumnLayout";

// We need to export this function so that Next.js knows what pages to generate
// static HTML for.
export async function generateStaticParams() {
  const physicians = await getPhysicians();
  return physicians.map((evt) => ({ slug: evt.slug }));
}

export default async function PhysicianBio({
  params,
}: {
  params: { slug: string };
}) {
  const docBio = await getPhysicianBioBySlug(params.slug);

  //TO BE ADDED LATER
  // const generateTargetID = (title: string): string => {
  //   return `#${title.toLowerCase().split(" ").join("-")}`;
  // };

  // const options = [
  //   { value: "overview", label: "Overview", targetID: "#overview" },
  //   {
  //     value: "educationAndCertifications",
  //     label: "Education And Certifications",
  //     targetID: generateTargetID("Education And Certificates"),
  //   },
  //   {
  //     value: "researchInsightsAndPublications",
  //     label: "Research Insights And Publications",
  //     targetID: generateTargetID("Research Insights And Publications"),
  //   },
  // ];
  return (
    <main className="">
      <div className="">
        {docBio.topSummary && <TwoColumnLayout section={docBio.topSummary} />}

        {/* TO BE CORRECTED LATER */}
        {/* <div className="mb-12 md:hidden">
          <p className="px-1 pb-4">Choose a section you would like to review</p>
          <Dropdown placeHolder="Overview" options={options} />
        </div> */}
        {docBio.pageSections &&
          docBio.pageSections.map((section: PageSectionType) => (
            <PageSection key={section.fields.title} section={section} />
          ))}
      </div>
    </main>
  );
}
