import { getInsightsPosts } from "@/app/utils/contentful";
import { BlogPostType } from "@/app/constants/types";
import { PageSectionContainer } from "@/app/components/PageSection/PageSection";
import Gallery from "@/app/blog/components/Gallery";
import BlogSelector from "@/app/blog/components/BlogSelector";
import BlogPageToggle from "../blog/components/BlogPageToggle";
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
      <div className="lg:hidden">
        <BlogSelector blogType={"insights"} />
        <Gallery type={"insights"} posts={insights} />
      </div>
      <div className="hidden lg:block">
        <BlogPageToggle type={"insights"} posts={insights} />
      </div>
    </PageSectionContainer>
  );
}
