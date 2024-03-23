import { getPages, getPageBySlug } from "@/app/utils/contentful";
import Page from "@/app/components/Page";
import { redirect } from "next/navigation";
import { SEO_DEFAULTS } from "@/app/constants/seo";
import type { Metadata } from "next";
import { PagePropsType } from "@/app/constants/types";

export async function generateStaticParams() {
  const pages = await getPages();

  return pages
    .filter((page) => page.slug !== undefined)
    .map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: PagePropsType): Promise<Metadata> {
  const pages = await getPages();
  const page = pages.find((page) => page.slug === params.slug);

  if (!page) {
    return {
      title: SEO_DEFAULTS.TITLE,
      description: SEO_DEFAULTS.DESCRIPTION,
    };
  }

  const seoMetaTagFields = page.seoMetaTagFields;

  return {
    title: seoMetaTagFields.fields.title || SEO_DEFAULTS.TITLE,
    description:
      seoMetaTagFields.fields.description || SEO_DEFAULTS.DESCRIPTION,
  };
}

export default async function AppPage({
  params,
}: {
  params: { slug: string };
}) {
  const page = await getPageBySlug(params.slug);

  if (!page) {
    redirect("/");
  }

  return <Page page={page} />;
}
