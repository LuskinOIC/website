import Link from "next/link";
import { BlogCardsRowType } from "../constants/types";
import MinimalCard from "./MinimalCard";

type BlogCardsRowPropsType = {
  type: "news" | "patient stories" | "events";
  cards: BlogCardsRowType[];
};

export default async function BlogCardsRow({
  type,
  cards,
}: BlogCardsRowPropsType) {
  return (
    <section>
      <Link href={`/${type}`}>
        <h1 className="mb-2 mt-8 text-xl font-bold uppercase text-[#0076AD] md:mb-4 md:ml-4 md:text-3xl md:font-normal md:capitalize">
          {type}
        </h1>
      </Link>
      <div className="flex flex-col md:flex-row md:flex-wrap">
        {cards.map((card: BlogCardsRowType) => (
          <Link key={card.slug} href={`/${type}/${card.slug}`}>
            <div>
              <MinimalCard
                cardContent={{
                  title: card.title,
                  cardPhoto: card.profileImage,
                  summary: card.subTitle || "",
                }}
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
