// LOCAL COMPONENTS
import { getPhysicians } from "@/app/utils/contentful";
// TYPES
import { PhysicianBioType } from "@/app/constants/types";
import SearchAreaPhysicians from "../components/SearchAreaPhysicians";

export default async function Physicians() {
  const physicians = (await getPhysicians()) as unknown as PhysicianBioType[];

  return (
    <main>
      <SearchAreaPhysicians physicians={physicians} />
    </main>
  );
}
