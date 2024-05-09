// Next components
import Image from "next/image";
// Types
import { SpecialtyType } from "@/app/constants/types";
// Custom components
import { TitleComponent } from "@/app/components/ui/Typography/Title";
import renderRichTextToReactComponent from "@/app/utils/rich-text";
import Button from "@/app/components/ui/Button";
import { Text } from "@/app/components/ui/Typography/Text";
import { SAVE_MY_SPOT } from "@/app/constants/links";
import SpecialtyHoursLayout from "./SpecialtyHoursLayout";
import translations from "@/public/locales/en.json";

const styles = {
  sectionLayout:
    "grid min-[1020px]:grid-cols-2 gap-2 min-[1020px]:gap-12 p-6 min-[1020px]:p-12",
  boxStyling: "border border-zinc-300 rounded shadow-md",
};

type SpecialtyCardProps = {
  specialty: SpecialtyType;
};

export default function UrgentCareCard({ specialty }: SpecialtyCardProps) {
  const { name, description, image, englishFormUrl, spanishFormUrl, location } =
    specialty.fields;

  const { title: imageTitle, file: imageFile } = image.fields;

  const descriptionContent =
    description && renderRichTextToReactComponent(description);

  const walkIns = <Text>{translations.urgentCareCard.walkinsWelcome}</Text>;

  const cardContent = () => {
    return (
      <div className="grid gap-4 min-[1020px]:gap-5 justify-items-start min-[1020px]:py-0">
        <TitleComponent
          title={name}
          titleSize={"Medium"}
          bold={true}
          className=""
        />
        <div className="grid gap-4 text-base min-[1020px]:text-lg">
          {descriptionContent}
        </div>
        <Button
          className="my-5 min-[1020px]:my-3 w-full mx-auto min-[1020px]:w-auto min-[1020px]:mx-0"
          href={SAVE_MY_SPOT}
          text="SAVE MY SPOT"
          variant="purple"
          isExternal={true}
        />
        <div className="grid min-[1020px]:grid-cols-2 gap-6">
          <Button
            className="text-black bold"
            href={"/patient-care/specialties/urgent-care"}
            text="For Patients"
            variant="text"
            isExternal={false}
          />
          <Button
            className="text-black bold"
            href={"/medical-professionals/specialties/urgent-care"}
            text="For Physicians"
            variant="text"
            isExternal={false}
          />
        </div>
        <div className="block min-[1020px]:hidden">{walkIns}</div>
        <SpecialtyHoursLayout locationContent={location} />
      </div>
    );
  };

  return (
    <section
      className={`${styles.sectionLayout} ${styles.boxStyling} bg-white`}
    >
      <div className="order-last min-[1020px]:order-first">{cardContent()}</div>
      {/* desktop image section */}
      <div className="hidden min-[1020px]:grid grid-rows-5 gap-5">
        {imageFile.url && (
          <div className="relative w-full row-span-3 mb-6">
            <Image
              className="rounded"
              src={`https:${imageFile.url}`}
              alt={imageTitle}
              style={{ objectFit: "cover" }}
              fill
            />
          </div>
        )}
        <div className="min-[1020px]:flex flex-col gap-5 row-span-2">
          {walkIns}
          <a
            href={englishFormUrl}
            target="_blank"
            className="underline text-base min-[1020px]:text-lg font-arial leading-150 "
          >
            {translations.urgentCareCard.englishRegistrationFormText}
          </a>
          <a
            href={spanishFormUrl}
            target="_blank"
            className="underline text-base min-[1020px]:text-lg font-arial leading-150 "
          >
            {translations.urgentCareCard.spanishRegistrationFormText}
          </a>
        </div>
      </div>
      {/* mobile image section */}
      <div className="block min-[1020px]:hidden">
        {imageFile.url && (
          <div className="w-full min-[1020px]:hidden">
            <Image
              src={`https:${imageFile.url}`}
              alt={imageTitle}
              width={imageFile.details.image.width}
              height={imageFile.details.image.height}
              style={{ width: "100%", maxHeight: "260px", objectFit: "fill" }}
            />
          </div>
        )}
      </div>
    </section>
  );
}
