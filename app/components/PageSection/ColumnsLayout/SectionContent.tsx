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
  paragraph: "py-2 md:py-4 text-base md:text-lg",
};

const SectionContent = ({ section }: SectionContentProps) => {
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
          <div>{descriptionContent}</div>
        </div>
        {section.fields.buttons && (
          <div className="grid grid-cols-2 gap-2">
            {section.fields.buttons.map((button) => (
              <Button
                className="block grid-span-1 w-full text-center gap-2"
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
