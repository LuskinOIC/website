import Link from "next/link";
import { BlogCardsRowType } from "../constants/types";
import MinimalCard from "./MinimalCard";

type BlogCardsRowPropsType = {
  type: "news" | "patient-stories" | "events";
  cards: BlogCardsRowType[];
};

export default async function BlogCardsRow({
  type,
  cards,
}: BlogCardsRowPropsType) {
  return (
    <section id={`${type}`}>
      <div className="flex flex-row justify-between mb-2 mt-8 md:mb-4 px-5">
        <Link href={`/${type}`}>
          <h1 className="text-xl font-bold uppercase text-[#0076AD] md:text-3xl md:font-normal md:capitalize hover:underline">
            {type === "patient-stories" ? "patient stories" : type}
          </h1>
        </Link>
        <Link href={`/${type}`}>
          <h1 className="block md:hidden uppercase text-[#0076AD] text-xl underline">
            See All
          </h1>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap">
        {cards.map((card: BlogCardsRowType) => (
          <Link key={card.slug} href={`/${type}/${card.slug}`}>
            <div>
              <MinimalCard
                cardContent={{
                  title: card.blogCard.fields.title,
                  cardPhoto: card.blogCard.fields.image,
                  summary: card.blogCard.fields.subTitle || "",
                }}
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
