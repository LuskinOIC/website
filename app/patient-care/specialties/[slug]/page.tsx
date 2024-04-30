import Page from "@/app/components/Page";
import { SEO_DEFAULTS } from "@/app/constants/seo";
import { getSpecialties, getSpecialtyBySlug } from "@/app/utils/contentful";
import type { Metadata } from "next";
import { PagePropsType } from "@/app/constants/types";
import { redirect } from "next/navigation";

export const dynamicParams = false;

export async function generateStaticParams() {
  let specialties = await getSpecialties();
  specialties = specialties.filter((specialty) => specialty.fields.patientPage);
  return specialties.map((specialty) => ({
    slug: specialty.fields.slug,
  }));
}

export async function generateMetadata({
  params,
}: PagePropsType): Promise<Metadata> {
  const specialty = await getSpecialtyBySlug(params.slug);
  const page = specialty?.fields?.patientPage;
  const seoMetaTagFields = page?.fields.seoMetaTagFields;

  return {
    title:
      seoMetaTagFields?.fields.title ||
      page?.fields?.seoTitle ||
      SEO_DEFAULTS.TITLE,
    description:
      seoMetaTagFields?.fields?.description ||
      page?.fields?.seoDescription ||
      SEO_DEFAULTS.DESCRIPTION,
  };
}

export default async function Specialty({
  params,
}: {
  params: { slug: string };
}) {
  const specialty = await getSpecialtyBySlug(params.slug);

  // TODO: Invalid pages shouldn't cause build failures.
  if (!specialty?.fields?.patientPage) {
    return redirect("/specialties");
  }

  return <Page page={specialty.fields.patientPage.fields} />;
}
