import BlogCardsRow from "@/app/components/BlogCardsRow";

import { BlogCardsRowType } from "@/app/constants/types";
import { getPatientStories } from "@/app/utils/contentful";
import { PageSectionContainer } from "@/app/components/PageSection/PageSection";
import BlogSelector from "@/app/blog/components/BlogSelector";

export function generateMetadata() {
  return {
    title: "Patient Stories - Luskin Orthopaedic Institute for Children",
    description:
      "Read patient stories from children who have experienced the world class treatment and care from Luskin Orthopaedic Institute for Children.",
  };
}

export default async function PatientStories() {
  const patients = (await getPatientStories()) as unknown as BlogCardsRowType[];
  return (
    <PageSectionContainer showTopMargin={true}>
      <BlogSelector blogType={"patient-stories"} />
      <div className="pt-6 lg:pt-10">
        <BlogCardsRow
          type={"patient-stories"}
          cards={patients}
          showIndexLinks={false}
        />
      </div>
    </PageSectionContainer>
  );
}
