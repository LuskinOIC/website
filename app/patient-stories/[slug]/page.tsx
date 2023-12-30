import TwoColumnLayout from "@/app/components/PageSection/TwoColumnLayout";
import {
  getPatientStories,
  getPatientStoryBySlug,
} from "@/app/utils/contentful";
import PageSection from "@/app/components/PageSection/PageSection";
import { PageSectionType } from "@/app/constants/types";

export async function generateStaticParams() {
  const patients = await getPatientStories();
  return patients.map((patient) => ({ slug: patient.slug }));
}

export default async function PatientStories({
  params,
}: {
  params: { slug: string };
}) {
  const patient = await getPatientStoryBySlug(params.slug);
  return (
    <main>
      <TwoColumnLayout section={patient.topSection} />
      {patient.pageSections &&
        patient.pageSections.map((pageSection: PageSectionType) => (
          <PageSection key={pageSection.fields.title} section={pageSection} />
        ))}
    </main>
  );
}
