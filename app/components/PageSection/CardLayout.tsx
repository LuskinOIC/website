import { TitleComponent } from "@/app/components/ui/Typography/Title";
import Image from "next/image";

const styles = {
  pageSectionContent: "",
  actionButton:
    "block mx-auto text-center w-full bg-blue-500 rounded text-white p-2",
};

export default function CardLayout({ section }: { section: PageSectionType }) {
  return (
    <section className="grid grid-cols-2 gap-20 border rounded shadow-md w-4/5 mx-auto my-10 p-20">
      <div className="col-span-1">
        <div className={styles.pageSectionContent}>
          <TitleComponent
            title={section.fields.title}
            bold={section.fields.bold}
            titleSize={section.fields.titleSize}
          />

          <p>{section.fields.description}</p>
        </div>
      </div>

      <div className="col-span-1">
        {section.fields.image && (
          <div className="w-full mx-auto">
            <Image
              className="mx-auto"
              src={`https:${section.fields.image.fields.file.url}`}
              alt={section.fields.image.fields.description}
              width={section.fields.image.fields.file.details.image.width}
              height={section.fields.image.fields.file.details.image.height}
            />
          </div>
        )}
      </div>
    </section>
  );
}
