// Next components
import Image from "next/image";
import Link from "next/link";
// Types
import { PageSectionType } from "@/app/constants/types";
// Custom components
import { TitleComponent } from "@/app/components/ui/Typography/Title";

const styles = {
  pageSectionContent: "",
  actionButton:
    "block mx-auto text-center w-full bg-blue-500 rounded text-white p-2",
};

export default function ColumnLayout({
  section,
}: {
  section: PageSectionType;
}) {
  const orderClass = section.fields.reverseOrder ? "order-1" : "";

  return (
    <section className="grid grid-cols-2 gap-20">
      <div className={`col-span-1 ${orderClass}`}>
        {section.fields.image && (
          <Image
            className="float-right"
            src={`https:${section.fields.image.fields.file.url}`}
            alt={section.fields.image.fields.description}
            width={section.fields.image.fields.file.details.image.width}
            height={section.fields.image.fields.file.details.image.height}
          />
        )}
      </div>

      <div className="col-span-1">
        <div className={styles.pageSectionContent}>
          <TitleComponent
            title={section.fields.title}
            bold={section.fields.bold}
            titleSize={section.fields.titleSize}
          />
          <p>{section.fields.description}</p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {section.fields.actionUrl && (
            <Link
              className={styles.actionButton}
              href={section.fields.actionUrl}
            >
              {section.fields.actionText}
            </Link>
          )}
          {section.fields.secondaryActionUrl && (
            <Link
              className={styles.actionButton}
              href={section.fields.secondaryActionUrl}
            >
              {section.fields.secondaryActionText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
