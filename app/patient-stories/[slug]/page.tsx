import TwoColumnLayout from "@/app/components/PageSection/ColumnsLayout/TwoColumnLayout";
import {
  getPatientStories,
  getPatientStoryBySlug,
} from "@/app/utils/contentful";
import PageSection from "@/app/components/PageSection/PageSection";
import { BlogCardsRowType, PageSectionType } from "@/app/constants/types";
import BlogCardsRow from "@/app/components/BlogCardsRow";
import type { Metadata } from "next";
import { SEO_DEFAULTS } from "@/app/constants/seo";
import { PagePropsType } from "@/app/constants/types";
import { PageSectionContainer } from "@/app/components/PageSection/PageSection";

export const dynamicParams = false;

export async function generateStaticParams() {
  const patients = await getPatientStories();
  return patients.map((patient) => ({ slug: patient.slug }));
}

export async function generateMetadata({
  params,
}: PagePropsType): Promise<Metadata> {
  const patient = await getPatientStoryBySlug(params.slug);

  // Temporary generate. Add new metadata fields.
  return {
    title: patient.name
      ? `Patient Story - ${patient.name}`
      : SEO_DEFAULTS.TITLE,
    description: SEO_DEFAULTS.DESCRIPTION,
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
    <div className="flex flex-col">
      <PageSectionContainer showTopMargin={true} showBottomMargin={true}>
        <TwoColumnLayout
          section={patient.topSection}
          imageClass="w-[90%] md:w-[455px] m-auto"
        />
      </PageSectionContainer>
      {patient.pageSections &&
        patient.pageSections.map((pageSection: PageSectionType) => (
          <PageSection key={pageSection.fields.title} section={pageSection} />
        ))}
      <PageSectionContainer>
        <BlogCardsRow type="patient-stories" cards={patients} />
      </PageSectionContainer>
    </div>
  );
}
