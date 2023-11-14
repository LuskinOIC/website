// Next components
import Image from "next/image";
// Types
import { PageSectionType } from "@/app/constants/types";

export default function FullWidthImageLayout({
  section,
}: {
  section: PageSectionType;
}) {
  return (
    <div>
      <Image
        className="mx-auto"
        src={`https:${section.fields.image.fields.file.url}`}
        alt={section.fields.image.fields.description}
        width={section.fields.image.fields.file.details.image.width}
        height={section.fields.image.fields.file.details.image.height}
      />
    </div>
  );
}