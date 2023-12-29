import { getSpecialties } from "@/app/utils/contentful";
import SearchBar from "@/app/components/ui/SearchBar";
import UrgentCareCard from "./SpecialtyComponents/UrgentCareCard";
import SpecialtyCard from "./SpecialtyComponents/SpecialtyCard";

export default async function Specialties() {
  const specialties = await getSpecialties();

  return (
    <main>
      <SearchBar />
      <div className="grid">
        {specialties.map((specialty) => {
          const specialtyName = specialty.fields.name;
          return specialtyName == "Pediatric Orthopedic Urgent Care" ? (
            <div className="order-first" key={specialtyName}>
              <UrgentCareCard specialty={specialty} />
            </div>
          ) : (
            <SpecialtyCard specialty={specialty} key={specialtyName} />
          );
        })}
      </div>
    </main>
  );
}
