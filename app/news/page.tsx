import { getNewsPosts } from "@/app/utils/contentful";
import { BlogPostType } from "@/app/constants/types";
import { PageSectionContainer } from "../components/PageSection/PageSection";
import Gallery from "@/app/blog/components/Gallery";
import BlogSelector from "@/app/blog/components/BlogSelector";

export function generateMetadata() {
  return {
    title: "News Archives - LuskinOIC",
    description:
      "Stay informed with the latest news and updates from Luskin OIC. Read about our groundbreaking research, medical advancements, and inspiring patient stories.",
  };
}

export default async function News() {
  const news = (await getNewsPosts()) as unknown as BlogPostType[];

  return (
    <PageSectionContainer showTopMargin={true}>
      <BlogSelector blogType={"news"} />
      <Gallery type={"news"} posts={news} />
    </PageSectionContainer>
  );
}
