import { getPages, getPageBySlug } from "@/app/utils/contentful";
import Page from "@/app/components/Page";
import { draftMode } from "next/headers";
// import { redirect } from "next/navigation";
import { SEO_DEFAULTS } from "@/app/constants/seo";
import type { Metadata } from "next";
import { PagePropsType } from "@/app/constants/types";
import { PageType } from "@/app/constants/types";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: PagePropsType): Promise<Metadata> {
  const pages = await getPages();
  const page = pages.find((page) => page.slug === params.slug) as PageType;
  const seoMetaTagFields = page?.seoMetaTagFields;

  return {
    title: seoMetaTagFields?.fields?.title || SEO_DEFAULTS.TITLE,
    description:
      seoMetaTagFields?.fields?.description || SEO_DEFAULTS.DESCRIPTION,
  };
}

export async function generateStaticParams() {
  const pages = await getPages();

  return pages
    .filter((page) => page.slug !== undefined)
    .map((page) => ({ slug: page.slug }));
}

export const dynamicParams = false;

export const dynamic = "force-dynamic";

export default async function AppPage({
  params,
}: {
  params: { slug: string };
}) {
  const page = await getPageBySlug(params.slug, draftMode().isEnabled);

  if (!page) {
    notFound();
  }

  return <Page page={page} />;
}
