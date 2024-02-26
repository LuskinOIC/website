import React from "react";
import { getPhysicians, getPhysicianBioBySlug } from "@/app/utils/contentful";
import { PageSectionType } from "@/app/constants/types";
import Dropdown from "@/app/components/ui/Dropdown";
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

  const options =
    docBio.pageSections &&
    docBio.pageSections
      .filter(
        (pageSection: { fields: { type: string } }) =>
          pageSection.fields.type === "Divider"
      )
      .map((pageSection: { fields: { dividerText: string } }) => {
        return {
          value: pageSection.fields.dividerText,
          targetID: `${pageSection.fields.dividerText}`,
          label: pageSection.fields.dividerText,
        };
      });

  return (
    <div>
      {docBio.topSummary && <TwoColumnLayout section={docBio.topSummary} />}

      {docBio.pageSections && (
        <div className="mb-12 md:hidden px-5">
          <p className="px-1 pb-4">Choose a section you would like to review</p>
          <Dropdown placeHolder="Overview" options={options} />
        </div>
      )}
      {docBio.pageSections &&
        docBio.pageSections.map((section: PageSectionType) => (
          <PageSection key={section.fields.title} section={section} />
        ))}
    </div>
  );
}
