"use client";
// Next components
import Image from "next/image";
// Types
import { ButtonType, CarouselSlideType } from "@/app/constants/types";
// Components
import Slider from "@/app/components/Slider";
import Button from "@/app/components/ui/Button";
import { Title1 } from "@/app/components/ui/Typography/Title";
import { styles } from "@/app/components/ImagesLayoutComponents/styles";

type OverlayComponentProps = {
  overlayTitle?: string;
  overlayButton?: ButtonType;
  btnStyle?: string;
};

type CarouselImageLayoutProps = {
  section: CarouselSlideType[];
};

const OverlayComponent = ({
  overlayTitle,
  overlayButton,
  btnStyle,
}: OverlayComponentProps) => (
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
  const alignmentClass = (alignment: string) => {
    switch (alignment) {
      case "left":
        return "md:left-1/4";
      case "center":
        return "md:left-1/2";
      case "right":
        return "md:left-2/3";
      default:
        return "md:left-1/4";
    }
  };

  return (
    <section className="py-4">
      <Slider
        slides={
          section.map((slide, i) => (
            <div key={i} className="flex items-center h-full">
              <div className={styles.container}>
                <Image
                  src={slide.fields.image.fields.file.url}
                  alt={slide.fields.image.fields.file.fileName}
                  width={slide.fields.image.fields.file.details.image.width}
                  height={slide.fields.image.fields.file.details.image.height}
                  className={styles.image}
                />
                {(slide.fields.overlayTitle || slide.fields.overlayButton) && (
                  <div
                    className={`${styles.overlayDesktop} ${alignmentClass(
                      slide.fields.overlayAlignment,
                    )}`}
                  >
                    <OverlayComponent
                      overlayTitle={slide.fields.overlayTitle}
                      overlayButton={slide.fields.overlayButton}
                      btnStyle={styles.btn}
                    />
                  </div>
                )}
              </div>
            </div>
          )) as any
        }
      />
    </section>
  );
}
