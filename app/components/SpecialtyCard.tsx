// Types
import { Document } from "@contentful/rich-text-types";
//Custom Components
import { renderRichTextToReactComponent } from "../utils/rich-text";
import { TitleComponent } from "./ui/Typography/Title";

type Specialty = {
  id: string;
  name: string;
  description?: Document;
};

type SpecialtyCardProps = {
  specialty: Specialty;
};

const styles = {
  sectionLayout:
    "grid gap-5 pl-5 md:grid-cols-2 gap-2 md:gap-20 mx-2 md:mx-auto my-5 md:my-10 md:p-20",
  boxStyling: "border border-zinc-300 rounded shadow-md md:w-9/12 xlg:w-6/12",
};

export default function SpecialtyCard({ specialty }: SpecialtyCardProps) {
  const descriptionContent =
    specialty.description &&
    renderRichTextToReactComponent(specialty.description);

  return (
    <section className={`${styles.sectionLayout} ${styles.boxStyling}`}>
      <TitleComponent title={specialty.name} titleSize={"Title Medium"} />
      {descriptionContent}
    </section>
  );
}
