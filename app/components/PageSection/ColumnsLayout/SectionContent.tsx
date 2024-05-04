import { Document } from "@contentful/rich-text-types";
import { TitleComponent } from "@/app/components/ui/Typography/Title";
import Button from "@/app/components/ui/Button";
import SocialMediaSection from "@/app/components/SocialMediaSection";
import renderRichTextToReactComponent, {
  ClassNames,
} from "@/app/utils/rich-text";
import { ColumnType } from "@/app/constants/types";
import { Text } from "@/app/components/ui/Typography/Text";
interface SectionContentProps {
  section: ColumnType;
}

const SectionContent = ({ section }: SectionContentProps) => {
  const textColor =
    section.fields.backgroundColor === "purple" ||
    section.fields.backgroundColor === "blue"
      ? "text-white"
      : "text-black";
  const descriptionClassNames: ClassNames = {
    paragraph: "py-2 md:py-4 text-base md:text-lg",
  };
  const descriptionContent = renderRichTextToReactComponent(
    section.fields.description as unknown as Document,
    descriptionClassNames
  );
  const showTitle = section.fields.showTitle;

  return (
    <>
      <div className="grid">
        <div className={`grid gap-2 ${textColor}`}>
          {showTitle && (
            <TitleComponent
              title={section.fields.title}
              titleSize={section.fields.titleSize}
              luskinHeader={section.fields.luskinHeader}
              bold={section.fields.bold}
            />
          )}
          {section.fields.subHeader && <Text>{section.fields.subHeader}</Text>}
          {section.fields.description && <div>{descriptionContent}</div>}
        </div>
        {section.fields.buttons && (
          <div className="flex flex-wrap md:flex-nowrap gap-3 py-4">
            {section.fields.buttons.map((button) => (
              <Button
                className="w-full sm:w-auto text-center gap-2"
                key={button.sys.id}
                href={button.fields.buttonUrl}
                isExternal={button.fields.externalLink}
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
