import Image from "next/image";
import { ColumnType } from "@/app/constants/types";
import getBackgroundColor from "@/app/components/ui/BackgroundColor";
import SectionContent from "./SectionContent";

export default function ColumnLayout({ section }: { section: ColumnType }) {
  const isReversedOrder = section.fields.reverseOrder;
  const orderClass = isReversedOrder ? "md:order-1" : "";
  const textPadding = isReversedOrder
    ? "px-5 md:pl-[8%] md:pr-0 lg:pl-[10%] lg:pr-[5%]"
    : "px-5 md:pr-[5%] md:pl-0 lg:pr-[10%] lg:pl-[5%]";

  const paddingImageBased =
    section.fields.backgroundColor === "white" ? "py-0" : "md:py-20";
  const bgColor = section.fields.backgroundColor
    ? getBackgroundColor(section.fields.backgroundColor)
    : "white";

  const orientationClass =
    section.fields.imageOrientation === "Center Align"
      ? "mx-auto"
      : `md:rounded-l-lg ${isReversedOrder ? "float-right" : "float-left"}`;

  return (
    <section className={""}>
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
