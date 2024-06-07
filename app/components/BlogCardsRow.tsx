"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BlogCardsRowType } from "@/app/constants/types";
import BlogCard from "@/app/components/PageSection/CardsLayout/BlogCard";

type BlogCardsRowPropsType = {
  type: string;
  cards: BlogCardsRowType[];
  showIndexLinks?: boolean;
};

const isMobileScreen = () => window.innerWidth <= 768;

export default function BlogCardsRow({
  type,
  cards,
  showIndexLinks = true,
}: BlogCardsRowPropsType) {
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

  console.log(displayedCards[0]);

  return (
    <div id={`${type}`} className="block">
      <div className="grid grid-cols-2 gap-4">
        {displayedCards.map((card: BlogCardsRowType) => (
          <Link key={card.slug} href={`/${type}/${card.slug}`}>
            <BlogCard
              type={type}
              cardContent={{
                title: card.blogCard.fields.title,
                cardPhoto: card.blogCard.fields.image,
                summary: card.blogCard.fields.subTitle || "",
                writtenBy: card.writtenBy || "",
              }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
