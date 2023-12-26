//Types
import { PageSectionType } from "@/app/constants/types";

//Components
import InfoCardLayout from "./InfoCardLayout";

export default function ColumnLayout({
  section,
}: {
  section: PageSectionType;
}) {
  const cards = section.fields.cardsLayout;
  const infoCards =
    cards && cards.filter((card) => card.fields.cardType === "Info Card");
  if (infoCards && infoCards.length > 0) {
    return <InfoCardLayout section={infoCards} />;
  }
}
