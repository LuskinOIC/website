import React from "react";
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
import { BACKGROUND_COLORS } from "@/app/constants/background-colors";
import SectionStyles from "@/app/components/PageSection/PageSection.module.css";
import LocationsCard from "@/app/components//LocationsCard";

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
    case "Locations":
      return (
        section.fields.locations && (
          <LocationsCard locations={section.fields.locations} />
        )
      );
    default:
      return null;
  }
}

function marginStyleClass({
  showTopMargin,
  showBottomMargin,
}: {
  showTopMargin: boolean;
  showBottomMargin: boolean;
}) {
  const topMargin = showTopMargin ? "mt-6 lg:mt-10" : "";
  const bottomMargin = showBottomMargin ? "mb-6 lg:mb-10" : "";
  return `${topMargin} ${bottomMargin}`;
}

function paddingStyleClass({
  showTopPadding,
  showBottomPadding,
}: {
  showTopPadding: boolean;
  showBottomPadding: boolean;
}) {
  const topPadding = showTopPadding ? "pt-6 lg:pt-10" : "";
  const bottomPadding = showBottomPadding ? "pb-6 lg:pb-10" : "";
  return `${topPadding} ${bottomPadding}`;
}

export default function PageSection({ section }: { section: PageSectionType }) {
  const responsiveClass = section.fields.mobileOnly ? "block lg:hidden" : "";
  const sectionClassName =
    section.fields.width === "FULL_WIDTH"
      ? SectionStyles.pageSectionFullWidth
      : SectionStyles.pageSection;

  const backgroundColor =
    BACKGROUND_COLORS[
      section.fields.backgroundColor as keyof typeof BACKGROUND_COLORS
    ] || "";

  const marginClass = marginStyleClass({
    showTopMargin: section.fields.showTopMargin,
    showBottomMargin: section.fields.showBottomMargin,
  });
  // const dev = process.env.NODE_ENV === "production";
  const borderClass = ""; // "border border-3 border-black";
  const paddingClass = paddingStyleClass({
    showTopPadding: section.fields.showTopPadding,
    showBottomPadding: section.fields.showBottomPadding,
  });

  return (
    <section
      className={`${borderClass} ${responsiveClass} ${marginClass}`}
      style={{ backgroundColor }}
    >
      <div className={`${sectionClassName} ${paddingClass}`}>
        <PageSectionContent section={section} />
      </div>
    </section>
  );
}

export function PageSectionContainer({
  children,
  showTopMargin = false,
  showBottomMargin = false,
  showTopPadding = false,
  showBottomPadding = false,
}: {
  children: React.ReactNode;
  showTopMargin?: boolean;
  showBottomMargin?: boolean;
  showTopPadding?: boolean;
  showBottomPadding?: boolean;
}) {
  const marginClass = marginStyleClass({ showTopMargin, showBottomMargin });
  const paddingClass = paddingStyleClass({ showTopPadding, showBottomPadding });
  return (
    <section className={marginClass}>
      <div className={`${SectionStyles.pageSection} ${paddingClass}`}>
        {children}
      </div>
    </section>
  );
}
