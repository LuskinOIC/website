import { PageSectionType } from '@/constants/types';
import Image from 'next/image';

export default function PageSection({ section } : { section: PageSectionType }) {
  const orderClass = section.fields.reverseOrder ? "order-1" : "";

  return (
    <section className="grid grid-cols-2 py-10">
      <div className={`col-span-1 ${orderClass}`}>
        <h3>{section.fields.title}</h3>
        <p>{section.fields.description}</p>
        <a href={section.fields.actionUrl}>
          {section.fields.actionText}
        </a>
      </div>
      <div className="col-span-1">
        {section.fields.image && (
          <Image
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