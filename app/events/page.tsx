import { getEvents } from "@/app/utils/contentful";
import { BlogPostType } from "@/app/constants/types";
import { PageSectionContainer } from "@/app/components/PageSection/PageSection";
import BlogSelector from "@/app/blog/components/BlogSelector";
import Gallery from "../blog/components/Gallery";

export function generateMetadata() {
  return {
    title:
      "Attend an Luskin Orthopaedic Institute for Children Event - Luskin Orthopaedic Institute for Children",
    description:
      "Find an event to become involved with or attend on behalf of the Luskin Orthopaedic Institue for Children.",
  };
}

export default async function Events() {
  const events = (await getEvents()) as unknown as BlogPostType[];
  return (
    <PageSectionContainer showTopMargin={true}>
      <BlogSelector blogType={"events"} />
      <Gallery type={"events"} posts={events} />
    </PageSectionContainer>
  );
}
