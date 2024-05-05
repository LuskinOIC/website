import Link from "next/link";
import { BioCardsRowPropsType, CardsRowType } from "@/app/constants/types";
import { Title2 } from "@/app/components/ui/Typography/Title";
import BioCard from "@/app/components/PageSection/CardsLayout/BioCard";
import { formatProviderType } from "@/app/providers/PhysicianComponents/formattingProviderPath";

const styles = {
  container: "block",
  grid: "grid grid-rows gap-y-3",
  gridFull: "md:grid-cols-3 gap-6",
  gridPadding: "md:justify-between place-content-between",
  title: "mb-2 mt-3 font-bold text-[#0076AD] md:mb-4 md:font-normal",
  clickableStyle:
    "flex md:flex-row shadow-2xl md:shadow-md hover:shadow-lg rounded-lg",
};

function getCardHref(card: CardsRowType) {
  switch (card.sys.contentType.sys.id) {
    case "patientBio":
      return `/patient-stories/${card.fields.slug}`;
    case "memberBio": {
      const memberTypePath =
        card.fields.memberType === "leadership" ? "leadership" : "researcher";
      return `/${memberTypePath}/${card.fields.slug}`;
    }
    case "physicianBio": {
      const providerTypePath =
        formatProviderType(card.fields.providerType) || "physician";
      return `/providers/${providerTypePath}/${card.fields.slug}`;
    }
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
        providerType={card.fields.providerType ? card.fields.providerType : ""}
        classNames="md:max-w-[258px] md:h-full"
      />
    );

    // const shouldWrapWithLink = card.fields.topSection || card.fields.topSummary;

    return <div key={i}>{cardContent}</div>;
  });
};

function gridStyleClass(cards: CardsRowType[]) {
  return "grid-cols-3 gap-x-12 gap-y-6";
}

const BioCardsRow = ({ title, cards }: BioCardsRowPropsType) => {
  const gridClass = gridStyleClass(cards);

  return (
    <section id="BioCardsRow" className={styles.container}>
      <Title2 className={styles.title}>{title}</Title2>
      <div className={`grid ${gridClass} ${styles.gridPadding}`}>
        {cards.map((card) => {
          return (
            <BioCard
              classNames="col-span-1 md:h-full"
              key={card.sys.id}
              name={card.fields.name}
              portrait={card.fields.portrait}
              leadershipRole={
                card.fields.leadershipRole ? card.fields.leadershipRole : ""
              }
              providerType={
                card.fields.providerType ? card.fields.providerType : ""
              }
              cardLink={getCardHref(card)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default BioCardsRow;
