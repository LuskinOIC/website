// Next components
import Image from "next/image";
// Types
import { ColumnType } from "@/app/constants/types";
import { Document } from "@contentful/rich-text-types";
//Local Components
import { TitleComponent } from "../../ui/Typography/Title";
import Button from "@/app/components/ui/Button";
import renderRichTextToReactComponent, {
  ClassNames,
} from "@/app/utils/rich-text";
import getBackgroundColor from "@/app/components/ui/BackgroundColor";

export default function FullWidthImageLayout({
  section,
}: {
  section: ColumnType;
}) {
  const bgColor = section.fields.backgroundColor
    ? getBackgroundColor(section.fields.backgroundColor)
    : "white";
  const textColor =
    section.fields.backgroundColor != "white" ? "text-white" : "text-black";
  const descriptionClassNames: ClassNames = {
    paragraph: "py-2 md:py-4 text-base md:text-lg",
  };
  const descriptionContent = renderRichTextToReactComponent(
    section.fields.description as unknown as Document,
    descriptionClassNames,
  );
  return (
    <section
      className={`grid gap-3 md:gap-5 ${bgColor} ${textColor} w-full items-center px-5 md:px-32 py-5`}
    >
      {section.fields.image && (
        <div className="justify-self-center">
          <Image
            className=""
            src={`https:${section.fields.image.fields.file.url}`}
            alt={section.fields.image.fields.description}
            width={section.fields.image.fields.file.details.image.width}
            height={section.fields.image.fields.file.details.image.height}
          />
        </div>
      )}
      {section.fields.showTitle && (
        <TitleComponent
          title={section.fields.title}
          titleSize={section.fields.titleSize}
          luskinHeader={section.fields.luskinHeader}
          bold={section.fields.bold}
        />
      )}
      {section.fields.description && (
        <div className={`grid gap-2 md:gap-5 text-base md:text-lg leading-7`}>
          {descriptionContent}
        </div>
      )}
      {section.fields.buttons && (
        <div className="flex flex-col w-full md:flex-row md:justify-between gap-2">
          {section.fields.buttons.map((button) => (
            <Button
              key={button.sys.id}
              href={button.fields.buttonUrl}
              isExternal={button.fields.externalLink}
              text={button.fields.text}
              variant={button.fields.type}
            />
          ))}
        </div>
      )}
      {section.fields.video && (
        <div className="aspect-video">
          <iframe
            title={section.fields.title}
            src={section.fields.video}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      )}
    </section>
  );
}
