// LOCAL COMPONENTS
import { getPhysicians } from "@/app/utils/contentful";
// TYPES
import { PhysicianBioType } from "@/app/constants/types";
import PageSectionContainer from "@/app/components/PageSection/PageSectionContainer";
import PhysicianSearchArea from "@/app/physicians/PhysicianComponents/PhysicianSearchArea";

export default async function Physicians() {
  const physicians = (await getPhysicians()) as unknown as PhysicianBioType[];

  return (
    <PageSectionContainer>
      <PhysicianSearchArea physicians={physicians} />
    </PageSectionContainer>
  );
}
