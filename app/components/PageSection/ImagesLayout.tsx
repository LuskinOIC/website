// Components
import FullWidthImageLayout from "@/app/components/PageSection/FullWidthImageLayout";

// Types
import { ImagesLayoutType } from "@/app/constants/types";
import TriImageLayout from "./TriImageLayout";

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
      return <FullWidthImageLayout section={ImagesLayout.fields.images} />;
    case "Tri Image":
      return <TriImageLayout section={ImagesLayout.fields.images} />;
    default:
      return null;
  }
}
