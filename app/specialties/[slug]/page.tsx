import TabSection from "@/app/components/TabSection";
import { Title1 } from "@/app/components/ui/Typography/Title";
import { getSpecialties, getSpecialtyBySlug } from "@/app/utils/contentful";
import renderRichTextToReactComponent from "@/app/utils/rich-text";
import Image from "next/image";

export async function generateStaticParams() {
  const specialties = await getSpecialties();
  return specialties.map((specialty) => ({
    slug: specialty.slug,
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
      <div className="flex flex-row">
        <div className="flex flex-col">
          <Title1>{specialty.name}</Title1>
          {renderRichTextToReactComponent(specialty.specialtyDescription)}
        </div>
        <Image />
      </div>
      <TabSection fields={specialty.tabSection.fields} />
    </main>
  );
}
