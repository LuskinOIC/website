import { getNewsPosts } from "@/app/utils/contentful";
import { BlogCardsRowType } from "@/app/constants/types";
import BackToBrowse from "../components/ui/BackToBrowse";
import BlogCardsRow from "../components/BlogCardsRow";
import { PageSectionContainer } from "../components/PageSection/PageSection";

export function generateMetadata() {
  return {
    title: "News Archives - LuskinOIC",
    description:
      "Stay informed with the latest news and updates from Luskin OIC. Read about our groundbreaking research, medical advancements, and inspiring patient stories.",
  };
}

export default async function News() {
  const news = (await getNewsPosts()) as unknown as BlogCardsRowType[];
  return (
    <PageSectionContainer>
      <BackToBrowse />
      {/* <SearchBar /> */}
      <BlogCardsRow type="news" cards={news} />
    </PageSectionContainer>
  );
}
