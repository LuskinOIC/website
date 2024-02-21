// Next components
import Image from "next/image";
// Types
import { ColumnType } from "@/app/constants/types";
import getBackgroundColor from "@/app/components/ui/BackgroundColor";
import SectionContent from "./SectionContent";
import PageSectionContainer from "@/app/components/PageSection/PageSectionContainer";

export default function FullWidthImageLayout({
  section,
}: {
  section: ColumnType;
}) {
  const bgColor = section.fields.backgroundColor
    ? getBackgroundColor(section.fields.backgroundColor)
    : "white";
  return (
    <div className={`grid gap-3 md:gap-5 w-full items-center ${bgColor}`}>
      {section.fields.image && (
        <div className="my-12 justify-self-center">
          <Image
            className=""
            src={`https:${section.fields.image.fields.file.url}`}
            alt={section.fields.image.fields.description}
            width={section.fields.image.fields.file.details.image.width}
            height={section.fields.image.fields.file.details.image.height}
          />
        </div>
      )}

      <PageSectionContainer>
        <div className="mx-auto text-2xl">
          <SectionContent section={section} />
        </div>
      </PageSectionContainer>

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
