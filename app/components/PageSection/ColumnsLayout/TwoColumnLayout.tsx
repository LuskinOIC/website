// Next components
import Image from "next/image";
// Types
import { ColumnType } from "@/app/constants/types";
// Custom components
import getBackgroundColor from "@/app/components/ui/BackgroundColor";
import SectionContent from "./SectionContent";

export default function ColumnLayout({ section }: { section: ColumnType }) {
  const orderClass = section.fields.reverseOrder ? "md:order-1" : "";
  const textPadding = section.fields.reverseOrder
    ? "px-5 md:pl-[8%] md:pr-0 lg:pl-[10%] lg:pr-[5%]"
    : "px-5 md:pr-[5%] md:pl-0 lg:pr-[10%] lg:pl-[5%]";
  const bgColor = section.fields.backgroundColor
    ? getBackgroundColor(section.fields.backgroundColor)
    : "white";
  return (
    <section className={`block ${bgColor}`}>
      <div className="flex flex-col md:flex-row gap-4 md:gap-x-14 items-center">
        {/* TODO: Adjust image sizing */}
        {section.fields.image && (
          <div className={`basis-1/2 ${orderClass} w-full`}>
            <Image
              className="md:rounded-l-lg"
              src={`https:${section.fields.image.fields.file.url}`}
              alt={section.fields.image.fields.description}
              width={0}
              height={section.fields.image.fields.file.details.image.height}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        )}
        <div className={`basis-1/2 px-2 ${textPadding}`}>
          <SectionContent section={section} />
        </div>
      </div>
    </section>
  );
}
