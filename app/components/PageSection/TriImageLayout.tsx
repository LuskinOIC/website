// Next components
import Image from "next/image";
// Types
import { TriImageType } from "@/app/constants/types";
// Import components
import Slider from "@/app/components/Slider";

type TriImageLayoutProps = {
  section: TriImageType["fields"]["images"];
};

export default function TriImageLayout({ section }: TriImageLayoutProps) {
  return (
    <section>
      <div className="hidden w-full md:block md:flex">
        {section.map((image, i: number) => (
          <div key={i} id="desktop" className="w-full">
            <Image
              src={image.fields.file.url}
              alt={image.fields.file.fileName}
              width={image.fields.file.details.image.width}
              height={image.fields.file.details.image.height}
              className="w-full object-cover"
            />
          </div>
        ))}
      </div>
      <div id="mobile" className="mb-10 md:hidden">
        <Slider
          slides={
            section.map((image, i) => (
              <Image
                key={i}
                src={image.fields.file.url}
                alt={image.fields.file.fileName}
                width={image.fields.file.details.image.width}
                height={image.fields.file.details.image.height}
                className="mb-5"
              />
            )) as any
          }
        />
      </div>
    </section>
  );
}
