// Next components
import Image from "next/image";
// Types

// Custom components
import { TitleComponent } from "@/app/components/ui/Typography/Title";
import renderRichTextToReactComponent from "@/app/utils/rich-text";
import Button from "@/app/components/ui/Button";
import { Text1, Text2 } from "@/app/components/ui/Typography/Text";
//Icons
import phone from "@/public/phone.svg";
import mapPin from "@/public/map-pin.svg";
import clock from "@/public/clock.svg";

const styles = {
  sectionLayout:
    "grid md:grid-cols-2 gap-2 md:gap-20 mx-2 md:mx-auto my-5 md:my-10 md:p-20",
  boxStyling: "border border-zinc-300 rounded shadow-md md:w-9/12 xlg:w-6/12",
};

type Specialty = {
  name: string;
  description?: any;
  image?: any;
  englishFormUrl?: string;
  spanishFormUrl?: string;
};
type SpecialtyCardProps = {
  specialty: Specialty;
};

export default function UrgentCareCard({ specialty }: SpecialtyCardProps) {
  const { name, description, image, englishFormUrl, spanishFormUrl } =
    specialty;

  const { title: imageTitle, file: imageFile } = image.fields;

  const descriptionContent =
    description && renderRichTextToReactComponent(description);

  const walkIns = <Text1>Walk-ins welcome. No appointment necessary.</Text1>;

  const cardContent = () => {
    return (
      <div className="grid gap-4 md:gap-5 justify-items-start pl-5 pr-12 py-6 md:py-0">
        <TitleComponent title={name} titleSize={"Title Medium"} />
        <div className="md:text-xl">{descriptionContent}</div>
        <Button className="my-3" href="/" text="SAVE MY SPOT" />
        <div className="flex flex-col gap-3">
          <div className="flex place-items-center gap-5">
            <div className="relative hidden md:block ">
              <Image
                src={clock}
                alt="clock"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <Text2>
              Monday - Friday: 8am - 4pm
              <br />
              Closed: Saturday and Sunday
            </Text2>
          </div>
          <div className="block md:hidden">{walkIns}</div>
          <div className="flex place-items-center gap-5">
            <div className="relative">
              <Image
                src={phone}
                alt="phone"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <Text2>(213) 742-1162</Text2>
          </div>
          <div className="flex place-items-center gap-5">
            <div className="relative">
              <Image
                src={mapPin}
                alt="mapPin"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <Text2>
              403 West Adams Boulevard
              <br />
              Los Angeles, CA 90007
            </Text2>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className={`${styles.sectionLayout} ${styles.boxStyling}`}>
      <div className="order-last md:order-first">{cardContent()}</div>
      {/* desktop image section */}
      <div className="hidden md:grid grid-rows-5 gap-5">
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
        <div className="hidden md:flex flex-col gap-5 row-span-2">
          {walkIns}
          <a
            href={englishFormUrl}
            target="_blank"
            className="underline text-base md:text-2xl font-arial leading-150 "
          >
            Urgent Care Registration Form - English
          </a>
          <a
            href={spanishFormUrl}
            target="_blank"
            className="underline text-base md:text-2xl font-arial leading-150 "
          >
            Urgent Care Registration Form - Spanish
          </a>
        </div>
      </div>
      {/* mobile image section */}
      <div className="block md:hidden">
        {imageFile.url && (
          <div className="w-full md:hidden">
            <Image
              src={`https:${imageFile.url}`}
              alt={imageTitle}
              sizes="100vw"
              width={0}
              height={0}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
}

// To DO:
// -Correct type declarations
