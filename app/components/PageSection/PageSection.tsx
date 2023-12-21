// Components
import TwoColumnLayout from "@/app/components/PageSection/TwoColumnLayout";
import FullColumnLayout from "@/app/components/PageSection/FullColumnLayout";
import FullWidthImageLayout from "@/app/components/PageSection/FullWidthImageLayout";
import InfoCardLayout from "@/app/components/PageSection/InfoCardLayout";
import UrgentCareCard from "@/app/components/UrgentCareCard";
import Divider from "@/app/components/PageSection/Divider";
import SocialMediaBanner from "@/app/components/SocialMediaBanner";

// Types
import { PageSectionType, SpecialtyType } from "@/app/constants/types";

export default function PageSection({ section }: { section: PageSectionType }) {
  console.log(section.fields.column);
  switch (section.fields.type) {
    case "Column Layout":
      return <TwoColumnLayout section={section} />;
    case "Full Column Layout":
      return <FullColumnLayout section={section} />;
    case "Two Column Layout":
      return <TwoColumnLayout section={section} />;
    case "Full Width Image Layout":
      return <FullWidthImageLayout section={section} />;
    case "Divider":
      return <Divider section={section} />;
    case "Social Media Banner":
      return <SocialMediaBanner />;
    case "Info Card Layout":
      return <InfoCardLayout section={section} />;
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
