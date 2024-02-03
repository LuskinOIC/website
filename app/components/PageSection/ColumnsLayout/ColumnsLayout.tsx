// Components
import TwoColumnLayout from "@/app/components/PageSection/ColumnsLayout/TwoColumnLayout";
import FullColumnLayout from "@/app/components/PageSection/ColumnsLayout/FullColumnLayout";
import VideoWithText from "@/app/components/PageSection/ColumnsLayout/VideoWithText";
import WideImageWithText from "@/app/components/PageSection/ColumnsLayout/WideImageWithText";
import SponsorshipsTwoColumn from "@/app/components/PageSection/ColumnsLayout/SponsorshipsTwoColumn";
import TriInfoLayout from "@/app/components/PageSection/ColumnsLayout/TriInfoLayout";

// Types
import { PageSectionType } from "@/app/constants/types";

export default function ColumnsLayout({
  section,
}: {
  section: PageSectionType;
}) {
  const columnType = section.fields.columnLayout.fields.columnType;
  const columnLayout = section.fields.columnLayout;
  console.log("column layout", columnLayout);
  switch (columnType) {
    case "Two Column":
      return <TwoColumnLayout section={columnLayout} />;
    case "Full Column (image or text)":
      return <FullColumnLayout section={columnLayout} />;
    case "Full Column":
      return <FullColumnLayout section={columnLayout} />;
    case "Wide Image with Text":
      return <WideImageWithText section={columnLayout} />;
    case "Video with Text":
      return <VideoWithText section={columnLayout} />;
    case "Sponsorships Two Column":
      return <SponsorshipsTwoColumn section={columnLayout} />;
    case "Tri Column":
      console.log(columnLayout);
      return <TriInfoLayout section={columnLayout} />;
    default:
      return null;
  }
}
