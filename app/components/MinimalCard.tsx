import Image from "next/image";
import { Document } from "@contentful/rich-text-types";
import { MinimalCardType } from "@/app/constants/types";
import renderRichTextToReactComponent from "../utils/rich-text";

const titleImageComponentStyles = {
  image:
    "h-28 w-28 rounded-xl object-cover p-1.5 md:mx-auto md:h-5/6 md:w-10/12 md:rounded-sm md:px-4 md:pt-6",
  wrapperDiv:
    "flex-reverse mb-3 flex h-28 w-full rounded-lg bg-[#0076AD] md:mb-8 md:h-full md:w-1/5 md:flex-col md:rounded-lg md:border md:bg-white",
  header:
    "my-auto ml-6 text-3xl font-semibold tracking-wider text-white md:pb-6 md:pt-4 md:text-center md:text-lg md:text-black",
  summary: "",
};

const titleImageSummaryComponentStyles = {
  image: "rounded-xl w-80 md:w-[300px] h-[280px] object-cover",
  wrapperDiv:
    "w-80 m-auto md:m-4 md:w-[300px] md:flex-shrink-0 flex flex-col mb-10",
  header: "md:text-center py-4 text-xl font-bold",
  summary: "mb-4 line-clamp-4 overflow-hidden leading-tight",
};
export default function MinimalCard({
  cardContent,
}: {
  cardContent: MinimalCardType;
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

  const selectedStyles = summary
    ? titleImageSummaryComponentStyles
    : titleImageComponentStyles;

  return (
    <div className={selectedStyles?.wrapperDiv}>
      <Image
        alt={title}
        src={cardPhotoSource}
        width={cardPhotoHeight}
        height={cardPhotoWidth}
        className={selectedStyles.image}
      />
      <h3 className={selectedStyles.header}>{title}</h3>
      {summary ? <div className={selectedStyles.summary}>{summary}</div> : null}
    </div>
  );
}
