// TO BE DELTED AFTER ILIA CONFIRMATION

import { BlogPostType } from "@/app/constants/types";
import { getPatientStories, getEvents } from "@/app/utils/contentful";
import { PageSectionContainer } from "@/app/components/PageSection/PageSection";
import BlogIndex from "./BlogIndex";

export default async function PatientStories() {
  const patientStories =
    (await getPatientStories()) as unknown as BlogPostType[];
  const events = (await getEvents()) as unknown as BlogPostType[];

  const blogData = {
    patientStories,
    events,
  };

  return (
    <PageSectionContainer showTopMargin={true}>
      <BlogIndex blogData={blogData} />
    </PageSectionContainer>
  );
}
