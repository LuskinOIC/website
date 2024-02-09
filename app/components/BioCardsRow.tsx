import Link from "next/link";
import { BioCardsRowPropsType, CardsRowType } from "@/app/constants/types";
import { Title3 } from "@/app/components/ui/Typography/Title";
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

  cards.map((card: CardsRowType) => {
    if (card.fields.name === "Maureen Stockton") {
      console.dir(card.fields.topSection?.fields.description);
    }
  });

  return (
    <section className="block px-5 md:px-32">
      <Title3 className="mb-2 mt-8 font-bold uppercase text-[#0076AD] md:mb-4 md:ml-4 md:font-normal md:capitalize">
        {title}
      </Title3>
      <div className="grid grid-rows md:grid-cols-4 gap-y-2 md:gap-x-2">
        {hasCards &&
          cards.map((card: CardsRowType, i: number) => {
            // Add a link only if the member has a page
            // (topSection for leadership, topSummary for physician)
            if (
              card.fields.topSection?.fields.subHeader ||
              card.fields.topSection?.fields.description ||
              card.fields.topSummary?.fields.subHeader ||
              card.fields.topSummary?.fields.description
            ) {
              let cardHref = getCardHref(card);
              return (
                <Link key={`Leadership-BioCard-${i}`} href={cardHref}>
                  <BioCard
                    name={card.fields.name}
                    portrait={card.fields.portrait}
                    linked={true}
                    classNames="h-full"
                  />
                </Link>
              );
            } else {
              return (
                <BioCard
                  key={`Leadership-BioCard-${i}`}
                  name={card.fields.name}
                  portrait={card.fields.portrait}
                  linked={false}
                  classNames="h-full"
                />
              );
            }
          })}
      </div>
    </section>
  );
};

export default BioCardsRow;
