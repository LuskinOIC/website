// Next components
import Image from "next/image";
// Types
import { TriImageType } from "@/app/constants/types";

type TriImageLayoutProps = {
  section: TriImageType["fields"]["images"];
};

export default function TriImageLayout({ section }: TriImageLayoutProps) {
  return (
    <section className="flex w-full">
      {section.map((image, i: number) => {
        return (
          <div key={i} className="w-full">
            <Image
              src={image.fields.file.url}
              alt={image.fields.file.fileName}
              // width={500}
              width={image.fields.file.details.image.width}
              // height={500}
              height={image.fields.file.details.image.height}
              className="w-full object-cover"
            />
          </div>
        );
      })}
    </section>
  );
}
