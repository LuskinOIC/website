import { getSpecialties } from "@/app/utils/contentful";
import SpecialtySearchArea from "./SpecialtyComponents/SpecialtySearchArea";

export default async function Specialties() {
  const specialties = await getSpecialties();

  return (
    <main>
      <SpecialtySearchArea specialties={specialties} />
    </main>
  );
}
