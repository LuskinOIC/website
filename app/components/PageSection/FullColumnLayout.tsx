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
  const descriptionContent = renderRichTextToReactComponent(
    section.fields.description as unknown as Document,
  );
  return (
    <section className={`block ${bgColor} w-full text-white items-center px-10 py-10 `}>
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
        luskinHeader={section.fields.luskinHeader}
        bold={section.fields.bold}
      />
      <div className="text-white w-full  items-center px-10 py-10 ">{descriptionContent}</div>
      <div className="flex flex-col w-full md:flex-row md:justify-between gap-2 py-5 ">
        {section.fields.buttons &&
          section.fields.buttons.map((button) => (
            <Button
              key={button.sys.id}
              href={button.fields.buttonUrl}
              text={button.fields.text}
              variant={button.fields.type}
            />
          ))}
      </div>
    </section>
  );
}
