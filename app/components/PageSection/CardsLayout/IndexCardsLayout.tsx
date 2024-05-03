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
  desktopSectionContainer:
    "hidden md:grid md:grid-cols-2 gap-6 md:m-auto justify-items-center pt-2 pb-12",
  mobileSectionContainer: "grid justify-items-center md:hidden  py-4 px-5",
  cardContainer:
    "flex flex-col h-full col-span-1 rounded-[10px] pb-8 md:p-10 overflow-hidden mx-6 md:mx-0",
  contentContainer: "flex flex-col h-full px-5 md:px-0",
  title: "text-[#0076AD] md:leading-[30px]",
  contentDetails: "flex flex-col justify-apart gap-2 h-full",
  button: "w-full md:w-fit mt-auto text-center",
  borderGray: "shadow-lg border border-black border-opacity-10",
  borderGreen: "border-2 border-[#99C221]",
};

const descriptionClassNames: ClassNames = {
  paragraph: "py-2 text-base font-normal md:text-xl md:leading-[30px] pb-4",
};

export function InfoCardContent(
  cardContent: TextType,
  i: number,
  pathname: string,
) {
  const [isCurrentPage, setCurrentPage] = useState<boolean>(true);
  const { title, content, button } = cardContent.fields;

  useEffect(() => {
    const formattedButtonUrl = button?.fields.buttonUrl.replace(/\//g, "");
    const formattedPathname = pathname.replace(/\/$/, "");

    setCurrentPage(formattedPathname.includes(formattedButtonUrl || ""));
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
  const pathname = usePathname();

  const mobileButton = section.find((card) => {
    const buttonUrl =
      card.fields.cardContent?.fields.button?.fields.buttonUrl.replace(
        /\/$/,
        "",
      );
    return buttonUrl !== pathname.replace(/\/$/, "");
  })?.fields.cardContent?.fields.button;

  return (
    <>
      <section className={styles.desktopSectionContainer}>
        {section.map((card, i) => {
          return (
            card.fields.cardContent &&
            InfoCardContent(card.fields.cardContent, i, pathname)
          );
        })}
      </section>
      <section className={styles.mobileSectionContainer}>
        {mobileButton && (
          <Button
            className={styles.button}
            key={mobileButton.sys.id}
            href={mobileButton.fields.buttonUrl}
            isExternal={mobileButton.fields.externalLink}
            text={`View ${mobileButton.fields.text}`}
            variant="blueSecondary"
          />
        )}
      </section>
    </>
  );
}
