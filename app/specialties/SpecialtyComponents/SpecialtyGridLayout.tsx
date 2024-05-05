// TYPES
import { SpecialtyType } from "../../constants/types";
// LOCAL COMPONENTS
import UrgentCareCard from "./UrgentCareCard";
import SpecialtyCard from "./SpecialtyCard";
import translations from "@/public/locales/en.json";
import { PageSectionContainer } from "@/app/components/PageSection/PageSection";

export default function SpecialtyGridLayout({
  showingSearchResults,
  specialties,
}: {
  showingSearchResults: boolean;
  specialties: SpecialtyType[];
}) {
  return (
    <div className="grid justify-items-center">
      {showingSearchResults && (
        <div className="order-first text-sky-700 text-lg md:text-xl font-normal font-['Arial'] leading-[30px] text-left w-full px-2 md:px-0 pt-4 md:pt-10 pb-0 md:pb-4">
          {translations.specialties.searchResults}
        </div>
      )}
      {specialties.map((specialty) => {
        const specialtyName = specialty.fields.name;
        return specialtyName.toLowerCase().includes("urgent care") &&
          !showingSearchResults ? ( // Expand the Urgent Care Card if not showing search results
          <div className="order-first mt-8 mb-6" key={specialtyName}>
            <UrgentCareCard specialty={specialty} />
          </div>
        ) : (
          <SpecialtyCard specialty={specialty} key={specialtyName} />
        );
      })}
    </div>
  );
}
