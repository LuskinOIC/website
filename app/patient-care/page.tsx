import type { Metadata } from "next";
import { PAGE_TYPES } from "@/app/constants/entries";
import { SEO_DEFAULTS } from "@/app/constants/seo";
import { getPageByType } from "@/app/utils/contentful";

import TabSection from "@/app/components/TabSection";
import LocationsCard from "@/app/components/LocationsCard";
import { PageSectionType } from "@/app/constants/types";

export async function generateMetadata(): Promise<Metadata> {
  const patientCarePage = await getPageByType(PAGE_TYPES.PATIENT_CARE, 10);
  const seoMetaTagFields = patientCarePage.seoMetaTagFields;

  return {
    title: seoMetaTagFields?.fields?.title || SEO_DEFAULTS.TITLE,
    description:
      seoMetaTagFields?.fields?.description || SEO_DEFAULTS.DESCRIPTION,
  };
}

export default async function PatientCare() {
  const patientCarePage = await getPageByType(PAGE_TYPES.PATIENT_CARE, 10);
  const pageSections =
    patientCarePage.pageSections as unknown as PageSectionType[];
  const locations = pageSections[0]?.fields?.locations;
  const tabs = pageSections[1]?.fields?.tabs;

  // TODO: Replace hardcoding with map and PageSection components
  return (
    <div>
      {locations && <LocationsCard locations={locations} />}
      {tabs && <TabSection tabs={tabs} />}
    </div>
  );
}
