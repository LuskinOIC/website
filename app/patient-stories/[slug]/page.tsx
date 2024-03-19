import TwoColumnLayout from "@/app/components/PageSection/ColumnsLayout/TwoColumnLayout";
import {
  getPatientStories,
  getPatientStoryBySlug,
} from "@/app/utils/contentful";
import PageSection from "@/app/components/PageSection/PageSection";
import {
  BlogCardsRowType,
  PageSectionType,
  ColumnType,
} from "@/app/constants/types";
import BlogCardsRow from "@/app/components/BlogCardsRow";

export async function generateStaticParams() {
  const patients = await getPatientStories();
  return patients.map((patient) => ({ slug: patient.slug }));
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const patients = await getPatientStories();

  return patients.map((patient) => {
    const columnLayout = patient.topSection as ColumnType;
    return {
      title: String(columnLayout.fields.title),
    };
  });

  if (!page) {
    return {
      title: "Page Not Found",
    };
  }

  return {
    title: page.pageType,
  };
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
    <div>
      <TwoColumnLayout section={patient.topSection} />
      {patient.pageSections &&
        patient.pageSections.map((pageSection: PageSectionType) => (
          <PageSection key={pageSection.fields.title} section={pageSection} />
        ))}
      <BlogCardsRow type="patient-stories" cards={patients} />
    </div>
  );
}
