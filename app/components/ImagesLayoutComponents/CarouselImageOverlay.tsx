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

const alignmentClass = (alignment: string) => {
  switch (alignment) {
    case "left":
      return "left-1/2 lg:left-1/4";
    case "center":
      return "left-1/2 lg:left-1/2";
    case "right":
      return "left-1/2 lg:left-2/3";
    default:
      return "left-1/2 lg:left-1/4";
  }
};

export function CarouselImageOverlay({ slide }: { slide: CarouselSlideType }) {
  if (!slide.fields.overlayTitle && !slide.fields.overlayButton) return null;

  const mobileClass = slide.fields.desktopOnly ? "hidden md:block" : "";
  const alignmentStyles = alignmentClass(slide.fields.overlayAlignment);
  const overlayContainerClass = `${styles.overlayDesktop} ${alignmentStyles} ${mobileClass}`;

  return (
    <div className={overlayContainerClass}>
      <OverlayComponent
        overlayTitle={slide.fields.overlayTitle}
        overlayButton={slide.fields.overlayButton}
        btnStyle={styles.btn}
      />
    </div>
  );
}

export default function CarouselImageSlider({
  section,
}: CarouselImageLayoutProps) {
  return (
    <section>
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
                <CarouselImageOverlay slide={slide} />
              </div>
            </div>
          )) as any
        }
      />
    </section>
  );
}
