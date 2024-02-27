// TYPES
import { SpecialtyType } from "../../constants/types";
// LOCAL COMPONENTS
import UrgentCareCard from "./UrgentCareCard";
import SpecialtyCard from "./SpecialtyCard";

export default function SpecialtyGridLayout({
  showingSearchResults,
  specialties,
}: {
  showingSearchResults: boolean;
  specialties: SpecialtyType[];
}) {
  return (
    <>
      <div className="grid justify-items-center">
        {showingSearchResults && (
          <div className="order-first text-sky-700 text-lg md:text-xl font-normal font-['Arial'] leading-[30px] text-left w-full md:w-4/5 px-2 md:px-0 pt-4 md:pt-10 pb-0 md:pb-4">
            SEARCH RESULTS
          </div>
        )}
        {specialties.map((specialty) => {
          const specialtyName = specialty.fields.name;
          return specialtyName.toLowerCase().includes("urgent care") &&
            !showingSearchResults ? ( // Expand the Urgent Care Card if not showing search results
            <div className="order-first" key={specialtyName}>
              <UrgentCareCard specialty={specialty} />
            </div>
          ) : (
            <SpecialtyCard specialty={specialty} key={specialtyName} />
          );
        })}
      </div>
    </>
  );
}
