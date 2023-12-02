import { getSpecialties } from "@/app/utils/contentful";
import SearchBar from "@/app/components/ui/SearchBar";
import UrgentCareCard from "@/app/components/UrgentCareCard";
import SpecialtyCard from "./SpecialtyCard";

export default async function Specialties() {
  const specialties = await getSpecialties();

  return (
    <main>
      <SearchBar />
      <div className="grid">
        {specialties.map((specialty) =>
          specialty.name == "Pediatric Orthopedic Urgent Care" ? (
            <div className="order-first" key={specialty.id}>
              <UrgentCareCard specialty={specialty} />
            </div>
          ) : (
            <SpecialtyCard specialty={specialty} key={specialty.id} />
          ),
        )}
      </div>
    </main>
  );
}
