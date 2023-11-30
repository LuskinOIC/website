// Next components
import Image from "next/image";

// Types
import { PageSectionType } from "@/app/constants/types";
import { Text2 } from "../ui/Typography/Text";
import { Title2 } from "../ui/Typography/Title";

export default function InfoCardLayout({
  section,
}: {
  section: PageSectionType;
}) {
  return (
    <section className="grid md:grid-cols-2 gap-3 m-auto md:w-3/4 justify-items-center px-2 py-8">
      {section.fields.infoCards.map((card, i) => {
        return (
          <div
            key={i}
            className="col-span-1 md:w-10/12 rounded-[10px] shadow border border-black border-opacity-10 pb-8 md:p-10 overflow-hidden"
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
            <div className="md:h-min-[242px] px-5 md:px-0 flex-col ">
              <div className="font-arial leading-150 py-4 ">
                <Title2>{card.fields.title}</Title2>
                <Text2>{card.fields.subTitle}</Text2>
              </div>
              <Text2>{card.fields.content}</Text2>
            </div>
          </div>
        );
      })}
    </section>
  );
}
