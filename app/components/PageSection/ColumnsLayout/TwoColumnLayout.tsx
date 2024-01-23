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
  const verticalPadding =
    section.fields.backgroundColor === "white" ? "py-5 md:py-12" : "";
  const paddingImageBased =
    section.fields.imageOrientation === "Center Align" ? "py-10" : "";
  const bgColor = section.fields.backgroundColor
    ? getBackgroundColor(section.fields.backgroundColor)
    : "white";

  let orientationClass = "";
  const floatClass = section.fields.reverseOrder ? "float-right" : "float-left";
  if (section.fields.imageOrientation === "Center Align") {
    orientationClass = "mx-auto";
  } else {
    orientationClass += "md:rounded-l-lg";
    orientationClass += ` ${floatClass}`;
  }

  return (
    <section className={`block ${verticalPadding}`}>
      <div
        className={`flex flex-col md:flex-row md:items-center ${bgColor} ${paddingImageBased} justify-between`}
      >
        {section.fields.image && (
          <div className={`${orderClass} ${orientationClass}`}>
            <div style={{ maxWidth: "768px" }}>
              <Image
                src={`https:${section.fields.image.fields.file.url}`}
                alt={section.fields.image.fields.description}
                width={section.fields.image.fields.file.details.image.width}
                height={section.fields.image.fields.file.details.image.height}
              />
            </div>
          </div>
        )}
        <div className={`basis-1/2 px-2 ${textPadding}`}>
          <SectionContent section={section} />
        </div>
      </div>
    </section>
  );
}
