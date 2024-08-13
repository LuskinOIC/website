import { useState } from "react";
import Image from "next/image";
// import { Document } from "@contentful/rich-text-types";
import { MinimalCardType } from "@/app/constants/types";
// import renderRichTextToReactComponent from "../../../utils/rich-text";
// import { cn } from "@/lib/utils";
import { formatDate } from "@/app/utils/formatDate";

const style = {
  image: "place-self-center rounded-xl h-2",
  wrapperDiv:
    "grid grid-cols-3 mb-10 gap-2 text-lg text-[#0076AD] font-bold border-4 border-black",
  header: "line-clamp-3 text-[20px] font-bold",
  summary: "loverflow-hidden leading-tight",
};
export default function BlogCard({
  type,
  cardContent, // classNames,
}: {
  type: string;
  cardContent: MinimalCardType;
  classNames?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const title = cardContent.title;
  // const subTitle = cardContent.summary
  if (cardContent.cardPhoto === undefined) return null;
  // NOTE: We need to ensure that the cardPhoto is not undefined before
  // we try to access the fields.
  if (cardContent.cardPhoto.fields?.file === undefined) return null;
  const cardPhoto = cardContent.cardPhoto.fields?.file;
  const cardPhotoSource = cardPhoto.url;
  const cardPhotoHeight = cardPhoto.details.image.height;
  const cardPhotoWidth = cardPhoto.details.image.width;
  const summary = cardContent.summary;
  // const summary =
  //   typeof cardContent.summary === "string"
  //     ? cardContent.summary
  //     : renderRichTextToReactComponent(
  //         cardContent.summary as unknown as Document,
  //       );

  const formattedDate = cardContent.date ? formatDate(cardContent.date) : "";

  const hoverClass = isHovered ? "underline underline-offset-4" : "";
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="grid h-full w-full grid-cols-3 gap-2 p-2">
      <div className="col-span-2 grid">
        <div className="flex min-h-[110px] flex-col justify-between gap-2">
          <div>
            <h3
              className={`${style.header} ${hoverClass} text-[#04577D] line-clamp-2`}>
              {title}
            </h3>
            {(type === "news" || type === "insights") && (
              <p className="line-clamp-2 text-black"> {summary}</p>
            )}
          </div>
          <div className="flex gap-6">
            {(type === "news" || type === "insights") && (
              <p className="text-xs text-[#868787] decoration-transparent">
                {cardContent.writtenBy}
              </p>
            )}
            {type !== "patient-stories" && (
              <p className="text-xs text-[#868787] decoration-transparent">
                {" "}
                {formattedDate}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="h-[110px] w-[160px] justify-self-end overflow-hidden">
        <Image
          alt={title}
          src={cardPhotoSource}
          width={cardPhotoWidth}
          height={cardPhotoHeight}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

{
  /* <div
      className={cn(style.wrapperDiv)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex">

        <h3 className={`${style.header} ${hoverClass}`}>{title}</h3>
        {summary && type === "patient-stories" ? (
          <div className={style.summary}>{summary}</div>
        ) : null}

        <div className="block h-[110px] w-[160px] border-4 border-red-500"></div>
      </div>
      <Image
        alt={title}
        src={cardPhotoSource}
        width={cardPhotoHeight}
        height={cardPhotoWidth}
        className={`${style.image} ${isHovered ? "opacity-80" : ""}`}
      />
    </div> */
}
