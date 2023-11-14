// Next components
import Image from "next/image";

// Types
import { PageSectionType } from "@/app/constants/types";
import { Title2 } from "../ui/Typography/Title";
import { Text2 } from "../ui/Typography/Text";

export default function InfoCardLayout({
  section,
}: {
  section: PageSectionType;
}) {
  return (
    <section className="grid md:grid-cols-2 gap-3 m-auto md:w-3/4 px-10 py-8">
      {section.fields.infoCards.map((card, i) => {
        return (
          <div
            key={i}
            className="col-span-1 rounded-[10px] shadow border border-black border-opacity-10 pb-8 md:p-6 overflow-hidden"
          >
            <div className="relative md:rounded-[10px] overflow-hidden">
              <Image
                className="object-cover"
                src={`https:${card.fields.image.fields.file.url}`}
                alt={card.fields.image.fields.description}
                layout="responsive"
                sizes="(max-width: 500px) 100vw, 500px"
                width={500}
                height={400}
              />
            </div>
            <div className="md:h-min-[242px] px-10 md:px-0 flex-col ">
              <div className="font-arial leading-150 py-4 ">
                <Title2 className="font-bold">{card.fields.title}</Title2>
                <Text2 className="text-xl">{card.fields.subTitle}</Text2>
              </div>
              <Text2 className="text-xl font-normal leading-[30px] py-4">
                {card.fields.content}
              </Text2>
            </div>
          </div>
        );
      })}
    </section>
  );
}
