"use client";
// Next components
import Image from "next/image";
// Types
import { MultiImageType } from "@/app/constants/types";
// Components
import Slider from "@/app/components/Slider";

type CarouselImageLayoutProps = {
  section: MultiImageType["fields"]["images"];
};

export default function CarouselImageLayout({
  section,
}: CarouselImageLayoutProps) {
  return (
    <section>
      <div className="md:w-full md:overflow-hidden">
        <Slider
          slides={
            section.map((image, i: number) => (
              <Image
                key={i}
                src={image.fields.file.url}
                alt={image.fields.file.fileName}
                width={image.fields.file.details.image.width}
                height={image.fields.file.details.image.height}
                className="mb-4 max-h-40 w-full object-cover object-top md:mb-10 md:min-h-[560px]"
              />
            )) as any
          }
        />
      </div>
    </section>
  );
}
