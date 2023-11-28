// Components
import TwoColumnLayout from "@/app/components/PageSection/TwoColumnLayout";
// import FullCardLayout from "@/app/components/PageSection/FullCardLayout";
import FullWidthImageLayout from "@/app/components/PageSection/FullWidthImageLayout";
import InfoCardLayout from "@/app/components/PageSection/InfoCardLayout";
import UrgentCareCard from "@/app/components/UrgentCareCard";

// Types
import { PageSectionType } from "@/app/constants/types";

export default function PageSection({ section }: { section: PageSectionType }) {
  switch (section.fields.type) {
    case "Column Layout":
      return <TwoColumnLayout section={section} />;
    case "Full Width Image Layout":
      return <FullWidthImageLayout section={section} />;
    case "Info Card Layout":
      return <InfoCardLayout section={section} />;
    case "Specialty":
      return <UrgentCareCard specialty={section.fields.specialty[0].fields} />;
    default:
      return null;
  }
}
