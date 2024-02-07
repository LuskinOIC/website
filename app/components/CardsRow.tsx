import Link from "next/link";
import { CardsRowPropsType, CardsRowType } from "@/app/constants/types";
import { Title3 } from "@/app/components/ui/Typography/Title";
import BioCard from "./BioCard";

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
      <Title3 className="mb-2 mt-8 font-bold uppercase text-[#0076AD] md:mb-4 md:ml-4 md:font-normal md:capitalize">
        {title}
      </Title3>
      <div className="grid grid-rows md:grid-cols-4 gap-y-2 md:gap-x-2">
        {hasCards &&
          cards.map((card: CardsRowType, i: number) => {
            let cardHref = getCardHref(card);
            return (
              <Link key={i} href={cardHref}>
                <BioCard
                  name={card.fields.name}
                  portrait={card.fields.portrait}
                  classNames="h-full"
                />
              </Link>
            );
          })}
      </div>
    </section>
  );
};

export default CardsRow;
