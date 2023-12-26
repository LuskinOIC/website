//Types
import { PageSectionType } from "@/app/constants/types";
import QuadCard from "../QuadComponent";

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
  const quadCards =
    cards && cards.filter((card) => card.fields.cardType === "Quad Image Card");
  if (infoCards && infoCards.length > 0) {
    return <InfoCardLayout section={infoCards} />;
  }
  if (quadCards && quadCards.length > 0) {
    return <QuadCard section={quadCards} />;
  }
}
