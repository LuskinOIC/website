import { getSpecialties } from "@/app/utils/contentful";
import { SpecialtyTypeProps } from "@/app/constants/types";
// import FullCardLayout from "@/app/components/PageSection/FullCardLayout";
import SearchBar from "@/app/components/ui/SearchBar";
import UrgentCareCard from "../components/UrgentCareCard";

export default async function Specialties() {
  const specialties = await getSpecialties();

  return (
    <main>
      <SearchBar />
      {specialties.map((specialty: SpecialtyTypeProps) =>
        specialty.type == "Urgent Care Card" ? (
          specialty && (
            <UrgentCareCard specialty={specialty} key={specialty.id} />
          )
        ) : (
          <div key={specialty.id}>HELLLOOOo</div>
        ),
      )}
    </main>
  );
}
