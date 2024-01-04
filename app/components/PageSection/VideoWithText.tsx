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

export default function VideoWithText({ section }: { section: ColumnType }) {
  const orderClass = section.fields.reverseOrder ? "md:order-1" : "";
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
    <section className={`block ${bgColor} py-5 md:py-10`}>
      <div className="md:w-4/5 md:mx-auto flex flex-col md:flex-row gap-4 md:gap-x-14 items-center">
        <div className={`w-full md:basis-1/2 ${orderClass} `}>
          {section.fields.video && (
            <div className="aspect-video">
              <iframe
                src={section.fields.video}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture allowFullscreen"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          )}
        </div>
        <div className="basis-1/2">
          <div className="grid px-5 py-5">
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
