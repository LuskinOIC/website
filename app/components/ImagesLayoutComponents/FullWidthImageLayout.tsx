// Next components
import Image from "next/image";
// Types
import { ImagesLayoutType } from "@/app/constants/types";

export default function FullWidthImageLayout({
  section,
}: {
  section: ImagesLayoutType;
}) {
  return (
    <div>
      {section.fields.images && (
        <Image
          className="w-full"
          src={`https:${section.fields.images[0].fields.file.url}`}
          alt={section.fields.images[0].fields.title}
          width={section.fields.images[0].fields.file.details.image.width}
          height={section.fields.images[0].fields.file.details.image.height}
        />
      )}
    </div>
  );
}
