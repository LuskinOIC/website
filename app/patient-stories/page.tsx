import MinimalCard from "../components/MinimalCard";
import BackToBrowse from "../components/ui/BackToBrowse";
import SearchBar from "../components/ui/SearchBar";
import { PatientType } from "../constants/types";
import { getPatientStories } from "../utils/contentful";

export default async function PatientStories() {
  const patients = (await getPatientStories()) as unknown as PatientType[];
  return (
    <main className="grid mx-auto w-4/5">
      <BackToBrowse />
      <SearchBar />
      <h1 className="mb-2 mt-8 text-xl font-bold text-[#0076AD] md:mb-4 md:text-3xl md:font-normal">
        Patient Stories
      </h1>
      <div className="flex flex-col flex-wrap md:flex-row">
        {patients.map((patientObj) => (
          <MinimalCard
            key={patientObj.slug}
            cardContent={{
              title: patientObj.name,
              cardPhoto: patientObj.portrait,
              summary: patientObj.summary,
            }}
          />
        ))}
      </div>
    </main>
  );
}
