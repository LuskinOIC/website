import { getInsightsPosts } from "@/app/utils/contentful";
import { BlogCardsRowType } from "@/app/constants/types";
import BackToBrowse from "@/app/components/ui/BackToBrowse";
import BlogCardsRow from "@/app/components/BlogCardsRow";
import { PageSectionContainer } from "@/app/components/PageSection/PageSection";

export function generateMetadata() {
  return {
    title: "Insights Archives - LuskinOIC",
    description:
      "Stay informed with the latest insights and updates from Luskin OIC. Read about our groundbreaking research, medical advancements, and inspiring patient stories.",
  };
}

export default async function Insights() {
  const insights = (await getInsightsPosts()) as unknown as BlogCardsRowType[];
  return (
    <PageSectionContainer>
      <BackToBrowse />
      {/* <SearchBar /> */}
      <BlogCardsRow type="insights" cards={insights} />
    </PageSectionContainer>
  );
}
