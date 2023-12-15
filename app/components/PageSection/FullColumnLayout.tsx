// Next components
import Image from "next/image";
// Types
import { PageSectionType } from "@/app/constants/types";
import { Document } from "@contentful/rich-text-types";
//Local Components
import { TitleComponent } from "../ui/Typography/Title";
import Button from "../ui/Button";
import renderRichTextToReactComponent from "@/app/utils/rich-text";
import getBackgroundColor from "@/app/components/ui/BackgroundColor";

export default function FullWidthImageLayout({
  section,
}: {
  section: PageSectionType;
}) {
  const bgColor = getBackgroundColor(section.fields.backgroundColor);
  const descriptionContent = renderRichTextToReactComponent(
    section.fields.description as unknown as Document,
  );
  return (
    <section className={`block ${bgColor} w-full`}>
      {section.fields.image && (
        <div className="">
          <Image
            className=""
            src={`https:${section.fields.image.fields.file.url}`}
            alt={section.fields.image.fields.description}
            width={section.fields.image.fields.file.details.image.width}
            height={section.fields.image.fields.file.details.image.height}
          />
        </div>
      )}
      <TitleComponent
        title={section.fields.title}
        titleSize={section.fields.titleSize}
        titleStyle={section.fields.titleStyle}
        bold={section.fields.bold}
      />
      <div>{descriptionContent}</div>
      {section.fields.actionUrl && (
        <Button
          href={section.fields.actionUrl}
          text={section.fields.actionText}
          variant={section.fields.buttonStyle}
        />
      )}
      {section.fields.secondaryActionUrl && (
        <Button
          href={section.fields.secondaryActionUrl}
          text={section.fields.secondaryActionText}
        />
      )}
    </section>
  );
}
