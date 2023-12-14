import Image from "next/image";
import { Document } from "@contentful/rich-text-types";
import { MinimalCardType } from "@/app/constants/types";
import renderRichTextToReactComponent from "../utils/rich-text";

type StylePropsType = {
  image: string;
  wrapperDiv: string;
  header: string;
  summary: string;
};

const titleImageComponentStyles = {
  image:
    "rounded-xl h-28 w-28 p-1.5 md:rounded-sm object-cover md:h-5/6 md:w-11/12 md:mx-auto md:px-4 md:pt-6",
  wrapperDiv:
    "md:rounded-lg md:w-1/5 md:border md:bg-white flex md:flex-col flex-reverse flex mb-3 md:h-full h-28 w-full rounded-lg bg-[#0076AD] md:mb-8",
  header:
    " md:text-center md:text-black md:pt-4 md:pb-6 md:text-2xl my-auto ml-6 text-3xl font-semibold tracking-wider text-white",
  summary: "",
};

const titleImageSummaryComponentStyles = {
  image: "object-cover w-72 h-56 mt-3 rounded-xl mx-auto",
  wrapperDiv: "mb-5 flex flex-col items-center h-3/5",
  header: "w-64 font-bold text-lg py-4",
  summary: "px-2 mb-4 w-72 overflow-hidden line-clamp-3 leading-tight",
};
// INSERT STYLING - 1. for title and image, 2. for title, image, and summary
export default function MinimalCard({
  cardContent,
}: {
  cardContent: MinimalCardType;
}) {
  const title = cardContent.title;
  const cardPhoto = cardContent.cardPhoto.fields.file;
  const cardPhotoSource = cardPhoto.url;
  const cardPhotoHeight = cardPhoto.details.image.height;
  const cardPhotoWidth = cardPhoto.details.image.width;
  const summary = renderRichTextToReactComponent(
    cardContent.summary as unknown as Document
  );

  const selectedStyles = summary
    ? titleImageSummaryComponentStyles
    : titleImageComponentStyles;

  return (
    <div className={selectedStyles?.wrapperDiv}>
      <Image
        alt={title}
        key={cardContent.cardPhoto.sys.id}
        src={cardPhotoSource}
        width={cardPhotoHeight}
        height={cardPhotoWidth}
        // use styling moved here from page.tsx
        className={selectedStyles.image}
      />
      <h3 className={selectedStyles.header}>{title}</h3>
      {summary ? <div className={selectedStyles.summary}>{summary}</div> : null}
    </div>
  );
}
