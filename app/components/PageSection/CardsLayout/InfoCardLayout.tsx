"use client";

// Next components
import Image from "next/image";

// Types
import { CardType, ImageType, TextType } from "@/app/constants/types";
import { Text } from "../../ui/Typography/Text";
import { Title2 } from "../../ui/Typography/Title";
import renderRichTextToReactComponent, {
  ClassNames,
} from "@/app/utils/rich-text";

interface CardImageProps {
  image: ImageType;
}

const styles = {
  container: "relative md:rounded-[10px] overflow-hidden",
  infoCardContainer: "font-arial leading-[30px] py-4",
  infoCardSection: "grid md:grid-cols-2 gap-6 md:m-auto justify-items-center",
  cardWrapper:
    "col-span-1 rounded-[10px] shadow-lg border border-black border-opacity-10 pb-8 md:p-10 overflow-hidden",
  cardContent: "md:h-min-[242px] px-5 md:px-0 flex-col",
  image: "object-cover",
  description: {
    paragraph: "py-2 text-base md:text-lg",
  },
};

export function InfoCardContent(cardContent: TextType) {
  const { title, subTitle, content } = cardContent.fields;
  const descriptionClassNames: ClassNames = {
    paragraph: styles.description.paragraph,
  };
  return (
    <div className={styles.cardContent}>
      <div className={styles.infoCardContainer}>
        <Title2>{title}</Title2>
        {subTitle && <Text>{subTitle}</Text>}
      </div>
      {content &&
        renderRichTextToReactComponent(content, descriptionClassNames)}
    </div>
  );
}

export const CardImage = ({ image }: CardImageProps) => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src={`https:${image.fields.file.url}`}
        alt={image.fields.description}
        style={{ width: "100%", height: "auto" }}
        width={500}
        height={400}
      />
    </div>
  );
};

export default function InfoCardLayout({ section }: { section: CardType[] }) {
  return (
    <div className={styles.infoCardSection}>
      {section.map((card, i) => (
        <div key={i} className={styles.cardWrapper}>
          {card.fields.image && <CardImage image={card.fields.image} />}
          {card.fields.cardContent && InfoCardContent(card.fields.cardContent)}
        </div>
      ))}
    </div>
  );
}
