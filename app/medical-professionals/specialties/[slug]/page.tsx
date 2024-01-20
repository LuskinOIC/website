import { getSpecialties, getSpecialtyBySlug } from "@/app/utils/contentful";

export async function generateStaticParams() {
  const specialties = await getSpecialties();
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
  return (
    <main>
      <h1>{specialty.fields.name}</h1>
    </main>
  );
}
