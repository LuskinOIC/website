import type { Metadata } from "next";
import { PAGE_TYPES } from "@/app/constants/entries";
import { SEO_DEFAULTS } from "@/app/constants/seo";
import { getPageByType } from "@/app/utils/contentful";

// LOCAL COMPONENTS
import { getPhysicians } from "@/app/utils/contentful";
import PageSection, {
  PageSectionContainer,
} from "@/app/components/PageSection/PageSection";
// TYPES
import {
  PageSectionType,
  PageType,
  PhysicianBioType,
  PhysicianPageSectionType,
} from "@/app/constants/types";
import PhysicianSearchArea from "@/app/providers/PhysicianComponents/PhysicianSearchArea";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageByType(PAGE_TYPES.PHYSICIAN_LIST_PAGE, 1);
  return {
    title: page.seoMetaTagFields?.fields?.title || SEO_DEFAULTS.TITLE,
    description:
      page.seoMetaTagFields?.fields?.description || SEO_DEFAULTS.DESCRIPTION,
  };
}

export default async function Physicians() {
  const physicians = (await getPhysicians()) as unknown as PhysicianBioType[];
  const page = (await getPageByType(
    PAGE_TYPES.PHYSICIAN_LIST_PAGE,
    4,
  )) as unknown as PageType;
  const sortedPhysicians: PhysicianPageSectionType[] = (
    page.pageSections as unknown as PhysicianPageSectionType[]
  ).slice(0, 3);

  const contentPageSections = (
    page.pageSections as unknown as PhysicianPageSectionType[]
  ).slice(3);

  return (
    <PageSectionContainer>
      <PhysicianSearchArea
        physicians={physicians}
        sortedPhysicians={sortedPhysicians}
      />
      {contentPageSections.map((pageSection: PageSectionType) => (
        <PageSection key={pageSection.fields.title} section={pageSection} />
      ))}
    </PageSectionContainer>
  );
}
