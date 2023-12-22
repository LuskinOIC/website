// Components
import FullWidthImageLayout from "@/app/components/PageSection/FullWidthImageLayout";
import UrgentCareCard from "@/app/components/UrgentCareCard";
import Divider from "@/app/components/PageSection/Divider";
import SocialMediaBanner from "@/app/components/SocialMediaBanner";
import ColumnLayout from "./ColumnsLayout";
import CardLayoutSection from "./CardsLayout";

// Types
import { PageSectionType, SpecialtyType } from "@/app/constants/types";

export default function PageSection({ section }: { section: PageSectionType }) {
  switch (section.fields.type) {
    case "Column Layout":
      return <ColumnLayout section={section} />;
    case "Full Width Image Layout":
      return <FullWidthImageLayout section={section} />;
    case "Divider":
      return <Divider section={section} />;
    case "Social Media Banner":
      return <SocialMediaBanner />;
    case "Card Layout":
      return <CardLayoutSection section={section} />;
    case "Specialty":
      return (
        <UrgentCareCard
          specialty={(section.fields.specialty as SpecialtyType[])[0].fields}
        />
      );
    default:
      return null;
  }
}
