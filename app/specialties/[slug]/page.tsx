// import TwoColumnLayout from "@/app/components/PageSection/TwoColumnLayout";
import PageSection from "@/app/components/PageSection/PageSection";
import TwoColumnLayout from "@/app/components/PageSection/TwoColumnLayout";
import PhysicianList from "@/app/components/PhysicianList";
import TabSection from "@/app/components/TabSection";
import { Title1 } from "@/app/components/ui/Typography/Title";
import { getSpecialties, getSpecialtyBySlug } from "@/app/utils/contentful";
import renderRichTextToReactComponent from "@/app/utils/rich-text";
import Image from "next/image";

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
  console.dir(specialty.fields);

  return (
    <main>
      {/* <div className="flex flex-col md:flex-row-reverse w-full md:pl-[13%] mt-[-7%] md:mt-[2%] md:mb-[2%] items-center justify-between">
        <Image
          src={specialty.fields.image.fields.file.url}
          width={720}
          height={720}
          alt={specialty.fields.name}
          className="md:w-1/2"
        />
        <div className="flex flex-col w-[35%] text-xl">
          <Title1 className="md:text-5xl mb-5">{specialty.fields.name}</Title1>
          {renderRichTextToReactComponent(specialty.fields.description)}
        </div>
      </div> */}
      <PageSection
        section={{
          fields: {
            type: "Column Layout",
            title: specialty.fields.name,
            description: specialty.fields.description,
            image: specialty.fields.image,
            columnLayout: [
              {
                title: specialty.fields.name,
                titleSize: "Title",
                bold: false,
                subHeader: "",
                luskinHeader: false,
                columnImage: specialty.fields.image,
                content: specialty.fields.description.toString(),
                imageColumnSection: specialty.fields.image,
                button: [],
              },
            ],
          },
        }}
      />
      {/* <PageSection section={specialty.fields.topSection} /> */}
      <TabSection tabs={specialty.fields.tabs} className="mb-[-40px]" />
      <PhysicianList
        specialistsTitle={specialty.fields.specialistsTitle}
        physicians={specialty.fields.physicians}
      />
    </main>
  );
}
