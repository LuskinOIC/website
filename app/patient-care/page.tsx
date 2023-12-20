import { getPageByType } from "@/app/utils/contentful";
import { PAGE_TYPES } from "../constants/entries";
import TabSection from "../components/TabSection";
import LocationsCard from "../components/LocationsCard";

export default async function PatientCare() {
  const patientCarePage = await getPageByType(PAGE_TYPES.PATIENT_CARE, 10);

  // TODO: Replace hardcoding with map and PageSection components
  return (
    <main>
      <LocationsCard
        locations={patientCarePage.pageSections[0].fields.locations}
      />
      <TabSection tabs={patientCarePage.pageSections[1].fields.tabs} />
    </main>
  );
}
