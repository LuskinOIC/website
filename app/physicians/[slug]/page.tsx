import React from "react";
import { getPhysicians, getPhysicianBioBySlug } from "@/app/utils/contentful";
import { Document } from "@contentful/rich-text-types";
import { BioPageSectionType, PageSectionType } from "@/app/constants/types";
// import Dropdown from "@/app/components/ui/Dropdown";
import renderRichTextToReactComponent, {
  ClassNames,
} from "@/app/utils/rich-text";
import BioPageSection from "@/app/components/BioPageSection";
import PageSection from "@/app/components/PageSection/PageSection";
import TwoColumnLayout from "@/app/components/PageSection/ColumnsLayout/TwoColumnLayout";

// We need to export this function so that Next.js knows what pages to generate
// static HTML for.
export async function generateStaticParams() {
  const physicians = await getPhysicians();
  return physicians.map((evt) => ({ slug: evt.slug }));
}

const richTextClassNames: ClassNames = {
  paragraph: "text-base md:text-lg pb-8",
};

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
      <div className="mx-auto w-10/12 md:w-4/5">
        {docBio.topSummary && <TwoColumnLayout section={docBio.topSummary} />}

        {/* TO BE CORRECTED LATER */}
        {/* <div className="mb-12 md:hidden">
          <p className="px-1 pb-4">Choose a section you would like to review</p>
          <Dropdown placeHolder="Overview" options={options} />
        </div> */}

        <div className="mb-2 mt-10 flex hidden items-center md:block">
          <hr className="flex-grow border-[#99C221]"></hr>
        </div>

        <h2 className="mb-8 text-xl text-[#0076AD]" id="#overview">
          OVERVIEW
        </h2>
        <div className="pb-6 text-lg">
          {renderRichTextToReactComponent(
            docBio.overview as unknown as Document,
            richTextClassNames,
          )}
        </div>

        <div className="flex items-center">
          <hr className="mb-2 hidden flex-grow border-[#99C221] md:block"></hr>
        </div>
        <h2
          className="mb-6 text-xl text-[#0076AD]"
          id="#education-and-certificates"
        >
          EDUCATION AND CERTIFICATES
        </h2>

        <div className="grid gap-6 pb-6 md:grid-cols-2">
          {docBio.bioPageSection &&
            docBio.bioPageSection.map(
              (section: BioPageSectionType): React.ReactNode => {
                return (
                  <BioPageSection key={section.sys.id} section={section} />
                );
              },
            )}
        </div>
        {docBio.pageSections &&
          docBio.pageSections.map((section: PageSectionType) => (
            <PageSection key={section.fields.title} section={section} />
          ))}
      </div>
    </main>
  );
}
