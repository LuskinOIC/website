import { getSpecialties } from "@/app/utils/contentful";
import SpecialtySearchArea from "./SpecialtyComponents/SpecialtySearchArea";

export default async function Specialties() {
  const specialties = await getSpecialties();

  return (
    <div>
      <SpecialtySearchArea specialties={specialties} />
    </div>
  );
}
