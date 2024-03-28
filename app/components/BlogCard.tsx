import { useState } from "react";
import Image from "next/image";
import { Document } from "@contentful/rich-text-types";
import { MinimalCardType } from "@/app/constants/types";
import renderRichTextToReactComponent from "../utils/rich-text";
import { cn } from "@/lib/utils";

const style = {
  image: "place-self-center rounded-xl w-80 object-cover hover:opacity-80",
  wrapperDiv: "mx-auto max-w-xs md:max-w-sm flex flex-col gap-y-2 mb-10",
  header: "line-clamp-3 text-xl font-bold text-center leading-normal pt-2",
  summary: "line-clamp-4 overflow-hidden leading-tight",
};
export default function BlogCard({
  type,
  cardContent,
  classNames,
}: {
  type: string;
  cardContent: MinimalCardType;
  classNames?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const title = cardContent.title;
  if (cardContent.cardPhoto === undefined) return null;
  const cardPhoto = cardContent.cardPhoto.fields.file;
  const cardPhotoSource = cardPhoto.url;
  const cardPhotoHeight = cardPhoto.details.image.height;
  const cardPhotoWidth = cardPhoto.details.image.width;
  const summary =
    typeof cardContent.summary === "string"
      ? cardContent.summary
      : renderRichTextToReactComponent(
          cardContent.summary as unknown as Document,
        );
  const hoverClass = isHovered ? "text-[#04577D]" : "";

  return (
    <div
      className={cn(style.wrapperDiv, classNames)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        alt={title}
        src={cardPhotoSource}
        width={cardPhotoHeight}
        height={cardPhotoWidth}
        className={`${style.image} ${
          type === "patient-stories" ? "h-auto md:h-full" : "h-[280px]"
        }`}
      />
      <h3 className={`${style.header} ${hoverClass}`}>{title}</h3>
      {summary && type === "patient-stories" ? (
        <div className={style.summary}>{summary}</div>
      ) : null}
    </div>
  );
}
