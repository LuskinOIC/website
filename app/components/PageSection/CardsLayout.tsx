//Types
import { PageSectionType } from "@/app/constants/types";
import QuadCard from "@/app/components/QuadComponent";

//Components
import InfoCardLayout from "@/app/components/PageSection/InfoCardLayout";
import QuadTextCard from "@/app/components/QuadTextCard";
import BioCardsRow from "@/app/components/BioCardsRow";

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
  const quadTextCards =
    cards && cards.filter((card) => card.fields.cardType === "Quad Text Card");
  const bioCards =
    cards && cards.filter((card) => card.fields.cardType === "Bio Cards");

  if (infoCards && infoCards.length > 0) {
    return <InfoCardLayout section={infoCards} />;
  }
  if (quadCards && quadCards.length > 0) {
    return <QuadCard section={quadCards} />;
  }
  if (quadTextCards && quadTextCards.length > 0) {
    return <QuadTextCard section={quadTextCards} />;
  }
  if (bioCards && bioCards.length > 0) {
    return (
      <BioCardsRow
        title={bioCards[0].fields.title}
        cards={bioCards[0].fields.bioCards}
      />
    );
  }
}
