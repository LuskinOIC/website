import type { Metadata } from "next";
import { getSpecialties } from "@/app/utils/contentful";
import SpecialtySearchArea from "./SpecialtyComponents/SpecialtySearchArea";
import { getPageByType } from "@/app/utils/contentful";
import { SEO_DEFAULTS } from "@/app/constants/seo";
import { PAGE_TYPES } from "@/app/constants/entries";
import { PageSectionContainer } from "@/app/components/PageSection/PageSection";

export async function generateMetadata(): Promise<Metadata> {
  const specialtyPage = await getPageByType(PAGE_TYPES.SPECIALTY_LIST_PAGE, 1);
  const seoMetaTagFields = specialtyPage.seoMetaTagFields;

  return {
    title: seoMetaTagFields?.fields?.title || SEO_DEFAULTS.TITLE,
    description:
      seoMetaTagFields?.fields?.description || SEO_DEFAULTS.DESCRIPTION,
  };
}

export default async function Specialties() {
  const specialties = await getSpecialties();

  return (
    <PageSectionContainer>
      <SpecialtySearchArea specialties={specialties} />
    </PageSectionContainer>
  );
}
