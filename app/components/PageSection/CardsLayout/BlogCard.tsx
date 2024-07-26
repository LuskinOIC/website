import { useState } from "react";
import Image from "next/image";
import { Document } from "@contentful/rich-text-types";
import { MinimalCardType } from "@/app/constants/types";
import renderRichTextToReactComponent from "@/app/utils/rich-text";
import { cn } from "@/lib/utils";

const style = {
  image: " h-[280px] place-self-center rounded-xl w-full object-cover",
  wrapperDiv:
    "mx-auto w-[95%] md:w-full md:max-w-sm flex flex-col gap-y-2 mb-10",
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
  // NOTE: We need to ensure that the cardPhoto is not undefined before
  // we try to access the fields.
  if (cardContent.cardPhoto.fields?.file === undefined) return null;
  const cardPhoto = cardContent.cardPhoto.fields?.file;
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
        className={`${style.image} ${isHovered ? "opacity-80" : ""}`}
      />
      <h3 className={`${style.header} ${hoverClass}`}>{title}</h3>
      {summary && type === "patient-stories" ? (
        <div className={style.summary}>{summary}</div>
      ) : null}
    </div>
  );
}
