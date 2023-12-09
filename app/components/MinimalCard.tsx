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
export default function MinimalCard({
  cardContent,
  styleProps,
}: {
  cardContent: MinimalCardType;
  styleProps?: StylePropsType;
}) {
  const title = cardContent.title;
  const cardPhoto = cardContent.cardPhoto.fields.file;
  const cardPhotoSource = cardPhoto.url;
  const cardPhotoHeight = cardPhoto.details.image.height;
  const cardPhotoWidth = cardPhoto.details.image.width;
  const summary = renderRichTextToReactComponent(
    cardContent.summary as unknown as Document,
  );

  return (
    <div className={styleProps?.wrapperDiv}>
      <Image
        alt={title}
        key={cardContent.cardPhoto.sys.id}
        src={cardPhotoSource}
        width={cardPhotoHeight}
        height={cardPhotoWidth}
        className={styleProps?.image}
      />
      <h3 className={styleProps?.header}>{title}</h3>
      {summary ? <div className={styleProps?.summary}>{summary}</div> : null}
    </div>
  );
}
