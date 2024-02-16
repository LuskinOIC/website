import Link from "next/link";
import { SpecialtyType } from "@/app/constants/types";

const RelatedSpecialtiesComponent = ({ relatedSpecialties }: any) => {
  // const colors = ['#FFB6C4', '#98D4C9', '#FFEEAE', '#EBBBAB', '#C9DA95', '#B99DD0', '#B9E0EB', '#C4ED4B'];
  // const colorIndex = index % colors.length;
  // const backgroundColor = colors[colorIndex];
  // console.log(backgroundColor)
  // console.log("background Color", colors)

  return (
    <div>
      {relatedSpecialties.map((specialty: SpecialtyType) => {
        return (
          <Link
            key={specialty.fields.name}
            href={`/patient-care/specialties/${specialty.fields.slug}`}
            passHref
            className={` px-4`}
          >
            {specialty.fields.name}
          </Link>
        );
      })}
    </div>
  );
};

export default RelatedSpecialtiesComponent;
