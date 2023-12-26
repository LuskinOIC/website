// Components
import FullWidthImageLayout from "@/app/components/PageSection/FullWidthImageLayout";

// Types
import { PageSectionType } from "@/app/constants/types";

export default function ImagesLayout({
  section,
}: {
  section: PageSectionType;
}) {
  const imagesType =
    section.fields.imagesLayout && section.fields.imagesLayout.fields.type;
  const ImagesLayout =
    section.fields.imagesLayout && section.fields.imagesLayout;
  switch (imagesType) {
    case "Full Width Image":
      return <FullWidthImageLayout section={ImagesLayout} />;
    default:
      return null;
  }
}
