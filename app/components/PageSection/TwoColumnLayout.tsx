// Next components
import Image from "next/image";
// Types
import { PageSectionType } from "@/app/constants/types";
// Custom components
import { TitleComponent } from "@/app/components/ui/Typography/Title";
import { Text1 } from "../ui/Typography/Text";
import Button from "../ui/Button";

const styles = {
  pageSectionContent: "grid gap-2",
  actionButton:
    "block mx-auto text-center w-full bg-blue-500 rounded text-white p-2",
};

export default function ColumnLayout({
  section,
}: {
  section: PageSectionType;
}) {
  const orderClass = section.fields.reverseOrder ? "md:order-1" : "";

  return (
    <section
      className={`grid md:grid-cols-2 md:gap-14 px-6 md:px-0 py-3 md:py-10`}
    >
      {section.fields.image && (
        <div className={`col-span-1 ${orderClass} flex justify-center h-auto`}>
          <Image
            className="fill-inherit"
            src={`https:${section.fields.image.fields.file.url}`}
            alt={section.fields.image.fields.description}
            sizes="100vw"
            width={0}
            height={section.fields.image.fields.file.details.image.height}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      )}

      <div className="col-span-1 grid gap-2 md:px-40 py-9 md:py-40">
        <div className={styles.pageSectionContent}>
          <TitleComponent
            title={section.fields.title}
            bold={section.fields.bold}
            titleSize="Large"
          />
          <Text1>{section.fields.description}</Text1>
          <Text1>{section.fields.backgroundColor}</Text1>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 pt-5">
          {section.fields.actionUrl && (
            <Button
              href={section.fields.actionUrl}
              text={section.fields.actionText}
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
    </section>
  );
}
