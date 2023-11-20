// Components
import TwoColumnLayout from "@/app/components/PageSection/TwoColumnLayout";
import FullCardLayout from "@/app/components/PageSection/FullCardLayout";
import FullWidthImageLayout from "@/app/components/PageSection/FullWidthImageLayout";
import InfoCardLayout from "@/app/components/PageSection/InfoCardLayout";

// Types
import { PageSectionType } from "@/app/constants/types";

export default function PageSection({ section }: { section: PageSectionType }) {
  switch (section.fields.type) {
    case "Column Layout":
      return <TwoColumnLayout section={section} />;
    case "Card Layout":
      return (
        <FullCardLayout
          title={section.fields.title}
          bold={section.fields.bold}
          titleSize={section.fields.titleSize}
          description={section.fields.description}
          imageUrl={section.fields.image.fields.file.url}
          imageAlt={section.fields.image.fields.description}
          imageWidth={section.fields.image.fields.file.details.image.width}
          imageHeight={section.fields.image.fields.file.details.image.height}
        />
      );
    case "Full Width Image Layout":
      return <FullWidthImageLayout section={section} />;
    case "Info Card Layout":
      return <InfoCardLayout section={section} />;
    default:
      return null;
  }
}
