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
    <section className="grid md:grid-cols-2 gap-6 md:m-auto justify-items-center pt-2 pb-12 md:px-32">
      {section.map((card, i) => {
        return (
          <div
            key={i}
            className="col-span-1 rounded-[10px] shadow-lg border border-black border-opacity-10 pb-8 md:p-10 overflow-hidden mx-6 md:mx-0"
          >
            <div className="relative md:rounded-[10px] overflow-hidden">
              <Image
                className="object-cover"
                src={`https:${card.fields.image.fields.file.url}`}
                alt={card.fields.image.fields.description}
                style={{ width: "100%", height: "auto" }}
                width={500}
                height={400}
              />
            </div>
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
