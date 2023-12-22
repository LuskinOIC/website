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
  const infoCards = cards.filter(
    (card) => card.fields.cardType === "Info Card",
  );
  if (infoCards.length > 0) {
    return <InfoCardLayout section={infoCards} />;
  }

  // const CardLayout = section.fields.columnLayout;
  // switch (cardType) {
  //   case "Info Card":
  //     return <InfoCardLayout section={CardLayout} />;
  //   default:
  //     return null;
  // }
}
