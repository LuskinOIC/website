// Next components
import Image from "next/image";
// Types
import { ColumnType } from "@/app/constants/types";
import getBackgroundColor from "@/app/components/ui/BackgroundColor";
import SectionContent from "@/app/components/PageSection/ColumnsLayout/SectionContent";

export default function FullColumnLayout({ section }: { section: ColumnType }) {
  const bgColor = section.fields.backgroundColor
    ? getBackgroundColor(section.fields.backgroundColor)
    : "white";

  // If there is an image but it is not uploaded, return null. This protects
  // against intermediate states published accidentally.
  if (section.fields.image && !section.fields.image.fields?.file) return null;
  return (
    <div className={`grid gap-3 md:gap-5 ${bgColor} w-full items-center`}>
      {section.fields.image && (
        <div className="justify-self-center">
          <Image
            className=""
            src={`https:${section.fields.image.fields.file.url}`}
            alt={section.fields.image.fields.description}
            width={section.fields.image.fields.file.details.image.width}
            height={section.fields.image.fields.file.details.image.height}
          />
        </div>
      )}
      <SectionContent section={section} />
      {section.fields.video && (
        <div className="aspect-video">
          <iframe
            title={section.fields.title}
            src={section.fields.video}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      )}
    </div>
  );
}
