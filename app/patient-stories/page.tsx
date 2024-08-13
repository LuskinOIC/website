import Gallery from "@/app/blog/components/Gallery";
import { BlogPostType } from "@/app/constants/types";
import { getPatientStories } from "@/app/utils/contentful";
import { PageSectionContainer } from "@/app/components/PageSection/PageSection";
import BlogSelector from "@/app/blog/components/BlogSelector";
import BlogPageToggle from "../blog/components/BlogPageToggle";

export function generateMetadata() {
  return {
    title: "Patient Stories - Luskin Orthopaedic Institute for Children",
    description:
      "Read patient stories from children who have experienced the world class treatment and care from Luskin Orthopaedic Institute for Children.",
  };
}

export default async function PatientStories() {
  const patientStories =
    (await getPatientStories()) as unknown as BlogPostType[];
  return (
    <PageSectionContainer showTopMargin={true}>
      <div className="lg:hidden">
        <BlogSelector blogType={"patient-stories"} />
        <Gallery type={"patient-stories"} posts={patientStories} />
      </div>
      <div className="hidden lg:block">
        <BlogPageToggle type="patient-stories" posts={patientStories} />
      </div>
    </PageSectionContainer>
  );
}
