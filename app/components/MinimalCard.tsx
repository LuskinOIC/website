import Image from "next/image";
import { Document } from "@contentful/rich-text-types";
import { MinimalCardType } from "@/app/constants/types";
import renderRichTextToReactComponent from "../utils/rich-text";

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

  return (
    <div className="w-64">
      <Image
        alt={title}
        key={cardContent.cardPhoto.sys.id}
        src={cardPhotoSource}
        width={cardPhotoHeight}
        height={cardPhotoWidth}
        className="rounded-xl"
      />
      <h3>{title}</h3>
      {summary ? <div>{summary}</div> : null}
    </div>
  );
}
