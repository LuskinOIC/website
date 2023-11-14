// Next components
import Image from "next/image";

// Types
import { PageSectionType } from "@/app/constants/types";

// TODO: Refactor to be used in Research Centers section.
export default function InfoCardLayout({
  section,
}: {
  section: PageSectionType;
}) {
  return (
    <div className="grid md:grid-cols-2 gap-3 m-auto md:w-3/4">
      {section.fields.infoCards.map((card) => {
        return (
          <div className="col-span-1 rounded-[10px] shadow border border-black border-opacity-10 pb-8 md:p-6 overflow-hidden">
            <div className="relative w-full h-[240px] md:h-[400px] md:rounded-[10px] overflow-hidden">
              <Image
                className="mx-auto"
                src={`https:${card.fields.image.fields.file.url}`}
                alt={card.fields.image.fields.description}
                width={card.fields.image.fields.file.details.image.width}
                height={card.fields.image.fields.file.details.image.height}
              />
            </div>
            <div className="md:h-min-[242px] px-10 md:px-0 flex-col ">
              <div className="font-arial leading-150 py-4 ">
                <h1 className="text-2xl lg:text-3xl">
                  {card.fields.title}
                </h1>
                {/* <h2 className="text-xl">{card.fields.content}</h2> */}
              </div>
              <p className="text-xl font-normal leading-[30px] py-4">
                {card.fields.content}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
