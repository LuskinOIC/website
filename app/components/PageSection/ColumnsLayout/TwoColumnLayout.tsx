import Image from "next/image";
import { ColumnType } from "@/app/constants/types";
import getBackgroundColor from "@/app/components/ui/BackgroundColor";
import SectionContent from "./SectionContent";
import { cn } from "@/lib/utils";

export function imageAlignmentClassForColumn(column: ColumnType) {
  if (column.fields.imageOrientation === "Center") return "justify-self-center";
  if (column.fields.imageOrientation === "Left Align")
    return "justify-self-start";
  if (column.fields.imageOrientation === "Right Align")
    return "justify-self-end";

  return "";
}

export default function TwoColumnLayout({
  section,
  imageClass = "",
}: {
  section: ColumnType;
  imageClass?: string;
}) {
  const isReversedOrder = section.fields.reverseOrder ? "order-last" : "";
  const imageAlignmentClass = imageAlignmentClassForColumn(section);

  const bgColor = section.fields.backgroundColor
    ? getBackgroundColor(section.fields.backgroundColor)
    : "white";

  const baseImageClass = "w-full";

  return (
    <div className={`grid md:grid-cols-2 gap-12 mx-auto ${bgColor}`}>
      <div
        className={`grid-span-1 self-center mx-auto ${isReversedOrder} ${imageAlignmentClass} w-full`}
      >
        <Image
          className={cn(imageClass)}
          src={`https:${section.fields.image.fields.file.url}`}
          alt={section.fields.image.fields.description}
          width={section.fields.image.fields.file.details.image.width}
          height={section.fields.image.fields.file.details.image.height}
        />
      </div>
      <div className="grid-span-1 self-center">
        <SectionContent section={section} />
      </div>
    </div>
  );
}
