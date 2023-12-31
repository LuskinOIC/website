import TwoColumnLayout from "@/app/components/PageSection/ColumnsLayout/TwoColumnLayout";
import {
  getNewsPosts,
  getPatientStories,
  getPatientStoryBySlug,
} from "@/app/utils/contentful";
import PageSection from "@/app/components/PageSection/PageSection";
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
  const news = (await getNewsPosts(4)) as unknown as BlogCardsRowType[];

  return (
    <main>
      <TwoColumnLayout section={patient.topSection} />
      {patient.pageSections &&
        patient.pageSections.map((pageSection: PageSectionType) => (
          <PageSection key={pageSection.fields.title} section={pageSection} />
        ))}
      <section className="flex justify-center">
        <BlogCardsRow type="news" cards={news} />
      </section>
    </main>
  );
}
