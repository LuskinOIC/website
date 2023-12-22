// Components
import TwoColumnLayout from "@/app/components/PageSection/TwoColumnLayout";
import FullColumnLayout from "@/app/components/PageSection/FullColumnLayout";

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
    //Not created yet
    // case "Wide Image with Text":
    //   return <WideImageWithText section={section} />;
    default:
      return null;
  }
}
