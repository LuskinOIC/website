// Types
import { SpecialtyType } from "../../constants/types";
//Custom Components
import renderRichTextToReactComponent from "../../utils/rich-text";
import { TitleComponent } from "../../components/ui/Typography/Title";

type SpecialtyCardProps = {
  specialty: SpecialtyType;
};

const styles = {
  sectionLayout:
    "grid gap-5 pl-5 md:grid-cols-2 gap-2 md:gap-20 mx-2 md:mx-auto my-5 md:my-10 md:p-20",
  boxStyling: "border border-zinc-300 rounded shadow-md md:w-9/12 xlg:w-6/12",
};

export default function SpecialtyCard({ specialty }: SpecialtyCardProps) {
  const descriptionContent =
    specialty.fields.description &&
    renderRichTextToReactComponent(specialty.fields.description);

  return (
    <section className={`${styles.sectionLayout} ${styles.boxStyling}`}>
      <TitleComponent
        title={specialty.fields.name}
        titleSize={"Title Medium"}
      />
      {descriptionContent}
    </section>
  );
}
