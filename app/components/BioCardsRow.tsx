import Link from "next/link";
import { BioCardsRowPropsType, CardsRowType } from "@/app/constants/types";
import { Title2 } from "@/app/components/ui/Typography/Title";
import BioCard from "@/app/components/BioCard";

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

const BioCardsRow = ({ title, cards }: BioCardsRowPropsType) => {
  const hasCards: boolean = Array.isArray(cards) && cards.length > 0;
  const totalCards = cards.length;

  let gridClass = "grid-cols-4";

  return (
    <section id="BioCardsRow" className="block px-5 md:px-32 py-2 md:py-4">
      <Title2 className="mb-2 mt-8 font-bold text-[#0076AD] md:mb-4 md:ml-4 md:font-normal">
        {title}
      </Title2>
      {hasCards && (
        <div
          className={`grid grid-rows ${gridClass} gap-y-3 md:gap-x-20 md:gap-y-10`}
        >
          {cards.map((card: CardsRowType, i: number) => {
            let cardHref = getCardHref(card);
            return (
              <Link key={i} href={cardHref}>
                <BioCard
                  name={card.fields.name}
                  portrait={card.fields.portrait}
                  leadershipRole={
                    card.fields.leadershipRole ? card.fields.leadershipRole : ""
                  }
                  classNames="h-full md:max-w-[330px]"
                />
              </Link>
            );
          })}
        </div>
      )}
      {/* {lastFewCards.length > 0 ? <div>IT IS</div> : <div>IT NOT</div>} */}
    </section>
  );
};

export default BioCardsRow;
