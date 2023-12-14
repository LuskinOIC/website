import { getSpecialties } from "@/app/utils/contentful";
import SearchBar from "@/app/components/ui/SearchBar";
import UrgentCareCard from "../components/UrgentCareCard";
import SpecialtyCard from "../components/SpecialtyCard";

export default async function Specialties() {
  const specialties = await getSpecialties();

  return (
    <main>
      <SearchBar />
      <div className="grid">
        {specialties.map((specialty) =>
          specialty.name == "Pediatric Orthopedic Urgent Care" ? (
            <div className="order-first" key={specialty.name}>
              <UrgentCareCard specialty={specialty} />
            </div>
          ) : (
            <SpecialtyCard specialty={specialty} key={specialty.name} />
          ),
        )}
      </div>
    </main>
  );
}
