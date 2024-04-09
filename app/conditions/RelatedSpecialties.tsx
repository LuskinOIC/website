import Link from "next/link";
import { SPECIALTY_COLORS } from "@/app/constants/specialtyColors";
import { SpecialtyType } from "@/app/constants/types";
import translations from "@/public/locales/en.json";

const styles = {
  container:
    "flex flex-col gap-4 md:gap-0 md:flex-row md:items-center pt-6 md:space-x-2",
  defaultBgColor: "#D3D3D3",
  linkContainer: "hover:underline px-4 py-1 text-black rounded-full",
};

const RelatedSpecialtiesComponent = ({
  relatedSpecialties,
}: {
  relatedSpecialties: SpecialtyType[];
}) => {
  return (
    <div className={styles.container}>
      <p>{translations.healthInformationLibrary.relatedSpecialtiesHeading}</p>
      {relatedSpecialties.map((specialty) => {
        const backgroundColor =
          SPECIALTY_COLORS[specialty.fields.slug] || styles.defaultBgColor;
        return (
          <Link
            key={specialty.fields.name}
            href={`/patient-care/specialties/${specialty.fields.slug}`}
            passHref
            style={{ backgroundColor }}
            className={styles.linkContainer}
          >
            {specialty.fields.name}
          </Link>
        );
      })}
    </div>
  );
};

export default RelatedSpecialtiesComponent;
