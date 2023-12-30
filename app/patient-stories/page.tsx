import { PatientType } from "../constants/types";
import { getPatientStories } from "../utils/contentful";

export default async function PatientStories() {
  const patients = (await getPatientStories()) as unknown as PatientType[];
  return (
    <main>
      <div className="md:hidden">
        <h1>insert search box</h1>
      </div>
      <h1 className="mb-2 ml-12 mt-8 text-xl font-bold uppercase text-[#0076AD] md:mb-4 md:ml-4 md:text-3xl md:font-normal md:capitalize">
        Patient Stories
      </h1>
      <div className="flex flex-col flex-wrap md:flex-row">
        {patients.map((patientObj, i) => (
          <div key={i}>{patientObj.name}</div>
        ))}
      </div>
    </main>
  );
}
