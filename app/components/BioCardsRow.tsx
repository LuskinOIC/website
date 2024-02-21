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
  const gridClass =
    title === "Senior Leaders" ||
    title === "Board of Directors" ||
    title === "Board of Trustees"
      ? "md:grid-cols-3"
      : "md:grid-cols-4";

  return (
    <div id="BioCardsRow" className="block px-5 md:px-32 py-2 md:py-4">
      <Title2 className="mb-2 mt-8 font-bold uppercase text-[#0076AD] md:mb-4 md:ml-4 md:font-normal md:capitalize">
        {title}
      </Title2>
      <div
        className={`grid grid-rows ${gridClass} gap-y-3 md:gap-x-20 md:gap-y-10`}
      >
        {hasCards &&
          cards.map((card: CardsRowType, i: number) => {
            let cardHref = getCardHref(card);
            return (
              <Link key={i} href={cardHref}>
                <BioCard
                  name={card.fields.name}
                  portrait={card.fields.portrait}
                  leadershipRole={
                    card.fields.leadershipRole ? card.fields.leadershipRole : ""
                  }
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default BioCardsRow;
