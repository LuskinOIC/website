// Components
import UrgentCareCard from "@/app/specialties/SpecialtyComponents/UrgentCareCard";
import Divider from "@/app/components/PageSection/Divider";
import SocialMediaBanner from "@/app/components/SocialMediaBanner";
import ColumnLayout from "./ColumnsLayout/ColumnsLayout";
import CardLayoutSection from "./CardsLayout";
import ImagesLayout from "./ImagesLayout";
import TabSection from "@/app/components/TabSection";

// Types
import { PageSectionType, SpecialtyType } from "@/app/constants/types";

export default function PageSection({ section }: { section: PageSectionType }) {
  if (!section) return null;

  switch (section.fields.type) {
    case "Column Layout":
      return <ColumnLayout section={section} />;
    case "Images Layout":
      return <ImagesLayout section={section} />;
    case "Divider":
      return <Divider section={section} />;
    case "Social Media Banner":
      return <SocialMediaBanner />;
    case "Card Layout":
      return <CardLayoutSection section={section} />;
    case "Tab Section":
      return <TabSection tabs={section.fields.tabs} />;
    case "Specialty":
      return (
        <UrgentCareCard
          specialty={(section.fields.specialty as SpecialtyType[])[0]}
        />
      );
    default:
      return null;
  }
}
