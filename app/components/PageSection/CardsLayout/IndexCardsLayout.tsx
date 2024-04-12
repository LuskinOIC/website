"use client";

import { useEffect, useState } from "react";
// Next components
import { usePathname } from "next/navigation";

// Types
import { CardType, TextType } from "@/app/constants/types";
import { Title3 } from "@/app/components/ui/Typography/Title";
import renderRichTextToReactComponent, {
  ClassNames,
} from "@/app/utils/rich-text";
import Button from "@/app/components/ui/Button";

const styles = {
  sectionContainer:
    "grid md:grid-cols-2 gap-6 md:m-auto justify-items-center pt-2 pb-12 md:px-32",
  cardContainer:
    "flex flex-col h-full col-span-1 rounded-[10px] pb-8 md:p-10 overflow-hidden mx-6 md:mx-0",
  contentContainer: "flex flex-col h-full px-5 md:px-0",
  title: "text-[#0076AD] md:leading-[30px]",
  contentDetails: "flex flex-col justify-apart gap-2 h-full",
  button: "mt-auto text-center",
  borderGray: "shadow-lg border border-black border-opacity-10",
  borderGreen: "border-2 border-[#99C221]",
};

const descriptionClassNames: ClassNames = {
  paragraph: "py-2 text-base font-normal md:text-xl md:leading-[30px] pb-4",
};

export function InfoCardContent(cardContent: TextType, i: number) {
  const [isCurrentPage, setCurrentPage] = useState<boolean>(true);
  const { title, content, button } = cardContent.fields;
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
      <div className={styles.contentContainer}>
        <Title3 className={styles.title}>{title}</Title3>
        <div className={styles.contentDetails}>
          {content &&
            renderRichTextToReactComponent(content, descriptionClassNames)}
          {button && (
            <Button
              className={styles.button}
              key={button.sys.id}
              href={button.fields.buttonUrl}
              isExternal={button.fields.externalLink}
              text={button.fields.text}
              variant={button.fields.type}
            />
          )}
        </div>
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
