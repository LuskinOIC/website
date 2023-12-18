import PhysicianList from "@/app/components/PhysicianList";
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
      <div className="flex flex-col md:flex-row-reverse w-full md:pl-[13%] mt-[-7%] md:mt-[2%] md:mb-[2%] items-center justify-between">
        <Image
          src={specialty.image.fields.file.url}
          width={720}
          height={720}
          alt={specialty.name}
          className="md:w-1/2"
        />
        <div className="flex flex-col w-[35%] text-xl">
          <Title1 className="md:text-5xl mb-5">{specialty.name}</Title1>
          {renderRichTextToReactComponent(specialty.description)}
        </div>
      </div>
      <TabSection fields={specialty.tabSection.fields} className="mb-[-40px]" />
      <PhysicianList
        specialistsTitle={specialty.specialistsTitle}
        physicians={specialty.physicians}
      />
    </main>
  );
}
