// Components
import UrgentCareCard from "@/app/specialties/SpecialtyComponents/UrgentCareCard";
import Divider from "@/app/components/PageSection/Divider";
import SocialMediaBanner from "@/app/components/SocialMediaBanner";
import ColumnLayout from "@/app/components/PageSection/ColumnsLayout/ColumnsLayout";
import CardLayoutSection from "@/app/components/PageSection/CardsLayout";
import ImagesLayout from "./ImagesLayout";
import TabSection from "@/app/components/TabSection";
import EventBanner from "@/app/components/EventBanner";
import GridLayoutSection from "@/app/components/GridLayoutSection";
import NewsletterBanner from "@/app/components/NewsletterBanner";
import SectionStyles from "@/app/components/PageSection/PageSection.module.css";

// Constants & Types
import { PageSectionType, SpecialtyType } from "@/app/constants/types";
import { BACKGROUND_COLORS } from "@/app/constants/background-colors";

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
    default: {
      // TODO: See if we need to handle this gracefully.
      return <section></section>;
    }
  }
}

interface BackgroundColorType {
  [key: string]: string;
}

export default function PageSection({
  section,
}: {
  section: PageSectionType | null;
}) {
  if (!section) return null;

  const sectionClassName =
    section.fields.width === "FULL_WIDTH"
      ? SectionStyles.pageSectionFullWidth
      : SectionStyles.pageSection;

  const backgroundColor =
    BACKGROUND_COLORS[
      section.fields.backgroundColor as keyof BackgroundColorType
    ] || "";

  const marginClass =
    section.fields.marginVisible || section.fields.marginVisible === undefined
      ? "mb-10"
      : "";

  return (
    <div style={{ backgroundColor }}>
      <section className={`${sectionClassName} ${marginClass}`}>
        <PageSectionContent section={section} />
      </section>
    </div>
  );
}
