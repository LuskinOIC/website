"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BlogCardsRowType } from "@/app/constants/types";
import MinimalCard from "@/app/components/MinimalCard";

type BlogCardsRowPropsType = {
  type: "news" | "patient-stories" | "events";
  cards: BlogCardsRowType[];
};

const isMobileScreen = () => window.innerWidth <= 768;

export default function BlogCardsRow({ type, cards }: BlogCardsRowPropsType) {
  const [displayedCards, setDisplayedCards] = useState(cards);

  useEffect(() => {
    const handleResize = () => {
      if (isMobileScreen()) {
        if (cards.length === 8 || cards.length === 4) {
          setDisplayedCards(cards.slice(0, cards.length / 2));
        } else {
          setDisplayedCards(cards);
        }
      } else {
        setDisplayedCards(cards);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [cards]);

  return (
    <section id={`${type}`}>
      <div className="flex flex-row justify-between mb-2 mt-8 md:mb-4">
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
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-4">
        {displayedCards.map((card: BlogCardsRowType) => (
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
