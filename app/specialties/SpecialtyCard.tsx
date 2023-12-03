// Next components
import Image from "next/image";
// Types
import { Document } from "@contentful/rich-text-types";
//Custom Components
import renderRichTextToReactComponent, {
  ClassNames,
} from "@/app/utils/rich-text";
import { Title2 } from "../components/ui/Typography/Title";
import Button from "@/app/components/ui/Button";
//Icons
import phone from "@/public/phone.svg";
import mapPin from "@/public/map-pin.svg";
import clock from "@/public/clock.svg";
import { Text2 } from "../components/ui/Typography/Text";

// TEMP IMPORT
import PhysicianCardVertical from "../physicians/physicianCards";

type Specialty = {
  id: string;
  name: string;
  description?: Document;
  buttonUrl?: string;
  buttonText?: string;
  specialistsTitle?: string;
  physicians?: any;
};

type SpecialtyCardProps = {
  specialty: Specialty;
};

const styles = {
  sectionLayout:
    "block md:grid md:grid-cols-2 md:gap-20 mx-2 md:mx-auto my-2 py-2 pl-5 pr-12 md:p-20 items-center",
  boxStyling: "border border-zinc-300 rounded shadow-md md:w-9/12 xlg:w-6/12",
};

const descriptionClassNames: ClassNames = {
  paragraph: "py-4 md:text-2xl md:leading-10",
};

export default function SpecialtyCard({ specialty }: SpecialtyCardProps) {
  const descriptionContent = renderRichTextToReactComponent(
    specialty.description as unknown as Document,
    descriptionClassNames,
  );
  specialty.buttonUrl = "/";
  return (
    <>
      <section
        key={specialty.specialistsTitle}
        className={`${styles.sectionLayout} ${styles.boxStyling}`}
      >
        <div className="md:grid md:grid-rows-3 my-5 items-center">
          <Title2 className={"md:font-bold"}> {specialty.name} </Title2>
          {descriptionContent}
          {specialty.buttonUrl && specialty.buttonText && (
            <Button
              className=""
              href={specialty.buttonUrl}
              text={specialty.buttonText}
            />
          )}
        </div>
        <div className="grid grid-rows-3 my-5">
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
            <Text2>403 West Adams Boulevard Los Angeles, CA 90007</Text2>
          </div>
        </div>

        <div className="col-span-2 flex flex-col gap-5">
          <h1 className="px-2 md:px-0 text-[#0076AD] text-xl">
            {specialty.specialistsTitle}
          </h1>

          <div className="">
            <PhysicianCardVertical />
          </div>
        </div>
      </section>
    </>
  );
}
