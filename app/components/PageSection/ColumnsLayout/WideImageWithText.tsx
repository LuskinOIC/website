// Next components
import Image from "next/image";
// Types
import { ColumnType } from "@/app/constants/types";
// Custom components
import getBackgroundColor from "@/app/components/ui/BackgroundColor";
import SectionContent from "@/app/components/PageSection/ColumnsLayout/SectionContent";

export default function VideoWithText({ section }: { section: ColumnType }) {
  const orderClass = section.fields.reverseOrder ? "md:order-1" : "";
  const bgColor = section.fields.backgroundColor
    ? getBackgroundColor(section.fields.backgroundColor)
    : "white";
  return (
    <section className={`block ${bgColor} py-5 md:py-10`}>
      <div className="md:w-4/5 md:mx-auto flex flex-col md:flex-row gap-4 md:gap-x-14 items-center">
        <div className={`w-full md:basis-1/2 ${orderClass} `}>
          {section.fields.image && (
            <div className="">
              <Image
                className="rounded-none md:rounded"
                src={`https:${section.fields.image.fields.file.url}`}
                alt={section.fields.image.fields.description}
                width={section.fields.image.fields.file.details.image.width}
                height={section.fields.image.fields.file.details.image.height}
              />
            </div>
          )}
        </div>
        <div className="basis-1/2 px-5">
          <SectionContent section={section} />
        </div>
      </div>
    </section>
  );
}
