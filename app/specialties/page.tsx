import { getSpecialties } from "@/app/utils/contentful";
import { SpecialtyTypeProps } from "@/app/constants/types";
import SearchBar from "@/app/components/ui/SearchBar";

export default async function Specialties() {
  const specialties = await getSpecialties();

  return (
    <main>
      <SearchBar />
      {specialties.map((specialty: SpecialtyTypeProps) =>
        specialty.name == "Pediatric Orthopedic Urgent Care" ? (
          specialty && <div>Urgent Care Card</div>
        ) : (
          <div key={specialty.id}>Individual Specialty Card</div>
        ),
      )}
    </main>
  );
}
