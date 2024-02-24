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
  const ImagesLayout =
    section.fields.imagesLayout && section.fields.imagesLayout;
  switch (imagesType) {
    case "Full Width Image":
      return <FullWidthImageLayout section={ImagesLayout} />;
    case "Tri Image":
      return <TriImageLayout section={ImagesLayout.fields.images} />;
    case "Carousel Images Only":
      return <CarouselImageLayout section={ImagesLayout.fields.images} />;
    case "Carousel Images and Overlays":
      return (
        <CarouselImageSlider section={ImagesLayout.fields.carouselSlides} />
      );
    //to be removed after text-overlay-carousel branch push
    case "Carousel Image":
      return <CarouselImageLayout section={ImagesLayout.fields.images} />;
    default:
      return null;
  }
}
