import PhysicianCard from "@/app/components/PhysicianCard";
import TabSection from "@/app/components/TabSection";
import { Title1, Title3 } from "@/app/components/ui/Typography/Title";
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
      <TabSection fields={specialty.tabSection.fields} />
      <Title3 className="pl-[15%] mt-[-40px] ml-4 leading-10 uppercase text-luskin-blue font-medium">
        {specialty.specialistsTitle}
      </Title3>
      <div className="w-full px-[15%] grid mb-5">
        {specialty.physicians.map((phys, index) => (
          <PhysicianCard key={index} physician={phys.fields} />
        ))}
      </div>
    </main>
  );
}
