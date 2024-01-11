import Link from "next/link";
import { CardsRowPropsType, CardsRowType } from "../constants/types";
import MinimalCard from "./MinimalCard";

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

const CardsRow = ({ title, cards }: CardsRowPropsType) => {
  const hasCards: boolean = Array.isArray(cards) && cards.length > 0;
  return (
    <section className="block px-5 md:px-32">
      <h1 className="mb-2 mt-8 text-xl font-bold uppercase text-[#0076AD] md:mb-4 md:ml-4 md:text-3xl md:font-normal md:capitalize">
        {title}
      </h1>
      <div className="flex flex-wrap md:flex-row-4 md:gap-10">
        {hasCards &&
          cards.map((card: CardsRowType) => {
            let cardHref = getCardHref(card);
            return (
              <Link
                key={`linkto:${card.sys.id}`}
                href={cardHref}
                className="md:w-1/5"
              >
                <MinimalCard
                  key={card.sys.id}
                  cardContent={{
                    title: card.fields.name,
                    cardPhoto: card.fields.portrait,
                  }}
                  classNames="md:w-full"
                />
              </Link>
            );
          })}
      </div>
    </section>
  );
};

export default CardsRow;
