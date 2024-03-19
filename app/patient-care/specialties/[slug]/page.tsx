import Page from "@/app/components/Page";
import { getSpecialties, getSpecialtyBySlug } from "@/app/utils/contentful";

export async function generateStaticParams() {
  const specialties = await getSpecialties();
  return specialties.map((specialty) => ({
    slug: specialty.fields.slug,
  }));
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const specialties = await getSpecialties();

  return specialties.map((specialty) => {
    return {
      title:
        specialty.fields.seoTitle ||
        "Pediatric Orthopedic Doctor - Luskin Orthopaedic Institute for Children",
    };
  });
}

export default async function Specialty({
  params,
}: {
  params: { slug: string };
}) {
  const specialty = await getSpecialtyBySlug(params.slug);
  if (!specialty.fields.patientPage) {
    return <p>Add Page</p>;
  }
  return <Page page={specialty.fields.patientPage.fields} />;
}
