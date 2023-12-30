// Next components
import Image from "next/image";
// Types
import { TriImageType } from "@/app/constants/types";

type TriImageLayoutProps = {
  section: TriImageType["fields"]["images"];
};

export default function TriImageLayout({ section }: TriImageLayoutProps) {
  return (
    <section className="flex">
      {section.map((image, i: number) => {
        return (
          <div key={i} className="">
            <Image
              src={image.fields.file.url}
              alt={image.fields.file.fileName}
              width={500}
              height={500}
            />
          </div>
        );
      })}
    </section>
  );
}
