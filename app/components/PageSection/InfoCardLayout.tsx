// Next components
import Image from "next/image";

// Types
import { CardType, TextType } from "@/app/constants/types";
import { Text } from "../ui/Typography/Text";
import { Title2 } from "../ui/Typography/Title";
import renderRichTextToReactComponent, {
  ClassNames,
} from "@/app/utils/rich-text";

export function InfoCardContent(cardContent: TextType) {
  const { title, subTitle, content } = cardContent.fields;
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
    </>
  );
}

export default function InfoCardLayout({ section }: { section: CardType[] }) {
  return (
    <section className="grid md:grid-cols-2 gap-6 md:m-auto justify-items-stretch md:w-[80%] px-2 py-8 md:py-10">
      {section.map((card, i) => {
        return (
          <div
            key={i}
            className="flex flex-col col-span-1 rounded-[10px] shadow-lg border border-black border-opacity-10 pb-8 md:p-10 overflow-hidden"
          >
            <div className="relative md:rounded-[10px] overflow-hidden h-[300px] md:h-[325px] w-7/8 mx-auto">
              <Image
                className="w-full h-full object-cover rounded-[10px]"
                src={`https:${card.fields.image.fields.file.url}`}
                alt={card.fields.image.fields.description}
                width={400}
                height={300}
              />
            </div>
            <div className="flex-grow px-5 md:px-0 ">
              {card.fields.cardContent &&
                InfoCardContent(card.fields.cardContent)}
            </div>
          </div>
        );
      })}
    </section>
  );
}
