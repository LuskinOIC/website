import { getBlogPosts } from "@/app/utils/contentful";
import { BlogCardsRowType } from "@/app/constants/types";
import BackToBrowse from "@/app/components/ui/BackToBrowse";
import BlogCardsRow from "@/app/components/BlogCardsRow";

export function generateMetadata() {
  return {
    title: "Insights Archives - LuskinOIC",
    description:
      "Stay informed with the latest insights and updates from Luskin OIC. Read about our groundbreaking research, medical advancements, and inspiring patient stories.",
  };
}

export default async function Insights() {
  const insights = (await getBlogPosts()) as unknown as BlogCardsRowType[];
  return (
    <div className="flex flex-col px-[5%] md:justify-center">
      <BackToBrowse />
      {/* <SearchBar /> */}
      <BlogCardsRow type="insights" cards={insights} />
    </div>
  );
}
