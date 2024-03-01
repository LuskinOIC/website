import Link from "next/link";
import { BioCardsRowPropsType, CardsRowType } from "@/app/constants/types";
import { Title2 } from "@/app/components/ui/Typography/Title";
import BioCard from "@/app/components/BioCard";

const styles = {
  container: "block px-5 md:px-32 py-2 md:py-4",
  grid: "grid grid-rows gap-y-3",
  gridFull: "md:grid-cols-4",
  gridSecondRow: "md:grid-cols-3",
  gridLastRow: "md:grid-cols-2",
  gridPadding: "py-2 md:justify-items-center",
  title: "mb-2 mt-8 font-bold text-[#0076AD] md:mb-4 md:ml-4 md:font-normal",
  clickableStyle: "shadow-2xl md:shadow-md hover:shadow-lg rounded-lg",
};

function getCardHref(card: CardsRowType) {
  switch (card.sys.contentType.sys.id) {
    case "patientBio":
      return `/patient-stories/${card.fields.slug}`;
    case "memberBio":
      return `/member/${card.fields.slug}`;
    case "physicianBio":
      return `/physicians/${card.fields.slug}`;
    default:
      return "/";
  }
}

const renderCards = (cards: CardsRowType[]) => {
  return cards.map((card, i) => {
    const cardContent = (
      <BioCard
        name={card.fields.name}
        portrait={card.fields.portrait}
        leadershipRole={
          card.fields.leadershipRole ? card.fields.leadershipRole : ""
        }
        classNames="md:w-[258px] md:h-full"
      />
    );

    const shouldWrapWithLink = card.fields.topSection || card.fields.topSummary;

    return shouldWrapWithLink ? (
      <Link key={i} href={getCardHref(card)} className={styles.clickableStyle}>
        {cardContent}
      </Link>
    ) : (
      <div key={i}>{cardContent}</div>
    );
  });
};

const BioCardsRow = ({ title, cards }: BioCardsRowPropsType) => {
  const hasCards: boolean = Array.isArray(cards) && cards.length > 0;
  const totalCards = cards.length;

  let remainder = totalCards % 4;
  let secondRow: CardsRowType[] = [];
  let lastRow: CardsRowType[] = [];

  if (remainder === 1) {
    let lastFewCards = cards.splice(-5);
    lastRow = lastFewCards.splice(-2);
    secondRow = lastFewCards;
  }
  return (
    <section id="BioCardsRow" className={styles.container}>
      <Title2 className={styles.title}>{title}</Title2>
      {hasCards && remainder != 1 && (
        <div
          className={`${styles.grid} ${styles.gridFull} ${styles.gridPadding}`}
        >
          {renderCards(cards)}
        </div>
      )}
      {remainder === 1 && (
        <>
          <div
            className={`${styles.grid} ${styles.gridFull} ${styles.gridPadding}`}
          >
            {renderCards(cards)}
          </div>
          <div
            className={`${styles.grid} ${styles.gridSecondRow} ${styles.gridPadding}`}
          >
            {" "}
            {renderCards(secondRow)}
          </div>
          <div
            className={`${styles.grid} ${styles.gridLastRow} ${styles.gridPadding}`}
          >
            {" "}
            {renderCards(lastRow)}
          </div>
        </>
      )}
    </section>
  );
};

export default BioCardsRow;
