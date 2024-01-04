import { Document } from "@contentful/rich-text-types";
import { TitleComponent } from "@/app/components/ui/Typography/Title";
import Button from "@/app/components/ui/Button";
import SocialMediaSection from "../../SocialMediaSection";
import renderRichTextToReactComponent, {
  ClassNames,
} from "@/app/utils/rich-text";
import { ColumnType } from "@/app/constants/types";

interface SectionContentProps {
  section: ColumnType;
}
const descriptionClassNames: ClassNames = {
  paragraph: "py-2 leading-7 md:leading-10",
};

const SectionContent = ({ section }: SectionContentProps) => {
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

  const textColor =
    section.fields.backgroundColor != "white" ? "text-white" : "text-black";
  const descriptionContent = renderRichTextToReactComponent(
    section.fields.description as unknown as Document,
    descriptionClassNames,
  );
  const showTitle = section.fields.showTitle;

  return (
    <>
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
    </>
  );
};

export default SectionContent;
