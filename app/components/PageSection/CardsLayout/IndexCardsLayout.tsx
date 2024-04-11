"use client";

// Next components
import Image from "next/image";
import { usePathname } from "next/navigation";

// Types
import { CardType, TextType } from "@/app/constants/types";
import { Text } from "../../ui/Typography/Text";
import { Title2 } from "../../ui/Typography/Title";
import renderRichTextToReactComponent, {
  ClassNames,
} from "@/app/utils/rich-text";
import Button from "@/app/components/ui/Button";

export function InfoCardContent(cardContent: TextType) {
  const { title, subTitle, content, button } = cardContent.fields;
  const descriptionClassNames: ClassNames = {
    paragraph: "py-2 text-base md:text-lg",
  };
  return (
    <>
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
    </>
  );
}

export default function IndexCardsLayout({ section }: { section: CardType[] }) {
  // const pathname = usePathname()
  // console.log(pathname)
  return (
    <section className="grid md:grid-cols-2 gap-6 md:m-auto justify-items-center pt-2 pb-12 md:px-32">
      {section.map((card, i) => {
        return (
          <div
            key={i}
            className="col-span-1 rounded-[10px] shadow-lg border border-black border-opacity-10 pb-8 md:p-10 overflow-hidden mx-6 md:mx-0"
          >
            <div className="md:h-min-[242px] px-5 md:px-0 flex-col ">
              {card.fields.cardContent &&
                InfoCardContent(card.fields.cardContent)}
            </div>
          </div>
        );
      })}
    </section>
  );
}
