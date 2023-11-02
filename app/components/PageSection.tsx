import { PageSectionType } from "@/app/constants/types";
import Image from "next/image";

export default function PageSection({ section }: { section: PageSectionType }) {
  const orderClass = section.fields.reverseOrder ? "order-1" : "";
  const backgroundClass = section.fields.backgroundColor
    ? `bg-${section.fields.backgroundColor}-500`
    : "";

  if (section.fields.slides) {
    const slide = section.fields.slides[0];
    return (
      <section>
        <Image
          src={`https:${slide.fields.image.fields.file.url}`}
          alt={slide.fields.image.fields.description}
          width={slide.fields.image.fields.file.details.image.width}
          height={slide.fields.image.fields.file.details.image.height}
        />
      </section>
    );
  }

  return (
    <section className={`grid grid-cols-2 gap-20 ${backgroundClass}`}>
      <div className={`col-span-1 ${orderClass}`}>
        <h3>{section.fields.title}</h3>
        <p>{section.fields.description}</p>
        <a href={section.fields.actionUrl}>{section.fields.actionText}</a>
      </div>
      <div className="col-span-1">
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
    </section>
  );
}
