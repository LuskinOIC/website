import TabbedSection from "@/app/components/TabbedSection";
import Image from 'next/image';

const tabKeys = ["planning", "billing", "rights", "prep", "forms"];
const tabLabels = ["Plan Your Visit", "Billing & Insurance", "Patient Rights & Responsibilities", "Appointment Preparation", "Patient Forms"];
const tabContents = [
  (<div>
    <Image
      src="/placeholder-content.svg"
      alt="Placeholder content"
      width={1144}
      height={339}
    />
    <Image
      src="/placeholder-content.svg"
      alt="Placeholder content"
      width={1144}
      height={339}
    />
    <Image
      src="/placeholder-content.svg"
      alt="Placeholder content"
      width={1144}
      height={339}
    />
  </div>),
  (<div>
    <Image
      src="/placeholder-content.svg"
      alt="Placeholder content"
      width={1144}
      height={339}
    />
    <Image
      src="/placeholder-content.svg"
      alt="Placeholder content"
      width={1144}
      height={339}
    />
    <Image
      src="/placeholder-content.svg"
      alt="Placeholder content"
      width={1144}
      height={339}
    />
  </div>),
  (<div>
    <Image
      src="/placeholder-content.svg"
      alt="Placeholder content"
      width={1144}
      height={339}
    />
    <Image
      src="/placeholder-content.svg"
      alt="Placeholder content"
      width={1144}
      height={339}
    />
    <Image
      src="/placeholder-content.svg"
      alt="Placeholder content"
      width={1144}
      height={339}
    />
  </div>),
  (<div>
    <Image
      src="/placeholder-content.svg"
      alt="Placeholder content"
      width={1144}
      height={339}
    />
    <Image
      src="/placeholder-content.svg"
      alt="Placeholder content"
      width={1144}
      height={339}
    />
    <Image
      src="/placeholder-content.svg"
      alt="Placeholder content"
      width={1144}
      height={339}
    />
  </div>),
  (<div>
    <Image
      src="/placeholder-content.svg"
      alt="Placeholder content"
      width={1144}
      height={339}
    />
    <Image
      src="/placeholder-content.svg"
      alt="Placeholder content"
      width={1144}
      height={339}
    />
    <Image
      src="/placeholder-content.svg"
      alt="Placeholder content"
      width={1144}
      height={339}
    />
  </div>),
];


export default async function PatientCare() {
  // const patientCarePage = await getPatientCarePage();

  return (
    <main>
      
      <TabbedSection
        keys={tabKeys}
        labels={tabLabels}
        contents={tabContents}
      />
    </main>
  );
}
