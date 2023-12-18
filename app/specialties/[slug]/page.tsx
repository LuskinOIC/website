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
      <div className="flex flex-row-reverse w-full pl-[10%] mt-[2%] items-center">
        <Image
          src={specialty.image.fields.file.url}
          width={720}
          height={720}
          alt={specialty.name}
          className="col-span-4 w-1/2"
        />
        <div className="flex flex-col w-[41%] mr-[3%] text-xl">
          <Title1 className="font-normal">{specialty.name}</Title1>
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
