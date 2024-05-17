"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BlogCardsRowType } from "@/app/constants/types";
import BlogCard from "@/app/components/PageSection/CardsLayout/BlogCard";
import { Title1, Title3 } from "@/app/components/ui/Typography/Title";
import translations from "@/public/locales/en.json";

type BlogCardsRowPropsType = {
  type: "news" | "patient-stories" | "events" | "insights";
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
    <div id={`${type}`} className="block border-4 border-red-500">
      <div className="border- mb-2 mt-8 flex flex-row items-center justify-between border-4 border-black md:mb-4">
        <Link href={`/${type}`}>
          <Title1 className="text-2xl font-bold uppercase text-[#0076AD] hover:underline md:font-normal md:capitalize">
            {type === "patient-stories" ? "patient stories" : type}
          </Title1>
        </Link>
        <Link href={`/${type}`}>
          <Title3 className="block uppercase text-[#0076AD] underline md:no-underline md:hover:underline">
            {translations.blog.viewAll}
          </Title3>
        </Link>
      </div>
      <div
        className={`sm:grid grid-cols-1 md:grid-cols-4 border-4 border-green-700 ${
          type === "patient-stories" ? "gap-20" : "gap-4"
        }`}>
        {displayedCards.map((card: BlogCardsRowType) => (
          <Link key={card.slug} href={`/${type}/${card.slug}`}>
            <BlogCard
              type={type}
              cardContent={{
                title: card.blogCard.fields.title,
                cardPhoto: card.blogCard.fields.image,
                summary: card.blogCard.fields.subTitle || "",
              }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
