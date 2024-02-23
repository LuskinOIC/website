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

const styles = {
  container:
    "flex flex-col w-full h-[275px] md:block md:relative md:min-h-[560px] md:overflow-hidden mb-4 md:mb-10 md:text-left",
  image: "h-full",
  btn: "md:w-full text-center my-2 md:mx-0",
  overlayDesktop:
    "md:absolute md:left-0 md:top-[25%] md:left-[7%] md:max-w-[500px] md:transform bg-white md:bg-opacity-75 md:rounded md:p-6",
  title: "font-normal lg:text-[48px] leading-snug",
};

const OverlayComponent = ({ overlayTitle, overlayButton, btnStyle }: any) => (
  <>
    {overlayTitle && <Title1 className={styles.title}>{overlayTitle}</Title1>}
    {overlayButton && (
      <Button
        className={btnStyle}
        key={overlayButton.sys.id}
        href={overlayButton.fields.buttonUrl}
        isExternal={overlayButton.fields.externalLink}
        text={overlayButton.fields.text}
        variant={overlayButton.fields.type}
      />
    )}
  </>
);

export default function CarouselImageSlider({
  section,
}: CarouselImageLayoutProps) {
  return (
    <section>
      <Slider
        slides={
          section.map((slide, i) => (
            <div key={i} className={styles.container}>
              <Image
                src={slide.fields.image.fields.file.url}
                alt={slide.fields.image.fields.file.fileName}
                width={slide.fields.image.fields.file.details.image.width}
                height={slide.fields.image.fields.file.details.image.height}
                className={styles.image}
              />
              {(slide.fields.overlayTitle || slide.fields.overlayButton) && (
                <div className={styles.overlayDesktop}>
                  <OverlayComponent
                    overlayTitle={slide.fields.overlayTitle}
                    overlayButton={slide.fields.overlayButton}
                    btnStyle={styles.btn}
                  />
                </div>
              )}
            </div>
          )) as any
        }
      />
    </section>
  );
}
