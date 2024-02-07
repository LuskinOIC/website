import Image from "next/image";
import { Document } from "@contentful/rich-text-types";
import { MinimalCardType } from "@/app/constants/types";
import renderRichTextToReactComponent from "../utils/rich-text";
import { cn } from "@/lib/utils";

const style = {
  image: "place-self-center rounded-xl w-80 h-[280px] object-cover",
  wrapperDiv:
    "mx-auto max-w-xs md:max-w-sm flex flex-col mb-10 hover:underline",
  header: "md:text-center py-4 text-xl font-bold",
  summary: "mb-4 line-clamp-4 overflow-hidden leading-tight",
};
export default function BlogCard({
  cardContent,
  classNames,
}: {
  cardContent: MinimalCardType;
  classNames?: string;
}) {
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

  return (
    <div className={cn(style.wrapperDiv, classNames)}>
      <Image
        alt={title}
        src={cardPhotoSource}
        width={cardPhotoHeight}
        height={cardPhotoWidth}
        className={style.image}
      />
      <h3 className={style.header}>{title}</h3>
      {summary ? <div className={style.summary}>{summary}</div> : null}
    </div>
  );
}
