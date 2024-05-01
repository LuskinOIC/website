import type { Metadata } from "next";
import { getPageByType } from "@/app/utils/contentful";
import { PAGE_TYPES } from "@/app/constants/entries";
import Page from "@/app/components/Page";
import { SEO_DEFAULTS } from "@/app/constants/seo";

export async function generateMetadata(): Promise<Metadata> {
  const landingPage = await getPageByType(PAGE_TYPES.LANDING_PAGE);
  const seoMetaTagFields = landingPage.seoMetaTagFields;

  return {
    title: seoMetaTagFields?.fields?.title || SEO_DEFAULTS.TITLE,
    description:
      seoMetaTagFields?.fields?.description || SEO_DEFAULTS.DESCRIPTION,
  };
}

// This is the root page to the website.
export default async function Home() {
  const page = await getPageByType(PAGE_TYPES.LANDING_PAGE);

  return <Page page={page} />;
}
