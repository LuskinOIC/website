import { getSpecialties } from "@/app/utils/contentful";
import SpecialtySearchArea from "./SpecialtyComponents/SpecialtySearchArea";
import PageSectionContainer from "@/app/components/PageSection/PageSectionContainer";

export default async function Specialties() {
  const specialties = await getSpecialties();

  return (
    <PageSectionContainer>
      <SpecialtySearchArea specialties={specialties} />
    </PageSectionContainer>
  );
}
