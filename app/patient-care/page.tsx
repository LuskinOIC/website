import { getPageByType } from "@/app/utils/contentful";
import { PAGE_TYPES } from "../constants/entries";
import TabSection from "../components/TabSection";
import LocationsCard from "../components/LocationsCard";
import { PageSectionType } from "../constants/types";
// TODO: Test or remove
// import InfoCardLayout from "../components/PageSection/InfoCardLayout";

export default async function PatientCare() {
  const patientCarePage = await getPageByType(PAGE_TYPES.PATIENT_CARE, 10);
  const pageSections =
    patientCarePage.pageSections as unknown as PageSectionType[];
  const locations = pageSections[0]?.fields?.locations;
  const tabs = pageSections[1]?.fields?.tabs;

  // TODO: Replace hardcoding with map and PageSection components
  return (
    <main>
      {locations && <LocationsCard locations={locations} />}
      {tabs && <TabSection tabs={tabs} />}
    </main>
  );
}
