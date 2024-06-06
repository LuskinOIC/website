import {
  getNewsPosts,
  getEvents,
  getPatientStories,
  getInsightsPosts,
} from "@/app/utils/contentful";
import { PageSectionContainer } from "@/app/components/PageSection/PageSection";
import BlogIndex from "@/app/blog/components/BlogIndex";

export function generateMetadata() {
  return {
    title: "LuskinOIC Blog",
    description:
      "Read the LuskinOIC blog to browse patient stories, explore insights, news & events as they relate to the Luskin Orthopaedic Institute for Children.",
  };
}

export default async function Blog() {
  // TO DO: REPLACE TYPE
  const news = (await getNewsPosts()) as any;
  const patientStories = (await getPatientStories()) as any;
  const insights = (await getInsightsPosts()) as any;
  const events = (await getEvents()) as any;

  const blogData = {
    news,
    patientStories,
    insights,
    events,
  };

  return (
    <PageSectionContainer showTopMargin={true}>
      <BlogIndex blogData={blogData} />
    </PageSectionContainer>
  );
}
