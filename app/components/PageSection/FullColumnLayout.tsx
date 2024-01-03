// Next components
import Image from "next/image";
// Types
import { ColumnType } from "@/app/constants/types";
import { Document } from "@contentful/rich-text-types";
//Local Components
import { TitleComponent } from "../ui/Typography/Title";
import Button from "../ui/Button";
import renderRichTextToReactComponent from "@/app/utils/rich-text";
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
  const descriptionContent = renderRichTextToReactComponent(
    section.fields.description as unknown as Document,
  );
  const descriptionFontSize = () => {
    const fontSizeMap = {
      large: "md:text-2xl",
      medium: "md:text-xl",
      small: "md:text-lg",
    };

    return section.fields.descriptionFontSize
      ? fontSizeMap[section.fields.descriptionFontSize]
      : "md:text-lg";
  };
  return (
    <section
      className={`grid gap-2 md:gap-5 ${bgColor} ${textColor} w-full items-center px-5 md:px-40 py-10  `}
    >
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
      {section.fields.showTitle && (
        <TitleComponent
          title={section.fields.title}
          titleSize={section.fields.titleSize}
          luskinHeader={section.fields.luskinHeader}
          bold={section.fields.bold}
        />
      )}
      <div className={`grid gap-2 md:gap-5 ${descriptionFontSize()}`}>
        {descriptionContent}
      </div>
      {section.fields.buttons && (
        <div className="flex flex-col w-full md:flex-row md:justify-between gap-2 py-5">
          {section.fields.buttons.map((button) => (
            <Button
              key={button.sys.id}
              href={button.fields.buttonUrl}
              text={button.fields.text}
              variant={button.fields.type}
            />
          ))}
        </div>
      )}
    </section>
  );
}
