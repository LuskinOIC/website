// Types
import { SpecialtyType } from "../../constants/types";
//Custom Components
import renderRichTextToReactComponent from "../../utils/rich-text";
import { TitleComponent } from "../../components/ui/Typography/Title";
import SpecialtyHoursLayout from "./SpecialtyHoursLayout";
import Button from "@/app/components/ui/Button";
import PhysicianList from "@/app/components/PhysicianList";

type SpecialtyCardProps = {
  specialty: SpecialtyType;
};

const styles = {
  sectionLayout: "grid gap-2 md:gap-5 mx-2 md:mx-auto my-5 p-5 md:p-10",
  boxStyling: "border border-zinc-300 rounded shadow-md md:w-4/5",
};

export default function SpecialtyCard({ specialty }: SpecialtyCardProps) {
  const { name, description, location, slug, physicians } = specialty.fields;

  const descriptionContent =
    description && renderRichTextToReactComponent(description);

  return (
    <section className={`${styles.sectionLayout} ${styles.boxStyling}`}>
      <TitleComponent title={name} titleSize={"Title Medium"} bold={true} />
      <div className="flex flex-col md:flex-row gap-5">
        <div className="basis-1/2">
          {descriptionContent}
          <Button
            className="my-3"
            href={`${slug}`}
            text="LEARN MORE"
            variant="blue"
            isExternal={false}
          />
        </div>
        <div className="basis-1/2">
          <SpecialtyHoursLayout locationContent={location} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        {physicians && (
          <PhysicianList
            specialistsTitle={specialty.fields.specialistsTitle}
            physicians={specialty.fields.physicians}
            className=""
          />
        )}
      </div>
    </section>
  );
}
