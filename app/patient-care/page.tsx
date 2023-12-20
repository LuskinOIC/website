import { getPageByType } from "@/app/utils/contentful";
import { PAGE_TYPES } from "../constants/entries";
import TabSection from "../components/TabSection";
import LocationsCard from "../components/LocationsCard";

export default async function PatientCare() {
  const patientCarePage = await getPageByType(PAGE_TYPES.PATIENT_CARE, 10);
  console.log(patientCarePage.pageSection);

  // TODO: Replace hardcoding with map and PageSection components
  return (
    <main>
      <LocationsCard
        locations={patientCarePage.pageSection[0].fields.locations}
      />
      <TabSection tabs={patientCarePage.pageSection[1].fields.tabs} />
    </main>
  );
}
