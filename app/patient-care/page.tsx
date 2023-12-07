import { getPatientCarePage } from "@/app/utils/contentful";
import TabSection from "../components/TabSection";
import LocationsCard from "../components/LocationsCard";

export default async function PatientCare() {
  const patientCarePage = await getPatientCarePage();

  return (
    <main>
      <LocationsCard locations={patientCarePage.locations} />
      <TabSection fields={patientCarePage.tabSection.fields} />
    </main>
  );
}
