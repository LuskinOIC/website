import { TitleComponent } from "@/app/components/ui/Typography/Title";
import Button from "@/app/components/ui/Button";
import { ColumnType } from "@/app/constants/types";

interface SectionContentProps {
  section: ColumnType;
}

const ButtonGroup = ({ section }: SectionContentProps) => {
  const textColor =
    section.fields.backgroundColor === "purple" ||
    section.fields.backgroundColor === "blue"
      ? "text-white"
      : "text-black";
  const showTitle = section.fields.showTitle;

  return (
    <div className="grid justify-center w-full items-center px-5">
      <div className={`grid gap-2 ${textColor} text-center`}>
        {showTitle && (
          <TitleComponent
            title={section.fields.title}
            titleSize={section.fields.titleSize}
            luskinHeader={section.fields.luskinHeader}
            bold={section.fields.bold}
          />
        )}
      </div>
      <div className="justify-items-center">
        {section.fields.buttons && (
          <div className="flex flex-wrap md:flex-nowrap gap-3">
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
    </div>
  );
};

export default ButtonGroup;
