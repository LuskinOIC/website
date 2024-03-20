import Page from "@/app/components/Page";
import { getSpecialties, getSpecialtyBySlug } from "@/app/utils/contentful";

export async function generateStaticParams() {
  let specialties = await getSpecialties();
  specialties = specialties.filter(
    (specialty) => specialty.fields.medicalProfessionalPage,
  );

  return specialties.map((specialty) => ({
    slug: specialty.fields.slug,
  }));
}

export default async function Specialty({
  params,
}: {
  params: { slug: string };
}) {
  const specialty = await getSpecialtyBySlug(params.slug);

  return <Page page={specialty.fields.medicalProfessionalPage.fields} />;
}
