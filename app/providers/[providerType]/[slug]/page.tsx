import type { Metadata } from "next";
import React from "react";
import { getPhysicians, getPhysicianBioBySlug } from "@/app/utils/contentful";
import { PageSectionType } from "@/app/constants/types";
import Dropdown from "@/app/components/ui/Dropdown";
import PageSection from "@/app/components/PageSection/PageSection";
import TwoColumnLayout from "@/app/components/PageSection/ColumnsLayout/TwoColumnLayout";
import translations from "@/public/locales/en.json";
import { formatProviderType } from "@/app/providers/PhysicianComponents/formattingProviderPath";
import { PageSectionContainer } from "@/app/components/PageSection/PageSection";
// We need to export this function so that Next.js knows what pages to generate
// static HTML for.

interface PagePropsType {
  params: { slug: string };
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const providers = await getPhysicians();

  return providers.map((provider: any) => {
    return {
      providerType: formatProviderType(provider.providerType) || "physician",
      slug: provider.slug,
    };
  });
}

export async function generateMetadata({
  params,
}: PagePropsType): Promise<Metadata> {
  const docBio = await getPhysicianBioBySlug(params.slug);

  return {
    title: `LuskinOIC Physicians - ${docBio.name}`,
    description: "",
  };
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
          pageSection.fields.type === "Divider",
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
      {docBio.topSummary && (
        <PageSectionContainer showTopPadding={true} showBottomPadding={true}>
          <TwoColumnLayout
            section={docBio.topSummary}
            imageClass="max-w-[355px] m-auto"
          />
        </PageSectionContainer>
      )}

      {docBio.pageSections && (
        <div className="mb-12 md:hidden px-5">
          <p className="px-1 pb-4">
            {translations.physicians.bio.sectionReviewText}
          </p>
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
