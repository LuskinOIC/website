import TwoColumnLayout from "@/app/components/PageSection/TwoColumnLayout";
import PhysicianList from "@/app/components/PhysicianList";
import TabSection from "@/app/components/TabSection";
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
      <TwoColumnLayout section={specialty.fields.twoColumn} />
      <TabSection tabs={specialty.fields.tabs} className="mb-[-40px]" />
      {specialty.fields.physicians && (
        <PhysicianList
          specialistsTitle={specialty.fields.specialistsTitle}
          physicians={specialty.fields.physicians}
        />
      )}
    </main>
  );
}
