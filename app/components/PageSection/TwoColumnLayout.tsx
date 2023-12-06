// Next components
import Image from "next/image";
// Types
import { PageSectionType } from "@/app/constants/types";
import { Document } from "@contentful/rich-text-types";
// Custom components
import { TitleComponent } from "@/app/components/ui/Typography/Title";
import Button from "@/app/components/ui/Button";
import renderRichTextToReactComponent, {
  ClassNames,
} from "@/app/utils/rich-text";

const descriptionClassNames: ClassNames = {
  paragraph: "py-4 leading-7 md:leading-10",
};

export default function ColumnLayout({
  section,
}: {
  section: PageSectionType;
}) {
  const orderClass = section.fields.reverseOrder ? "md:order-1" : "";
  const textPadding = section.fields.reverseOrder
    ? "md:pl-[10%] md:pr-10"
    : "md:pr-[10%] md:pl-10";
  const descriptionTextSize = !section.fields.descriptionTextSize
    ? "md:text-xl"
    : "md:text-2xl";
  // NOTE: For some reason the tailwind them class bg-luskin-blue is not working
  // for dynamically generated classes. This is a temporary fix.
  const bgColor =
    section.fields.backgroundColor === "blue" ? "bg-[#0076AD]" : "bg-white";
  const textColor =
    section.fields.backgroundColor === "blue" ? "text-white" : "text-black";

  const descriptionContent = renderRichTextToReactComponent(
    section.fields.description as unknown as Document,
    descriptionClassNames,
  );
  return (
    <section className={`block ${bgColor} md:my-10`}>
      <div className="flex flex-col md:flex-row gap-4 md:gap-x-14 items-center">
        {/* TODO: Adjust image sizing */}
        {section.fields.image && (
          <div className={`basis-1/2 ${orderClass}`}>
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
          <div className="grid md:gap-4 mx-2 px-3 py-5 md:py-40">
            <div className={`grid gap-2 ${textColor}`}>
              <TitleComponent
                title={section.fields.title}
                titleSize={section.fields.titleSize}
              />
              <div className={`text-base ${descriptionTextSize}`}>
                {descriptionContent}
              </div>
            </div>
            <div className="flex flex-col w-full md:flex-row md:justify-between gap-4 md:gap-6">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
