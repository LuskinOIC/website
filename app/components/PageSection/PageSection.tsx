// Components
import UrgentCareCard from "@/app/specialties/SpecialtyComponents/UrgentCareCard";
import Divider from "@/app/components/PageSection/Divider";
import SocialMediaBanner from "@/app/components/SocialMediaBanner";
import ColumnLayout from "@/app/components/PageSection/ColumnsLayout/ColumnsLayout";
import CardLayoutSection from "@/app/components/PageSection/CardsLayout/CardsLayout";
import ImagesLayout from "@/app/components/ImagesLayoutComponents/ImagesLayout";
import TabSection from "@/app/components/TabSection";
import GridLayoutSection from "@/app/components/GridLayoutSection";
import EventBanner from "@/app/components/EventBanner";
import NewsletterBanner from "@/app/components/NewsletterBanner";

// Types
import { PageSectionType, SpecialtyType } from "@/app/constants/types";
import ConditionsIndexLayout from "@/app/conditions/ConditionsIndexLayout";

export function PageSectionContent({ section }: { section: PageSectionType }) {
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
    case "Grid Layout":
      return <GridLayoutSection section={section} />;
    case "Specialty":
      return (
        <UrgentCareCard
          specialty={(section.fields.specialty as SpecialtyType[])[0]}
        />
      );
    case "Event Banner":
      return <EventBanner section={section} />;
    case "Newsletter Banner":
      return <NewsletterBanner />;
    case "Conditions":
      return <ConditionsIndexLayout />;
    default:
      return null;
  }
}

export default function PageSection({ section }: { section: PageSectionType }) {
  return (
    <div className={section.fields.mobileOnly ? "block md:hidden" : ""}>
      <PageSectionContent section={section} />
    </div>
  );
}
