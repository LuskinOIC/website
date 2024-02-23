"use client";
// Next components
import Image from "next/image";
// Types
import { CarouselSlideType } from "@/app/constants/types";
// Components
import Slider from "@/app/components/Slider";
import Button from "../ui/Button";
import { Title1 } from "../ui/Typography/Title";
import renderRichTextToReactComponent from "@/app/utils/rich-text";

type CarouselImageLayoutProps = {
  section: CarouselSlideType[];
};

export default function CarouselImageSlider({
  section,
}: CarouselImageLayoutProps) {
  return (
    <section>
      <Slider
        slides={
          section.map((slide, i) => (
            <div
              key={i}
              className="relative mb-4 md:mb-10 md:overflow-hidden w-full max-h-40  md:min-h-[560px] text-left"
            >
              <Image
                src={slide.fields.image.fields.file.url}
                alt={slide.fields.image.fields.file.fileName}
                width={slide.fields.image.fields.file.details.image.width}
                height={slide.fields.image.fields.file.details.image.height}
              />
              {(slide.fields.overlayContent || slide.fields.title) && (
                <div className="absolute left-0 top-[25%] left-[10%] max-w-[500px] transform bg-white bg-opacity-75 rounded  p-6">
                  {slide.fields.title && (
                    <Title1 className="lg:text-[48px] font-normal leading-snug">
                      {slide.fields.title}
                    </Title1>
                  )}
                  {slide.fields.overlayContent &&
                    renderRichTextToReactComponent(slide.fields.overlayContent)}
                  {slide.fields.overlayButton && (
                    <Button
                      className="w-full sm:w-auto text-center my-2 mx-0"
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
            </div>
          )) as any
        }
      />
    </section>
  );
}
