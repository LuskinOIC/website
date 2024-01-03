// Next components
import Image from "next/image";
// Types
import { ColumnType } from "@/app/constants/types";
import { Document } from "@contentful/rich-text-types";
// Custom components
import { TitleComponent } from "@/app/components/ui/Typography/Title";
import Button from "@/app/components/ui/Button";
import renderRichTextToReactComponent, {
  ClassNames,
} from "@/app/utils/rich-text";
import getBackgroundColor from "@/app/components/ui/BackgroundColor";
import SocialMediaSection from "../SocialMediaSection";

const descriptionClassNames: ClassNames = {
  paragraph: "py-2 leading-7 md:leading-10",
};

export default function ColumnLayout({ section }: { section: ColumnType }) {
  const orderClass = section.fields.reverseOrder ? "md:order-1" : "";
  const textPadding = section.fields.reverseOrder
    ? "px-5 md:pl-[8%] md:pr-0 lg:pl-[10%] lg:pr-[5%]"
    : "px-5 md:pr-[5%] md:pl-0 lg:pr-[10%] lg:pl-[5%]";
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
  const bgColor = section.fields.backgroundColor
    ? getBackgroundColor(section.fields.backgroundColor)
    : "white";
  const textColor =
    section.fields.backgroundColor != "white" ? "text-white" : "text-black";
  const descriptionContent = renderRichTextToReactComponent(
    section.fields.description as unknown as Document,
    descriptionClassNames,
  );
  const showTitle = section.fields.showTitle;
  return (
    <section className={`block ${bgColor}`}>
      <div className="flex flex-col md:flex-row gap-4 md:gap-x-14 items-center">
        {/* TODO: Adjust image sizing */}
        {section.fields.image && (
          <div className={`basis-1/2 ${orderClass} w-full`}>
            <Image
              className="md:rounded-l-lg"
              src={`https:${section.fields.image.fields.file.url}`}
              alt={section.fields.image.fields.description}
              width={0}
              height={section.fields.image.fields.file.details.image.height}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        )}
        <div className={`basis-1/2 px-2 ${textPadding}`}>
          <div className="grid py-5">
            <div className={`grid gap-2 ${textColor}`}>
              {showTitle && (
                <TitleComponent
                  title={section.fields.title}
                  titleSize={section.fields.titleSize}
                  luskinHeader={section.fields.luskinHeader}
                  bold={section.fields.bold}
                />
              )}
              <div className={`text-base ${descriptionFontSize()}`}>
                {descriptionContent}
              </div>
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
          </div>
          {section.fields.socialMedia && (
            <SocialMediaSection section={section.fields.socialMedia} />
          )}
        </div>
      </div>
    </section>
  );
}
