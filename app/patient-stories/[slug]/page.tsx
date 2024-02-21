import TwoColumnLayout from "@/app/components/PageSection/ColumnsLayout/TwoColumnLayout";
import {
  getPatientStories,
  getPatientStoryBySlug,
} from "@/app/utils/contentful";
import PageSection from "@/app/components/PageSection/PageSection";
import PageSectionContainer from "@/app/components/PageSection/PageSectionContainer";
import { BlogCardsRowType, PageSectionType } from "@/app/constants/types";
import BlogCardsRow from "@/app/components/BlogCardsRow";

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
  const patients = (await getPatientStories(
    4
  )) as unknown as BlogCardsRowType[];

  return (
    <main className="w-full pt-12">
      <TwoColumnLayout columnLayout={patient.topSection} width="FULL_WIDTH" />

      {patient.pageSections &&
        patient.pageSections.map((pageSection: PageSectionType) => (
          <PageSection key={pageSection.fields.title} section={pageSection} />
        ))}

      <PageSectionContainer>
        <BlogCardsRow type="patient-stories" cards={patients} />
      </PageSectionContainer>
    </main>
  );
}
