import { BlogCardsRowType } from "../constants/types";
import MinimalCard from "./MinimalCard";

type BlogCardsRowPropsType = {
  variant?: "full" | "half" | "quarter";
  title: string;
  cards: BlogCardsRowType[];
};

const BlogCardsRow = ({
  title,
  cards,
  variant = "full",
}: BlogCardsRowPropsType) => {
  const sortedCards = cards.sort((a, b) => {
    const dateA = new Date(a.date as string);
    const dateB = new Date(b.date as string);
    return dateB.getTime() - dateA.getTime();
  });
  let displayCount;
  switch (variant) {
    case "half":
      displayCount = 8;
      break;
    case "quarter":
      displayCount = 4;
      break;
    default:
      displayCount = sortedCards.length;
  }

  const displayedCards = sortedCards.slice(0, displayCount);
  return (
    <section className="block md:px-32">
      <h1 className="mb-2 mt-8 text-xl font-bold uppercase text-[#0076AD] md:mb-4 md:ml-4 md:text-3xl md:font-normal md:capitalize">
        {title}
      </h1>
      <div className="flex flex-col md:flex-row-4 md:gap-10">
        {displayedCards.map((card: BlogCardsRowType) => (
          <MinimalCard
            key={card.slug}
            cardContent={{
              title: card.title,
              cardPhoto: card.profileImage,
              summary: card.subTitle || "",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogCardsRow;
