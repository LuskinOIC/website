import { getPageByType } from "@/app/utils/contentful";
import { PAGE_TYPES } from "../constants/entries";
import TabSection from "../components/TabSection";
import LocationsCard from "../components/LocationsCard";
// TODO: Test or remove
// import InfoCardLayout from "../components/PageSection/InfoCardLayout";

export default async function PatientCare() {
  const patientCarePage = await getPageByType(PAGE_TYPES.PATIENT_CARE, 10);
  const locations = patientCarePage.pageSections[0].fields.locations;
  const tabs = patientCarePage.pageSections[1].fields.tabs;

  return (
    <main>
      {locations && <LocationsCard locations={locations} />}
      {/* <InfoCardLayout section={patientCarePage.pageSections[0]} /> */}
      {tabs && <TabSection tabs={tabs} />}
    </main>
  );
}
