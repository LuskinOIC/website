"use client";
// Next components
import Image from "next/image";
// Types
import { CarouselSlideType } from "@/app/constants/types";
import renderRichTextToReactComponent from "@/app/utils/rich-text";
// Components
import Slider from "@/app/components/Slider";
import Button from "../ui/Button";

type CarouselImageLayoutProps = {
  section: CarouselSlideType;
};

export default function CarouselImageSlider({
  section,
}: CarouselImageLayoutProps) {
  // const { image, overlayAlignment, overlayContent, overlayButton } =
  //   section[0].fields

  return (
    <section>
      <Slider
        slides={
          section.map((slide, i) => (
            <div
              key={i}
              className="relative mb-4 md:mb-10 w-full min-h-[40vh] md:min-h-[560px] text-left"
            >
              <Image
                src={slide.fields.image.fields.file.url}
                alt={slide.fields.image.fields.file.fileName}
                width={slide.fields.image.fields.file.details.image.width}
                height={slide.fields.image.fields.file.details.image.height}
                className="absolute inset-0 bg-cover bg-center"
              />

              {/* Overlay Text Box */}
              {slide.fields.overlayContent && (
                <div className="absolute left-0 top-[25%] left-[10%] max-w-[500px] transform p-4 bg-white bg-opacity-75 rounded  py-2">
                  {renderRichTextToReactComponent(slide.fields.overlayContent)}
                  {slide.fields.overlayButton && (
                    <Button
                      className="w-full sm:w-auto text-center gap-2"
                      key={slide.fields.overlayButton.sys.id}
                      href={slide.fields.overlayButton.fields.buttonUrl}
                      isExternal={
                        slide.fields.overlayButton.fields.externalLink
                      }
                      text={slide.fields.overlayButton.fields.text}
                      variant={slide.fields.overlayButton.fields.type}
                    />
                  )}
                </div>
              )}

              {/* Ensuring the overlay and background cover the same area */}
              <div className="w-full h-full"></div>
            </div>
          )) as any
        }
      />
    </section>
  );
}
