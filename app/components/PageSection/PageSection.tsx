// Components
import ColumnLayout from "@/app/components/PageSection/ColumnLayout";
import CardLayout from "@/app/components/PageSection/CardLayout";

// Types
import { PageSectionType } from "@/app/constants/types";

export default function PageSection({ section }: { section: PageSectionType }) {
  switch (section.fields.type) {
    case "Column Layout":
      return <ColumnLayout section={section} />;
    case "Card Layout":
      return <CardLayout section={section} />;
    default:
      return null;
  }
}
