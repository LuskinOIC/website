import { getInsightsPosts } from "@/app/utils/contentful";
import { BlogPostType } from "@/app/constants/types";
import { PageSectionContainer } from "@/app/components/PageSection/PageSection";
import Gallery from "@/app/blog/components/Gallery";
import BlogSelector from "@/app/blog/components/BlogSelector";

export function generateMetadata() {
  return {
    title: "Insights Archives - LuskinOIC",
    description:
      "Stay informed with the latest insights and updates from Luskin OIC. Read about our groundbreaking research, medical advancements, and inspiring patient stories.",
  };
}

export default async function Insights() {
  const insights = (await getInsightsPosts()) as unknown as BlogPostType[];
  return (
    <PageSectionContainer showTopMargin={true}>
      <BlogSelector blogType={"insights"} />
      <Gallery type={"insights"} posts={insights} />
    </PageSectionContainer>
  );
}
