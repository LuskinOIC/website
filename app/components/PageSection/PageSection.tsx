// Components
import TwoColumnLayout from "@/app/components/PageSection/TwoColumnLayout";
import FullCardLayout from "@/app/components/PageSection/FullCardLayout";
import FullWidthImageLayout from "@/app/components/PageSection/FullWidthImageLayout";
// import MulitCardLayout from "@/app/components/PageSection/MultiCardLayout";

// Types
import { PageSectionType } from "@/app/constants/types";

export default function PageSection({ section }: { section: PageSectionType }) {
  switch (section.fields.type) {
    case "Column Layout":
      return <TwoColumnLayout section={section} />;
    case "Card Layout":
      return <FullCardLayout section={section} />;
    case "Full Width Image Layout":
      return <FullWidthImageLayout section={section} />;
    default:
      return null;
  }
}
