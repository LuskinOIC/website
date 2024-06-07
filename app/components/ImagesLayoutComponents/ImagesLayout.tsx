// Components
import FullWidthImageLayout from "@/app/components/ImagesLayoutComponents/FullWidthImageLayout";
import TriImageLayout from "@/app/components/ImagesLayoutComponents/TriImageLayout";
import CarouselImageLayout from "@/app/components/ImagesLayoutComponents/CarouselImageOnlyLayout";
import CarouselImageSlider from "@/app/components/ImagesLayoutComponents/CarouselImageOverlay";

// Types
import { ImagesLayoutType } from "@/app/constants/types";

type ImageLayoutPropsType = {
  fields: {
    type: string;
    title: string;
    imagesLayout: ImagesLayoutType;
  };
};

export default function ImagesLayout({
  section,
}: {
  section: ImageLayoutPropsType;
}) {
  const imagesType =
    section.fields.imagesLayout && section.fields.imagesLayout.fields.type;
  const imagesLayout =
    section.fields.imagesLayout && section.fields.imagesLayout;
  switch (imagesType) {
    case "Full Width Image":
      return <FullWidthImageLayout section={imagesLayout} />;
    case "Tri Image":
      return <TriImageLayout section={imagesLayout.fields.images} />;
    case "Carousel Images Only":
      return <CarouselImageLayout section={imagesLayout.fields.images} />;
    case "Carousel Images and Overlays":
      return (
        <CarouselImageSlider section={imagesLayout.fields.carouselSlides} />
      );
    default:
      return null;
  }
}
