import { getPatientCarePage } from "@/app/utils/contentful";
import TabSection from "../components/TabSection";

export default async function PatientCare() {
  const patientCarePage = await getPatientCarePage();

  return (
    <main>
      <TabSection fields={patientCarePage.tabSection.fields} />
    </main>
  );
}
