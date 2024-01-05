// Next components
import Image from "next/image";
// Types
import { CarouselImageType } from "@/app/constants/types";
// Components
import Slider from "@/app/components/Slider";

type CarouselImageLayoutProps = {
  section: CarouselImageType["fields"]["images"];
};

export default function FullWidthImageLayout({
  section,
}: CarouselImageLayoutProps) {
  return (
    <section>
      <div className="w-full overflow-hidden">
        <Slider
          slides={
            section.map((image, i) => (
              <Image
                key={i}
                src={image.fields.file.url}
                alt={image.fields.file.fileName}
                width={image.fields.file.details.image.width}
                height={image.fields.file.details.image.height}
                className="mb-10 max-h-40 w-full object-cover object-top md:mb-4 md:max-h-96"
              />
            )) as any
          }
          displayArrows={true}
        />
      </div>
    </section>
  );
}
