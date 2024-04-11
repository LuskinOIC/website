"use client";

import { useEffect, useState } from "react";
// Next components
import { usePathname } from "next/navigation";

// Types
import { CardType, TextType } from "@/app/constants/types";
import { Text } from "../../ui/Typography/Text";
import { Title2 } from "../../ui/Typography/Title";
import renderRichTextToReactComponent, {
  ClassNames,
} from "@/app/utils/rich-text";
import Button from "@/app/components/ui/Button";

const styles = {
  sectionContainer:
    "grid md:grid-cols-2 gap-6 md:m-auto justify-items-center pt-2 pb-12 md:px-32",
  cardContainer:
    "col-span-1 rounded-[10px]  pb-8 md:p-10 overflow-hidden mx-6 md:mx-0",
  borderGray: "shadow-lg border border-black border-opacity-10",
  borderGreen: "border-2 border-green-500",
};

const descriptionClassNames: ClassNames = {
  paragraph: "py-2 text-base md:text-lg",
};

export function InfoCardContent(cardContent: TextType, i: number) {
  const [isCurrentPage, setCurrentPage] = useState<boolean>(true);
  const { title, subTitle, content, button } = cardContent.fields;
  const pathname = usePathname();

  useEffect(() => {
    const formattedButtonUrl = button?.fields.buttonUrl.replace(/\/$/, "");
    const formattedPathname = pathname.replace(/\/$/, "");

    setCurrentPage(formattedButtonUrl === formattedPathname);
  }, [pathname, button?.fields.buttonUrl]);

  return (
    <div
      key={i}
      className={`${styles.cardContainer} ${
        isCurrentPage ? styles.borderGreen : styles.borderGray
      }`}
    >
      <div className="md:h-min-[242px] px-5 md:px-0 flex-col">
        <div className="font-arial leading-[30px] py-4 ">
          <Title2>{title}</Title2>
          {subTitle && <Text>{subTitle}</Text>}
        </div>
        {content &&
          renderRichTextToReactComponent(content, descriptionClassNames)}
        {button && (
          <Button
            className="w-full sm:w-auto text-center gap-2"
            key={button.sys.id}
            href={button.fields.buttonUrl}
            isExternal={button.fields.externalLink}
            text={button.fields.text}
            variant={button.fields.type}
          />
        )}
      </div>
    </div>
  );
}

export default function IndexCardsLayout({ section }: { section: CardType[] }) {
  return (
    <section className={styles.sectionContainer}>
      {section.map((card, i) => {
        return (
          card.fields.cardContent && InfoCardContent(card.fields.cardContent, i)
        );
      })}
    </section>
  );
}
