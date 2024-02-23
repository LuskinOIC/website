"use client";
// Next components
import Image from "next/image";
// Types
import { MultiImageType } from "@/app/constants/types";
// Components
import Slider from "@/app/components/Slider";
import { styles } from "@/app/components/ImagesLayoutComponents/styles";

type CarouselImageLayoutProps = {
  section: MultiImageType["fields"]["images"];
};

export default function CarouselImageLayout({
  section,
}: CarouselImageLayoutProps) {
  return (
    <section>
      <Slider
        slides={
          section.map((image, i: number) => (
            <div className={styles.container} key={i}>
              <Image
                src={image.fields.file.url}
                alt={image.fields.file.fileName}
                width={image.fields.file.details.image.width}
                height={image.fields.file.details.image.height}
                className={styles.image}
              />
            </div>
          )) as any
        }
      />
    </section>
  );
}
