import Page from "@/app/components/Page";
import { SEO_DEFAULTS } from "@/app/constants/seo";
import { getSpecialties, getSpecialtyBySlug } from "@/app/utils/contentful";
import type { Metadata } from "next";
import { PagePropsType } from "@/app/constants/types";
import { redirect } from "next/navigation";

export async function generateStaticParams() {
  const specialties = await getSpecialties();
  return specialties.map((specialty) => ({
    slug: specialty.fields.slug,
  }));
}

export async function generateMetadata(
  { params }: PagePropsType,
  // parent: ResolvingMetadata,
): Promise<Metadata> {
  const specialty = await getSpecialtyBySlug(params.slug);
  const patientPage = specialty?.fields?.patientPage;

  return {
    title: patientPage?.fields?.seoTitle || SEO_DEFAULTS.TITLE,
    description:
      patientPage?.fields?.seoDescription || SEO_DEFAULTS.DESCRIPTION,
  };
}

export default async function Specialty({
  params,
}: {
  params: { slug: string };
}) {
  const specialty = await getSpecialtyBySlug(params.slug);

  if (!specialty?.fields?.patientPage) {
    return redirect("/specialties");
  }

  return <Page page={specialty.fields.patientPage.fields} />;
}
