// Next components
import Image from "next/image";
// Types
import { PageSectionType } from "@/app/constants/types";
// Custom components
import { Title1 } from "@/app/components/ui/Typography/Title";
import { Text1 } from "../ui/Typography/Text";
import Button from "../ui/Button";

export default function ColumnLayout({
  section,
}: {
  section: PageSectionType;
}) {
  const orderClass = section.fields.reverseOrder ? "md:order-1" : "";
  const bgColor = `bg-luskin-${section.fields.backgroundColor}`;
  const textColor =
    section.fields.backgroundColor !== "white" ? "text-white" : "text-black";

  return (
    <section
      className={`block ${bgColor} grid md:grid-cols-2 md:gap-14 px-6 md:px-0 py-3 md:py-0`}
    >
      {/* TODO: Adjust image sizing */}
      {section.fields.image && (
        <div className={`col-span-1 ${orderClass} flex justify-center h-fit`}>
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
      {/* TODO: Adjust letter spacing, + Patient Care header order */}
      <div className="col-span-1 grid gap-2 md:px-16 py-9 md:py-40">
        <div className={`grid gap-2 ${textColor}`}>
          <Title1>{section.fields.title}</Title1>
          <Text1>{section.fields.description}</Text1>
        </div>
        {/* TODO: Provide text button option */}
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
