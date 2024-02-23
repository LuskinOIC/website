// Components
import FullWidthImageLayout from "@/app/components/PageSection/FullWidthImageLayout";
import TriImageLayout from "@/app/components/PageSection/TriImageLayout";
import CarouselImageLayout from "@/app/components/PageSection/CarouselImageLayout";
import CarouselImageSlider from "@/app/components/PageSection/CarouselImageSlider";

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
    case "Carousel Image":
      return <CarouselImageLayout section={ImagesLayout.fields.images} />;
    case "Carousel":
      return (
        <CarouselImageSlider section={ImagesLayout.fields.carouselSlides} />
      );
    default:
      return null;
  }
}
