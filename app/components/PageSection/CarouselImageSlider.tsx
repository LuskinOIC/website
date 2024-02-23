"use client";
// Next components
import Image from "next/image";
// Types
import { CarouselSlideType } from "@/app/constants/types";
// Components
import Slider from "@/app/components/Slider";
import Button from "../ui/Button";
import { Title1 } from "../ui/Typography/Title";

type CarouselImageLayoutProps = {
  section: CarouselSlideType[];
};

export default function CarouselImageSlider({
  section,
}: CarouselImageLayoutProps) {
  return (
    <>
      <section className="hidden md:block">
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
                {slide.fields.overlayTitle && (
                  <div className="absolute left-0 top-[25%] left-[10%] max-w-[500px] transform bg-white bg-opacity-75 rounded p-6">
                    {slide.fields.overlayTitle && (
                      <Title1 className="lg:text-[48px] font-normal leading-snug">
                        {slide.fields.overlayTitle}
                      </Title1>
                    )}
                    {slide.fields.overlayButton && (
                      <Button
                        className="w-[200px] sm:w-auto text-center my-2"
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

      <section className="md:hidden">
        <Slider
          slides={
            section.map((slide, i) => (
              <div key={i} className="flex flex-col mb-4 h-[275px]">
                <Image
                  src={slide.fields.image.fields.file.url}
                  alt={slide.fields.image.fields.file.fileName}
                  width={slide.fields.image.fields.file.details.image.width}
                  height={slide.fields.image.fields.file.details.image.height}
                  className="h-full"
                />
                {(slide.fields.overlayTitle || slide.fields.overlayButton) && (
                  <div>
                    {slide.fields.overlayTitle && (
                      <Title1 className="font-normal ">
                        {slide.fields.overlayTitle}
                      </Title1>
                    )}
                    {slide.fields.overlayButton && (
                      <Button
                        className="text-center my-2 "
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
    </>
  );
}
