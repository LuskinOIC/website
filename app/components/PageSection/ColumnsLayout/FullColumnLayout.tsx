// Next components
import Image from "next/image";
// Types
import { ColumnType } from "@/app/constants/types";
import getBackgroundColor from "@/app/components/ui/BackgroundColor";
import SectionContent from "./SectionContent";

export default function FullWidthImageLayout({
  section,
}: {
  section: ColumnType;
}) {
  const bgColor = section.fields.backgroundColor
    ? getBackgroundColor(section.fields.backgroundColor)
    : "white";
  return (
    <section
      className={`grid gap-3 md:gap-5 ${bgColor} w-full items-center px-5 md:px-32 py-5`}
    >
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
    </section>
  );
}
