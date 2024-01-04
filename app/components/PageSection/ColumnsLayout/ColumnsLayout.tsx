// Components
import TwoColumnLayout from "@/app/components/PageSection/ColumnsLayout/TwoColumnLayout";
import FullColumnLayout from "@/app/components/PageSection/ColumnsLayout/FullColumnLayout";
import VideoWithText from "@/app/components/PageSection/ColumnsLayout/VideoWithText";
import WideImageWithText from "@/app/components/PageSection/ColumnsLayout/WideImageWithText";
// Types
import { PageSectionType } from "@/app/constants/types";

export default function ColumnsLayout({
  section,
}: {
  section: PageSectionType;
}) {
  const columnType = section.fields.columnLayout.fields.columnType;
  const ColumnLayout = section.fields.columnLayout;
  switch (columnType) {
    case "Two Column":
      return <TwoColumnLayout section={ColumnLayout} />;
    case "Full Column (image or text)":
      return <FullColumnLayout section={ColumnLayout} />;
    case "Wide Image with Text":
      return <WideImageWithText section={ColumnLayout} />;
    case "Video with Text":
      return <VideoWithText section={ColumnLayout} />;
    default:
      return null;
  }
}
